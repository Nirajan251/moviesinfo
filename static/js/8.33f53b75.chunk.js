(this.webpackJsonpmoviesinfo=this.webpackJsonpmoviesinfo||[]).push([[8],{113:function(e,t,n){"use strict";n.r(t);var a=n(65),c=n.n(a),r=n(66),s=n(63),i=n(3),o=n(59),d=n.n(o),j=n(0),b=n.n(j),h=n(64),u=n(54),l=n(109),p=n(114),f=n(13),v=(n(60),n(61),n(62)),x=n.n(v);var O=function(e){var t=e.tvshow;return Object(i.jsxs)(u.a,{children:[Object(i.jsx)("div",{className:"clearfix mt-5 mt-5",children:Object(i.jsx)("h4",{className:"float-left",children:"Top TV SHOWS"})}),Object(i.jsx)(x.a,Object(h.a)(Object(h.a)({},{dots:!1,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:1}),{},{children:t.map((function(e){return Object(i.jsx)(b.a.Fragment,{children:Object(i.jsx)(f.b,{to:"/tv/".concat(e.id),children:Object(i.jsx)(l.a,{children:Object(i.jsxs)(p.a,{children:[Object(i.jsx)(p.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path)}),Object(i.jsx)(p.a.Body,{children:Object(i.jsx)("span",{children:e.name})})]})})})})}))}))]})},m=n(26);function g(){var e=Object(m.a)(["\n.slick-arrow {\n    background-color: red;\n    height:35px;\n    width:35px;\n    border-radius:100px;\n}\n.slick-arrow:hover{\n    background-color: red !important;\n}\n.img__nav{\n    width:5px;\n    height:5px;\n}\n"]);return g=function(){return e},e}var w=n(27).a.div(g());t.default=function(){var e=Object(j.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1];Object(j.useEffect)((function(){o()}),[]);var o=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"f151e379e176f1899c71263936acbab8",e.next=3,d.a.all([d.a.get("\n            https://api.themoviedb.org/3/tv/top_rated?api_key=".concat("f151e379e176f1899c71263936acbab8","&language=en-US&page=1"))]);case 3:t=e.sent,a(t[0].data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsx)(w,{children:Object(i.jsx)(O,{tvshow:n})})}}}]);
//# sourceMappingURL=8.33f53b75.chunk.js.map