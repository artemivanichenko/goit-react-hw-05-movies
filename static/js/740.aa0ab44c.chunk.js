"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[740],{377:function(e,n,t){t.d(n,{CL:function(){return o},E3:function(){return l},Mc:function(){return i},Tg:function(){return u},wH:function(){return s}});var c=t(243),r="https://api.themoviedb.org/3/",a="36c5240e9c1d76f3ef284d0cb20db05d",u=function(){return c.Z.get("".concat(r,"trending/all/day?api_key=").concat(a,"&language=en-US"))},i=function(e){return c.Z.get("\n".concat(r,"movie/").concat(e,"?api_key=").concat(a,"&language=en-US"))},o=function(e){return c.Z.get("".concat(r,"movie/").concat(e,"/credits?api_key=").concat(a,"&language=en-US"))},s=function(e){return c.Z.get("".concat(r,"movie/").concat(e,"/reviews?api_key=").concat(a,"&language=en-US"))},l=function(e){return c.Z.get("\n".concat(r,"search/movie?query=").concat(e,"&api_key=").concat(a,"&language=en-US"))}},740:function(e,n,t){t.r(n);var c=t(861),r=t(439),a=t(757),u=t.n(a),i=t(377),o=t(791),s=t(87),l=t(689),f=t(184);n.default=function(){var e=(0,o.useState)([]),n=(0,r.Z)(e,2),t=n[0],a=n[1],g=(0,s.useSearchParams)(),h=(0,r.Z)(g,2),p=h[0],d=h[1],m=(0,o.useState)(!0),v=(0,r.Z)(m,2),y=v[0],_=v[1],k=p.get("searchQuery"),x=(0,l.TH)();(0,o.useEffect)((function(){function e(){return(e=(0,c.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.E3)(k);case 3:n=e.sent,a(n.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}k&&function(){e.apply(this,arguments)}()}),[k]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d({searchQuery:e.target.elements.searchQuery.value}),e.target.reset(),_(!y)},children:[(0,f.jsx)("input",{type:"text",name:"searchQuery",onChange:function(e){var n=e.target.value.trim();_(!n)}}),(0,f.jsx)("button",{type:"submit",disabled:y,children:"Search"})]}),t.length?(0,f.jsx)("ul",{children:t.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(s.Link,{to:"".concat(e.id),state:{from:x},children:e.title})},e.id)}))}):(0,f.jsx)("p",{children:"Enter movie name "})]})}}}]);
//# sourceMappingURL=740.aa0ab44c.chunk.js.map