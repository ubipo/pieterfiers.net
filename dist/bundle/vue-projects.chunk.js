(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{812:function(t,e,r){"use strict";r.d(e,"a",(function(){return w}));var a,n=r(36),i=r.n(n),o=r(131),s=r.n(o),c=r(37),l=r.n(c),d=r(28),u=r.n(d),f=r(38),h=r.n(f),g=r(40),p=r(90),v=r(88),w=Object(p.b)(a=function(t){function e(){var t,r;i()(this,e);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=l()(this,(t=u()(e)).call.apply(t,[this].concat(n)))).grid=void 0,r.cards=[],r.rowHeight=0,r.rowGap=0,r}return h()(e,t),s()(e,[{key:"cardGridInit",value:function(){var t=this;this.grid=document.getElementsByClassName("card-grid")[0],this.cards=Array.from(this.grid.getElementsByClassName("card")),this.rowHeight=parseInt(window.getComputedStyle(this.grid).getPropertyValue("grid-auto-rows")),this.rowGap=parseInt(window.getComputedStyle(this.grid).getPropertyValue("grid-row-gap"));for(var e=0,r=Array.from(this.grid.getElementsByTagName("img"));e<r.length;e++){r[e].addEventListener("load",(function(){return t.resizeAllCards()}))}window.addEventListener("resize",(function(){return t.resizeAllCards()})),this.resizeAllCards()}},{key:"resizeCard",value:function(t){var e=t.getElementsByClassName("card__content")[0];if(null==e)throw new v.a("Illegal layout; no content within card");var r=e.getBoundingClientRect().height,a=Math.ceil((r+this.rowGap)/(this.rowHeight+this.rowGap))+1;t.style.gridRowEnd="span ".concat(a)}},{key:"resizeAllCards",value:function(){var t=!0,e=!1,r=void 0;try{for(var a,n=this.cards[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){var i=a.value;this.resizeCard(i)}}catch(t){e=!0,r=t}finally{try{t||null==n.return||n.return()}finally{if(e)throw r}}}}]),e}(g.a))||a},813:function(t,e,r){var a=r(894);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,r(239).default)("28a59f26",a,!1,{})},893:function(t,e,r){"use strict";var a=r(813);r.n(a).a},894:function(t,e,r){(e=r(237)(!1)).push([t.i,"figure[data-v-4cfafa06]{max-width:100%;margin:0}img[data-v-4cfafa06]{max-width:100%}object[data-v-4cfafa06]{background-color:rebeccapurple}.project__title[data-v-4cfafa06]{font-size:2rem;margin-bottom:0.5em}\n",""]),t.exports=e},940:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-grid"},this._l(this.siteData.projects,(function(t){return e("article",{key:t.name,staticClass:"card"},[e("div",{staticClass:"card__content"},[e("ProjectShort",{attrs:{project:t}})],1)])})),0)};a._withStripped=!0;var n,i,o,s,c,l=r(102),d=r.n(l),u=r(36),f=r.n(u),h=r(131),g=r.n(h),p=r(37),v=r.n(p),w=r(28),m=r.n(w),y=r(91),b=r.n(y),C=r(38),j=r.n(C),_=r(103),z=r.n(_),k=(r(348),r(770)),A=r(90),E=r(842),G=r(241),x=r(812),S=Object(G.a)("siteData"),B=(n=Object(k.a)({components:{ProjectShort:E.a}}),i=S.Getter("data"),n((s=function(t){function e(){var t,r;f()(this,e);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return r=v()(this,(t=m()(e)).call.apply(t,[this].concat(n))),d()(r,"siteData",c,b()(r)),r}return j()(e,t),g()(e,[{key:"mounted",value:function(){this.cardGridInit()}}]),e}(Object(A.c)(x.a)),c=z()(s.prototype,"siteData",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o=s))||o),I=(r(893),r(130)),O=Object(I.a)(B,a,[],!1,null,"4cfafa06",null);O.options.__file="src/components/Projects.vue";e.default=O.exports}}]);