(this.webpackJsonpteams_frontend=this.webpackJsonpteams_frontend||[]).push([[3],{11:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return d}));var c="GET_USER_ERROR",r="GET_USER",a="GET_USER_PENDING",o="LOGIN_PENDING",i="SET_TOKEN",u="SET_ID",s="LOGGEDINORNOT",d="GET_ALL_USERS"},110:function(e,t,n){},118:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(8),o=n.n(a),i=(n(110),n(111),n(93)),u=n(181),s={solarizedDark:{type:"dark",primary:{main:"#002b36",contrastText:"#eee8d5"},secondary:{main:"#eee8d5",contrastText:"#0e2a35"},background:{default:"#09232c",paper:"#002b36"}},solarizedLight:{type:"light",primary:{main:"#fff7dd",contrastText:"#002b36"},secondary:{main:"#002b36",contrastText:"#eee8d5"},background:{default:"#eee8d5",paper:"#fff7dd"}},palpatine:{type:"dark",primary:{main:"#1a1a1a",contrastText:"#ffffff"},secondary:{main:"#e04035",contrastText:"#ffffff"},background:{default:"#101010",paper:"#1b1b1b"}},light:{type:"light",primary:{main:"#f0f2f5",contrastText:"#000000"},secondary:{main:"#356fff",contrastText:"#ffffff"},background:{default:"#f0f2f5",paper:"#ffffff"}},dark:{type:"dark",primary:{main:"#282828",contrastText:"#ffffff"},secondary:{main:"#356fff",contrastText:"#ffffff"},background:{default:"#18191a",paper:"#242526"}}},d=n(57),l=n(10),b=n(40),f=n(4),j=n(36),O=n(14),p=n(171),h=n(2),m=function(){return Object(h.jsx)("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(h.jsx)("div",{children:Object(h.jsx)(p.a,{})})})},g=function(e){var t=e.component,n=Object(j.a)(e,["component"]);return Object(h.jsx)(t,Object(f.a)({},n))},x=function(e){var t=e.layout,n=e.component,r=Object(j.a)(e,["layout","component"]),a=Object(c.useState)(!0),o=Object(b.a)(a,2),i=o[0],u=o[1],s=Object(c.useRef)(!0),d=Object(O.c)((function(e){return e.userReducer.isLoggedIn})),p=Object(O.c)((function(e){return e.userReducer.getUserPending}));return Object(c.useLayoutEffect)((function(){s.current?s.current=!1:p||u(!1)}),[p]),Object(c.useEffect)((function(){d&&u(!1)}),[d]),Object(h.jsx)(l.b,{path:r.path,exact:r.exact,component:function(e){return!0===i?Object(h.jsx)(m,{}):d?Object(h.jsx)(t,Object(f.a)(Object(f.a)({},e),{},{noNavbar:r.noNavbar,navbar:r.navbar,navItems:r.navItems,homeIcon:r.homeIcon,children:Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)("div",{className:"text-primary"}),children:Object(h.jsx)(g,Object(f.a)({component:n},e))})})):Object(h.jsx)(l.a,{to:"/login"})}})},v=n(31),y=(n(117),n(118),n(34)),k=n(175),R=n(177),T=n(178),E=n(180),I=n(179),C=n(183),_=n(146),P=n(184),S=n(176),N=n(50),w=n(91),L=n.n(w),U=n(18),G="CHANGE_THEME",D=Object(k.a)((function(e){return{grow:{flexGrow:1},title:{display:"block"},inputRoot:{color:"inherit"},inputInput:Object(y.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(y.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(y.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),orange:{color:e.palette.getContrastText(S.a[500]),backgroundColor:S.a[500]},active:{background:"#81818123"}}}));function M(){var e=D(),t=r.a.useState(null),n=Object(b.a)(t,2),a=n[0],o=n[1],i=Object(c.useState)(null),u=Object(b.a)(i,2),d=u[0],l=u[1],f=Boolean(d),j=Boolean(a),p=Object(O.c)((function(e){return e.userReducer.user})),m=Object(O.b)(),g=(p.first_name?p.first_name[0].toUpperCase():"")+(p.last_name?p.last_name[0].toUpperCase():""),x=function(){o(null)},v=Object(O.c)((function(e){return e.themeReducer.theme})),y="primary-search-account-menu";return Object(h.jsxs)("div",{className:e.grow,children:[Object(h.jsx)(R.a,{position:"static",children:Object(h.jsxs)(T.a,{children:[Object(h.jsx)(I.a,{className:e.title,variant:"h6",noWrap:!0,children:"Microsoft Teams"}),Object(h.jsx)("div",{className:e.grow}),Object(h.jsx)(E.a,{"aria-controls":"simple-theme-menu","aria-haspopup":"true",color:"inherit",className:"header-title-button",onClick:function(e){return l(e.currentTarget)},children:Object(h.jsx)(L.a,{})}),Object(h.jsx)("div",{className:e.sectionDesktop,children:Object(h.jsx)(E.a,{edge:"end","aria-label":"account of current user","aria-controls":y,"aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit",children:Object(h.jsx)(P.a,{className:e.orange,children:g})})})]})}),Object(h.jsxs)(_.a,{anchorEl:a,id:y,keepMounted:!0,open:j,onClose:function(){x()},children:[Object(h.jsx)(C.a,{children:Object(h.jsx)("b",{children:p.email})}),Object(h.jsx)(C.a,{onClick:function(){x(),m(Object(N.c)())},children:"Logout"})]}),Object(h.jsxs)(_.a,{id:"simple-theme-menu",anchorEl:d,keepMounted:!0,open:f,onClose:function(){l(null)},style:{marginTop:"30px"},children:[Object(h.jsx)(C.a,{children:Object(h.jsx)("b",{children:"Themes"})}),Object.keys(s).map((function(t,n){return Object(h.jsx)(C.a,{className:v===t?e.active:null,onClick:function(){l(null),m(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light";return function(t){t(Object(U.a)(G,e)),localStorage.setItem("theme",e)}}(t))},children:t},n)}))]})]})}var B=function(e){var t=e.children,n=Object(O.c)((function(e){return e.userReducer.isLoggedIn}));return Object(h.jsx)("div",{children:Object(h.jsxs)("main",{style:{height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[n&&Object(h.jsx)(M,{}),Object(h.jsx)("div",{className:"w-100 fg-100 overflow-auto position-relative",children:t}),Object(h.jsx)(v.a,{newestOnTop:!1,closeOnClick:!0,draggable:!0,limit:3,position:"bottom-left",autoClose:2e3,hideProgressBar:!0,progress:void 0})]})})},V=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6),n.e(8)]).then(n.bind(null,311))})),A=r.a.lazy((function(){return Promise.all([n.e(7),n.e(9)]).then(n.bind(null,312))})),F=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(10)]).then(n.bind(null,307))})),z=[{path:"/",exact:!0,layout:B,component:function(){return Object(h.jsx)(V,{})},strictlyPublic:!1},{path:"/room/:roomID",exact:!0,layout:B,component:function(){return Object(h.jsx)(F,{})},strictlyPublic:!1}],H=[{path:"/login",exact:!0,layout:B,component:function(){return Object(h.jsx)(A,{})},strictlyPublic:!0}],J=function(e){var t=e.component,n=Object(j.a)(e,["component"]);return Object(h.jsx)(t,Object(f.a)({},n))},W=function(e){var t=e.layout,n=e.component,r=e.strictlyPublic,a=void 0!==r&&r,o=Object(j.a)(e,["layout","component","strictlyPublic"]),i=Object(O.c)((function(e){return e.userReducer.isLoggedIn}));return Object(h.jsx)(l.b,{path:o.path,exact:o.exact,component:function(e){return a&&!0===i?Object(h.jsx)(l.a,{to:"/"}):Object(h.jsx)(t,Object(f.a)(Object(f.a)({},e),{},{noNavbar:o.noNavbar,navbar:o.navbar,navItems:o.navItems,homeIcon:o.homeIcon,children:Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)("div",{className:"text-primary"}),children:Object(h.jsx)(J,Object(f.a)({component:n},e))})}))}})},q=r.a.memo((function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.userReducer.loginPending}));return Object(c.useEffect)((function(){e(Object(N.d)())}),[t]),Object(h.jsx)(d.a,{children:Object(h.jsxs)(l.d,{children:[H.map((function(e,t){return Object(h.jsx)(W,{strictlyPublic:e.strictlyPublic,layout:e.layout,path:e.path,exact:e.exact,component:e.component},t)})),z.map((function(e,t){return Object(h.jsx)(x,{layout:e.layout,path:e.path,exact:e.exact,component:e.component},t)}))]})})}));var K=function(){var e,t=Object(O.c)((function(e){return e.themeReducer.theme}));return Object(h.jsx)(u.a,{theme:(e=t,Object(i.a)({palette:s[e]})),children:Object(h.jsx)(q,{})})},X=function(e){e&&e instanceof Function&&n.e(11).then(n.bind(null,308)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},Q=n(58),Y=n(47),Z=n(30),$=Object(f.a)(Object(f.a)({},{createRoomPending:!1,getRoomsPending:!1}),{},{rooms:[],currentRoom:{},userVideo:{audioOn:!0,videoOn:!0},isUserCreator:!1});var ee={theme:localStorage.getItem("theme")||"light"},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case G:return Object(f.a)(Object(f.a)({},e),{},{theme:c});default:return e}},ne=n(11),ce=Object(f.a)(Object(f.a)({},{loginPending:!1,getUserPending:!1}),{},{user:{},token:"",isLoggedIn:!1});var re,ae=Object(Y.b)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(t.error,n){case ne.a:return Object(f.a)(Object(f.a)({},e),{},{AllUsers:c});case ne.h:return Object(f.a)(Object(f.a)({},e),{},{token:c});case ne.e:return Object(f.a)(Object(f.a)({},e),{},{isLoggedIn:c});case ne.b:return Object(f.a)(Object(f.a)({},e),{},{user:c});case ne.g:return Object(f.a)(Object(f.a)({},e),{},{_id:c});case ne.f:return Object(f.a)(Object(f.a)({},e),{},{loginPending:c});case ne.d:return Object(f.a)(Object(f.a)({},e),{},{getUserPending:c});default:return e}},themeReducer:te,roomReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(t.error,n){case Z.a:return Object(f.a)(Object(f.a)({},e),{},{currentRoom:c,rooms:[c].concat(Object(Q.a)(e.rooms))});case Z.c:return Object(f.a)(Object(f.a)({},e),{},{rooms:c});case Z.e:return Object(f.a)(Object(f.a)({},e),{},{userVideo:Object(f.a)(Object(f.a)({},e.userVideo),{},{audioOn:!e.userVideo.audioOn})});case Z.f:return Object(f.a)(Object(f.a)({},e),{},{userVideo:Object(f.a)(Object(f.a)({},e.userVideo),{},{videoOn:!e.userVideo.videoOn})});case Z.b:return Object(f.a)(Object(f.a)({},e),{},{currentRoom:c});case Z.d:return Object(f.a)(Object(f.a)({},e),{},{isUserCreator:c});default:return e}}}),oe=function(e,t){return ae(e,t)},ie=n(92),ue=Object(Y.c)(oe,(re=[ie.a],Y.a.apply(void 0,Object(Q.a)(re))));o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O.a,{store:ue,children:Object(h.jsx)(K,{})})}),document.getElementById("root")),X()},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u}));var c=n(4),r=n(90),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return{type:e,payload:t}},o=function(e){return function(t){return{type:e,error:t}}},i=function(e){var t=window.location;return new URL("/room/".concat(e,"/"),t)},u=function(e,t){var n,a=[],o=new Map,i=Object(r.a)(e);try{for(i.s();!(n=i.n()).done;){var u=n.value;o.has(u[t])||(o.set(u[t],!0),a.push(Object(c.a)({},u)))}}catch(s){i.e(s)}finally{i.f()}return a}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return u}));var c="CREATE_ROOM",r="GET_ROOMS",a="TOGGLE_USER_AUDIO",o="TOGGLE_USER_VIDEO",i="SET_USER_IS_CREATOR",u="GET_ROOM"},42:function(e,t,n){"use strict";var c=n(89),r=n.n(c),a=n(46),o=n.n(a),i=r.a.create({baseURL:"/api/",headers:{"Content-type":"application/json; charset=UTF-8"}});i.interceptors.request.use((function(e){return e.headers["X-CSRFToken"]=o.a.get("teams_csrftoken"),e})),t.a=i},43:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"h",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return d}));var c="user/rest-auth/google/",r="user/rest-auth/facebook/",a="user/rest-auth/user/",o="user/rest-auth/logout/",i="room/",u="room/",s=function(e){return"room/".concat(e,"/invite/")},d=function(e){return"room/".concat(e,"/isUserCreator/")}},50:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return j}));var c=n(42),r=n(31),a=n(46),o=n.n(a),i=n(11),u=n(43),s=n(18),d=Object(s.b)(i.c),l=function(){var e=u.d;return function(t){t(Object(s.a)(i.d,!0)),c.a.get(e).then((function(e){t(Object(s.a)(i.e,!0)),t(Object(s.a)(i.b,e.data)),t(Object(s.a)(i.d,!1))})).catch((function(e){t(Object(s.a)(i.e,!1)),t(Object(s.a)(i.d,!1)),t(d(e))}))}},b=function(e){var t=u.e;return function(n){c.a.post(t,e).then((function(e){n(Object(s.a)(i.h,e.data.key)),n(Object(s.a)(i.e,!0)),n(l()),r.b.success("Logged In Successfully",{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),o.a.set("token",e.data.key,{expires:7})})).catch((function(e){n(d(e))}))}},f=function(e){var t=u.b;return function(n){c.a.post(t,e).then((function(e){n(Object(s.a)(i.h,e.data.key)),n(Object(s.a)(i.e,!0));n(l({bio:"",phone_number:""})),r.b.success("Welcome back, Logged In Successfully",{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),o.a.set("token",e.data.key,{expires:7})})).catch((function(e){n(d(e)),r.b.error("User is already signed In with this email, try to login with either google or fill the form",{position:"top-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))}},j=function(){return function(e){var t=u.h;c.a.post(t).then((function(t){e(Object(s.a)(i.e,!1))}))}}}},[[138,4,5]]]);
//# sourceMappingURL=main.643b8cd6.chunk.js.map