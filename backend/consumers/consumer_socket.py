import asyncio
import json
import io
from json.decoder import JSONDecodeError
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from consumers.models import ChatRoom
from users.serializers import UserSerializer
from users.models import User

def getSerializedData(serialized_data):
    content = JSONRenderer().render(serialized_data)
    stream = io.BytesIO(content)
    data = JSONParser().parse(stream)
    return data

class SocketConsumer(WebsocketConsumer):

    def __init__(self, *args, **kwargs):
        super().__init__( *args, **kwargs)
        self.commands = {
        "join room":self.join_room,
        "sending signal":self.send_signal,
        "returning signal":self.return_signal,
        "send new message":self.new_message,
        "audioMedia":self.handle_audio_media,
        "videoMedia":self.handle_video_media,
        }

    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'room_%s' % self.room_name
        self.group_id = self.room_name
        self.room = None
        try:
            room = ChatRoom.objects.get(id=self.room_name)
            self.room = room
            async_to_sync(self.channel_layer.group_add)(
                self.room_group_name,
                self.channel_name
            )
            user = self.scope['user']
            room.users.add(user)
            self.accept()
        except Exception:
            self.accept()
            self.close(code=4000)
            return
            pass

        
        

    def disconnect(self, close_code=None):
        self.send(json.dumps({"end_message": close_code}))
        if(close_code == 4000):
            return
        user = self.scope["user"]
        if self.room is not None:
            self.room.users.remove(user)
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )
        serialized_data = UserSerializer(user).data
        final_data = getSerializedData(serialized_data)
        self.broadcast("user left",{"user":final_data})
    
    def join_room(self,roomID):
        user = self.scope["user"]
        self.room.users.add(user)
        users = self.room.users.all()
        serialized_data = UserSerializer(users,many=True)
        final_data = getSerializedData(serialized_data.data)
        self.broadcast("all users",final_data )
    
    def send_signal(self,data):
        user = User.objects.get(pk=data["callerID"])
        serialized_data = UserSerializer(user).data
        final_data = getSerializedData(serialized_data)
        self.broadcast("user joined",{ "signal": data["signal"], "callerUser": final_data, "usable_id":data["userToSignal"] })
    
    def return_signal(self,data):
        user = self.scope["user"]
        userID = user.id
        self.broadcast("receiving returned signal",{ "signal": data["signal"], "id": userID ,"usable_id":data["callerID"]})

    def new_message(self,data):
        user = self.scope["user"]
        self.broadcast("receive new message",{"sender":{"id":user.id,"first_name":user.first_name,"last_name":user.last_name},"message":data})
    
    def handle_audio_media(self,data):
        self.broadcast("audioMedia",data)

    def handle_video_media(self,data):
        self.broadcast("videoMedia",data)

    def receive(self, text_data):
        data = json.loads(text_data)
        fun = self.commands.get(data['type'],None)
        if fun is not None:
            fun(data['data'])

    def send_message(self, content):
        self.send(text_data=json.dumps(content))

    def broadcast(self,type, data):
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': "mango",
                "command":type,
                'data': data,
            }
        )

    def mango(self,event):
        s = json.dumps({"command":event["command"],"data":event["data"]})
        self.send(text_data=s)