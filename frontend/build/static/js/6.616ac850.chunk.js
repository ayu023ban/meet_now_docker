(this.webpackJsonpteams_frontend=this.webpackJsonpteams_frontend||[]).push([[6],{189:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return j})),n.d(t,"d",(function(){return f})),n.d(t,"j",(function(){return b})),n.d(t,"k",(function(){return h})),n.d(t,"f",(function(){return O})),n.d(t,"g",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"h",(function(){return p})),n.d(t,"i",(function(){return v}));var r=n(55),c=n(36),i=n(31),a=n(27),o=n(37),s=n(16),u=n(49),l=function(e){var t=o.a;return function(n){c.a.post(t,e).then((function(e){n(Object(s.a)(a.a,e.data)),navigator.clipboard.writeText(Object(s.e)(e.data.id)),i.b.success("copied to clipboard")})).catch((function(e){i.b.error("error occured in creating the room")}))}},d=function(){var e=o.d;return function(t){c.a.get(e).then((function(e){t(Object(s.a)(a.c,e.data))})).catch((function(e){i.b.error("error occured in fetching your rooms",{})}))}},j=function(e,t){var n="".concat(o.d).concat(e,"/");return function(r,i){c.a.delete(n).then((function(n){t(e)}))}},f=function(e){var t="".concat(o.d).concat(e,"/");return function(e){c.a.get(t).then((function(t){e(Object(s.a)(a.b,t.data))}))}},b=function(){return function(e){e(Object(s.a)(a.f))}},h=function(){return function(e){e(Object(s.a)(a.g))}},O=function(e,t){var n=Object(o.g)(e);return function(e){c.a.post(n,t).then((function(t){e(Object(s.a)(a.b,t.data)),i.b.success("user invited")})).catch((function(e){i.b.error(e.response.data)}))}},g=function(e,t){var n=Object(o.j)(e);return function(e){c.a.post(n,t).then((function(t){e(Object(s.a)(a.b,t.data)),e(Object(u.d)())})).catch((function(e){i.b.error(e.response.data)}))}},m=function(e){var t=Object(o.h)(e);return function(e){c.a.get(t).then((function(t){e(Object(s.a)(a.e,t.data.isCreator))}))}},p=function(e){return function(t){t(Object(s.a)(a.d,e))}},v=function(e){return function(t,n){var c=n().roomReducer.roomMessages;t(Object(s.a)(a.d,[].concat(Object(r.a)(c),[e])))}}},254:function(e,t,n){},280:function(e,t){},282:function(e,t){},324:function(e,t,n){"use strict";n.r(t);var r=n(43),c=n(0),i=n.n(c),a=n(199),o=n(200),s=function(){function e(){Object(a.a)(this,e),this.callbacks={},this.socketRef=null,this.fallback=null,this.forcedClose=!1}return Object(o.a)(e,[{key:"connect",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this.forcedClose=!1,this.fallback=n,this.socketRef=new WebSocket(e),this.socketRef.onopen=function(){console.log("websocket open")},this.socketRef.onmessage=function(e){t.socketNewMessage(e.data)},this.socketRef.onerror=function(e){console.debug(e)},this.socketRef.onclose=function(r){console.log(r),4e3===r.code?t.fallback(r):t.forcedClose?console.log("websocket closed"):(console.log("websockets closed lets reopen"),setTimeout((function(){t.connect(e,n(r))}),5e3))}}},{key:"close",value:function(e,t){"undefined"==typeof e&&(e=1e3),this.forcedClose=!0,this.socketRef&&this.socketRef.close(e,t)}},{key:"on",value:function(e,t){this.callbacks[e]=t}},{key:"del",value:function(e){this.callbacks[e]&&delete this.callbacks[e]}},{key:"socketNewMessage",value:function(e){var t=JSON.parse(e),n=t.command,r=t.data;console.log(t),0!==Object.keys(this.callbacks).length&&this.callbacks[n]&&this.callbacks[n](r)}},{key:"sendMessage",value:function(e,t){try{console.log(e,t),this.waitForConnection(function(){this.socketRef.send(JSON.stringify({type:e,data:t}))}.bind(this),1e3)}catch(n){console.log(n.message)}}},{key:"refresh",value:function(){this.socketRef&&this.socketRef.close()}},{key:"state",value:function(){return this.socketRef.readyState}},{key:"waitForConnection",value:function(e,t){if(1===this.state())e();else{var n=this;setTimeout((function(){n.waitForConnection(e,t)}),t)}}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();s.instance=null;var u=s.getInstance(),l=n(10),d=n(4),j=n(207),f=n.n(j),b=n(208),h=n(13),O=n(87),g=n(177),m=n(327),p=n(182),v=n(181),x=n(209),k=n.n(x),w=n(187),y=n(310),R=n(241),C=n.n(R),M=n(242),I=n.n(M),S=n(31),_=n(240),N=n.n(_),T=n(239),D=n.n(T),E=n(2),U=Object(g.a)((function(e){return{responsive:function(){return{float:"left",display:"flex",alignItems:"center",transition:"width 0.5s, height 0.5s"}},videoTop:{background:e.palette.background.paper},micOff:{position:"absolute",right:0,top:0},videoOff:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",justifyContent:"center",alignItems:"center"},avatar:{width:"min(50%, 10rem)",height:"min(50%, 10rem)",fontSize:"3rem"},hoverDiv:{position:"absolute",zIndex:3,top:"0",left:"0",width:"100%",height:"100%"},remove:{color:"white","&:disabled":{color:"#444"}},name:{position:"absolute",bottom:"0.5rem",left:"1rem",color:"white"}}})),V=i.a.forwardRef((function(e,t){var n=e.peer,a=e.muted,o=e.size,s=e.rows,l=e.isUserVideo,d=e.user,j=e.isSharingScreen,f=e.pinnedUser,b=e.setPinnedUser,g=Object(c.useRef)(null),x=t||g,R=d.pk||d.id,M=U(),_=i.a.useState(!1),T=Object(r.a)(_,2),V=T[0],z=T[1],B=Object(h.c)((function(e){return e.roomReducer.isUserCreator})),P=Object(h.c)((function(e){return e.roomReducer.currentRoom.invited_users})),J=Object(c.useRef)(null),A=i.a.useState(),F=Object(r.a)(A,2),H=F[0],W=F[1],L=i.a.useState(),q=Object(r.a)(L,2),G=q[0],X=q[1],Y=new ResizeObserver((function(e){var t,n,r,c=Object(O.a)(e);try{for(c.s();!(r=c.n()).done;){var i=r.value;i.contentBoxSize&&(t=9*i.contentRect.width/16<i.contentRect.height?.95*i.contentRect.width:.95*i.contentRect.height*16/9,n=9*i.contentRect.width/16>i.contentRect.height?.95*i.contentRect.height:.95*i.contentRect.width*9/16)}}catch(a){c.e(a)}finally{c.f()}W(t),X(n)}));Object(c.useEffect)((function(){Y.observe(J.current)}),[]);var K=(d.first_name?d.first_name[0].toUpperCase():"")+(d.last_name?d.last_name[0].toUpperCase():""),Q=d.first_name+" "+d.last_name;Q=Q.trim(),l&&(Q="You"),Object(c.useEffect)((function(){n&&n.on("stream",(function(e){x.current.srcObject=e}))}),[]);return Object(E.jsx)("div",{className:M.responsive,ref:J,style:{width:"".concat(f===R?100:-1===f?100/o-2:0,"%"),height:"".concat(f===R?100:-1===f?100/s-2:0,"%")},children:Object(E.jsxs)("div",{className:M.videoTop,style:{width:H,height:G,position:"relative",overflow:"hidden",margin:"auto",borderRadius:"1rem"},children:[Object(E.jsx)("video",{style:{objectFit:"contain",transform:l&&!j?"scaleX(-1)":1,position:"absolute",top:"0",left:"0",display:d.videoOn?"block":"none"},playsInline:!0,width:"100%",height:"100%",autoPlay:!0,muted:a,ref:x,onClick:function(){},onMouseEnter:function(){z(!0)},onTouchEnd:function(){z((function(e){return!e}))}}),V&&Object(E.jsx)(y.a,{in:V,children:Object(E.jsx)("div",{className:M.hoverDiv,onMouseLeave:function(){z(!1)},onTouchEnd:function(){z((function(e){return!e}))},children:Object(E.jsxs)("div",{style:{opacity:.6,background:"black",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(E.jsx)(m.a,{title:f===R?"remove pin":"pin the user",children:Object(E.jsx)(p.a,{className:M.remove,onClick:function(e){e.stopPropagation(),V&&b(f===R?-1:R)},children:f===R?Object(E.jsx)(D.a,{fontSize:"large"}):Object(E.jsx)(N.a,{fontSize:"large"})})}),Object(E.jsx)(m.a,{title:"remove user",children:Object(E.jsx)(p.a,{className:M.remove,onClick:function(e){e.stopPropagation(),B&&!l&&V&&u.sendMessage("user kick",{userID:d.id})},disabled:!B||l,children:Object(E.jsx)(C.a,{fontSize:"large"})})}),Object(E.jsx)(m.a,{title:"Block user",children:Object(E.jsx)(p.a,{className:M.remove,onClick:function(e){e.stopPropagation(),B&&!l&&V&&(P.some((function(e){return e.id===d.id}))?S.b.error("user is invited. first remove the invitation"):u.sendMessage("user block",{userID:d.id}))},disabled:!B||l,children:Object(E.jsx)(I.a,{fontSize:"large"})})}),Object(E.jsx)(v.a,{variant:"p",className:M.name,children:Q})]})})}),!d.audioOn&&Object(E.jsx)(p.a,{className:M.micOff,children:Object(E.jsx)(k.a,{})}),!d.videoOn&&Object(E.jsx)("div",{className:M.videoOff,onMouseEnter:function(){z(!0)},onTouchEnd:function(){z((function(e){return!e}))},children:Object(E.jsx)(w.a,{className:M.avatar,children:K})})]})})})),z=n(143),B=n(236),P=n(151),J=n(188),A=n(66),F=n(243),H=n.n(F),W=n(244),L=n.n(W),q=n(246),G=n.n(q),X=n(247),Y=n.n(X),K=n(252),Q=n.n(K),Z=n(189),$=n(251),ee=n.n($),te=n(250),ne=n.n(te),re=n(311),ce=n(313),ie=n(314),ae=n(315),oe=n(316),se=n(229),ue=n(206),le=n.n(ue),de=function(e){var t=e.open,n=e.setOpen,r=Object(h.c)((function(e){return e.roomReducer.currentRoom.room_name}));return Object(E.jsxs)(re.a,{open:t,onClose:function(){n((function(e){return!e}))},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(E.jsx)(ce.a,{id:"alert-dialog-title",children:"Meeting Details"}),Object(E.jsxs)(ie.a,{children:[Object(E.jsx)(v.a,{variant:"h5",children:r}),Object(E.jsx)("br",{}),Object(E.jsx)(v.a,{variant:"p",children:"Joining info"}),Object(E.jsx)(ae.a,{id:"alert-dialog-description",children:window.location.href})]}),Object(E.jsx)(oe.a,{children:Object(E.jsx)(le.a,{text:window.location.href,onCopy:function(){S.b.success("copied to clipboard")},children:Object(E.jsx)(se.a,{children:"Copy link"})})})]})},je=n(323),fe=n(317),be=n(318),he=n(210),Oe=n.n(he),ge=n(198),me=n.n(ge),pe=n(16),ve=function(e){var t=e.open,n=e.setOpen,i=Object(l.i)().roomID,a=Object(h.c)((function(e){return e.roomReducer.currentRoom.invited_users||[]})),o=Object(c.useState)({str:"",err_message:""}),s=Object(r.a)(o,2),u=s[0],d=s[1],j=Object(h.b)();return Object(E.jsxs)(re.a,{open:t,onClose:function(){n((function(e){return!e}))},children:[Object(E.jsx)(ce.a,{children:"Invite people"}),Object(E.jsxs)(ie.a,{children:[a.map((function(e,t){return Object(E.jsxs)(fe.a,{style:{alignItems:"center"},children:[Object(E.jsx)(be.a,{children:e.email}),Object(E.jsx)(p.a,{onClick:function(){j(Object(Z.g)(i,{invitee:e.email}))},children:Object(E.jsx)(Oe.a,{})})]},t)})),Object(E.jsx)(je.a,{error:u.err_message.length>0,value:u.str,onChange:function(e){var t=e.target.value;d({str:t,err_message:""})},helperText:u.err_message}),Object(E.jsx)(p.a,{onClick:function(){var e=u.str,t="";0===e.length?t="email can't be empty":Object(pe.f)(e)?(j(Object(Z.f)(i,{invitee:e})),d({str:"",err_message:""})):t="email not valid",t.length&&d({str:e,err_message:t})},children:Object(E.jsx)(me.a,{})})]})]})},xe=n(309),ke=n(97),we=n(253),ye=n.n(we),Re=n(248),Ce=n.n(Re),Me=n(249),Ie=n.n(Me),Se=n(245),_e=n.n(Se),Ne=Object(g.a)((function(e){return{container:{minHeight:"3rem",flexGrow:0,background:e.palette.background.default},blue:{background:"blue"},orange:{color:A.a[500]},right:{marginRight:"1rem"}}})),Te=function(e){var t=e.switchc,n=e.shareScreen,a=e.toggleChat,o=e.isJoinedRoom,s=e.setIsJoinedRoom,u=e.leaveMeet,d=Ne(),j=Object(h.b)(),f=Object(h.c)((function(e){return e.roomReducer.userVideo.audioOn})),b=Object(h.c)((function(e){return e.roomReducer.userVideo.videoOn})),O=Object(c.useState)(!1),g=Object(r.a)(O,2),x=g[0],w=g[1],y=Object(c.useState)(!1),R=Object(r.a)(y,2),C=R[0],M=R[1],I=(Object(l.g)(),Object(h.c)((function(e){return e.roomReducer.currentRoom.room_name}))),S=Object(h.c)((function(e){return e.roomReducer.isUserCreator})),_=Object(ke.a)(),N=Object(xe.a)(_.breakpoints.down("sm")),T=i.a.useState(null),D=Object(r.a)(T,2),U=D[0],V=D[1],A=Boolean(U);return Object(E.jsx)(z.a,{elevation:3,className:d.container,children:Object(E.jsxs)(B.a,{justify:"space-between",container:!0,alignItems:"center",style:{height:"100%"},children:[Object(E.jsx)("div",{children:Object(E.jsx)(v.a,{variant:"h5",style:{marginLeft:"1rem"},children:I})}),Object(E.jsxs)("div",{children:[Object(E.jsx)(m.a,{title:f?"Mic On":"Mic off",children:Object(E.jsx)(p.a,{color:"inherit",onClick:function(){j(Object(Z.j)())},children:f?Object(E.jsx)(H.a,{}):Object(E.jsx)(k.a,{})})}),o?Object(E.jsx)(m.a,{title:"end call",children:Object(E.jsx)(p.a,{color:"inherit",onClick:u,children:Object(E.jsx)(L.a,{className:d.orange})})}):Object(E.jsx)(m.a,{title:"Join the meeting",children:Object(E.jsx)(p.a,{color:"inherit",onClick:function(){s(!0)},children:Object(E.jsx)(_e.a,{})})}),Object(E.jsx)(m.a,{title:b?"video on":"video off",children:Object(E.jsx)(p.a,{color:"inherit",onClick:function(){j(Object(Z.k)())},children:b?Object(E.jsx)(G.a,{}):Object(E.jsx)(Y.a,{})})}),o&&Object(E.jsx)(m.a,{title:"share screen",children:Object(E.jsx)(p.a,{color:"inherit",onClick:function(){n()},children:Object(E.jsx)(Ce.a,{})})})]}),!N&&Object(E.jsxs)("div",{className:d.right,children:[Object(E.jsx)(m.a,{title:"switch camera",children:Object(E.jsx)(p.a,{color:"inherit",onClick:function(){t()},children:Object(E.jsx)(Ie.a,{})})}),S&&o&&Object(E.jsx)(m.a,{title:"invite users",children:Object(E.jsx)(p.a,{onClick:function(){M((function(e){return!e}))},children:Object(E.jsx)(ne.a,{})})}),Object(E.jsx)(m.a,{title:"Meeting Details",children:Object(E.jsx)(p.a,{onClick:function(){w((function(e){return!e}))},children:Object(E.jsx)(ee.a,{})})}),Object(E.jsx)(m.a,{title:"Chat",children:Object(E.jsx)(p.a,{onClick:a,children:Object(E.jsx)(Q.a,{})})})]}),N&&Object(E.jsxs)("div",{className:d.right,children:[Object(E.jsx)(p.a,{"aria-controls":"simple-theme-menu","aria-haspopup":"true",color:"inherit",className:"header-title-button",onClick:function(e){return V(e.currentTarget)},children:Object(E.jsx)(ye.a,{})}),Object(E.jsxs)(P.a,{anchorEl:U,id:"controls-menu",keepMounted:!0,open:A,onClose:function(){V(null)},children:[Object(E.jsx)(J.a,{onClick:function(){t()},children:"Switch Camera"}),S&&o&&Object(E.jsx)(J.a,{onClick:function(){V(null),M((function(e){return!e}))},children:"Invite User"}),Object(E.jsx)(J.a,{onClick:function(){V(null),w((function(e){return!e}))},children:"Meeting Details"}),Object(E.jsx)(J.a,{onClick:function(){V(null),a()},children:"Chat"})]})]}),S&&o&&Object(E.jsx)(ve,{open:C,setOpen:M}),Object(E.jsx)(de,{open:x,setOpen:w})]})})},De=function(e){for(var t=Math.floor(Math.sqrt(e)),n=t-e%t,r=Math.floor(e/t),c=[],i=0;i<t;i++)i>=n?c.push(r+1):c.push(r);c=c.reverse();for(var a={},o=1,s=0,u=1;u<=e;u++)a[u]=c[s],++o>c[s]&&(o=1,s++);return a.rows=c.length,a};var Ee=n(328),Ue=n(255),Ve=n.n(Ue),ze=n(320),Be=n(319),Pe=(n(254),Object(g.a)((function(e){return{drawer:{width:360,flexShrink:0},drawerPaper:{width:360,height:"calc(100vh - 9rem)",borderRadius:"1rem",top:"5rem",right:"12px"},drawerHeader:Object(d.a)(Object(d.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-start"}),chatInputContainer:{marginTop:"auto"},chatInput:{marginBottom:"2rem","& .MuiFilledInput-root":{borderRadius:"50px",borderBottom:0,paddingTop:"15px",paddingBottom:"15px","&::before":{borderBottom:0}}},messageBoxRight:{background:e.palette.background.paper,color:e.palette.text.primary},messageBoxLeft:{background:"#4870df",color:e.palette.background.default},messageSender:{color:e.palette.text.primary,fontSize:"10px"}}}))),Je=function(e){var t=Object(h.c)((function(e){return e.userReducer.user})),n=Pe(),r=t.pk===e.sender.id?"chatApp__convMessageItem--right":"chatApp__convMessageItem--left",c=t.pk===e.sender.id?n.messageBoxRight:n.messageBoxLeft;return Object(E.jsx)("div",{className:"chatApp__convMessageItem "+r+" clearfix",children:Object(E.jsxs)("div",{className:"chatApp__convMessageValue ".concat(c),children:[t.pk!==e.sender.id&&Object(E.jsx)("div",{className:n.messageSender,children:e.sender.first_name}),Object(E.jsx)("div",{children:e.message})]})})},Ae=i.a.memo((function(e){return Object(E.jsx)("div",{className:"chatApp__convTimeline",children:e.messages.slice(0).reverse().map((function(e,t){return Object(E.jsx)(Je,{sender:e.user,message:e.message},t)}))})})),Fe=function(e){var t=e.open,n=e.setOpen,i=Object(h.c)((function(e){return e.roomReducer.roomMessages})),a=Object(c.useState)(""),o=Object(r.a)(a,2),s=o[0],l=o[1],d=Pe(),j=Object(h.b)();Object(c.useEffect)((function(){u.on("receive new message",(function(e){j(Object(Z.i)(e))})),u.on("get all messages",(function(e){j(Object(Z.h)(e.messages))}))}),[]);var f=Object(c.useCallback)((function(e){var t=e.target.value;l(t)}),[]);return Object(E.jsxs)(Ee.a,{className:d.drawer,variant:"persistent",anchor:"right",open:t,classes:{paper:d.drawerPaper},children:[Object(E.jsx)("div",{className:d.drawerHeader,children:Object(E.jsx)(p.a,{onClick:function(){n(!1)},children:Object(E.jsx)(Ve.a,{})})}),Object(E.jsx)(Ae,{messages:i}),Object(E.jsx)("div",{className:d.chatInputContainer,children:Object(E.jsx)(je.a,{placeholder:"send a message to everyone",size:"small",variant:"filled",fullWidth:!0,multiline:!0,rowsMax:4,className:d.chatInput,value:s,onChange:f,InputProps:{endAdornment:Object(E.jsx)(Be.a,{position:"end",children:s.length>0&&Object(E.jsx)(p.a,{"aria-label":"toggle password visibility",onClick:function(){u.sendMessage("send new message",s),l("")},children:Object(E.jsx)(ze.a,{})})})}})})]})},He=n(38),We=n(295),Le=n(72),qe=n(256),Ge=n.n(qe);var Xe=function(e,t,n,r){return function(c){e.current={};var i={};c.forEach((function(r){if(t!==r.id){var c=function(e,t,n){var r=new Ge.a({initiator:!0,trickle:!1,stream:n});return r.on("signal",(function(n){u.sendMessage("sending signal",{userToSignal:e,callerID:t,signal:n})})),r}(r.id,t,n);e.current[r.id]={user:r,peer:c},i[r.id]={user:r,peer:c}}})),r(i)}},Ye=function(e,t,n,r,c,i){return function(c){var i,a,o=c.callerUser;if(c.usable_id===e){var s=function(e,t,n){var r=new Ge.a({initiator:!1,trickle:!1,stream:n});return r.on("signal",(function(e){u.sendMessage("returning signal",{signal:e,callerID:t})})),r.signal(e),r}(c.signal,o.id,n);t.current[o.id]={user:o,peer:s},r((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(Le.a)({},o.id,{user:o,peer:s}))})),S.b.info("".concat((i=o.first_name,a=o.last_name,(i+" "+a).trim())," joined"))}}},Ke=n(322),Qe=n(292),Ze=n.n(Qe),$e=n(144),et=Object($e.a)((function(e){return{modal:{"&& .modal-content":{background:e.palette.background.paper,color:e.palette.text.primary}}}})),tt=function(e){var t=e.waitingUsers,n=e.setWaitingUsers,r=et();return Object(E.jsxs)(Ke.a,{show:Boolean(t.length),onHide:function(){},backdrop:"static",keyboard:!1,className:r.modal,children:[Object(E.jsx)(Ke.a.Header,{children:Object(E.jsx)(Ke.a.Title,{children:"Modal title"})}),Object(E.jsx)(Ke.a.Body,{children:t.map((function(e,t){return Object(E.jsxs)(fe.a,{style:{alignItems:"center"},children:[Object(E.jsxs)(be.a,{children:[e.first_name," wants to join"]}),Object(E.jsx)(p.a,{onClick:function(){!function(e){u.sendMessage("give join permission status",{userID:e.id,status:"reject"}),n((function(t){return t.filter((function(t){return t.id!==e.id}))}))}(e)},children:Object(E.jsx)(Oe.a,{})}),Object(E.jsx)(p.a,{onClick:function(){!function(e){u.sendMessage("give join permission status",{userID:e.id,status:"accept"}),n((function(t){return t.filter((function(t){return t.id!==e.id}))}))}(e)},children:Object(E.jsx)(Ze.a,{})})]},t)}))}),Object(E.jsx)(Ke.a.Footer,{})]})},nt=function(e,t,n){return function(r){for(var c in e.current)e.current[c].peer.replaceTrack(n.getVideoTracks()[0],r,n);t(Object(d.a)({},e.current)),n.removeTrack(n.getVideoTracks()[0]),n.addTrack(r)}},rt=function(){var e=Object(b.a)(f.a.mark((function e(t,n,r,c,i){var a,o,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getDisplayMedia({cursor:!0});case 2:a=e.sent,o=c.getVideoTracks()[0],s=a.getVideoTracks()[0],nt(t,n,c)(s),i(!0),s.onended=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:r,audio:!0});case 2:e.sent,nt(t,n,c)(o),i(!1);case 5:case"end":return e.stop()}}),e)})));case 8:case"end":return e.stop()}}),e)})));return function(t,n,r,c,i){return e.apply(this,arguments)}}(),ct={height:window.innerHeight/2,width:window.innerWidth/2},it=Object(g.a)((function(e){return{container:{display:"flex",height:"100%",width:"100%",flexDirection:"column",background:e.palette.background.default}}})),at=function(e,t,n,r,c,i,a){u.on("all users",Xe(e,t,n,r)),u.on("user joined",Ye(t,e,n,r)),u.on("receiving returned signal",function(e,t,n,r){return function(c){c.usable_id===e&&(t.current[c.id].peer.signal(c.signal),u.sendMessage("audioMedia",{userID:e,audioOn:n}),u.sendMessage("videoMedia",{userID:e,videoOn:r}),u.sendMessage("get media",""))}}(t,e,c,i)),u.on("user left",function(e,t,n){return function(e){var r=e.user;t.current[r.id]&&t.current[r.id].peer.destroy(),delete t.current[r.id],n((function(t){var n=e.user.id;return t[n],Object(He.a)(t,[n].map(We.a))}))}}(0,e,r)),u.on("videoMedia",function(e,t){return function(n){var r=n.userID;e.current[r]&&(e.current[r].user.videoOn=n.videoOn,t((function(e){var t=e[r],c=t.user,i=t.peer;return Object(d.a)(Object(d.a)({},e),{},Object(Le.a)({},r,{peer:i,user:Object(d.a)(Object(d.a)({},c),{},{videoOn:n.videoOn})}))})))}}(e,r)),u.on("audioMedia",function(e,t){return function(n){var r=n.userID;e.current[r]&&(e.current[r].user.audioOn=n.audioOn,t((function(e){var t=e[r],c=t.user,i=t.peer;return Object(d.a)(Object(d.a)({},e),{},Object(Le.a)({},r,{peer:i,user:Object(d.a)(Object(d.a)({},c),{},{audioOn:n.audioOn})}))})))}}(e,r)),u.on("user want to join",function(e,t){return function(n){n.usable_id===e&&t((function(e){return e.push(n.user),Object(pe.d)(e,"id")}))}}(t,a)),u.on("get media",function(e,t){return function(n){for(var r in e.current)n.audio[r]&&(e.current[r].user.audioOn=n.audio[r]),n.video[r]&&(e.current[r].user.videoOn=n.video[r]);t((function(e){for(var t in e)n.audio[t]&&(e[t].user.audioOn=n.audio[t]),n.video[t]&&(e[t].user.videoOn=n.video[t]);return Object(d.a)({},e)}))}}(e,r))},ot=function(){var e=Object(l.i)().roomID,t=Object(c.useState)({}),n=Object(r.a)(t,2),i=n[0],a=n[1],o=Object(c.useRef)(),s=Object(c.useRef)({}),j=Object(h.c)((function(e){return e.userReducer.user.pk})),O=Object(c.useState)(),g=Object(r.a)(O,2),m=g[0],p=g[1],v=Object(c.useRef)(0),x=De(Object.keys(i).length+1),k=Object(c.useState)(!1),w=Object(r.a)(k,2),y=w[0],R=w[1],C=Object(h.c)((function(e){return e.roomReducer.userVideo.audioOn})),M=Object(h.c)((function(e){return e.roomReducer.userVideo.videoOn})),I=it(),S=Object(h.c)((function(e){return e.userReducer.user})),_=Object(c.useState)([]),N=Object(r.a)(_,2),T=N[0],D=N[1],U=Object(h.b)(),z=Object(c.useState)(!1),B=Object(r.a)(z,2),P=B[0],J=B[1],A=Object(c.useState)(-1),F=Object(r.a)(A,2),H=F[0],W=F[1],L=Object(c.useState)(!1),q=Object(r.a)(L,2),G=q[0],X=q[1],Y=function(){var e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:t=e.sent,p(t),o&&o.current&&(o.current.srcObject=t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:u.sendMessage("get all messages","");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){U(Object(Z.c)(e)),U(Object(Z.d)(e)),K()}),[]),Object(c.useEffect)((function(){G&&at(s,j,m,a,C,M,D)}),[G,m,C,M,j]),Object(c.useEffect)((function(){var e=m;return function(){e&&(e.getVideoTracks().forEach((function(e){e.stop()})),e.getAudioTracks().forEach((function(e){e.stop()})))}}),[m]),Object(c.useEffect)((function(){m&&(m.getAudioTracks()[0].enabled=C,1===u.state()&&u.sendMessage("audioMedia",{userID:j,audioOn:C}))}),[m,C,j]),Object(c.useEffect)((function(){if(G)u.sendMessage("join room",e);else{for(var t in u.del("all users"),u.del("user joined"),u.del("receiving returned signal"),u.del("user left"),s.current)s.current[t].peer.destroy();u.sendMessage("user left",""),s.current={},a({})}}),[G]),Object(c.useEffect)((function(){m&&(m.getVideoTracks()[0].enabled=M,1===u.state()&&u.sendMessage("videoMedia",{userID:j,videoOn:M}))}),[m,M,j]),Object(c.useEffect)((function(){x=De(Object.keys(i).length+1)}),[i]);return Object(E.jsxs)("div",{className:I.container,children:[Object(E.jsxs)("div",{style:{display:"flex",width:"100%",maxHeight:"calc(100vh - 7rem)",margin:"auto",flexGrow:"1",flexWrap:"wrap"},children:[Object(E.jsx)(V,{muted:!0,ref:o,user:Object(d.a)(Object(d.a)({},S),{},{videoOn:M,audioOn:C}),autoPlay:!0,playsInline:!0,size:x[1],rows:x.rows,isUserVideo:!0,isSharingScreen:P,pinnedUser:H,setPinnedUser:W}),Object.values(i).map((function(e,t){return Object(E.jsx)(V,{peer:e.peer,user:e.user,size:x[t+2],rows:x.rows,pinnedUser:H,setPinnedUser:W},t)}))]}),Object(E.jsx)(tt,{waitingUsers:T,setWaitingUsers:D}),Object(E.jsx)(Te,{switchc:function(){!function(e,t,n,r){return function(){var c=Object(b.a)(f.a.mark((function c(i){var a,o,s,u;return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,navigator.mediaDevices.enumerateDevices();case 2:return a=c.sent,o=a.filter((function(e){return"videoinput"===e.kind})),i.current=(i.current+1)%o.length,s=Object(d.a)(Object(d.a)({},r),{},{deviceId:{exact:o[i.current].deviceId}}),r=s,c.next=9,navigator.mediaDevices.getUserMedia({video:r,audio:!0});case 9:u=c.sent,nt(e,t,n)(u.getVideoTracks()[0]);case 11:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}(s,a,m,ct)(v)},shareScreen:function(){rt(s,a,ct,m,J)},toggleChat:function(){R((function(e){return!e}))},isJoinedRoom:G,setIsJoinedRoom:X,leaveMeet:function(){X(!1)}}),Object(E.jsx)(Fe,{open:y,setOpen:R})]})},st=n(173),ut=Object($e.a)((function(e){return{container:{background:e.palette.background.default,height:"100%",width:"100%",position:"relative"},color:{color:e.palette.text.primary},paper:{display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"75vw",position:"relative",marginLeft:"auto",marginRight:"auto",top:"3rem"}}}));t.default=function(){var e=Object(l.i)().roomID,t=Object(l.g)(),n=ut(),i=Object(h.c)((function(e){return e.userReducer.user.pk})),a=Object(c.useState)("pending"),o=Object(r.a)(a,2),s=o[0],d=o[1],j=Object(c.useState)(""),f=Object(r.a)(j,2),b=f[0],O=f[1];return Object(c.useEffect)((function(){u.refresh();var n="http:"===window.location.protocol?"ws":"wss",r=window.location.hostname.includes("localhost")?"localhost:7000":window.location.hostname;return u.connect("".concat(n,"://").concat(r,"/ws/room/").concat(e,"/"),(function(e){t.replace("/",{message:"the url entered is incorrect.",type:"error"})})),u.on("get permission",function(e,t){return function(n){n.usable_id===e&&t(n.status)}}(i,d)),u.on("join message",function(e,t){return function(n){e("message"),"creator not available"===n?t("The Organisor has not joined the room yet. Please try joining after some time"):"user blocked"===n&&t("The Organisor has blocked you.")}}(d,O)),u.on("user kicked",function(e,t){return function(n){n.usable_id===e&&t.replace("/",{message:"The Organisor removed you from room",type:"error"})}}(i,t)),u.on("user blocked",function(e,t){return function(n){n.usable_id===e&&t.replace("/",{message:"The Organisor blocked you from room",type:"error"})}}(i,t)),function(){u.close()}}),[]),Object(c.useEffect)((function(){"reject"===s&&t.replace("/",{message:"The creator rejected the join request",type:"error"})}),[s]),Object(E.jsx)(E.Fragment,{children:"pending"===s?Object(E.jsx)("div",{className:n.container,children:Object(E.jsxs)(z.a,{elevation:3,variant:"outlined",className:n.paper,children:[Object(E.jsx)(v.a,{variant:"h2",className:n.color,style:{width:"max-content"},children:"Joining the room"}),Object(E.jsx)(st.a,{className:n.color,style:{marginLeft:"1rem"}})]})}):"accept"===s?Object(E.jsx)(ot,{}):"message"===s?Object(E.jsx)("div",{className:n.container,children:Object(E.jsx)(z.a,{elevation:3,variant:"outlined",className:n.paper,children:Object(E.jsx)(v.a,{variant:"h2",className:n.color,style:{width:"max-content"},align:"center",children:b})})}):null})}}}]);
//# sourceMappingURL=6.616ac850.chunk.js.map