(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{579:function(t,n,e){"use strict";e.d(n,"b",function(){return l}),e.d(n,"d",function(){return u});var o=e(9),r=e.n(o),i=e(36);e.d(n,"c",function(){return i.a});var a=e(81);e.d(n,"a",function(){return a.b});var c="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function s(t,n,e){c&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",n,e)))}function l(t){return void 0===t&&(t={}),function(n,e){s(t,n,e),Object(a.a)(function(n,e){(n.props||(n.props={}))[e]=t})(n,e)}}function u(t,n){void 0===n&&(n={});var e=n.deep,o=void 0!==e&&e,i=n.immediate,c=void 0!==i&&i;return Object(a.a)(function(n,e){"object"!==r()(n.watch)&&(n.watch=Object.create(null));var i=n.watch;"object"!==r()(i[t])||Array.isArray(i[t])?void 0===i[t]&&(i[t]=[]):i[t]=[i[t]],i[t].push({handler:e,deep:o,immediate:c})})}},581:function(t,n,e){var o=e(593);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e(209).default)("440cc503",o,!1,{})},587:function(t,n,e){var o=e(617);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e(209).default)("3b9a296e",o,!1,{})},592:function(t,n,e){"use strict";var o=e(581);e.n(o).a},593:function(t,n,e){(n=t.exports=e(207)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400);",""]),n.push([t.i,".technology-badge[data-v-1e81934a],\n.technology-badge > div[data-v-1e81934a] {\n  display: block;\n  background-color: #38944e;\n  height: 50px;\n  width: 50px;\n}\n.technology-badge__icon[data-v-1e81934a] {\n  pointer-events: none;\n  height: 50px;\n  width: 50px;\n}\n",""])},594:function(t,n,e){"use strict";var o=function(){var t=this.$createElement,n=this._self._c||t;return n("router-link",{staticClass:"technology-badge",attrs:{title:this.technology.name,to:"/technologies/"+this.technology.urlSafeName}},[n("div",{domProps:{innerHTML:this._s(this.svg)}})])};o._withStripped=!0;var r,i,a,c,s,l=e(94),u=e.n(l),p=e(42),f=e.n(p),d=e(119),h=e.n(d),g=e(43),v=e.n(g),b=e(34),_=e.n(b),y=e(82),m=e.n(y),j=e(44),x=e.n(j),w=e(95),k=e.n(w),O=(e(284),e(36)),S=e(81),U=e(579),T=(r=Object(U.b)(Object),i=Object(U.d)("technology",{}),Object(S.b)((c=function(t){function n(){var t,e;f()(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return e=v()(this,(t=_()(n)).call.apply(t,[this].concat(r))),u()(e,"technology",s,m()(e)),e.svg="",e}return x()(n,t),h()(n,[{key:"onTechnologyChanged",value:function(){this.updateSvg()}},{key:"created",value:function(){this.updateSvg()}},{key:"updateSvg",value:function(){var t=this;new Promise(function(e,o){var r=t.technology.iconUrl;null!=r?n.fetchSvgFromUrl(r).then(function(t){e(t)}).catch(function(t){o('The following error occurred when trying to load "'.concat(r,'":\n\n ').concat(t.message))}):e()}).then(function(n){t.svg=n}).catch(function(n){t.svg="",console.error(n)})}}],[{key:"fetchSvgFromUrl",value:function(t){var n=new Request(t.href);return fetch(n).then(function(n){if(!n.ok)throw new Error("HTTP Error loading ".concat(t.href,": ").concat(n.statusText));return n.text()})}}]),n}(O.a),s=k()(c.prototype,"technology",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k()(c.prototype,"onTechnologyChanged",[i],Object.getOwnPropertyDescriptor(c.prototype,"onTechnologyChanged"),c.prototype),a=c))||a),C=(e(592),e(118)),A=Object(C.a)(T,o,[],!1,null,"1e81934a",null);A.options.__file="src/components/TechnologyBadge.vue";n.a=A.exports},597:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isRelative?e("router-link",{attrs:{to:t.toUrl.pathname}},[t._t("default",[t._v(t._s(t.toUrl.pathname))])],2):e("a",{attrs:{href:t.toUrl.href}},[t._t("default",[t._v(t._s(t.toUrl.href))])],2)};o._withStripped=!0;var r,i,a,c,s,l,u=e(94),p=e.n(u),f=e(42),d=e.n(f),h=e(119),g=e.n(h),v=e(43),b=e.n(v),_=e(34),y=e.n(_),m=e(82),j=e.n(m),x=e(44),w=e.n(x),k=e(95),O=e.n(k),S=(e(284),e(579)),U=(r=Object(S.b)(void 0),i=Object(S.b)({required:!1,type:String}),Object(S.a)((c=function(t){function n(){var t,e;d()(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return e=b()(this,(t=y()(n)).call.apply(t,[this].concat(r))),p()(e,"to",s,j()(e)),p()(e,"text",l,j()(e)),e}return w()(n,t),g()(n,[{key:"isRelative",get:function(){return this.toUrl.host===document.location.host}},{key:"toUrl",get:function(){return new URL(this.to.toString(),document.location.href)}}]),n}(S.c),s=O()(c.prototype,"to",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=O()(c.prototype,"text",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=c))||a),T=e(118),C=Object(T.a)(U,o,[],!1,null,"9d640694",null);C.options.__file="src/components/SmartLink.vue";n.a=C.exports},616:function(t,n,e){"use strict";var o=e(587);e.n(o).a},617:function(t,n,e){(t.exports=e(207)(!1)).push([t.i,".icons[data-v-f9bd62d4] {\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.icons__item[data-v-f9bd62d4] {\n  height: 50px;\n  width: 50px;\n  background-color: #12a112;\n  margin-right: 5px;\n}\n.icons__icon[data-v-f9bd62d4] {\n  height: 50px;\n  width: 50px;\n}\na[data-v-f9bd62d4] {\n  display: block;\n  height: 50px;\n  width: 50px;\n}\nobject[data-v-f9bd62d4] {\n  pointer-events: none;\n}\n",""])},618:function(t,n,e){var o=e(696);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e(209).default)("686cd675",o,!1,{})},619:function(t,n,e){var o=e(698);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e(209).default)("2b87b4f5",o,!1,{})},629:function(t,n,e){"use strict";var o=function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("ul",{staticClass:"icons"},this._l(this.project.technologies,function(t,e){return n("li",{key:e,staticClass:"icons__item"},[n("TechnologyBadge",{attrs:{technology:t}})],1)}),0)])};o._withStripped=!0;var r,i,a,c,s,l=e(94),u=e.n(l),p=e(42),f=e.n(p),d=e(43),h=e.n(d),g=e(34),v=e.n(g),b=e(82),_=e.n(b),y=e(44),m=e.n(y),j=e(95),x=e.n(j),w=(e(284),e(36)),k=e(81),O=e(594),S=e(579),U=(r=Object(k.b)({components:{TechnologyBadge:O.a}}),i=Object(S.b)(Object),r((c=function(t){function n(){var t,e;f()(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return e=h()(this,(t=v()(n)).call.apply(t,[this].concat(r))),u()(e,"project",s,_()(e)),e}return m()(n,t),n}(w.a),s=x()(c.prototype,"project",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=c))||a),T=(e(616),e(118)),C=Object(T.a)(U,o,[],!1,null,"f9bd62d4",null);C.options.__file="src/components/ProjectTechnologyList.vue";n.a=C.exports},648:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"project__header"},[e("h3",{staticClass:"project__header__title",attrs:{id:t.project.urlSafeName}},[t._v(t._s(t.project.name))]),t._v(" "),e("ProjectTechnologyList",{attrs:{project:t.project}})],1),t._v(" "),e("p",[t._v(t._s(t.project.short))]),t._v(" "),t.project.longMdUrl?e("router-link",{staticClass:"button",attrs:{to:"/projects/"+t.project.urlSafeName}},[t._v("\n    Read more\n  ")]):t._e(),t._v(" "),t.project.siteUrl?e("a",{staticClass:"button",attrs:{href:t.project.siteUrl}},[t._v("Project site")]):t._e(),t._v(" "),t.project.gitUrl?e("a",{staticClass:"button",attrs:{href:t.project.gitUrl}},[t._v("Git repository")]):t._e(),t._v(" "),null!==t.project.imgUrl?e("figure",[e("img",{attrs:{src:t.project.imgUrl}})]):t._e()],1)};o._withStripped=!0;var r=e(94),i=e.n(r),a=e(42),c=e.n(a),s=e(43),l=e.n(s),u=e(34),p=e.n(u),f=e(82),d=e.n(f),h=e(44),g=e.n(h),v=e(95),b=e.n(v),_=(e(284),e(579)),y=e(629),m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.links.length>0?e("ul",{staticClass:"button-group"},t._l(t.links,function(n){return e("SmartLink",{key:n.name,staticClass:"button-group__text",attrs:{to:n.location}},[t._v("\n    "+t._s(n.name)+"\n  ")])}),1):t._e()};m._withStripped=!0;var j,x,w,k,O,S=e(597),U=(j=Object(_.a)({components:{SmartLink:S.a}}),x=Object(_.b)(Array),j((k=function(t){function n(){var t,e;c()(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return e=l()(this,(t=p()(n)).call.apply(t,[this].concat(r))),i()(e,"links",O,d()(e)),e}return g()(n,t),n}(_.c),O=b()(k.prototype,"links",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=k))||w),T=(e(695),e(118)),C=Object(T.a)(U,m,[],!1,null,"d42fb480",null);C.options.__file="src/components/ButtonGroup.vue";var A,P,z,L,R,E=C.exports,B=(A=Object(_.a)({components:{ProjectTechnologyList:y.a,ButtonGroup:E}}),P=Object(_.b)(void 0),A((L=function(t){function n(){var t,e;c()(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return e=l()(this,(t=p()(n)).call.apply(t,[this].concat(r))),i()(e,"project",R,d()(e)),e}return g()(n,t),n}(_.c),R=b()(L.prototype,"project",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=L))||z),$=(e(697),Object(T.a)(B,o,[],!1,null,"33a0c466",null));$.options.__file="src/components/ProjectShort.vue";n.a=$.exports},695:function(t,n,e){"use strict";var o=e(618);e.n(o).a},696:function(t,n,e){(n=t.exports=e(207)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400);",""]),n.push([t.i,'.button-group[data-v-d42fb480] {\n  font-family: "Open Sans", sans-serif;\n  display: inline-block;\n  background-color: #38944e;\n  border-radius: 28px;\n  cursor: pointer;\n  margin-bottom: 2em;\n  box-shadow: 6px 4px 12px 0px rgba(0, 0, 0, 0.75);\n  padding: 0;\n  list-style-type: none;\n}\n.button-group .button-group__text[data-v-d42fb480] {\n    display: inline-block;\n    color: #ffffff;\n    font-size: 16px;\n    text-decoration: none;\n    padding: 10px 25px;\n}\n.button-group .button-group__text[data-v-d42fb480]:not(:last-child) {\n      border-right-style: solid;\n      border-right-width: thin;\n}\n.button-group .button-group__text[data-v-d42fb480]:not(:first-child) {\n      border-left-style: solid;\n      border-left-width: thin;\n}\n',""])},697:function(t,n,e){"use strict";var o=e(619);e.n(o).a},698:function(t,n,e){(n=t.exports=e(207)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400);",""]),n.push([t.i,"figure[data-v-33a0c466] {\n  max-width: 100%;\n  margin: 0;\n}\nimg[data-v-33a0c466] {\n  max-width: 100%;\n}\n.project__header[data-v-33a0c466] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.project__header .project__header__title[data-v-33a0c466] {\n    font-size: 2rem;\n    margin-bottom: 0.5em;\n    margin-top: 0.2em;\n}\n",""])}}]);