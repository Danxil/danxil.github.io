(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"74dF":function(e,t,n){},"f+Xw":function(e,t,n){function r(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),e.exports={averageGeolocation:function(e){if(1===e.length)return e[0];for(var t,n=0,i=0,o=0,a=r(e);!(t=a()).done;){var c=t.value,l=c.latitude*Math.PI/180,s=c.longitude*Math.PI/180;n+=Math.cos(l)*Math.cos(s),i+=Math.cos(l)*Math.sin(s),o+=Math.sin(l)}var u=e.length;n/=u,i/=u,o/=u;var p=Math.atan2(i,n),f=Math.sqrt(n*n+i*i);return{latitude:180*Math.atan2(o,f)/Math.PI,longitude:180*p/Math.PI}}}},mO0R:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return se}));n("a1Th"),n("Btvt"),n("XfO3"),n("HEwt"),n("rGqo"),n("rE2o"),n("ioFf"),n("SchZ"),n("74dF"),n("vAZS"),n("04bd"),n("YQTV"),n("4t1q"),n("8+KV"),n("bWfx"),n("KKXr"),n("yt8O"),n("V+eJ"),n("I5cv"),n("/SS/"),n("hHhE"),n("HAE/"),n("91GP"),n("LK8F"),n("f3/d"),n("h7Nl");var r=n("q1tI"),i=n.n(r),o=n("17x9"),a=n("TSYQ"),c=n.n(a),l=n("BGR+"),s=n("W9HT"),u=n("H84U"),p=n("NUBc"),f=n("qrJ5"),b=n("/kpp");function d(e){if(!r.isValidElement(e))return e;for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return r.cloneElement.apply(r,[e].concat(n))}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function S(e,t){return e[t]&&Math.floor(24/e[t])}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(l,e);var t,n,i,o,a=(t=l,function(){var e,n=j(t);if(x()){var r=j(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return O(this,e)});function l(){var e;return g(this,l),(e=a.apply(this,arguments)).renderItem=function(t){var n=t.getPrefixCls,i=e.context,o=i.grid,a=i.itemLayout,l=e.props,s=l.prefixCls,u=l.children,p=l.actions,f=l.extra,m=l.className,g=k(l,["prefixCls","children","actions","extra","className"]),h=n("list",s),v=p&&p.length>0&&r.createElement("ul",{className:"".concat(h,"-item-action"),key:"actions"},p.map((function(e,t){return r.createElement("li",{key:"".concat(h,"-item-action-").concat(t)},e,t!==p.length-1&&r.createElement("em",{className:"".concat(h,"-item-action-split")}))}))),O=o?"div":"li",x=r.createElement(O,w({},g,{className:c()("".concat(h,"-item"),m,y({},"".concat(h,"-item-no-flex"),!e.isFlexMode()))}),"vertical"===a&&f?[r.createElement("div",{className:"".concat(h,"-item-main"),key:"content"},u,v),r.createElement("div",{className:"".concat(h,"-item-extra"),key:"extra"},f)]:[u,v,d(f,{key:"extra"})]);return o?r.createElement(b.a,{span:S(o,"column"),xs:S(o,"xs"),sm:S(o,"sm"),md:S(o,"md"),lg:S(o,"lg"),xl:S(o,"xl"),xxl:S(o,"xxl")},x):x},e}return n=l,(i=[{key:"isItemContainsTextNodeAndNotSingular",value:function(){var e,t=this.props.children;return r.Children.forEach(t,(function(t){"string"==typeof t&&(e=!0)})),e&&r.Children.count(t)>1}},{key:"isFlexMode",value:function(){var e=this.props.extra;return"vertical"===this.context.itemLayout?!!e:!this.isItemContainsTextNodeAndNotSingular()}},{key:"render",value:function(){return r.createElement(u.a,null,this.renderItem)}}])&&h(n.prototype,i),o&&h(n,o),l}(r.Component);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}C.Meta=function(e){return r.createElement(u.a,null,(function(t){var n=t.getPrefixCls,i=e.prefixCls,o=e.className,a=e.avatar,l=e.title,s=e.description,u=k(e,["prefixCls","className","avatar","title","description"]),p=n("list",i),f=c()("".concat(p,"-item-meta"),o),b=r.createElement("div",{className:"".concat(p,"-item-meta-content")},l&&r.createElement("h4",{className:"".concat(p,"-item-meta-title")},l),s&&r.createElement("div",{className:"".concat(p,"-item-meta-description")},s));return r.createElement("div",w({},u,{className:f}),a&&r.createElement("div",{className:"".concat(p,"-item-meta-avatar")},a),(l||s)&&b)}))},C.contextTypes={grid:o.any,itemLayout:o.string};var R=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(b,e);var t,n,i,o,a=(t=b,function(){var e,n=L(t);if(B()){var r=L(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return A(this,e)});function b(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(t=a.call(this,e)).defaultPaginationProps={current:1,total:0},t.keys={},t.onPaginationChange=t.triggerPaginationEvent("onChange"),t.onPaginationShowSizeChange=t.triggerPaginationEvent("onShowSizeChange"),t.renderItem=function(e,n){var r,i=t.props,o=i.renderItem,a=i.rowKey;return o?((r="function"==typeof a?a(e):"string"==typeof a?e[a]:e.key)||(r="list-item-".concat(n)),t.keys[n]=r,o(e,n)):null},t.renderEmpty=function(e,n){var i=t.props.locale;return r.createElement("div",{className:"".concat(e,"-empty-text")},i&&i.emptyText||n("List"))},t.renderList=function(e){var n,i=e.getPrefixCls,o=e.renderEmpty,a=t.state,u=a.paginationCurrent,b=a.paginationSize,d=t.props,m=d.prefixCls,y=d.bordered,g=d.split,h=d.className,v=d.children,O=d.itemLayout,x=d.loadMore,j=d.pagination,w=d.grid,k=d.dataSource,S=void 0===k?[]:k,C=d.size,E=d.header,z=d.footer,M=d.loading,N=R(d,["prefixCls","bordered","split","className","children","itemLayout","loadMore","pagination","grid","dataSource","size","header","footer","loading"]),A=i("list",m),B=M;"boolean"==typeof B&&(B={spinning:B});var L=B&&B.spinning,_="";switch(C){case"large":_="lg";break;case"small":_="sm"}var W=c()(A,h,(I(n={},"".concat(A,"-vertical"),"vertical"===O),I(n,"".concat(A,"-").concat(_),_),I(n,"".concat(A,"-split"),g),I(n,"".concat(A,"-bordered"),y),I(n,"".concat(A,"-loading"),L),I(n,"".concat(A,"-grid"),w),I(n,"".concat(A,"-something-after-last-item"),t.isSomethingAfterLastItem()),n)),D=T(T(T({},t.defaultPaginationProps),{total:S.length,current:u,pageSize:b}),j||{}),F=Math.ceil(D.total/D.pageSize);D.current>F&&(D.current=F);var q,H=j?r.createElement("div",{className:"".concat(A,"-pagination")},r.createElement(p.a,T({},D,{onChange:t.onPaginationChange,onShowSizeChange:t.onPaginationShowSizeChange}))):null,U=P(S);if(j&&S.length>(D.current-1)*D.pageSize&&(U=P(S).splice((D.current-1)*D.pageSize,D.pageSize)),q=L&&r.createElement("div",{style:{minHeight:53}}),U.length>0){var K=U.map((function(e,n){return t.renderItem(e,n)})),V=[];r.Children.forEach(K,(function(e,n){V.push(r.cloneElement(e,{key:t.keys[n]}))})),q=w?r.createElement(f.a,{gutter:w.gutter},V):r.createElement("ul",{className:"".concat(A,"-items")},V)}else v||L||(q=t.renderEmpty(A,o));var Y=D.position||"bottom";return r.createElement("div",T({className:W},Object(l.a)(N,["rowKey","renderItem","locale"])),("top"===Y||"both"===Y)&&H,E&&r.createElement("div",{className:"".concat(A,"-header")},E),r.createElement(s.a,B,q,v),z&&r.createElement("div",{className:"".concat(A,"-footer")},z),x||("bottom"===Y||"both"===Y)&&H)};var n=e.pagination,i=n&&"object"===E(n)?n:{};return t.state={paginationCurrent:i.defaultCurrent||1,paginationSize:i.defaultPageSize||10},t}return n=b,(i=[{key:"getChildContext",value:function(){return{grid:this.props.grid,itemLayout:this.props.itemLayout}}},{key:"triggerPaginationEvent",value:function(e){var t=this;return function(n,r){var i=t.props.pagination;t.setState({paginationCurrent:n,paginationSize:r}),i&&i[e]&&i[e](n,r)}}},{key:"isSomethingAfterLastItem",value:function(){var e=this.props,t=e.loadMore,n=e.pagination,r=e.footer;return!!(t||n||r)}},{key:"render",value:function(){return r.createElement(u.a,null,this.renderList)}}])&&M(n.prototype,i),o&&M(n,o),b}(r.Component);_.Item=C,_.childContextTypes={grid:o.any,itemLayout:o.string},_.defaultProps={dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1};n("tUrg"),n("L/Qf");var W=n("2/Rp"),D=n("iYmT"),F=(n("Vd3H"),n("wd/R")),q=n.n(F),H=n("r1Ps"),U=n("qnQ4"),K=n("k0TJ"),V=n("qKvR"),Y=n("Ntaw"),G=n("taqx"),J={container:{flexDirection:"column",display:"flex"},map:{position:"absolute",left:0,right:0,top:0},header:{position:"relative",zIndex:2e5,width:"100%",display:"flex",justifyContent:"center"},title:Object(V.a)("display:inline-block;z-index:200000;margin-top:280px;font-size:50px;text-transform:capitalize;text-align:center;color:black;font-weight:bold;@media(max-width:",G.a,"px){font-size:25px;padding:0 10px;padding-bottom:40px;line-height:30px;}"),titleText:Object(V.a)("max-width:",1200,";display:inline-block;"),mapOverlay:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"black",zIndex:1e5,opacity:.2},content:Object(V.a)("position:relative;max-width:",1200,"px;display:flex;width:100%;margin:100px auto 0;flex-direction:row-reverse;@media(max-width:",G.a,"px){flex-direction:column;margin-top:30px;}"),contentSide:Object(V.a)("flex-direction:column;display:flex;width:50%;@media(max-width:",G.a,"px){width:100%;}"),rankBlock:Object(V.a)("text-align:right;@media(max-width:",G.a,"px){flex-direction:column;}"),servicesBlock:Object(V.a)("@media(max-width:",G.a,"px){padding:0 20px;}"),rankLabel:{fontSize:"16px"},rankValue:{marginTop:10,fontSize:"20px",display:"block"},listWrapper:Object(V.a)(),rankListWrapper:Object(V.a)("max-width:500px;align-self:flex-end;width:100%;@media(max-width:",G.a,"px){align-self:inherit;}"),listItemWithoutBorder:{border:"none",margin:0},listWithoutBorder:{name:"uewl2b",styles:"margin-bottom:20px;"},addressBlock:{name:"10ib5jr",styles:"margin-bottom:40px;"},specialtiesBlock:{marginTop:20},ourRatingTitleStyle:Object(V.a)("font-size:25px;vertical-align:-3px;@media(max-width:",G.a,"px){font-size:13px;}"),ourRatingValueStyle:Object(V.a)("font-size:25px;font-weight:bold;@media(max-width:",G.a,"px){font-size:18px;}"),textUnderTable:Object(V.a)("font-weight:bold;align-self:flex-end;color:",Y.f,";"),dangerText:Object(V.a)("color:",Y.g,";"),goBack:Object(V.a)("margin-bottom:50px;display:inline-block;position:absolute;top:-70px;left:0;@media(max-width:",G.a,"px){top:-50px;display:inline-block;width:100%;text-align:center;}"),ratingValue:Object(V.a)("font-size:15px;@media(max-width:",G.a,"px){font-size:13px;}"),itemTitle:{name:"l8qto0",styles:"font-size:15px;"},stat:Object(V.a)("background-color:",Y.c),contactBtn:Object(V.a)("margin-bottom:50px;@media(max-width:",G.a,"px){padding-left:20px;padding-right:20px;}"),reviewsBlock:{name:"vkr6pv",styles:"margin-top:20px;background:rgb(251,251,251);padding:20px;"},review:{name:"1xaekgw",styles:"margin-top:20px;"},reviewDate:{name:"1qxtz39",styles:"font-size:12px;"},reviewComment:{name:"1qxtz39",styles:"font-size:12px;"}},Q=n("UuBj"),X=n("FxeM"),Z=(n("Z2Ku"),n("L9s1"),{sideLink:{name:"14t8z93",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:left;margin-top:5px;font-size:12px;text-align:right;"},sideLinksWrapper:Object(V.a)(),sideLinkWrapper:{name:"1958zak",styles:"justify-content:flex-end;display:flex;"},label:{name:"1xnpkum",styles:"font-size:15px;margin-bottom:10px;"}}),$=i.a.memo((function(e){var t=e.sideForumsMentions,n=e.website,o=Object(r.useMemo)((function(){return t.filter((function(e){return!e.link.includes(n)}))}),[t]);return Object(V.b)(i.a.Fragment,null,o.length?Object(V.b)(i.a.Fragment,null,Object(V.b)("h2",{css:Z.label},"Упоминания на форумах сторонних ресурсах:"),Object(V.b)("div",{css:Z.sideLinksWrapper},o.map((function(e){var t=e.link;return Object(V.b)("div",{css:Z.sideLink,key:t},Object(V.b)("a",{target:"_blank",href:t},t))})))):null)})),ee=n("f+Xw"),te=n("q8pK"),ne=n("vrFN"),re=n("lhDj"),ie=n.n(re),oe=n("6mdO"),ae=n("Szxv");function ce(e){return function(e){if(Array.isArray(e))return le(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return le(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=i.a.memo((function(e){var t=e.data.services.service,n=t.name,i=t.sideServicesRank,o=t.fakeReviews,a=t.feedbackWithClientsDirection,c=t.solveCustomerClaimsPercentage,l=t.forumReviewsDirection,s=t.points,u=t.website,p=t.incomplete,f=t.specialties,b=t.pagePath,d=t.rank,m=t.sideForumsMentions,y=t.blackListMarker,g=Object(ae.a)({services:[t]}),h=g.onContactServiceCancel,v=g.onContactServicePress,O=g.contactService,x=Object(r.useMemo)((function(){var e=Object(ee.averageGeolocation)(s.filter((function(e){return e.coordinates})).map((function(e){var t=e.coordinates;return{latitude:t[0],longitude:t[1]}})));return[e.latitude,e.longitude]}),[s]),j=Object(r.useMemo)((function(){return s.filter((function(e){return e.coordinates}))}),[s]),w=Object(r.useCallback)((function(){v({pagePath:b})}),[v]),k=i.reduce((function(e,t){return e+t.reviewsAmount}),0),S=Object(r.useMemo)((function(){return i.reduce((function(e,t){var n=t.reviews;return[].concat(ce(e),ce(n))}),[]).filter((function(e){return e.comment})).sort((function(e,t){return e.date>t.date?-1:1}))}),[i]);return Object(V.b)("div",{style:J.container},Object(V.b)(ne.a,{title:k+" "+ie()(k,"отзыв","отзыва","отзывов")+' об СТО "'+n+'"',description:"Киевский автосервис: "+n+". "+j.map((function(e){return e.address})).join(". ")}),Object(V.b)("h1",{css:J.title},Object(V.b)("div",{css:Object(D.a)([J.titleText,J.dangerText])},n)),Object(V.b)("div",{css:J.content},Object(V.b)("div",{css:Object(D.a)([J.contentSide,J.rankBlock])},Object(V.b)("div",{css:Object(D.a)([J.listWrapper,J.rankListWrapper]),className:"service-stat"},y?Object(V.b)("p",{css:Object(D.a)([J.textUnderTable,J.dangerText]),dangerouslySetInnerHTML:{__html:y.description}}):null,p&&!y?Object(V.b)("p",{css:J.textUnderTable},"По данному автосервису нет достаточно информации для точной оценки!"):null,Object(V.b)(te.a,{fakeReviews:o,feedbackWithClientsDirection:a,solveCustomerClaimsPercentage:c,forumReviewsDirection:l,sideServicesRank:i,incomplete:p,rowColor:Y.e,rank:d}),Object(V.b)("div",{css:J.contactBtn},Object(V.b)(W.a,{onClick:w,block:!0,ghost:!0,type:"primary"},"Записаться на СТО")),Object(V.b)($,{sideForumsMentions:m,website:u}),S.length?Object(V.b)("section",{css:Object(D.a)([J.addressBlock,J.reviewsBlock])},Object(V.b)("h2",{css:J.itemTitle},"Последние отзывы:"),S.map((function(e){var t=e.comment,n=e.date;e.link;return Object(V.b)("div",{css:J.review},Object(V.b)("div",{css:J.reviewDate},q()(n).format("DD.MM.YYYY")),Object(V.b)("div",{css:J.reviewComment},t))}))):null)),Object(V.b)("div",{css:Object(D.a)([J.contentSide,J.servicesBlock])},Object(V.b)("div",null,Object(V.b)("a",{css:J.goBack,href:"/"},Object(V.b)("b",null,"К списку СТО"))),Object(V.b)("section",{css:J.addressBlock},Object(V.b)("h2",{css:J.itemTitle},"Вебсайт:"),Object(V.b)("div",null,Object(V.b)("a",{href:"http://"+u,rel:"noopener noreferrer",target:"_blank"},u))),j.map((function(e){var t=e.address,n=e.phones,r=e.workingHours;return Object(V.b)("div",{key:t},Object(V.b)("section",{css:J.addressBlock},Object(V.b)("h2",{css:J.itemTitle},"Адрес:"),Object(V.b)("div",null,t)),Object(V.b)("section",{css:J.addressBlock},Object(V.b)("h2",{css:J.itemTitle},"Телефоны для связи:"),Object(V.b)("div",null,n.map((function(e){return Object(V.b)("div",{key:e},e)})))),r.length?Object(V.b)("section",{css:J.addressBlock},Object(V.b)("h2",{css:J.itemTitle},"Время работы:"),Object(V.b)("div",null,Object(V.b)("div",{css:Object(D.a)([J.listWrapper,J.listWithoutBorder])},Object(V.b)(_,{dataSource:r,renderItem:function(e){var t=e.day,n=e.time;return Object(V.b)(_.Item,{style:J.listItemWithoutBorder},Object(Q.a)(t),": ",Object(V.b)("b",null,n.map((function(e){var t=e.from,n=e.to;return Object(V.b)("span",{key:""+t+n},t," - ",n)}))))}})))):null,Object(V.b)("hr",null))})),Object(V.b)("div",{style:J.specialtiesBlock},Object(V.b)("section",null,Object(V.b)("h2",{css:J.itemTitle},"Выполняемые виды работ:"),Object(V.b)("div",{css:J.listWrapper},Object(V.b)(_,{dataSource:f,renderItem:function(e){return Object(V.b)(_.Item,null,e)}})))))),Object(V.b)("div",{style:J.map},"undefined"!=typeof window?Object(V.b)(H.a,{center:x,zoom:1===s.length?15:10,style:{height:250}},Object(V.b)(U.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),s.filter((function(e){return e.coordinates})).map((function(e){var t=e.address,r=e.coordinates;return Object(V.b)("div",{key:t},Object(V.b)(X.a,{isOpen:!0,position:r},Object(V.b)(K.a,null,n," ",Object(V.b)("br",null)," ",t)))}))):null),Object(V.b)(oe.a,{selectedServiceName:O?O.name:void 0,onCancel:h}))}));var se="483364753"}}]);
//# sourceMappingURL=component---src-templates-service-index-js-94054316ad3145dd6b33.js.map