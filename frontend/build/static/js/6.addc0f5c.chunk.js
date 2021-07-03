(this.webpackJsonpteams_frontend=this.webpackJsonpteams_frontend||[]).push([[6],{190:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return j})),n.d(t,"h",(function(){return f})),n.d(t,"i",(function(){return b})),n.d(t,"f",(function(){return O})),n.d(t,"g",(function(){return h})),n.d(t,"c",(function(){return m}));var r=n(36),c=n(31),i=n(29),a=n(37),o=n(16),s=n(49),u=function(e){var t=a.a;return function(n){r.a.post(t,e).then((function(e){n(Object(o.a)(i.a,e.data)),navigator.clipboard.writeText(Object(o.e)(e.data.id)),c.b.success("copied to clipboard")})).catch((function(e){c.b.error("error occured in creating the room")}))}},l=function(){var e=a.d;return function(t){r.a.get(e).then((function(e){t(Object(o.a)(i.c,e.data))})).catch((function(e){c.b.error("error occured in fetching your rooms",{})}))}},d=function(e,t){var n="".concat(a.d).concat(e,"/");return function(c,i){r.a.delete(n).then((function(n){t(e)}))}},j=function(e){var t="".concat(a.d).concat(e,"/");return function(e){r.a.get(t).then((function(t){e(Object(o.a)(i.b,t.data))}))}},f=function(){return function(e){e(Object(o.a)(i.e))}},b=function(){return function(e){e(Object(o.a)(i.f))}},O=function(e,t){var n=Object(a.g)(e);return function(e){r.a.post(n,t).then((function(t){e(Object(o.a)(i.b,t.data)),c.b.success("user invited")})).catch((function(e){c.b.error(e.response.data)}))}},h=function(e,t){var n=Object(a.j)(e);return function(e){r.a.post(n,t).then((function(t){e(Object(o.a)(i.b,t.data)),e(Object(s.d)())})).catch((function(e){c.b.error(e.response.data)}))}},m=function(e){var t=Object(a.h)(e);return function(e){r.a.get(t).then((function(t){e(Object(o.a)(i.d,t.data.isCreator))}))}}},249:function(e,t,n){},275:function(e,t){},277:function(e,t){},319:function(e,t,n){"use strict";n.r(t);var r=n(43),c=n(0),i=n.n(c),a=n(199),o=n(200),s=function(){function e(){Object(a.a)(this,e),this.callbacks={},this.socketRef=null,this.fallback=null,this.forcedClose=!1}return Object(o.a)(e,[{key:"connect",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this.forcedClose=!1,this.fallback=n,this.socketRef=new WebSocket(e),this.socketRef.onopen=function(){console.log("websocket open")},this.socketRef.onmessage=function(e){t.socketNewMessage(e.data)},this.socketRef.onerror=function(e){console.debug(e)},this.socketRef.onclose=function(r){console.log(r),4e3===r.code?t.fallback(r):t.forcedClose?console.log("websocket closed"):(console.log("websockets closed lets reopen"),setTimeout((function(){t.connect(e,n(r))}),5e3))}}},{key:"close",value:function(e,t){"undefined"==typeof e&&(e=1e3),this.forcedClose=!0,this.socketRef&&this.socketRef.close(e,t)}},{key:"on",value:function(e,t){this.callbacks[e]=t}},{key:"socketNewMessage",value:function(e){var t=JSON.parse(e),n=t.command,r=t.data;0!==Object.keys(this.callbacks).length&&this.callbacks[n]&&this.callbacks[n](r)}},{key:"sendMessage",value:function(e,t){try{this.waitForConnection(function(){this.socketRef.send(JSON.stringify({type:e,data:t}))}.bind(this),1e3)}catch(n){console.log(n.message)}}},{key:"refresh",value:function(){this.socketRef&&this.socketRef.close()}},{key:"state",value:function(){return this.socketRef.readyState}},{key:"waitForConnection",value:function(e,t){if(1===this.state())e();else{var n=this;setTimeout((function(){n.waitForConnection(e,t)}),t)}}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();s.instance=null;var u=s.getInstance(),l=n(10),d=n(4),j=n(207),f=n.n(j),b=n(208),O=n(13),h=n(177),m=n(322),p=n(182),g=n(209),v=n.n(g),x=n(187),k=n(305),w=n(239),y=n.n(w),C=n(240),R=n.n(C),M=n(31),I=n(2),_=Object(h.a)((function(e){return{responsive:function(e){var t=e.size,n=e.rows;return{float:"left",width:"".concat(100/t,"%"),height:"".concat(100/n,"%"),display:"flex",alignItems:"center"}},videoTop:{width:"95%",paddingTop:"min(calc(100vh - 9rem), 56.25%)",position:"relative",overflow:"hidden",background:e.palette.background.paper,margin:"auto",borderRadius:"1rem"},micOff:{position:"absolute",right:0,top:0},videoOff:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",justifyContent:"center",alignItems:"center"},avatar:{width:"min(50%, 10rem)",height:"min(50%, 10rem)",fontSize:"3rem"},hoverDiv:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},remove:{color:"#eee8d5"}}})),N=i.a.forwardRef((function(e,t){var n=e.peer,a=e.muted,o=e.size,s=e.rows,l=e.isUserVideo,d=e.user,j=Object(c.useRef)(null),f=t||j,b=_({size:o,rows:s}),h=i.a.useState(!1),g=Object(r.a)(h,2),w=g[0],C=g[1],N=Object(O.c)((function(e){return e.roomReducer.isUserCreator})),T=Object(O.c)((function(e){return e.roomReducer.currentRoom.invited_users})),D=(d.first_name?d.first_name[0].toUpperCase():"")+(d.last_name?d.last_name[0].toUpperCase():"");Object(c.useEffect)((function(){n&&n.on("stream",(function(e){f.current.srcObject=e}))}),[]);return Object(I.jsx)("div",{className:b.responsive,children:Object(I.jsxs)("div",{className:b.videoTop,children:[Object(I.jsx)("video",{style:{objectFit:"contain",transform:l?"scaleX(-1)":1,position:"absolute",top:"0",left:"0",display:d.videoOn?"block":"none"},playsInline:!0,width:"100%",height:"100%",autoPlay:!0,muted:a,ref:f,onClick:function(){},onMouseEnter:function(){C(!0)}}),N&&!l&&w&&Object(I.jsx)(k.a,{in:w,children:Object(I.jsx)("div",{className:b.hoverDiv,onMouseLeave:function(){C(!1)},children:Object(I.jsxs)("div",{style:{opacity:.6,background:"black",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(I.jsx)(m.a,{title:"remove user",children:Object(I.jsx)(p.a,{className:b.remove,onClick:function(){u.sendMessage("user kick",{userID:d.id})},children:Object(I.jsx)(y.a,{fontSize:"large"})})}),Object(I.jsx)(m.a,{title:"Block user",children:Object(I.jsx)(p.a,{className:b.remove,onClick:function(){T.some((function(e){return e.id===d.id}))?M.b.error("user is invited. first remove the invitation"):u.sendMessage("user block",{userID:d.id})},children:Object(I.jsx)(R.a,{fontSize:"large"})})})]})})}),!d.audioOn&&Object(I.jsx)(p.a,{className:b.micOff,children:Object(I.jsx)(v.a,{})}),!d.videoOn&&Object(I.jsx)("div",{className:b.videoOff,children:Object(I.jsx)(x.a,{className:b.avatar,children:D})})]})})})),T=n(143),D=n(236),S=n(181),E=n(151),U=n(188),B=n(67),V=n(241),z=n.n(V),A=n(242),F=n.n(A),H=n(243),W=n.n(H),J=n(244),L=n.n(J),P=n(247),q=n.n(P),G=n(190),X=n(246),K=n.n(X),Q=n(245),Y=n.n(Q),Z=n(306),$=n(308),ee=n(309),te=n(310),ne=n(311),re=n(229),ce=n(206),ie=n.n(ce),ae=function(e){var t=e.open,n=e.setOpen,r=Object(O.c)((function(e){return e.roomReducer.currentRoom.room_name}));return Object(I.jsxs)(Z.a,{open:t,onClose:function(){n((function(e){return!e}))},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(I.jsx)($.a,{id:"alert-dialog-title",children:"Meeting Details"}),Object(I.jsxs)(ee.a,{children:[Object(I.jsx)(S.a,{variant:"h5",children:r}),Object(I.jsx)("br",{}),Object(I.jsx)(S.a,{variant:"p",children:"Joining info"}),Object(I.jsx)(te.a,{id:"alert-dialog-description",children:window.location.href})]}),Object(I.jsx)(ne.a,{children:Object(I.jsx)(ie.a,{text:window.location.href,onCopy:function(){M.b.success("copied to clipboard")},children:Object(I.jsx)(re.a,{children:"Copy link"})})})]})},oe=n(318),se=n(312),ue=n(313),le=n(210),de=n.n(le),je=n(198),fe=n.n(je),be=n(16),Oe=function(e){var t=e.open,n=e.setOpen,i=Object(l.i)().roomID,a=Object(O.c)((function(e){return e.roomReducer.currentRoom.invited_users||[]})),o=Object(c.useState)({str:"",err_message:""}),s=Object(r.a)(o,2),u=s[0],d=s[1],j=Object(O.b)();return Object(I.jsxs)(Z.a,{open:t,onClose:function(){n((function(e){return!e}))},children:[Object(I.jsx)($.a,{children:"Invite people"}),Object(I.jsxs)(ee.a,{children:[a.map((function(e,t){return Object(I.jsxs)(se.a,{style:{alignItems:"center"},children:[Object(I.jsx)(ue.a,{children:e.email}),Object(I.jsx)(p.a,{onClick:function(){j(Object(G.g)(i,{invitee:e.email}))},children:Object(I.jsx)(de.a,{})})]},t)})),Object(I.jsx)(oe.a,{error:u.err_message.length>0,value:u.str,onChange:function(e){var t=e.target.value;d({str:t,err_message:""})},helperText:u.err_message}),Object(I.jsx)(p.a,{onClick:function(){var e=u.str,t="";0===e.length?t="email can't be empty":Object(be.f)(e)?(j(Object(G.f)(i,{invitee:e})),d({str:"",err_message:""})):t="email not valid",t.length&&d({str:e,err_message:t})},children:Object(I.jsx)(fe.a,{})})]})]})},he=n(304),me=n(97),pe=n(248),ge=n.n(pe),ve=Object(h.a)((function(e){return{container:{minHeight:"3rem",flexGrow:0,background:e.palette.background.default},blue:{background:"blue"},orange:{color:B.a[500]},right:{marginRight:"1rem"}}})),xe=function(e){e.switchc;var t=e.toggleChat,n=ve(),a=Object(O.b)(),o=Object(O.c)((function(e){return e.roomReducer.userVideo.audioOn})),s=Object(O.c)((function(e){return e.roomReducer.userVideo.videoOn})),u=Object(c.useState)(!1),d=Object(r.a)(u,2),j=d[0],f=d[1],b=Object(c.useState)(!1),h=Object(r.a)(b,2),g=h[0],x=h[1],k=Object(l.g)(),w=Object(O.c)((function(e){return e.roomReducer.currentRoom.room_name})),y=Object(O.c)((function(e){return e.roomReducer.isUserCreator})),C=Object(me.a)(),R=Object(he.a)(C.breakpoints.down("sm")),M=i.a.useState(null),_=Object(r.a)(M,2),N=_[0],B=_[1],V=Boolean(N);return Object(I.jsx)(T.a,{elevation:3,className:n.container,children:Object(I.jsxs)(D.a,{justify:"space-between",container:!0,alignItems:"center",style:{height:"100%"},children:[Object(I.jsx)("div",{children:Object(I.jsx)(S.a,{variant:"h5",style:{marginLeft:"1rem"},children:w})}),Object(I.jsxs)("div",{children:[Object(I.jsx)(m.a,{title:o?"Mic On":"Mic off",children:Object(I.jsx)(p.a,{color:"inherit",onClick:function(){a(Object(G.h)())},children:o?Object(I.jsx)(z.a,{}):Object(I.jsx)(v.a,{})})}),Object(I.jsx)(m.a,{title:"end call",children:Object(I.jsx)(p.a,{color:"inherit",onClick:function(){k.replace("/")},children:Object(I.jsx)(F.a,{className:n.orange})})}),Object(I.jsx)(m.a,{title:s?"video on":"video off",children:Object(I.jsx)(p.a,{color:"inherit",onClick:function(){a(Object(G.i)())},children:s?Object(I.jsx)(W.a,{}):Object(I.jsx)(L.a,{})})})]}),!R&&Object(I.jsxs)("div",{className:n.right,children:[y&&Object(I.jsx)(m.a,{title:"invite users",children:Object(I.jsx)(p.a,{onClick:function(){x((function(e){return!e}))},children:Object(I.jsx)(Y.a,{})})}),Object(I.jsx)(m.a,{title:"Meeting Details",children:Object(I.jsx)(p.a,{onClick:function(){f((function(e){return!e}))},children:Object(I.jsx)(K.a,{})})}),Object(I.jsx)(m.a,{title:"Chat",children:Object(I.jsx)(p.a,{onClick:t,children:Object(I.jsx)(q.a,{})})})]}),R&&Object(I.jsxs)("div",{className:n.right,children:[Object(I.jsx)(p.a,{"aria-controls":"simple-theme-menu","aria-haspopup":"true",color:"inherit",className:"header-title-button",onClick:function(e){return B(e.currentTarget)},children:Object(I.jsx)(ge.a,{})}),Object(I.jsxs)(E.a,{anchorEl:N,id:"controls-menu",keepMounted:!0,open:V,onClose:function(){B(null)},children:[Object(I.jsx)(U.a,{onClick:function(){B(null),x((function(e){return!e}))},children:"Invite User"}),Object(I.jsx)(U.a,{onClick:function(){B(null),f((function(e){return!e}))},children:"Meeting Details"}),Object(I.jsx)(U.a,{onClick:function(){B(null),t()},children:"Chat"})]})]}),y&&Object(I.jsx)(Oe,{open:g,setOpen:x}),Object(I.jsx)(ae,{open:j,setOpen:f})]})})},ke=function(e){for(var t=Math.floor(Math.sqrt(e)),n=t-e%t,r=Math.floor(e/t),c=[],i=0;i<t;i++)i>=n?c.push(r+1):c.push(r);c=c.reverse();for(var a={},o=1,s=0,u=1;u<=e;u++)a[u]=c[s],++o>c[s]&&(o=1,s++);return a.rows=c.length,a};var we=function(e,t){return(e+" "+t).trim()},ye=n(59),Ce=n(323),Re=n(250),Me=n.n(Re),Ie=n(315),_e=n(314),Ne=(n(249),Object(h.a)((function(e){return{drawer:{width:360,flexShrink:0},drawerPaper:{width:360,height:"calc(100vh - 9rem)",borderRadius:"1rem",top:"5rem",right:"12px"},drawerHeader:Object(d.a)(Object(d.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-start"}),chatInputContainer:{marginTop:"auto"},chatInput:{marginBottom:"2rem","& .MuiFilledInput-root":{borderRadius:"50px",borderBottom:0,paddingTop:"15px",paddingBottom:"15px","&::before":{borderBottom:0}}},messageBoxRight:{background:e.palette.background.paper,color:e.palette.text.primary},messageBoxLeft:{background:"#4870df",color:e.palette.background.default},messageSender:{color:e.palette.text.primary,fontSize:"10px"}}}))),Te=function(e){var t=Object(O.c)((function(e){return e.userReducer.user})),n=Ne(),r=t.pk===e.sender.id?"chatApp__convMessageItem--right":"chatApp__convMessageItem--left",c=t.pk===e.sender.id?n.messageBoxRight:n.messageBoxLeft;return Object(I.jsx)("div",{className:"chatApp__convMessageItem "+r+" clearfix",children:Object(I.jsxs)("div",{className:"chatApp__convMessageValue ".concat(c),children:[t.pk!==e.sender.id&&Object(I.jsx)("div",{className:n.messageSender,children:e.sender.first_name}),Object(I.jsx)("div",{children:e.message})]})})},De=i.a.memo((function(e){return Object(I.jsx)("div",{className:"chatApp__convTimeline",children:e.messages.slice(0).reverse().map((function(e,t){return Object(I.jsx)(Te,{sender:e.sender,senderAvatar:e.senderAvatar,message:e.message},t)}))})})),Se=function(e){var t=e.open,n=e.setOpen,i=Object(c.useState)([]),a=Object(r.a)(i,2),o=a[0],s=a[1],l=Object(c.useState)(""),d=Object(r.a)(l,2),j=d[0],f=d[1],b=Ne();Object(c.useEffect)((function(){u.on("receive new message",(function(e){s((function(t){return[].concat(Object(ye.a)(t),[e])}))}))}),[]);var O=Object(c.useCallback)((function(e){var t=e.target.value;f(t)}),[]);return Object(I.jsxs)(Ce.a,{className:b.drawer,variant:"persistent",anchor:"right",open:t,classes:{paper:b.drawerPaper},children:[Object(I.jsx)("div",{className:b.drawerHeader,children:Object(I.jsx)(p.a,{onClick:function(){n(!1)},children:Object(I.jsx)(Me.a,{})})}),Object(I.jsx)(De,{messages:o}),Object(I.jsx)("div",{className:b.chatInputContainer,children:Object(I.jsx)(oe.a,{placeholder:"send a message to everyone",size:"small",variant:"filled",fullWidth:!0,multiline:!0,rowsMax:4,className:b.chatInput,value:j,onChange:O,InputProps:{endAdornment:Object(I.jsx)(_e.a,{position:"end",children:j.length>0&&Object(I.jsx)(p.a,{"aria-label":"toggle password visibility",onClick:function(){u.sendMessage("send new message",j),f("")},children:Object(I.jsx)(Ie.a,{})})})}})})]})},Ee=n(38),Ue=n(290),Be=n(32),Ve=n(251),ze=n.n(Ve);var Ae=function(e,t,n,r){return function(c){e.current={};var i={};c.forEach((function(r){if(t!==r.id){var c=function(e,t,n){var r=new ze.a({initiator:!0,trickle:!1,stream:n});return r.on("signal",(function(n){u.sendMessage("sending signal",{userToSignal:e,callerID:t,signal:n})})),r}(r.id,t,n);e.current[r.id]={user:r,peer:c},i[r.id]={user:r,peer:c}}})),r(i)}},Fe=function(e,t,n,r,c,i){return function(a){var o=a.callerUser;if(a.usable_id===e){var s=function(e,t,n){var r=new ze.a({initiator:!1,trickle:!1,stream:n});return r.on("signal",(function(e){u.sendMessage("returning signal",{signal:e,callerID:t})})),r.signal(e),r}(a.signal,o.id,n);Boolean(t.current[o.id])||(t.current[o.id]={user:o,peer:s},r((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(Be.a)({},o.id,{user:o,peer:s}))}))),u.sendMessage("audioMedia",{userID:e,audioOn:c}),u.sendMessage("videoMedia",{userID:e,videoOn:i}),M.b.info("".concat(we(o.first_name,o.last_name)," joined"))}}},He=n(317),We=n(287),Je=n.n(We),Le=n(144),Pe=Object(Le.a)((function(e){return{modal:{"&& .modal-content":{background:e.palette.background.paper,color:e.palette.text.primary}}}})),qe=function(e){var t=e.waitingUsers,n=e.setWaitingUsers,r=Pe();return Object(I.jsxs)(He.a,{show:Boolean(t.length),onHide:function(){},backdrop:"static",keyboard:!1,className:r.modal,children:[Object(I.jsx)(He.a.Header,{children:Object(I.jsx)(He.a.Title,{children:"Modal title"})}),Object(I.jsx)(He.a.Body,{children:t.map((function(e,t){return Object(I.jsxs)(se.a,{style:{alignItems:"center"},children:[Object(I.jsxs)(ue.a,{children:[e.first_name," wants to join"]}),Object(I.jsx)(p.a,{onClick:function(){!function(e){u.sendMessage("give join permission status",{userID:e.id,status:"reject"}),n((function(t){return t.filter((function(t){return t.id!==e.id}))}))}(e)},children:Object(I.jsx)(de.a,{})}),Object(I.jsx)(p.a,{onClick:function(){!function(e){u.sendMessage("give join permission status",{userID:e.id,status:"accept"}),n((function(t){return t.filter((function(t){return t.id!==e.id}))}))}(e)},children:Object(I.jsx)(Je.a,{})})]},t)}))}),Object(I.jsx)(He.a.Footer,{})]})},Ge=function(e,t,n){return function(r){for(var c in e.current)e.current[c].peer.streams.forEach((function(e){e.getTracks().forEach((function(e){e.stop()}))}));t(Object(d.a)({},e.current)),n.removeTrack(n.getVideoTracks()[0]),n.addTrack(r.getVideoTracks()[0])}},Xe={height:window.innerHeight/2,width:window.innerWidth/2},Ke=Object(h.a)((function(e){return{container:{display:"flex",height:"100%",width:"100%",flexDirection:"column",background:e.palette.background.default}}})),Qe=function(e,t,n,r,c,i,a){u.on("all users",Ae(e,t,n,r)),u.on("user joined",Fe(t,e,n,r,c,i)),u.on("receiving returned signal",function(e,t){return function(n){n.usable_id===e&&t.current[n.id].peer.signal(n.signal)}}(t,e)),u.on("user left",function(e,t,n){return function(r){var c=r.user;t.current[c.id]&&t.current[c.id].peer.destroy(),delete t.current[c.id],n((function(e){var t=r.user.id;return e[t],Object(Ee.a)(e,[t].map(Ue.a))})),r.user.id!==e&&M.b.info("".concat(we(c.first_name,c.last_name)," left"))}}(t,e,r)),u.on("videoMedia",function(e,t){return function(n){var r=n.userID;e.current[r]&&(e.current[r].user.videoOn=n.videoOn,t((function(e){var t=e[r],c=t.user,i=t.peer;return Object(d.a)(Object(d.a)({},e),{},Object(Be.a)({},r,{peer:i,user:Object(d.a)(Object(d.a)({},c),{},{videoOn:n.videoOn})}))})))}}(e,r)),u.on("audioMedia",function(e,t){return function(n){var r=n.userID;e.current[r]&&(e.current[r].user.audioOn=n.audioOn,t((function(e){var t=e[r],c=t.user,i=t.peer;return Object(d.a)(Object(d.a)({},e),{},Object(Be.a)({},r,{peer:i,user:Object(d.a)(Object(d.a)({},c),{},{audioOn:n.audioOn})}))})))}}(e,r)),u.on("user want to join",function(e,t){return function(n){n.usable_id===e&&t((function(e){return e.push(n.user),Object(be.d)(e,"id")}))}}(t,a))},Ye=function(){var e=Object(l.i)().roomID,t=Object(c.useState)({}),n=Object(r.a)(t,2),i=n[0],a=n[1],o=Object(c.useRef)(),s=Object(c.useRef)(u),j=Object(c.useRef)({}),h=Object(O.c)((function(e){return e.userReducer.user.pk})),m=Object(c.useState)(),p=Object(r.a)(m,2),g=p[0],v=p[1],x=Object(c.useRef)(0),k=ke(Object.keys(i).length+1),w=Object(c.useState)(!1),y=Object(r.a)(w,2),C=y[0],R=y[1],M=Object(O.c)((function(e){return e.roomReducer.userVideo.audioOn})),_=Object(O.c)((function(e){return e.roomReducer.userVideo.videoOn})),T=Ke(),D=Object(O.c)((function(e){return e.userReducer.user})),S=Object(c.useState)([]),E=Object(r.a)(S,2),U=E[0],B=E[1],V=Object(O.b)(),z=function(){var e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:Xe,audio:!0});case 2:t=e.sent,v(t),o&&o.current&&(o.current.srcObject=t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var t=Object(b.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z();case 2:s.current.sendMessage("join room",e);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){V(Object(G.c)(e)),V(Object(G.d)(e)),A()}),[]),Object(c.useEffect)((function(){Qe(j,h,g,a,M,_,B)}),[g,M,_,h]),Object(c.useEffect)((function(){var e=g;return function(){e&&(e.getVideoTracks().forEach((function(e){e.stop()})),e.getAudioTracks().forEach((function(e){e.stop()})))}}),[g]),Object(c.useEffect)((function(){g&&(g.getAudioTracks()[0].enabled=M,1===s.current.state()&&s.current.sendMessage("audioMedia",{userID:h,audioOn:M}))}),[g,M,h]),Object(c.useEffect)((function(){g&&(g.getVideoTracks()[0].enabled=_,1===s.current.state()&&s.current.sendMessage("videoMedia",{userID:h,videoOn:_}))}),[g,_,h]),Object(c.useEffect)((function(){k=ke(Object.keys(i).length+1)}),[i]),Object(I.jsxs)("div",{className:T.container,children:[Object(I.jsxs)("div",{style:{display:"flex",width:"100%",maxHeight:"calc(100vh - 7rem)",margin:"auto",flexGrow:"1",flexWrap:"wrap"},children:[Object(I.jsx)(N,{muted:!0,ref:o,user:Object(d.a)(Object(d.a)({},D),{},{videoOn:_,audioOn:M}),autoPlay:!0,playsInline:!0,size:k[1],rows:k.rows,isUserVideo:!0}),Object.values(j.current).map((function(e,t){return Object(I.jsx)(N,{peer:e.peer,user:e.user,size:k[t+2],rows:k.rows},t)}))]}),Object(I.jsx)(qe,{waitingUsers:U,setWaitingUsers:B}),Object(I.jsx)(xe,{switchc:function(){var e;(e=Xe,function(){var t=Object(b.a)(f.a.mark((function t(n){var r,c,i,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.enumerateDevices();case 2:return r=t.sent,c=r.filter((function(e){return"videoinput"===e.kind})),n.current=(n.current+1)%c.length,i=Object(d.a)(Object(d.a)({},e),{},{deviceId:{exact:c[n.current].deviceId}}),e=i,t.next=9,navigator.mediaDevices.getUserMedia({video:e,audio:!0});case 9:a=t.sent,Ge(a);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())(x)},toggleChat:function(){R((function(e){return!e}))}}),Object(I.jsx)(Se,{open:C,setOpen:R})]})},Ze=n(173),$e=Object(Le.a)((function(e){return{container:{background:e.palette.background.default,height:"100%",width:"100%",position:"relative"},color:{color:e.palette.text.primary},paper:{display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"75vw",position:"relative",marginLeft:"auto",marginRight:"auto",top:"3rem"}}}));t.default=function(){var e=Object(l.i)().roomID,t=Object(l.g)(),n=$e(),i=Object(O.c)((function(e){return e.userReducer.user.pk})),a=Object(c.useState)("pending"),o=Object(r.a)(a,2),s=o[0],d=o[1],j=Object(c.useState)(""),f=Object(r.a)(j,2),b=f[0],h=f[1];return Object(c.useEffect)((function(){u.refresh();var n="http:"===window.location.protocol?"ws":"wss",r=window.location.hostname.includes("localhost")?"localhost:7000":window.location.hostname;return u.connect("".concat(n,"://").concat(r,"/ws/room/").concat(e,"/"),(function(e){t.replace("/",{message:"the url entered is incorrect.",type:"error"})})),u.on("get permission",function(e,t){return function(n){n.usable_id===e&&t(n.status)}}(i,d)),u.on("join message",function(e,t){return function(n){e("message"),"creator not available"===n?t("The Organisor has not joined the room yet. Please try joining after some time"):"user blocked"===n&&t("The Organisor has blocked you.")}}(d,h)),u.on("user kicked",function(e,t){return function(n){n.usable_id===e&&t.replace("/",{message:"The Organisor removed you from room",type:"error"})}}(i,t)),u.on("user blocked",function(e,t){return function(n){n.usable_id===e&&t.replace("/",{message:"The Organisor blocked you from room",type:"error"})}}(i,t)),function(){u.close()}}),[]),Object(c.useEffect)((function(){"reject"===s&&t.replace("/",{message:"The creator rejected the join request",type:"error"})}),[s]),Object(I.jsx)(I.Fragment,{children:"pending"===s?Object(I.jsx)("div",{className:n.container,children:Object(I.jsxs)(T.a,{elevation:3,variant:"outlined",className:n.paper,children:[Object(I.jsx)(S.a,{variant:"h2",className:n.color,style:{width:"max-content"},children:"Joining the room"}),Object(I.jsx)(Ze.a,{className:n.color,style:{marginLeft:"1rem"}})]})}):"accept"===s?Object(I.jsx)(Ye,{}):"message"===s?Object(I.jsx)("div",{className:n.container,children:Object(I.jsx)(T.a,{elevation:3,variant:"outlined",className:n.paper,children:Object(I.jsx)(S.a,{variant:"h2",className:n.color,style:{width:"max-content"},align:"center",children:b})})}):null})}}}]);
//# sourceMappingURL=6.addc0f5c.chunk.js.map