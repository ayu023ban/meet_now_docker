from rest_framework import generics, viewsets, permissions, status,response, mixins
from rest_framework.decorators import action
from django.db.models import Q
from consumers.models.chat_room import ChatRoom
from consumers.serializers import ChatRoomSerializer

class ChatRoomViewSet(mixins.CreateModelMixin,mixins.ListModelMixin, viewsets.GenericViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ChatRoomSerializer
    queryset = ChatRoom.objects.all()

    def perform_create(self, serializer):
        user = self.request.user
        data = self.request.data
        name = data.get("room_name",None)
        chat_room = ChatRoom.objects.create(
            creator=user,
            room_name=name
        )

        chat_room.users.add(user)
        chat_room.save()
        return chat_room
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        new_room = self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        final_serializer = self.get_serializer(new_room)
        return response.Response(final_serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def list(self,request):
        queryset = ChatRoom.objects.filter(creator=request.user)
        serializer = ChatRoomSerializer(queryset, many=True)
        return response.Response(serializer.data)