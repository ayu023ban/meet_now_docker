(this.webpackJsonpteams_frontend=this.webpackJsonpteams_frontend||[]).push([[7],{190:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return d})),a.d(t,"b",(function(){return b})),a.d(t,"d",(function(){return u})),a.d(t,"h",(function(){return j})),a.d(t,"i",(function(){return m})),a.d(t,"f",(function(){return p})),a.d(t,"g",(function(){return f})),a.d(t,"c",(function(){return O}));var n=a(36),r=a(31),c=a(29),o=a(37),i=a(16),s=a(49),l=function(e){var t=o.a;return function(a){n.a.post(t,e).then((function(e){a(Object(i.a)(c.a,e.data)),navigator.clipboard.writeText(Object(i.e)(e.data.id)),r.b.success("copied to clipboard")})).catch((function(e){r.b.error("error occured in creating the room")}))}},d=function(){var e=o.d;return function(t){n.a.get(e).then((function(e){t(Object(i.a)(c.c,e.data))})).catch((function(e){r.b.error("error occured in fetching your rooms",{})}))}},b=function(e,t){var a="".concat(o.d).concat(e,"/");return function(r,c){n.a.delete(a).then((function(a){t(e)}))}},u=function(e){var t="".concat(o.d).concat(e,"/");return function(e){n.a.get(t).then((function(t){e(Object(i.a)(c.b,t.data))}))}},j=function(){return function(e){e(Object(i.a)(c.e))}},m=function(){return function(e){e(Object(i.a)(c.f))}},p=function(e,t){var a=Object(o.g)(e);return function(e){n.a.post(a,t).then((function(t){e(Object(i.a)(c.b,t.data)),r.b.success("user invited")})).catch((function(e){r.b.error(e.response.data)}))}},f=function(e,t){var a=Object(o.j)(e);return function(e){n.a.post(a,t).then((function(t){e(Object(i.a)(c.b,t.data)),e(Object(s.d)())})).catch((function(e){r.b.error(e.response.data)}))}},O=function(e){var t=Object(o.h)(e);return function(e){n.a.get(t).then((function(t){e(Object(i.a)(c.d,t.data.isCreator))}))}}},233:function(e,t,a){"use strict";var n=a(99),r=a(100);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(101)).default)(c.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},320:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(3),c=a(23),o=a(0),i=(a(6),a(5)),s=a(7),l=a(15),d=o.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"div":s,b=e.disableGutters,u=void 0!==b&&b,j=e.fixed,m=void 0!==j&&j,p=e.maxWidth,f=void 0===p?"lg":p,O=Object(r.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(d,Object(n.a)({className:Object(i.a)(a.root,c,m&&a.fixed,u&&a.disableGutters,!1!==f&&a["maxWidth".concat(Object(l.a)(String(f)))]),ref:t},O))})),b=Object(s.a)((function(e){return{root:Object(c.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(c.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(c.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(c.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(c.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(c.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d),u=a(144),j=a(13),m=a(10),p=a(31),f=a(43),O=a(32),h=a(177),v=a(143),g=a(181),x=a(318),y=a(229),w=a(198),k=a.n(w),N=a(304),R=a(97),C=a(190),W=a(2),E=Object(h.a)((function(e){var t;return{container:(t={width:"calc(100% - 10rem)"},Object(O.a)(t,e.breakpoints.down("sm"),{width:"100%"}),Object(O.a)(t,"minHeight","7rem"),Object(O.a)(t,"borderRadius","2rem"),Object(O.a)(t,"padding","1rem"),t),button:{margin:e.spacing(1),float:"right"},row:{display:"flex",marginTop:"1rem"}}}));var H=function(){var e=E(),t=Object(o.useState)(""),a=Object(f.a)(t,2),n=a[0],r=a[1],c=Object(o.useState)(!1),i=Object(f.a)(c,2),s=i[0],l=i[1],d=Object(j.b)(),b=Object(R.a)(),u=Object(N.a)(b.breakpoints.down("sm"));return Object(W.jsxs)(v.a,{elevation:3,className:e.container,children:[Object(W.jsx)(g.a,{variant:u?"h5":"h2",align:"center",children:"Create New Room"}),Object(W.jsxs)("div",{className:e.row,children:[Object(W.jsx)(x.a,{variant:"outlined",label:"Room Name",value:n,error:s,required:!0,onChange:function(e){var t=e.target.value;t.length<100&&r(t),s&&l(!1)},style:{flexGrow:1}}),Object(W.jsx)(y.a,{variant:"contained",color:"primary",className:e.button,endIcon:Object(W.jsx)(k.a,{}),onClick:function(){0===n.length?l(!0):(d(Object(C.a)({room_name:n})),r(""))},children:"Create"})]})]})},T=o.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.raised,l=void 0!==s&&s,d=Object(r.a)(e,["classes","className","raised"]);return o.createElement(v.a,Object(n.a)({className:Object(i.a)(a.root,c),elevation:l?8:1,ref:t},d))})),S=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(T),z=o.forwardRef((function(e,t){var a=e.action,c=e.avatar,s=e.classes,l=e.className,d=e.component,b=void 0===d?"div":d,u=e.disableTypography,j=void 0!==u&&u,m=e.subheader,p=e.subheaderTypographyProps,f=e.title,O=e.titleTypographyProps,h=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),v=f;null==v||v.type===g.a||j||(v=o.createElement(g.a,Object(n.a)({variant:c?"body2":"h5",className:s.title,component:"span",display:"block"},O),v));var x=m;return null==x||x.type===g.a||j||(x=o.createElement(g.a,Object(n.a)({variant:c?"body2":"body1",className:s.subheader,color:"textSecondary",component:"span",display:"block"},p),x)),o.createElement(b,Object(n.a)({className:Object(i.a)(s.root,l),ref:t},h),c&&o.createElement("div",{className:s.avatar},c),o.createElement("div",{className:s.content},v,x),a&&o.createElement("div",{className:s.action},a))})),M=Object(s.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(z),I=a(182),G=o.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,d=Object(r.a)(e,["classes","className","component"]);return o.createElement(l,Object(n.a)({className:Object(i.a)(a.root,c),ref:t},d))})),_=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(G),L=a(55),P=Object(L.a)(o.createElement("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Assignment"),D=a(233),B=a.n(D),J=a(206),V=a.n(J),Y=a(16),U=function(e){var t=e.room,a=e.onDelete,n=Object(m.g)(),r=Object(Y.e)(t.id);return Object(W.jsxs)(S,{style:{borderTop:"1px solid #ccc"},children:[Object(W.jsx)(M,{title:t.room_name,style:{cursor:"pointer"},onClick:function(){n.push("/room/".concat(t.id,"/"))},action:Object(W.jsx)(I.a,{onClick:function(e){a(t.id),e.stopPropagation()},children:Object(W.jsx)(B.a,{})})}),Object(W.jsxs)(_,{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(W.jsx)(g.a,{variant:"p",children:r.href}),Object(W.jsx)(V.a,{text:r,onCopy:function(){p.b.success("copied to clipboard")},children:Object(W.jsx)(I.a,{style:{float:"right"},children:Object(W.jsx)(P,{})})})]})]})},X=Object(u.a)((function(e){var t;return{paper:(t={width:"calc(100% - 10rem)"},Object(O.a)(t,e.breakpoints.down("sm"),{width:"100%"}),Object(O.a)(t,"minHeight","7rem"),Object(O.a)(t,"borderRadius","2rem"),Object(O.a)(t,"maxHeight","35rem"),Object(O.a)(t,"overflow","scroll"),Object(O.a)(t,"&::-webkit-scrollbar",{display:"none"}),Object(O.a)(t,"msOverflowStyle","none"),Object(O.a)(t,"scrollbarWidth","none"),t),header:{background:e.palette.background.paper,position:"sticky",top:0,zIndex:1,paddingBottom:"1rem"}}})),q=function(){var e=Object(j.c)((function(e){return e.userReducer.invitedRooms})),t=X(),a=Object(j.b)(),n=Object(j.c)((function(e){return e.userReducer.user.email})),r=Object(R.a)(),c=Object(N.a)(r.breakpoints.down("sm"));return Object(W.jsxs)(v.a,{elevation:3,className:t.paper,children:[Object(W.jsx)(g.a,{variant:c?"h5":"h2",align:"center",className:t.header,children:"Your Invitations"}),e.length>0&&e.map((function(e,t){return Object(W.jsx)(U,{room:e,onDelete:function(e){a(Object(C.g)(e,{invitee:n}))}},t)})),0===e.length&&Object(W.jsx)(g.a,{className:"my-5",align:"center",children:"No invititations"})]})},A=a(40),F=Object(u.a)((function(e){var t;return{container:(t={width:"calc(100% - 10rem)"},Object(O.a)(t,e.breakpoints.down("sm"),{width:"100%"}),Object(O.a)(t,"minHeight","7rem"),Object(O.a)(t,"borderRadius","2rem"),Object(O.a)(t,"padding","1rem"),Object(O.a)(t,"marginTop","2rem"),t),button:{margin:e.spacing(1),float:"right"},row:{display:"flex",marginTop:"1rem"}}})),K=function(){var e=F(),t=Object(o.useState)(""),a=Object(f.a)(t,2),n=a[0],r=a[1],c=Object(o.useState)(""),i=Object(f.a)(c,2),s=i[0],l=i[1],d=Object(m.g)(),b=Object(R.a)(),u=Object(N.a)(b.breakpoints.down("sm"));return Object(W.jsxs)(v.a,{elevation:3,className:e.container,children:[Object(W.jsx)(g.a,{variant:u?"h5":"h2",align:"center",children:"Join Room"}),Object(W.jsxs)("div",{className:e.row,children:[Object(W.jsx)(x.a,{variant:"outlined",label:"Enter code or link of the room",value:n,error:Boolean(s),helperText:s,onChange:function(e){var t=e.target.value;r(t),s&&l("")},style:{flexGrow:1}}),Object(W.jsx)(y.a,{variant:"contained",color:"primary",className:e.button,endIcon:Object(W.jsx)(k.a,{}),onClick:function(){var e=Object(Y.c)(n);if(e.is_correct){var t="";if(e.type===A.c.URL)t=new URL(n).pathname;else t="room/".concat(n);d.push(t)}else l(e.error_message)},children:"Join"})]})]})},Q=a(29),Z=Object(u.a)((function(e){var t;return{paper:(t={width:"calc(100% - 10rem)"},Object(O.a)(t,e.breakpoints.down("sm"),{width:"100%"}),Object(O.a)(t,"minHeight","7rem"),Object(O.a)(t,"borderRadius","2rem"),Object(O.a)(t,"maxHeight","35rem"),Object(O.a)(t,"overflow","scroll"),Object(O.a)(t,"&::-webkit-scrollbar",{display:"none"}),Object(O.a)(t,"msOverflowStyle","none"),Object(O.a)(t,"scrollbarWidth","none"),t),header:{background:e.palette.background.paper,position:"sticky",top:0,zIndex:1,paddingBottom:"1rem"}}})),$=function(){var e=Object(j.c)((function(e){return e.roomReducer.rooms})),t=Z(),a=Object(j.b)(),n=Object(R.a)(),r=Object(N.a)(n.breakpoints.down("sm"));return Object(W.jsxs)(v.a,{elevation:3,className:t.paper,children:[Object(W.jsx)(g.a,{variant:r?"h5":"h2",align:"center",className:t.header,children:"Your Rooms"}),e.length>0&&e.map((function(t,n){return Object(W.jsx)(U,{room:t,onDelete:function(t){a(Object(C.b)(t,(function(t){var n=e.filter((function(e){return e.id!==t}));a(Object(Y.a)(Q.c,n))})))}},n)})),0===e.length&&Object(W.jsx)(g.a,{className:"my-5",align:"center",children:"No rooms available. Please create a room to proceed"})]})},ee=a(49),te=Object(u.a)((function(e){return{component:{flexGrow:1,display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"column",gap:"1rem"},leftComp:{flexGrow:1,display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"column",gap:"1rem"},container:{display:"flex",flexWrap:"wrap",height:"100%",overflowY:"auto",backgroundColor:e.palette.background.default}}}));t.default=function(){var e=Object(m.h)(),t=te(),a=Object(j.b)();return Object(o.useEffect)((function(){a(Object(C.e)()),a(Object(ee.d)()),e.state&&e.state.message&&("error"===e.state.type&&p.b.error(e.state.message),window.history.replaceState(null,""))}),[]),Object(W.jsxs)(b,{maxWidth:!1,className:t.container,children:[Object(W.jsxs)("div",{className:[t.leftComp],children:[Object(W.jsx)(H,{}),Object(W.jsx)(q,{})]}),Object(W.jsxs)("div",{className:t.component,children:[Object(W.jsx)(K,{}),Object(W.jsx)($,{})]})]})}}}]);
//# sourceMappingURL=7.9418460a.chunk.js.map