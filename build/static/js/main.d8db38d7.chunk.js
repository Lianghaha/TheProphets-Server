(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{229:function(e,t,a){},230:function(e,t,a){},231:function(e,t,a){},270:function(e,t,a){e.exports=a(502)},276:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){},279:function(e,t,a){},304:function(e,t){},306:function(e,t){},317:function(e,t){},319:function(e,t){},346:function(e,t){},348:function(e,t){},349:function(e,t){},355:function(e,t){},357:function(e,t){},375:function(e,t){},377:function(e,t){},389:function(e,t){},392:function(e,t){},459:function(e,t,a){},460:function(e,t,a){},461:function(e,t,a){},480:function(e,t,a){},481:function(e,t,a){},482:function(e,t,a){},483:function(e,t,a){},484:function(e,t,a){},485:function(e,t,a){},502:function(e,t,a){"use strict";a.r(t);var n=a(14),c=a.n(n),r=a(22),o=a(11),l=a(1),i=a.n(l),s=a(10),u=a.n(s),m=(a(276),a(277),a(19)),d=a(23),f=(a(278),a(110)),E=a(544),p=(a(279),a(232)),h=a(67),v=a.n(h),g=function(e){var t=e.loggedIn,a=e.handleLogout,n=function(){var e=document.getElementsByClassName("bm-cross-button")[0];e?e.lastChild.click():console.log("Cannot find CrossButton")};return i.a.createElement("div",{className:"Burger"},i.a.createElement(p.slide,null,function(){if(t)return i.a.createElement("div",{className:"UserInfo"},i.a.createElement("div",{className:"ProfileImgContainer"},i.a.createElement("img",{src:v.a,alt:"Default"})),i.a.createElement("p",{id:"userGreeting"},localStorage.getItem("username")))}(),i.a.createElement("ul",null,i.a.createElement(m.b,{to:"/",onClick:n},i.a.createElement("li",null,"The Prohets")),i.a.createElement(m.b,{to:"/prophets",onClick:n},i.a.createElement("li",null,"Prohets")),i.a.createElement(m.b,{to:"/predictions",onClick:n},i.a.createElement("li",null,"Predictions")),t?i.a.createElement("li",{onClick:a},"Logout"):i.a.createElement("div",null,i.a.createElement(m.b,{to:"/signup",onClick:n},i.a.createElement("li",null,"Sign In")),i.a.createElement(m.b,{to:"/login",onClick:n},i.a.createElement("li",null,"Login"))))))},b=(a(299),a(32)),N=a.n(b),S=function(){for(var e=document.cookie.split(";"),t=0;t<e.length;t++){var a=e[t].split("=");document.cookie=a[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}localStorage.clear()},w=function(e,t,a){document.cookie="identity=".concat(e),document.cookie="username=".concat(t),document.cookie="token=".concat(a),localStorage.setItem("identity",e),localStorage.setItem("username",t),localStorage.setItem("token",a)},O=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("identity"),a=localStorage.getItem("token"),n=!1,!a){e.next=6;break}return e.next=6,N.a.post("/api/check_token",{identity:t,token:a}).then((function(e){console.log(e.data),0===e.data.status?n=!0:S()})).catch((function(e){return console.log(e)}));case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(e){e.setShowPageLoading;var t=e.loggedIn,a=e.setLoggedIn,n=Object(d.f)(),c=Object(l.useState)(!1),r=Object(o.a)(c,2),s=r[0],u=r[1];window.addEventListener("scroll",(function(){window.scrollY>=100?u(!0):u(!1)}));var p=Object(l.useState)(!1),h=Object(o.a)(p,2),b=h[0],N=h[1];Object(l.useLayoutEffect)((function(){var e=function(){window.innerWidth<=768?N(!0):N(!1)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var w=Object(l.useState)(""),O=Object(o.a)(w,2),j=O[0],C=O[1],k=function(){n.push("/search/".concat(j)),C("")},y=function(){S(),a(!1),n.push("/")},T=function(){return i.a.createElement("div",{className:"SearchBarContainer"},i.a.createElement("div",{className:"SearchBar"},i.a.createElement(E.a,{id:"SearchInput",placeholder:"Search...",onChange:function(e){return C(e.target.value)},onPressEnter:function(){return k()},value:j,autoComplete:"off"}),i.a.createElement("div",{className:"Icon",onClick:function(){return k()}},i.a.createElement(f.c,{size:"1.2rem"}))))};return b?i.a.createElement("div",{className:s?"Navbar NavbarActive":"Navbar"},i.a.createElement(g,{loggedIn:t,handleLogout:y}),T()):i.a.createElement("div",{className:s?"Navbar NavbarActive":"Navbar"},i.a.createElement("ul",{className:"NavLeft"},i.a.createElement(m.b,{to:"/"},i.a.createElement("li",null,"Home")),i.a.createElement(m.b,{to:"/prophets"},i.a.createElement("li",null,"Prohets")),i.a.createElement(m.b,{to:"/predictions"},i.a.createElement("li",null,"Predictions"))),T(),t?i.a.createElement("ul",{className:"NavRight"},i.a.createElement("li",{className:"UserInfo"},i.a.createElement("div",{className:"ProfileImgContainer"},i.a.createElement("img",{src:v.a,alt:"Default"})),i.a.createElement("div",{className:"Username"},localStorage.getItem("username"))),i.a.createElement("li",{onClick:y},"Logout")):i.a.createElement("ul",{className:"NavRight"},i.a.createElement(m.b,{to:"/signup"},i.a.createElement("li",null,"Sign Up")),i.a.createElement(m.b,{to:"/login"},i.a.createElement("li",null,"Login"))))},C=(a(459),a(239));var k=function(){return i.a.createElement("div",{className:"Cover"},i.a.createElement("div",{className:"CoverText"},i.a.createElement("h1",{className:"TextHover"},"Find The Prohets"),i.a.createElement("p",{className:"TextHover"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices finibus urna, ac tempus nunc ornare sed. Donec bibendum ante a sollicitudin malesuada. Suspendisse aliquet tellus nisl, in facilisis metus ullamcorper eget. In non est ut orci faucibus rutrum eu nec odio. Cras finibus eleifend.")),i.a.createElement("div",{className:"Icon"},i.a.createElement(C.a,{color:"white",size:"1.8em",onClick:function(){window.scroll({top:window.innerHeight-50,left:0,behavior:"smooth"})}})))};a(460),a(461);var y=function(e){var t=e.data;return t?i.a.createElement(m.b,{className:"ProphetCard",to:"/prophetDetail/".concat(t.prophet_id)},i.a.createElement("img",{src:t.image,alt:"profile"}),i.a.createElement("div",{className:"NotImg"},i.a.createElement("div",{className:"TextSection"},i.a.createElement("h4",{id:"name"},t.name),i.a.createElement("p",{id:"description"},t.description)),i.a.createElement("div",{className:"NumberSectionContainer"},i.a.createElement("div",{className:"NumberSection"},i.a.createElement("div",{className:"LargeNumber"},i.a.createElement("p",null,t.score),i.a.createElement("span",null,"/10")),i.a.createElement("p",null,"Prophet Score")),i.a.createElement("hr",null),i.a.createElement("div",{className:"NumberSection"},i.a.createElement("div",{className:"LargeNumber"},t.num_prediction),i.a.createElement("p",null,"Predictions"))))):""},T=a(540),x=a(536),P={arrows:!1,dots:{className:"AntDCarouselDots"},infinite:!0,speed:600,slidesToShow:6,slidesToScroll:6,initialSlide:0,draggable:!0,responsive:[{breakpoint:2160,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:1800,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:1430,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1100,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:715,settings:{slidesToShow:1,slidesToScroll:1}}]},I=function(){var e=Object(l.useRef)(),t=Object(l.useState)([]),a=Object(o.a)(t,2),n=a[0],s=a[1];Object(l.useEffect)((function(){u()}),[]);var u=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,N.a.get("/api/search/prophets").then((function(e){if(0===e.data.status){t=e.data.result;for(var a=0;a<2;a++)t=t.concat(t);s(t)}else console.log(e.data.err)})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"TopProphets"},i.a.createElement("div",{className:"TitleAndButtons"},i.a.createElement("h2",null,"Top Prophets"),i.a.createElement("div",{className:"TitleButtons"},i.a.createElement(x.a,{onClick:function(){e.current.prev()},variant:"outlined"},i.a.createElement(f.a,{color:"white",size:"1.8em"})),i.a.createElement(x.a,{onClick:function(){e.current.next()},variant:"outlined"},i.a.createElement(f.b,{color:"white",size:"1.8em"})),i.a.createElement(m.b,{to:"/prophets"},i.a.createElement(x.a,{variant:"outlined"},"SHOW ALL")))),i.a.createElement("div",{className:"ProphetsList"},i.a.createElement(T.a,Object.assign({ref:e},P),n.map((function(e,t){return i.a.createElement("div",{key:t,className:"ProphetCardContainer"},i.a.createElement(y,{data:e}))})))))};a(480),a(481);var A=function(e){var t=e.data;return i.a.createElement(m.b,{className:"PredictionCard",to:"/predictionDetail/".concat(t.prediction_id)},i.a.createElement("img",{src:t.image,alt:"PredictionImg"}),i.a.createElement("div",{className:"NotImg"},i.a.createElement("div",{className:"Text"},i.a.createElement("p",{className:"Status"},"Status: ",t.status),i.a.createElement("p",{className:"Title"},t.title),i.a.createElement("p",{className:"Description"},t.description)),i.a.createElement("div",{className:"Ratings"},i.a.createElement("div",{className:"NumberSection"},i.a.createElement("div",{className:"LargeNumber"},i.a.createElement("p",null,t.score),i.a.createElement("span",null,"/10")),i.a.createElement("p",{className:"RatingText"},"Prediction Score")),i.a.createElement("hr",null),i.a.createElement("div",{className:"NumberSection"},i.a.createElement("p",{className:"LargeNumber"},t.num_review),i.a.createElement("p",{className:"RatingText"},"Reviews")))))},L=a(541),B=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(l.useState)(!1),u=Object(o.a)(s,2),d=u[0],f=u[1];Object(l.useEffect)((function(){E()}),[]);var E=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,N.a.get("/api/search/predictions").then((function(e){if(0===e.data.status){t=e.data.result;for(var a=0;a<0;a++)t=t.concat(t);n(t)}else console.log(e.data.err)})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){f(!0);var e=a.concat(a);setTimeout((function(){n(e),f(!1)}),1e3)};return i.a.createElement("div",{className:"TopPredictions"},i.a.createElement("div",{className:"TitleAndButtons"},i.a.createElement("h2",null,"Top Predictions"),i.a.createElement("div",{className:"TitleButtons"},i.a.createElement(m.b,{to:"/predictions"},i.a.createElement(x.a,{variant:"outlined"},"SHOW ALL")))),i.a.createElement("div",{className:"PredictionsList"},a&&a.map((function(e,t){return i.a.createElement(A,{key:t,data:e})}))),i.a.createElement("div",{className:"TitleButtons"},d?i.a.createElement(L.a,{size:"large"}):i.a.createElement(x.a,{onClick:p,variant:"outlined"},"SHOW MORE")))},D=(a(482),function(){return i.a.createElement("div",{className:"Home"},i.a.createElement(k,null),i.a.createElement(I,null),i.a.createElement(B,null))}),R=(a(483),function(){return i.a.createElement("div",{className:"NotFound"},i.a.createElement("p",null,"Sorry Page Not Found"))}),_=(a(484),a(246)),z=a(545),W=a(547),H=a(548),F=a(546),U=function(e){var t=Object(d.f)(),a=Object(l.useState)("initial"),n=Object(o.a)(a,2),s=n[0],u=n[1],m=Object(l.useState)([]),f=Object(o.a)(m,2),E=f[0],p=f[1],h=Object(l.useState)([]),v=Object(o.a)(h,2),g=v[0],b=v[1],S=Object(l.useState)(""),w=Object(o.a)(S,2),O=w[0],j=w[1],C=Object(l.useState)(!1),k=Object(o.a)(C,2),T=k[0],P=k[1],I=Object(l.useState)("DESC"),B=Object(o.a)(I,2),D=B[0],R=B[1],U=Object(l.useState)(0),G=Object(o.a)(U,2),q=G[0],M=G[1],Z=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,n,r,o=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",a=o.length>1&&void 0!==o[1]?o[1]:"DESC",n=o.length>2&&void 0!==o[2]?o[2]:0,r=[],e.next=6,N.a.get("/api/search/prophets?keyWord=".concat(t,"&&sort=").concat(a,"&&scoreAbove=").concat(n)).then((function(e){if(0===e.data.status){r=e.data.result;for(var t=0;t<0;t++)r=r.concat(r);p(r),P(!1)}else console.log(e.data.err)})).catch((function(e){return console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,n,r,o=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",a=o.length>1&&void 0!==o[1]?o[1]:"DESC",n=o.length>2&&void 0!==o[2]?o[2]:0,r=[],e.next=6,N.a.get("/api/search/predictions?keyWord=".concat(t,"&&sort=").concat(a,"&&scoreAbove=").concat(n)).then((function(e){if(0===e.data.status){r=e.data.result;for(var t=0;t<0;t++)r=r.concat(r);b(r),P(!1)}else console.log(e.data.err)})).catch((function(e){return console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(l.useEffect)((function(){"undefined"!==typeof e.showProphets&&u(e.showProphets)}),[e.showProphets]),Object(l.useEffect)((function(){j(e.input)}),[e.input]),Object(l.useEffect)((function(){P(!0),"initial"!==s&&(s?Z(O,D,q):V(O,D,q))}),[D,q,O,s]);var J=function(e){return i.a.createElement("div",{className:"RatingContainer",onClick:function(){M(e)}},i.a.createElement(F.a,{name:"half-rating-read",defaultValue:4.5,value:e/2,precision:.5,readOnly:!0}),i.a.createElement("p",{style:q===e?{fontWeight:"600"}:{fontWeight:"200"}},"& UP"))};return i.a.createElement("div",{className:"Search"},i.a.createElement("div",{className:"ResultsAndTools"},i.a.createElement("div",{className:"Results HoverEffect"},i.a.createElement("div",{className:"SearchText"},i.a.createElement("div",{className:"Icon",onClick:t.goBack},i.a.createElement(_.a,{size:"3em"})),i.a.createElement("p",null,"Search: ",O||(s?"All Prophets":"All Predictions"))),i.a.createElement("div",{className:"SwitchButtonContainer"},i.a.createElement("div",{className:s?"SwitchButton SwitchButtonActive":"SwitchButton",onClick:function(){u(!0)}},i.a.createElement(x.a,null,"Prophets")),i.a.createElement("div",{className:s?"SwitchButton":"SwitchButton SwitchButtonActive",onClick:function(){u(!1)}},i.a.createElement(x.a,null,"Predictions"))),i.a.createElement(L.a,{size:"large",spinning:T},T?i.a.createElement("div",{className:"SearchContentLoading"}):s?0===Object.keys(E).length?i.a.createElement("div",{className:"Empty"},"No Result Found"):i.a.createElement("div",{className:"SearchProphetCards"},E&&E.map((function(e,t){return i.a.createElement(y,{key:t,data:e})}))):0===Object.keys(g).length?i.a.createElement("div",{className:"Empty"},"No Result Found"):i.a.createElement("div",{className:"SearchPredictionCards"},g&&g.map((function(e,t){return i.a.createElement(A,{key:t,data:e})}))))),i.a.createElement("div",{className:"Tools"},i.a.createElement("div",{className:"Sort HoverEffect"},i.a.createElement("p",{className:"Title"},"Sort by:"),i.a.createElement(W.a,{name:"sort",value:D,onChange:function(e){R(e.target.value)}},i.a.createElement(H.a,{value:"DESC",control:i.a.createElement(z.a,null),label:"Score: High to Low"}),i.a.createElement(H.a,{value:"ASC",control:i.a.createElement(z.a,null),label:"Score: Low to High"}))),i.a.createElement("div",{className:"Filter HoverEffect"},i.a.createElement("p",{className:"Title"},"Filter: "),i.a.createElement("div",{className:"ScoreAbove"},i.a.createElement("p",null,"Score:"),J(9),J(8),J(7),J(6),J(5)),i.a.createElement("div",{className:"Clear",onClick:function(){M(0)}},"Reset")))))};U.defaultProps={input:""};a(229),a(485);var G=function(e){var t=e.data;return i.a.createElement(m.b,{className:"PredictionStrip",to:"/predictionDetail/".concat(t.prediction_id)},i.a.createElement("div",{className:"Text"},i.a.createElement("p",{className:"Status"},"Status:",t.status),i.a.createElement("p",{className:"Title"},t.title),i.a.createElement("p",{className:"Description"},t.description)),i.a.createElement("div",{className:"Rating"},i.a.createElement("p",{className:"Number"},i.a.createElement("span",null,t.score),"/10"),i.a.createElement("p",null,"Prediction Score")))},q=(a(230),function(){var e={profile_img:v.a,username:"Haha Wowwowwow",posted_date:"2020/10/8 @ 1:19:30",relative_date:"3 weeks ago",content:"1000 characters The computer wouldn't start. She banged on the side and tried again. Nothing. She lifted it up and dropped it to the table. Still nothing. She banged her closed fist against the top. It was at this moment she saw the irony of trying to fix the machine with violence. What have you noticed today? I noticed that if you outline the eyes, nose, and mouth on your face with your finger, you make an I which makes perfect sense, but is something I never noticed before. What have you noticed today? The computer wouldn't start. She banged on the side and tried again. Nothing. She lifted it up and dropped it to the table. Still nothing. She banged her closed fist against the top. It was at this moment she saw the irony of trying to fix the machine with violence. What"};return i.a.createElement("div",{className:"Strip CommentStrip"},i.a.createElement("div",{className:"ImgContainer"},i.a.createElement("img",{src:e.profile_img,alt:"Default"})),i.a.createElement("div",{className:"ContentContainer"},i.a.createElement("div",{className:"UserInfo"},i.a.createElement("div",{className:"Name"},i.a.createElement("p",null,e.username)),i.a.createElement("div",{className:"Time"},i.a.createElement("p",null,e.relative_date," ",i.a.createElement("span",{className:"ToolTip"},e.posted_date)))),i.a.createElement("div",null,i.a.createElement("p",{className:"Text"},e.content))))}),M=a(543),Z=E.a.TextArea,V=function(e){var t=e.prophetID,a=e.setShowPageLoading,n=Object(d.f)(),s=Object(l.useState)(),u=Object(o.a)(s,2),m=u[0],f=u[1],E=Object(l.useState)([]),p=Object(o.a)(E,2),h=p[0],v=p[1],g=Object(l.useState)(!1),b=Object(o.a)(g,2),S=b[0],w=b[1],j=Object(l.useState)(""),C=Object(o.a)(j,2),k=C[0],T=C[1],P=Object(l.useState)(!1),I=Object(o.a)(P,2),A=(I[0],I[1],Object(l.useState)(!1)),L=Object(o.a)(A,2),B=(L[0],L[1],Object(l.useCallback)(Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/search/prophets?prophetID=".concat(t)).then((function(e){0===e.data.status?f(e.data.result[0]):console.log(e.data.err)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),[t])),D=Object(l.useCallback)(Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/search/predictions?prophetID=".concat(t)).then((function(e){0===e.data.status?v(e.data.result):console.log(e.data.err)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),[t]);Object(l.useEffect)((function(){window.scrollTo(0,0),B(),D()}),[B,D,a]);var R=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:if(!e.sent){e.next=6;break}w(!0),e.next=7;break;case 6:n.push("/login");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"Detail"},i.a.createElement("div",{className:"Content"},i.a.createElement("div",{className:"Section"},i.a.createElement("div",{className:"SectionTitleAndButton"},i.a.createElement("h2",null,"Prophet Information")),i.a.createElement(y,{data:m}),i.a.createElement("a",{href:"https://en.wikipedia.org/wiki/".concat(m?m.name:"")},i.a.createElement(x.a,{variant:"outlined"},"More Info"))),i.a.createElement("div",{className:"Section"},i.a.createElement("div",{className:"SectionTitleAndButton"},i.a.createElement("h2",null,"Predictions")),i.a.createElement("div",{className:"List"},h.map((function(e,t){return i.a.createElement(G,{data:e,key:t})}))),i.a.createElement(x.a,{variant:"outlined"},"SHOW MORE")),i.a.createElement("div",{className:"Section"},i.a.createElement("div",{className:"SectionTitleAndButton"},i.a.createElement("h2",null,"Comments"),i.a.createElement(x.a,{variant:"outlined",onClick:R},"Add Comment"),i.a.createElement(M.a,{title:"Comment",visible:S,onOk:function(){w(!1)},onCancel:function(){w(!1)},footer:[i.a.createElement(x.a,{key:"back",variant:"outlined",onClick:function(){return w(!1)}},"Cancel"),i.a.createElement(x.a,{key:"submit",variant:"outlined",onClick:function(){console.log(k)}},"Submit")]},i.a.createElement(Z,{maxLength:200,rows:6,onChange:function(e){return T(e.target.value)}}),i.a.createElement("p",{className:"wordCount"},k.length," / ",200))),i.a.createElement("div",{className:"List"},i.a.createElement(q,null)),i.a.createElement(x.a,{variant:"outlined"},"SHOW MORE"))))},J=function(){var e={profile_img:v.a,username:"Haha Wowwowwow",posted_date:"2020/10/8 @ 1:19:30",relative_date:"3 weeks ago",accuracy:9,difficulty:8,overall_score:7.9,content:"1000 characters The computer wouldn't start. She banged on the side and tried again. Nothing. She lifted it up and dropped it to the table. Still nothing. She banged her closed fist against the top. It was at this moment she saw the irony of trying to fix the machine with violence. What have you noticed today? I noticed that if you outline the eyes, nose, and mouth on your face with your finger, you make an I which makes perfect sense, but is something I never noticed before. What have you noticed today? The computer wouldn't start. She banged on the side and tried again. Nothing. She lifted it up and dropped it to the table. Still nothing. She banged her closed fist against the top. It was at this moment she saw the irony of trying to fix the machine with violence. What"},t=function(e){return i.a.createElement(F.a,{name:"half-rating-read",defaultValue:4.5,value:e/2,precision:.5,readOnly:!0,size:"small"})};return i.a.createElement("div",{className:"Strip ReviewStrip"},i.a.createElement("div",{className:"ImgContainer"},i.a.createElement("img",{src:e.profile_img,alt:"Default"})),i.a.createElement("div",{className:"ContentContainer"},i.a.createElement("div",{className:"UserInfo"},i.a.createElement("div",{className:"Name"},i.a.createElement("p",null,e.username)),i.a.createElement("div",{className:"Time"},i.a.createElement("p",null,e.relative_date," ",i.a.createElement("span",{className:"ToolTip"},e.posted_date)))),i.a.createElement("div",{className:"ScoreContainer"},i.a.createElement("div",{className:"Score"},i.a.createElement("p",null,"Accuracy:"),t(e.accuracy)),i.a.createElement("div",{className:"Score"},i.a.createElement("p",null,"Difficulty:"),t(e.difficulty)),i.a.createElement("div",{className:"Score"},i.a.createElement("p",{className:"OverallScore"},"Overall Score: ",i.a.createElement("span",null,e.overall_score)))),i.a.createElement("div",null,i.a.createElement("p",{className:"Text"},e.content))))},$=E.a.TextArea,Y=function(e){var t=e.predictionID,a=Object(d.f)(),n=Object(l.useState)(),s=Object(o.a)(n,2),u=s[0],m=s[1],f=Object(l.useState)(!0),E=Object(o.a)(f,2),p=E[0],h=E[1],v=Object(l.useState)(""),g=Object(o.a)(v,2),b=g[0],S=g[1],w=Object(l.useState)(0),j=Object(o.a)(w,2),C=j[0],k=j[1],y=Object(l.useState)(0),T=Object(o.a)(y,2),P=T[0],I=T[1],L=Object(l.useCallback)(Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/search/predictions?predictionID=".concat(t)).then((function(e){0===e.data.status?m(e.data.result[0]):console.log(e.data.err)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),[t]);Object(l.useEffect)((function(){window.scrollTo(0,0),L()}),[L]);var B=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:if(!e.sent){e.next=6;break}h(!0),e.next=7;break;case 6:a.push("/login");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"Detail"},i.a.createElement("div",{className:"Content"},u?i.a.createElement("div",{className:"Section"},i.a.createElement("div",{className:"SectionTitleAndButton"},i.a.createElement("h2",null,"Prediction Information")),i.a.createElement(A,{data:u}),i.a.createElement("div",{className:"Buttons"},i.a.createElement("a",{href:"/prophetDetail/".concat(u.prophet_id)},i.a.createElement(x.a,{variant:"outlined"},"Show Prophet")),i.a.createElement("a",{href:u.article},i.a.createElement(x.a,{variant:"outlined"},"View Article")))):"",i.a.createElement("div",{className:"Section"},i.a.createElement("div",{className:"SectionTitleAndButton"},i.a.createElement("h2",null,"Reviews"),i.a.createElement(x.a,{variant:"outlined",onClick:B},"Add Review"),i.a.createElement(M.a,{title:"Review",visible:p,onOk:function(){h(!1)},onCancel:function(){h(!1)},footer:[i.a.createElement(x.a,{key:"back",variant:"outlined",onClick:function(){return h(!1)}},"Cancel"),i.a.createElement(x.a,{key:"submit",variant:"outlined",onClick:function(){console.log(b)},disabled:0===C||0===P||0===b.length},"Submit")]},i.a.createElement("div",{className:"ScoreContainer"},i.a.createElement("div",{className:"Score"},i.a.createElement("p",null,"Accuracy:"),i.a.createElement(F.a,{name:"accuracy",defaultValue:4.5,value:C/2,precision:.5,onChange:function(e,t){k(2*t)}})),i.a.createElement("div",{className:"Score"},i.a.createElement("p",null,"Difficulty:"),i.a.createElement(F.a,{name:"dfficulty",defaultValue:4.5,value:P/2,precision:.5,onChange:function(e,t){I(2*t)}}))),i.a.createElement($,{maxLength:200,rows:6,onChange:function(e){return S(e.target.value)}}),i.a.createElement("p",{className:"wordCount"},b.length," / ",200))),i.a.createElement("div",{className:"List"},i.a.createElement(J,null)),i.a.createElement(x.a,{variant:"outlined"},"SHOW MORE"))))},K=(a(231),a(542)),Q=a(68),X=a(123),ee=a.n(X),te=function(e){var t=e.setLoggedIn,a=Object(d.f)(),n=Object(l.useState)(!1),s=Object(o.a)(n,2),u=s[0],m=s[1],f=function(){return u?{type:"text"}:{type:"password"}},E=function(){return i.a.createElement("div",{className:"ShowPasswordButton"},u?i.a.createElement(Q.a,{color:"white",size:"1.2rem",onClick:function(){m(!u)}}):i.a.createElement(Q.b,{color:"white",size:"1.2rem",onClick:function(){m(!u)}}))},p=Object(l.useState)(""),h=Object(o.a)(p,2),v=h[0],g=h[1],b=Object(l.useState)(!1),O=Object(o.a)(b,2),j=O[0],C=O[1],k=Object(l.useState)(""),y=Object(o.a)(k,2),T=y[0],P=y[1],I=Object(l.useState)(!1),A=Object(o.a)(I,2),L=A[0],B=A[1],D=Object(l.useState)(""),R=Object(o.a)(D,2),_=R[0],z=R[1],W=Object(l.useState)(""),H=Object(o.a)(W,2),F=H[0],U=H[1],G=function(){var e=Object(r.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=_,e.next=3,N.a.post("/api/signup",{email:v,username:T,AESpassword:n}).then((function(e){console.log("Register Post Response: "),console.log(e.data);var n=e.data;0===n.status?(w(v,T,n.tokenRequest.token),t(!0),a.push("/")):alert(n.message)})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(e){console.log(e)};return Object(l.useEffect)((function(){S(),t(!1)}),[t]),i.a.createElement("div",{className:"SignUp"},i.a.createElement("div",{className:"AuthForm"},i.a.createElement("form",{autoComplete:"off"},i.a.createElement("h1",null,"Sign Up"),i.a.createElement("div",{className:"TextFieldContainer"},i.a.createElement(K.a,{id:"signUpEmail",label:"Email",onChange:function(e){return function(e){g(e);C(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e))}(e.target.value)},helperText:""!==v&&!j&&"Invalid Email Address"})),i.a.createElement("div",{className:"TextFieldContainer"},i.a.createElement(K.a,{id:"signUpUsername",label:"Username",onChange:function(e){return function(e){P(e);B(/^[a-zA-Z0-9]+$/.test(e)&&e.length>=6)}(e.target.value)},helperText:""!==T&&!L&&"At least 6 characters and only contains letters and numbers"})),i.a.createElement("div",{className:"TextFieldContainer"},i.a.createElement(K.a,{id:"signUpPassword",label:"Password",inputProps:f(),onChange:function(e){return z(e.target.value)},helperText:""!==_&&_.length<6&&"At least 6 characters"}),E()),i.a.createElement("div",{className:"TextFieldContainer"},i.a.createElement(K.a,{id:"signUpPasswordConfirmation",label:"Password Confirmation",inputProps:f(),onChange:function(e){return U(e.target.value)},helperText:""!==F&&_!==F&&"Password confirmation doesn't match password"}),E()),i.a.createElement("div",{className:"ButtonContainer"},i.a.createElement(x.a,{variant:"outlined",onClick:G},"CREAT ACCOUNT"),i.a.createElement(ee.a,{className:"GoogleButton",clientId:"120159497383-33l93k1jfajaoa1t1sm39qtnhmeoq9u5.apps.googleusercontent.com",buttonText:"Login With Google",onSuccess:q,onFailure:q,cookiePolicy:"single_host_origin"}),i.a.createElement(x.a,{variant:"outlined",onClick:a.goBack},"CANCEL"))),i.a.createElement("div",{className:"NotThisPage"},i.a.createElement("h3",null,"Already a member?"),i.a.createElement("div",{className:"ButtonContainer"},i.a.createElement(x.a,{variant:"outlined",onClick:function(){a.push("/login")}},"LOGIN")))),i.a.createElement("div",null))},ae=function(e){var t=e.setLoggedIn,a=Object(d.f)(),n=Object(l.useState)(!1),s=Object(o.a)(n,2),u=s[0],m=s[1],f=Object(l.useState)(""),E=Object(o.a)(f,2),p=E[0],h=E[1],v=Object(l.useState)(!1),g=Object(o.a)(v,2),b=g[0],O=g[1],j=Object(l.useState)(""),C=Object(o.a)(j,2),k=C[0],y=C[1],T=function(){var e=Object(r.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k,e.next=3,N.a.post("/api/login",{email:p,AESpassword:n}).then((function(e){console.log("Login Post Response: "),console.log(e.data);var n=e.data;0===n.status?(w(n.userInfo.identity,n.userInfo.username,n.tokenRequest.token),t(!0),a.push("/")):alert(n.message)})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){};return Object(l.useEffect)((function(){S(),t(!1)}),[t]),i.a.createElement("div",{className:"Login"},i.a.createElement("div",{className:"AuthForm"},i.a.createElement("form",{autoComplete:"off"},i.a.createElement("h1",null,"Login"),i.a.createElement("div",{className:"TextFieldContainer"},i.a.createElement(K.a,{id:"loginEmail",label:"Email",onChange:function(e){return function(e){h(e);/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e)?O(!0):O(!1)}(e.target.value)},helperText:""!==p&&!b&&"Invalid Email Address"})),i.a.createElement("div",{className:"TextFieldContainer"},i.a.createElement(K.a,{id:"loginPassword",label:"Password",inputProps:u?{type:"text"}:{type:"password"},onChange:function(e){return y(e.target.value)},helperText:""!==k&&k.length<6&&"At least 6 characters"}),i.a.createElement("div",{className:"ShowPasswordButton"},u?i.a.createElement(Q.a,{color:"white",size:"1.2rem",onClick:function(){m(!u)}}):i.a.createElement(Q.b,{color:"white",size:"1.2rem",onClick:function(){m(!u)}}))),i.a.createElement("div",{className:"ButtonContainer"},i.a.createElement(x.a,{variant:"outlined",onClick:T},"LOGIN"),i.a.createElement(ee.a,{className:"GoogleButton",clientId:"120159497383-33l93k1jfajaoa1t1sm39qtnhmeoq9u5.apps.googleusercontent.com",buttonText:"Login With Google",onSuccess:P,onFailure:P,cookiePolicy:"single_host_origin"}),i.a.createElement(x.a,{variant:"outlined",onClick:a.goBack},"CANCEL"))),i.a.createElement("div",{className:"NotThisPage"},i.a.createElement("h3",null,"Not yet a member?"),i.a.createElement("div",{className:"ButtonContainer"},i.a.createElement(x.a,{variant:"outlined",onClick:function(){a.push("/signup")}},"SIGN UP")))),i.a.createElement("div",null))};function ne(){var e=Object(l.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(l.useState)(!1),u=Object(o.a)(s,2),f=u[0],E=u[1],p=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=E,e.next=3,O();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){p()}),[]),Object(l.useEffect)((function(){}),[]),i.a.createElement(m.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(j,{setShowPageLoading:n,loggedIn:f,setLoggedIn:E}),i.a.createElement(L.a,{size:"large",spinning:a},a?i.a.createElement("div",{className:"LoadingBG"}):i.a.createElement(d.c,null,i.a.createElement(d.a,{path:"/prophetDetail/:id",render:function(e){return i.a.createElement(V,{prophetID:e.match.params.id,setShowPageLoading:n})}}),i.a.createElement(d.a,{path:"/predictionDetail/:id",render:function(e){return i.a.createElement(Y,{predictionID:e.match.params.id})}}),i.a.createElement(d.a,{path:"/prophets",exact:!0,render:function(){return i.a.createElement(U,{showProphets:!0})}}),i.a.createElement(d.a,{path:"/predictions",exact:!0,render:function(){return i.a.createElement(U,{showProphets:!1})}}),i.a.createElement(d.a,{path:"/search/:input",render:function(e){return i.a.createElement(U,{input:e.match.params.input,showProphets:!0})}}),i.a.createElement(d.a,{path:"/search/",render:function(){return i.a.createElement(U,{showProphets:!0})}}),i.a.createElement(d.a,{path:"/signup",render:function(){return i.a.createElement(te,{setLoggedIn:E})}}),i.a.createElement(d.a,{path:"/login",render:function(){return i.a.createElement(ae,{setLoggedIn:E})}}),i.a.createElement(d.a,{path:"/",exact:!0,component:D}),i.a.createElement(d.a,{path:"/",component:R})))))}a(499).config(),u.a.render(i.a.createElement(ne,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a.p+"static/media/default-profile.cd6d11ef.png"}},[[270,1,2]]]);
//# sourceMappingURL=main.d8db38d7.chunk.js.map