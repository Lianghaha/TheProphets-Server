(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{104:function(e,t,a){e.exports=a(204)},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},158:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(1),r=a.n(c),l=a(29),i=a.n(l),s=(a(109),a(110),a(8)),o=a(10),u=(a(111),a(57)),m=a(220),d=a(86),E=function(e){var t=e.setShowLoading,a=Object(o.f)(),l=Object(c.useState)(!1),i=Object(n.a)(l,2),E=i[0],p=i[1];window.addEventListener("scroll",(function(){window.scrollY>=100?p(!0):p(!1)}));var f=Object(c.useState)(!1),v=Object(n.a)(f,2),h=v[0],N=v[1];Object(c.useLayoutEffect)((function(){var e=function(){window.innerWidth<=768?N(!0):N(!1)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var b=function(){var e=document.getElementsByClassName("bm-cross-button")[0];e?e.lastChild.click():console.log("Cannot find CrossButton")},S=Object(c.useState)(""),g=Object(n.a)(S,2),w=g[0],O=g[1],j=function(){a.push("/search/".concat(w)),O("")},T=function(){return r.a.createElement("div",{className:"SearchBarContainer"},r.a.createElement("div",{className:"SearchBar"},r.a.createElement(m.a,{id:"SearchInput",placeholder:"Search...",onChange:function(e){return O(e.target.value)},onPressEnter:function(){return j()},value:w}),r.a.createElement("div",{className:"Icon",onClick:function(){return j()}},r.a.createElement(u.c,{size:"1.2rem"}))))},P=function(){t(!0),setTimeout((function(){t(!1)}),1e3)};return h?r.a.createElement("div",{className:E?"Navbar NavbarActive":"Navbar"},r.a.createElement("div",{className:"Burger"},r.a.createElement(d.slide,null,r.a.createElement("ul",null,r.a.createElement(s.b,{to:"/",onClick:b},r.a.createElement("li",null,"The Prohets")),r.a.createElement(s.b,{to:"/prophets",onClick:b},r.a.createElement("li",null,"Prohets")),r.a.createElement(s.b,{to:"/predictions",onClick:b},r.a.createElement("li",null,"Predictions")),r.a.createElement(s.b,{to:"",onClick:b},r.a.createElement("li",null,"Sign In")),r.a.createElement(s.b,{to:"",onClick:b},r.a.createElement("li",null,"Login"))))),T()):r.a.createElement("div",{className:E?"Navbar NavbarActive":"Navbar"},r.a.createElement("ul",{className:"NavLeft"},r.a.createElement(s.b,{to:"/",onClick:P},r.a.createElement("li",null,"Home")),r.a.createElement(s.b,{to:"/prophets",onClick:P},r.a.createElement("li",null,"Prohets")),r.a.createElement(s.b,{to:"/predictions"},r.a.createElement("li",null,"Predictions"))),T(),r.a.createElement("ul",{className:"NavRight"},r.a.createElement(s.b,{to:"/test"},r.a.createElement("li",null,"Sign In")),r.a.createElement(s.b,{to:""},r.a.createElement("li",null,"Login"))))},p=(a(158),a(93));var f=function(){return r.a.createElement("div",{className:"Cover"},r.a.createElement("div",{className:"CoverText"},r.a.createElement("h1",{className:"TextHover"},"Find The Prohets"),r.a.createElement("p",{className:"TextHover"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices finibus urna, ac tempus nunc ornare sed. Donec bibendum ante a sollicitudin malesuada. Suspendisse aliquet tellus nisl, in facilisis metus ullamcorper eget. In non est ut orci faucibus rutrum eu nec odio. Cras finibus eleifend.")),r.a.createElement("div",{className:"Icon"},r.a.createElement(p.a,{color:"white",size:"1.8em"})))},v=a(15),h=a.n(v),N=a(30);a(160),a(161);var b=function(e){var t=e.data;return t?r.a.createElement(s.b,{className:"ProphetCard",to:"/prophetDetail/".concat(t.prophet_id)},r.a.createElement("img",{src:t.image,alt:"profile"}),r.a.createElement("div",{className:"NotImg"},r.a.createElement("div",{className:"TextSection"},r.a.createElement("h4",{id:"name"},t.name),r.a.createElement("p",{id:"description"},t.description)),r.a.createElement("div",{className:"NumberSectionContainer"},r.a.createElement("div",{className:"NumberSection"},r.a.createElement("div",{className:"LargeNumber"},t.score),r.a.createElement("p",null,"Prophet Score")),r.a.createElement("hr",null),r.a.createElement("div",{className:"NumberSection"},r.a.createElement("div",{className:"LargeNumber"},t.num_prediction),r.a.createElement("p",null,"Predictions"))))):""},S=a(217),g=a(219),w=a(22),O=a.n(w),j={arrows:!1,dots:{className:"AntDCarouselDots"},infinite:!0,speed:600,slidesToShow:6,slidesToScroll:6,initialSlide:0,draggable:!0,responsive:[{breakpoint:2160,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:1800,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:1430,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1100,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:715,settings:{slidesToShow:1,slidesToScroll:1}}]},T=function(){var e=Object(c.useRef)();var t=Object(c.useState)([]),a=Object(n.a)(t,2),l=a[0],i=a[1];Object(c.useEffect)((function(){o()}),[]);var o=function(){var e=Object(N.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,O.a.get("api/search/prophets").then((function(e){if("success"===e.data.status){t=e.data.result;for(var a=0;a<2;a++)t=t.concat(t);i(t)}else console.log(e.data.err)})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"TopProphets"},r.a.createElement("div",{className:"TitleAndButtons"},r.a.createElement("h2",null,"Top Prophets"),r.a.createElement("div",{className:"TitleButtons"},r.a.createElement(g.a,{onClick:function(){e.current.prev()},variant:"outlined"},r.a.createElement(u.a,{color:"white",size:"1.8em"})),r.a.createElement(g.a,{onClick:function(){e.current.next()},variant:"outlined"},r.a.createElement(u.b,{color:"white",size:"1.8em"})),r.a.createElement(s.b,{to:"/prophets"},r.a.createElement(g.a,{variant:"outlined"},"SHOW ALL")))),r.a.createElement("div",{className:"ProphetsList"},r.a.createElement(S.a,Object.assign({ref:e},j),l.map((function(e,t){return r.a.createElement("div",{key:t,className:"ProphetCardContainer"},r.a.createElement(b,{data:e}))})))))};a(196),a(197);var P=function(e){var t=e.data;return r.a.createElement(s.b,{className:"PredictionCard",to:"/predictionDetail/".concat(t.prediction_id)},r.a.createElement("img",{src:t.image,alt:"PredictionImg"}),r.a.createElement("div",{className:"NotImg"},r.a.createElement("div",{className:"Text"},r.a.createElement("p",{className:"Status"},"Status: ",t.status),r.a.createElement("p",{className:"Title"},t.title),r.a.createElement("p",{className:"Description"},t.description)),r.a.createElement("div",{className:"Ratings"},r.a.createElement("div",{className:"NumberSection"},r.a.createElement("p",{className:"LargeNumber"},t.score),r.a.createElement("p",{className:"RatingText"},"Prediction Score")),r.a.createElement("hr",null),r.a.createElement("div",{className:"NumberSection"},r.a.createElement("p",{className:"LargeNumber"},t.num_review),r.a.createElement("p",{className:"RatingText"},"Reviews")))))},k=a(218),C=function(e){var t=Object(c.useState)([]),a=Object(n.a)(t,2),l=a[0],i=a[1],o=Object(c.useState)(!1),u=Object(n.a)(o,2),m=u[0],d=u[1];Object(c.useEffect)((function(){E()}),[]);var E=function(){var e=Object(N.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,O.a.get("api/search/predictions").then((function(e){if("success"===e.data.status){t=e.data.result;for(var a=0;a<2;a++)t=t.concat(t);i(t)}else console.log(e.data.err)})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){d(!0);var e=l.concat(l);setTimeout((function(){i(e),d(!1)}),1e3)};return r.a.createElement("div",{className:"TopPredictions"},r.a.createElement("div",{className:"TitleAndButtons"},r.a.createElement("h2",null,"Top Predictions"),r.a.createElement("div",{className:"TitleButtons"},r.a.createElement(s.b,{to:"/predictions"},r.a.createElement(g.a,{variant:"outlined"},"SHOW ALL")))),r.a.createElement("div",{className:"PredictionsList"},l.map((function(e,t){return r.a.createElement(P,{key:t,data:e})}))),r.a.createElement("div",{className:"TitleButtons"},m?r.a.createElement(k.a,{size:"large"}):r.a.createElement(g.a,{onClick:p,variant:"outlined"},"SHOW MORE")))},x=(a(198),function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(f,null),r.a.createElement(T,null),r.a.createElement(C,null))}),B=(a(199),function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("p",null,"Sorry Page Not Found"))}),y=(a(200),a(98)),D=function(e){var t=Object(c.useState)(!0),a=Object(n.a)(t,2),l=a[0],i=a[1],s=Object(c.useState)([]),u=Object(n.a)(s,2),m=u[0],d=u[1],E=Object(c.useState)([]),p=Object(n.a)(E,2),f=p[0],v=p[1],S=Object(c.useState)(""),w=Object(n.a)(S,2),j=w[0],T=w[1],C=Object(c.useState)(!1),x=Object(n.a)(C,2),B=x[0],D=x[1],I=function(){var e=Object(N.a)(h.a.mark((function e(){var t,a,n=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",a=[],e.next=4,O.a.get("/api/search/prophets?keyWord=".concat(t)).then((function(e){if("success"===e.data.status){a=e.data.result;for(var t=0;t<0;t++)a=a.concat(a);d(a)}else console.log(e.data.err)})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(N.a)(h.a.mark((function e(){var t,a,n=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",a=[],e.next=4,O.a.get("/api/search/predictions?keyWord=".concat(t)).then((function(e){if("success"===e.data.status){a=e.data.result;for(var t=0;t<5;t++)a=a.concat(a);v(a)}else console.log(e.data.err)})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){if(window.scrollTo(0,0),"undefined"!==typeof e.showProphets&&i(e.showProphets),T(""),e.input){var t=e.input;T(t),I(t),L(t)}else I(),L()}),[e.showProphets,e.showPredictions,e.input]);var A=Object(o.f)(),R=function(){D(!0),setTimeout((function(){D(!1)}),1e3)};return r.a.createElement("div",{className:"Search"},r.a.createElement("div",{className:"ResultsAndTools"},r.a.createElement("div",{className:"Results HoverEffect"},r.a.createElement("div",{className:"SearchText"},r.a.createElement("div",{className:"Icon",onClick:function(){A.goBack()}},r.a.createElement(y.a,{size:"3em"})),r.a.createElement("p",null,"Search: ",j||(l?"All Prophets":"All Predictions"))),r.a.createElement("div",{className:"SwitchButtonContainer"},r.a.createElement("div",{className:l?"SwitchButton SwitchButtonActive":"SwitchButton",onClick:function(){i(!0),R()}},r.a.createElement(g.a,null,"Prophets")),r.a.createElement("div",{className:l?"SwitchButton":"SwitchButton SwitchButtonActive",onClick:function(){i(!1),R()}},r.a.createElement(g.a,null,"Predictions"))),r.a.createElement(k.a,{size:"large",spinning:B},B?r.a.createElement("div",null):l?0===Object.keys(m).length?r.a.createElement("div",{className:"Empty"},"No Result Found"):r.a.createElement("div",{className:"SearchProphetCards"},m.map((function(e,t){return r.a.createElement(b,{key:t,data:e})}))):0===Object.keys(f).length?r.a.createElement("div",{className:"Empty"},"No Result Found"):r.a.createElement("div",{className:"SearchPredictionCards"},f.map((function(e,t){return r.a.createElement(P,{key:t,data:e})}))))),r.a.createElement("div",{className:"Tools"},r.a.createElement("div",{className:"Sort HoverEffect"},r.a.createElement("p",{className:"Title"},"Sort")),r.a.createElement("div",{className:"Filter HoverEffect"},r.a.createElement("p",{className:"Title"},"Filter")))))};D.defaultProps={input:""};a(201),a(202);var I=function(e){var t=e.data;return r.a.createElement(s.b,{className:"PredictionStrip",to:"/predictionDetail/".concat(t.prediction_id)},r.a.createElement("div",{className:"Text"},r.a.createElement("p",{className:"Status"},"Status:",t.status),r.a.createElement("p",{className:"Title"},t.title),r.a.createElement("p",{className:"Description"},t.description)),r.a.createElement("div",{className:"Rating"},r.a.createElement("p",{className:"Number"},r.a.createElement("span",null,t.score),"/10"),r.a.createElement("p",null,"Prediction Score")))},L=function(e){var t=e.prophetID,a=Object(c.useState)(),l=Object(n.a)(a,2),i=l[0],s=l[1],o=Object(c.useState)([]),u=Object(n.a)(o,2),m=u[0],d=u[1],E=function(){var e=Object(N.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/search/prophets?prophetID=".concat(t)).then((function(e){"success"===e.data.status?s(e.data.result[0]):console.log(e.data.err)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(N.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/search/predictions?prophetID=".concat(t)).then((function(e){console.log("Prophet Detail Predictions: "),console.log(e.data),"success"===e.data.status?d(e.data.result):console.log(e.data.err)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){window.scrollTo(0,0),E(),p()}),[]),r.a.createElement("div",{className:"Detail"},r.a.createElement("div",{className:"Content"},r.a.createElement("div",{className:"Section"},r.a.createElement("div",{className:"SectionTitleAndButton"},r.a.createElement("h2",null,"Prophet Information")),r.a.createElement(b,{data:i}),r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/".concat(i?i.name:"")},r.a.createElement(g.a,{variant:"outlined"},"More Info"))),r.a.createElement("div",{className:"Section"},r.a.createElement("div",{className:"SectionTitleAndButton"},r.a.createElement("h2",null,"Predictions")),r.a.createElement("div",{className:"PredictionList"},m.map((function(e,t){return r.a.createElement(I,{data:e,key:t})}))),r.a.createElement(g.a,{variant:"outlined"},"SHOW MORE")),r.a.createElement("div",{className:"Section"},r.a.createElement("div",{className:"SectionTitleAndButton"},r.a.createElement("h2",null,"Comments"),r.a.createElement("a",{href:"/"},r.a.createElement(g.a,{variant:"outlined"},"Comment"))),r.a.createElement(g.a,{variant:"outlined"},"SHOW MORE"))))},A=(a(203),function(e){var t=e.predictionID,a=Object(c.useState)(),l=Object(n.a)(a,2),i=l[0],s=l[1],o=function(){var e=Object(N.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/search/predictions?predictionID=".concat(t)).then((function(e){console.log("Prediction Detail: "),console.log(e.data),"success"===e.data.status?s(e.data.result[0]):console.log(e.data.err)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){window.scrollTo(0,0),o()}),[]),r.a.createElement("div",{className:"Detail"},r.a.createElement("div",{className:"Content"},i?r.a.createElement("div",{className:"Section"},r.a.createElement("div",{className:"SectionTitleAndButton"},r.a.createElement("h2",null,"Prediction Information")),r.a.createElement(P,{data:i}),r.a.createElement("div",{className:"Buttons"},r.a.createElement("a",{href:"/prophetDetail/".concat(i.prophet_id)},r.a.createElement(g.a,{variant:"outlined"},"Show Prophet")),r.a.createElement("a",{href:i.article},r.a.createElement(g.a,{variant:"outlined"},"View Article")))):"",r.a.createElement("div",{className:"Section"},r.a.createElement("div",{className:"SectionTitleAndButton"},r.a.createElement("h2",null,"Ratings"),r.a.createElement("a",{href:"/"},r.a.createElement(g.a,{variant:"outlined"},"Rate This Prediction"))),r.a.createElement(g.a,{variant:"outlined"},"SHOW MORE"))))});function R(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],l=t[1],i=Object(c.useState)(""),u=Object(n.a)(i,2),m=u[0],d=u[1];return Object(c.useEffect)((function(){O.a.get("/api/test").then((function(e){d(e.data.result[0].img)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(E,{setShowLoading:l}),r.a.createElement(k.a,{size:"large",spinning:a},a?r.a.createElement("div",{className:"LoadingBG"}):r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/prophetDetail/:id",render:function(e){return r.a.createElement(L,{prophetID:e.match.params.id})}}),r.a.createElement(o.a,{path:"/predictionDetail/:id",render:function(e){return r.a.createElement(A,{predictionID:e.match.params.id})}}),r.a.createElement(o.a,{path:"/prophets",exact:!0,render:function(){return r.a.createElement(D,{showProphets:!0})}}),r.a.createElement(o.a,{path:"/predictions",exact:!0,render:function(){return r.a.createElement(D,{showProphets:!1})}}),r.a.createElement(o.a,{path:"/search/:input",render:function(e){return r.a.createElement(D,{input:e.match.params.input})}}),r.a.createElement(o.a,{path:"/search/",render:function(e){return r.a.createElement(D,{showProphets:!0})}}),r.a.createElement(o.a,{path:"/test",render:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:m,alt:"testImg"}))}}),r.a.createElement(o.a,{path:"/",exact:!0,component:x}),r.a.createElement(o.a,{path:"/",component:B})))))}i.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.5120f118.chunk.js.map