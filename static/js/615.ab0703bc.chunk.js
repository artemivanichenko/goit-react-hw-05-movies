"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[615],{377:function(n,t,e){e.d(t,{CL:function(){return s},E3:function(){return p},Mc:function(){return a},Tg:function(){return c},wH:function(){return u}});var r=e(243),i="https://api.themoviedb.org/3/",o="36c5240e9c1d76f3ef284d0cb20db05d",c=function(){return r.Z.get("".concat(i,"trending/all/day?api_key=").concat(o,"&language=en-US"))},a=function(n){return r.Z.get("\n".concat(i,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US"))},s=function(n){return r.Z.get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"))},u=function(n){return r.Z.get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US"))},p=function(n){return r.Z.get("\n".concat(i,"search/movie?query=").concat(n,"&api_key=").concat(o,"&language=en-US"))}},615:function(n,t,e){e.r(t);var r,i,o,c,a,s,u=e(168),p=e(861),f=e(439),l=e(757),g=e.n(l),d=e(377),h=e(791),x=e(444),m=e(689),b=e(87),v=e(184);t.default=function(){var n=(0,m.TH)(),t=(0,h.useState)([]),e=(0,f.Z)(t,2),r=e[0],i=e[1];return(0,h.useEffect)((function(){function n(){return(n=(0,p.Z)(g().mark((function n(){var t;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.Tg)();case 3:t=n.sent,i(t.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,v.jsxs)(w,{children:[(0,v.jsx)(Z,{children:"Trending Movies"}),(0,v.jsx)(_,{children:r&&r.map((function(t){return(0,v.jsxs)(k,{to:"/movies/".concat(t.id),id:t.id,state:{from:n},children:[(0,v.jsx)(y,{src:"https://image.tmdb.org/t/p/w500".concat(t.backdrop_path),alt:t.original_title}),(0,v.jsx)(j,{children:t.original_title})]},t.id)}))})]})};var Z=x.ZP.h1(r||(r=(0,u.Z)(["\n  font-size: 22px;\n  text-align: center;\n"]))),w=x.ZP.div(i||(i=(0,u.Z)(["\n  max-width: 1200px;\n  margin: 20px auto;\n"]))),_=x.ZP.div(o||(o=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  flex-wrap: wrap;\n  list-style: none;\n"]))),k=(0,x.ZP)(b.Link)(c||(c=(0,u.Z)(["\n  width: 260px;\n  height: 180px;\n  border-radius: 4px;\n  overflow: hidden;\n  backdrop-filter: blur(2px);\n\n  transition: transform 250ms cubic-bezier(0.1, 0, 0.1, 1),\n    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: rgb(239, 236, 236);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: pointer;\n  }\n"]))),y=x.ZP.img(a||(a=(0,u.Z)(["\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  position: relative;\n  color: #ffffff;\n"]))),j=x.ZP.p(s||(s=(0,u.Z)(["\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.1428571429;\n  text-align: center;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background-color: rgba(47, 48, 58, 0.8);\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  bottom: -10%;\n  padding-bottom: 10px;\n  padding-top: 10px;\n"])))}}]);
//# sourceMappingURL=615.ab0703bc.chunk.js.map