(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"f+Xw":function(e,t,i){function n(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a(e,t)}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}i("rGqo"),i("rE2o"),i("ioFf"),i("XfO3"),i("HEwt"),i("f3/d"),i("a1Th"),i("Btvt"),e.exports={averageGeolocation:function(e){if(1===e.length)return e[0];for(var t,i=0,a=0,r=0,o=n(e);!(t=o()).done;){var c=t.value,l=c.latitude*Math.PI/180,s=c.longitude*Math.PI/180;i+=Math.cos(l)*Math.cos(s),a+=Math.cos(l)*Math.sin(s),r+=Math.sin(l)}var b=e.length;i/=b,a/=b,r/=b;var d=Math.atan2(a,i),p=Math.sqrt(i*i+a*a);return{latitude:180*Math.atan2(r,p)/Math.PI,longitude:180*d/Math.PI}}}},mO0R:function(e,t,i){"use strict";i.r(t),i.d(t,"pageQuery",(function(){return w}));i("LXko");var n=i("VXEj"),a=(i("L/Qf"),i("2/Rp")),r=i("iYmT"),o=(i("f3/d"),i("q1tI")),c=i.n(o),l=i("r1Ps"),s=i("qnQ4"),b=i("k0TJ"),d=i("qKvR"),p=i("Ntaw"),u=i("taqx"),m={container:{flexDirection:"column",display:"flex"},map:{position:"absolute",left:0,right:0,top:0},header:{position:"relative",zIndex:2e5,width:"100%",display:"flex",justifyContent:"center"},title:Object(d.a)("display:inline-block;z-index:200000;margin-top:280px;font-size:50px;text-transform:capitalize;text-align:center;color:black;font-weight:bold;@media(max-width:",u.a,"px){font-size:25px;padding:0 10px;padding-bottom:40px;line-height:30px;}"),titleText:{maxWidth:1200,display:"inline-block"},mapOverlay:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"black",zIndex:1e5,opacity:.2},content:Object(d.a)("position:relative;max-width:",1200,"px;display:flex;width:100%;margin:100px auto 0;flex-direction:row-reverse;@media(max-width:",u.a,"px){flex-direction:column;margin-top:30px;}"),contentSide:Object(d.a)("flex-direction:column;display:flex;width:50%;@media(max-width:",u.a,"px){width:100%;}"),rankBlock:Object(d.a)("text-align:right;@media(max-width:",u.a,"px){flex-direction:column;}"),servicesBlock:Object(d.a)("@media(max-width:",u.a,"px){padding:0 20px;}"),rankLabel:{fontSize:"16px"},rankValue:{marginTop:10,fontSize:"20px",display:"block"},listWrapper:{name:"j7qwjs",styles:"display:flex;flex-direction:column;"},rankListWrapper:Object(d.a)("align-self:flex-end;@media(max-width:",u.a,"px){align-self:inherit;}"),listItemWithoutBorder:{border:"none",margin:0},listWithoutBorder:{name:"1186udl",styles:"margin-bottom:20;"},addressBlock:{marginBottom:40},specialtiesBlock:{marginTop:20},ourRatingTitleStyle:Object(d.a)("font-size:25px;vertical-align:-3px;@media(max-width:",u.a,"px){font-size:13px;}"),ourRatingValueStyle:Object(d.a)("font-size:25px;font-weight:bold;@media(max-width:",u.a,"px){font-size:18px;}"),textUnderTable:{fontWeight:"bold",maxWidth:300,alignSelf:"flex-end",color:p.f},goBack:Object(d.a)("margin-bottom:50px;display:inline-block;position:absolute;top:-70px;left:0;@media(max-width:",u.a,"px){top:-50px;display:inline-block;width:100%;text-align:center;}"),ratingValue:Object(d.a)("font-size:15px;@media(max-width:",u.a,"px){font-size:13px;}"),itemTitle:{name:"l8qto0",styles:"font-size:15px;"},stat:Object(d.a)("background-color:",p.c)},f=i("UuBj"),j=i("FxeM"),h=i("f+Xw"),O=i("q8pK"),x=i("vrFN"),v=i("lhDj"),g=i.n(v),y=i("6mdO"),k=i("Szxv"),w=(t.default=c.a.memo((function(e){var t=e.data.services.service,i=t.name,c=t.sideServicesRank,u=t.fakeReviews,v=t.feedbackWithClientsDirection,w=t.solveCustomerClaimsPercentage,S=t.forumReviewsDirection,B=t.points,z=t.website,M=t.incomplete,T=t.specialties,C=t.pagePath,I=Object(k.a)({services:[t]}),W=I.onContactServiceCancel,R=I.onContactServicePress,P=I.contactService,q=Object(o.useMemo)((function(){var e=Object(h.averageGeolocation)(B.filter((function(e){return e.coordinates})).map((function(e){var t=e.coordinates;return{latitude:t[0],longitude:t[1]}})));return[e.latitude,e.longitude]}),[B]),A=Object(o.useMemo)((function(){return B.filter((function(e){return e.coordinates}))}),[B]),D=Object(o.useCallback)((function(){R({pagePath:C})}),[R]),L=c.reduce((function(e,t){return e+t.reviewsAmount}),0);return Object(d.b)("div",{style:m.container},Object(d.b)(x.a,{title:L+" "+g()(L,"отзыв","отзыва","отзывов")+' об СТО "'+i+'"',description:"Киевский автосервис: "+i+". "+A.map((function(e){return e.address})).join(". ")}),Object(d.b)("h1",{css:m.title},Object(d.b)("div",{style:m.titleText},i)),Object(d.b)("div",{css:m.content},Object(d.b)("div",{css:Object(r.a)([m.contentSide,m.rankBlock])},Object(d.b)("div",{css:Object(r.a)([m.listWrapper,m.rankListWrapper])},M?Object(d.b)("p",{style:m.textUnderTable},"По данному автосервису нет достаточно информации для точной оценки!"):null,Object(d.b)(O.a,{fakeReviews:u,feedbackWithClientsDirection:v,solveCustomerClaimsPercentage:w,forumReviewsDirection:S,sideServicesRank:c,incomplete:M,rowColor:p.e}),Object(d.b)(a.a,{css:m.contactBtn,onClick:D,block:!0,ghost:!0,type:"primary"},"Записаться на СТО"))),Object(d.b)("div",{css:Object(r.a)([m.contentSide,m.servicesBlock])},Object(d.b)("div",null,Object(d.b)("a",{css:m.goBack,href:"/"},Object(d.b)("b",null,"К списку СТО"))),Object(d.b)("section",{style:m.addressBlock},Object(d.b)("h2",{css:m.itemTitle},"Вебсайт:"),Object(d.b)("div",null,Object(d.b)("a",{href:z,rel:"noopener noreferrer",target:"_blank"},z))),A.map((function(e){var t=e.address,i=e.phones,a=e.workingHours;return Object(d.b)("div",{key:t},Object(d.b)("section",{style:m.addressBlock},Object(d.b)("h2",{css:m.itemTitle},"Адрес:"),Object(d.b)("div",null,t)),Object(d.b)("section",{style:m.addressBlock},Object(d.b)("h2",{css:m.itemTitle},"Телефоны для связи:"),Object(d.b)("div",null,i.map((function(e){return Object(d.b)("div",{key:e},e)})))),a.length?Object(d.b)("section",{style:m.addressBlock},Object(d.b)("h2",{css:m.itemTitle},"Время работы:"),Object(d.b)("div",null,Object(d.b)("div",{css:Object(r.a)([m.listWrapper,m.listWithoutBorder])},Object(d.b)(n.a,{dataSource:a,renderItem:function(e){var t=e.day,i=e.time;return Object(d.b)(n.a.Item,{style:m.listItemWithoutBorder},Object(f.a)(t),": ",Object(d.b)("b",null,i.map((function(e){var t=e.from,i=e.to;return Object(d.b)("span",{key:""+t+i},t," - ",i)}))))}})))):null,Object(d.b)("hr",null))})),Object(d.b)("div",{style:m.specialtiesBlock},Object(d.b)("section",null,Object(d.b)("h2",{css:m.itemTitle},"Выполняемые виды работ:"),Object(d.b)("div",{css:m.listWrapper},Object(d.b)(n.a,{dataSource:T,renderItem:function(e){return Object(d.b)(n.a.Item,null,e)}})))))),Object(d.b)("div",{style:m.map},"undefined"!=typeof window?Object(d.b)(l.a,{center:q,zoom:1===B.length?15:10,style:{height:250}},Object(d.b)(s.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),B.filter((function(e){return e.coordinates})).map((function(e){var t=e.address,n=e.coordinates;return Object(d.b)("div",{key:t},Object(d.b)(j.a,{isOpen:!0,position:n},Object(d.b)(b.a,null,i," ",Object(d.b)("br",null)," ",t)))}))):null),Object(d.b)(y.a,{selectedServiceName:P?P.name:void 0,onCancel:W}))})),"1421425468")}}]);
//# sourceMappingURL=component---src-templates-service-index-js-b1846d91151559ac9c9d.js.map