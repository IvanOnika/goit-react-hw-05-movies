"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{785:function(e,t,n){n.r(t);var r=n(861),c=n(439),s=n(757),a=n.n(s),o=n(791),u=n(689),i=n(269),p=n(184);t.default=function(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),n=t[0],s=t[1],f=(0,u.UO)().movieId;console.log("setReviews :>> ",s),(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.getMovieReviews(f);case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error :>> ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]);var v=[];return 0!==n.length?(v=n.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h4",{children:t}),(0,p.jsx)("p",{children:n})]},r)})),(0,p.jsx)("ul",{children:v})):(0,p.jsx)("p",{children:"There is no reviews !"})}},269:function(e,t,n){var r=n(861),c=n(757),s=n.n(c),a="6a9219fefaee6bb385bea99babc897a6",o={getTrendingMovies:function(){return(0,r.Z)(s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r.results);case 8:case"end":return e.stop()}}),e)})))()},searchMovies:function(e){return(0,r.Z)(s().mark((function t(){var n,r,c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(a),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,t.abrupt("return",c.results);case 8:case"end":return t.stop()}}),t)})))()},getMovieDetails:function(e){return(0,r.Z)(s().mark((function t(){var n,r,c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)})))()},getMovieCredits:function(e){return(0,r.Z)(s().mark((function t(){var n,r,c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,t.abrupt("return",c.cast);case 8:case"end":return t.stop()}}),t)})))()},getMovieReviews:function(e){return(0,r.Z)(s().mark((function t(){var n,r,c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,console.log("data.results :>> ",c.results),t.abrupt("return",c.results);case 9:case"end":return t.stop()}}),t)})))()}};t.Z=o},861:function(e,t,n){function r(e,t,n,r,c,s,a){try{var o=e[s](a),u=o.value}catch(i){return void n(i)}o.done?t(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,s){var a=e.apply(t,n);function o(e){r(a,c,s,o,u,"next",e)}function u(e){r(a,c,s,o,u,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=785.e8246368.chunk.js.map