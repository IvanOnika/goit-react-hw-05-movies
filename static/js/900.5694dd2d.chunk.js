"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[900],{900:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(439),c=n(757),s=n.n(c),o=n(791),u=n(689),i=n(269),p={ul:"Cast_ul__qE-tu"},f=n(184),v=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],v=(0,u.UO)().movieId;console.log(v),(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.getMovieCredits(v);case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error :>> ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v]);var h=n.map((function(e){var t=e.profile_path,n=e.name,r=e.cast_id;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(t),alt:"",width:"150"}),(0,f.jsx)("p",{children:n})]},r)}));return(0,f.jsx)("ul",{className:p.list,children:h})}},269:function(e,t,n){var r=n(861),a=n(757),c=n.n(a),s="6a9219fefaee6bb385bea99babc897a6",o={getTrendingMovies:function(){return(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r.results);case 8:case"end":return e.stop()}}),e)})))()},searchMovies:function(e){return(0,r.Z)(c().mark((function t(){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(s),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",a.results);case 8:case"end":return t.stop()}}),t)})))()},getMovieDetails:function(e){return(0,r.Z)(c().mark((function t(){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(s),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})))()},getMovieCredits:function(e){return(0,r.Z)(c().mark((function t(){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",a.cast);case 8:case"end":return t.stop()}}),t)})))()},getMovieReviews:function(e){return(0,r.Z)(c().mark((function t(){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(s),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,console.log("data.results :>> ",a.results),t.abrupt("return",a.results);case 9:case"end":return t.stop()}}),t)})))()}};t.Z=o},861:function(e,t,n){function r(e,t,n,r,a,c,s){try{var o=e[c](s),u=o.value}catch(i){return void n(i)}o.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var s=e.apply(t,n);function o(e){r(s,a,c,o,u,"next",e)}function u(e){r(s,a,c,o,u,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=900.5694dd2d.chunk.js.map