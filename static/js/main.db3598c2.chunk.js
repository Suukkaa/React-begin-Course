(this.webpackJsonpreact1=this.webpackJsonpreact1||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(11),s=n.n(i),a=n(7),u=n(1),j=n(6),o=n.n(j),d=n(8),m=n(2);var b=function(){var e=Object(u.g)().id,t=function(){var t=Object(d.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:n=t.sent.json(),console.log(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){t()}),[]),Object(m.jsx)("h1",{children:" Detail"})},l=n(4),O=n(5),h=n.n(O);function v(e){var t=e.id,n=e.coverImg,r=e.title,c=e.summary,i=e.genres;return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:n,alt:""}),Object(m.jsx)("h2",{children:Object(m.jsx)(a.b,{to:"/movie/".concat(t),children:r})}),Object(m.jsx)("p",{children:c}),Object(m.jsx)("ul",{children:i.map((function(e){return Object(m.jsx)("li",{children:e},e)}))})]})}v.proptype={id:h.a.number.isRequired,coverImg:h.a.string.isRequired,title:h.a.string.isRequired,summary:h.a.string.isRequired,genres:h.a.arrayOf(h.a.string).isRequired};var p=v;var x=function(){var e=Object(r.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)([]),s=Object(l.a)(i,2),a=s[0],u=s[1],j=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,u(n.data.movies),c(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){j()}),[]),console.log(a),Object(m.jsx)("div",{children:n?Object(m.jsx)("h1",{children:"Loading..."}):Object(m.jsx)("div",{children:a.map((function(e){return Object(m.jsx)(p,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var f=function(){return Object(m.jsx)(a.a,{children:Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{path:"/",element:Object(m.jsx)(x,{})}),Object(m.jsx)(u.a,{path:"/movie/:id",element:Object(m.jsx)(b,{})})]})})};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.db3598c2.chunk.js.map