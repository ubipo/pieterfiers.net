(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{608:function(t,e,n){"use strict";var r=n(6),o={key:0},c={key:1};var a=n(15),i=n.n(a),s=n(47),l=n.n(s);var p=n(133),u=n(45),d=n(67),b=n(129),f=n(63),j=n(616),h=n.n(j);function m(t,e,n){var r=null===e?"":'title="'.concat(e,'"'),o="".concat(r,' class="link"');if(null==t)return"<a ".concat(o,">").concat(n,"</a>");var c=Object(u.a)(t),a=c.protocol,i=Object(f.a)(c);if(a===d.a.CONTENT){var s=new URL(i,p.a),l=Object(f.d)(s,"/content".concat(s.pathname)).href;return'<a href="'.concat(l,'" ').concat(o,">").concat(n,"</a>")}return a===d.a.EXTERNAL?'<a href="'.concat(i,'" target="_blank" ').concat(o,">").concat(n,"</a>"):a===d.a.RELATIVE?'<router-link to="'.concat(i,'" ').concat(o,">").concat(n,"</router-link>"):'<a href="'.concat(c.href,'" ').concat(o,">").concat(n,"</a>")}var g,O=((g=new h.a.Renderer).link=m,g.image=function(t,e,n){var r=null===t?"":'src="'.concat(Object(b.a)(Object(u.a)(t)),'"');return"<img ".concat(r,' title="').concat(e,'" alt="').concat(n,'">')},g);var v,k=Object(r.i)({props:{markdown:{type:String,required:!0}},setup:function(t,e){return{html:Object(r.b)((function(){return function(t){var e=h.a.parse(t,{renderer:O});return"<div>".concat(e,"</div>")}(t.markdown)}))}},components:{DynamicVc:(v={},Object(r.i)({name:"DyanmicVc",props:{content:{type:String,required:!0}},components:v,setup:function(t,e){return function(){var e=t.content||'<p class="not-available-text">No content</p>';return Object(r.g)({name:"DynamicVcContent",components:v,template:e})}}}))}}),w=n(95),x=n.n(w),y=n(610),T={insert:"head",singleton:!1};x()(y.a,T),y.a.locals;k.render=function(t,e,n,o,c,a){var i=Object(r.A)("dynamic-vc");return Object(r.s)(),Object(r.d)(i,{class:"markdown",content:t.html},null,8,["content"])};var _=k,N=n(606),S=n(132);function q(t){return A.apply(this,arguments)}function A(){return(A=l()(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(S.a)(e.href);case 2:if((n=t.sent).ok){t.next=5;break}throw new Error("HTTP error fetching markdown from ".concat(e.href,": ").concat(n.statusText));case 5:return t.next=7,n.text();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(t){return E.apply(this,arguments)}function E(){return(E=l()(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===e.text){t.next=2;break}return t.abrupt("return",e.text);case 2:if(null===e.cachedText){t.next=6;break}return t.abrupt("return",e.cachedText);case 6:if(null!==e.url){t.next=8;break}throw Error("MarkdownDefinition doesn't have url defined");case 8:return t.next=10,q(e.url);case 10:return n=t.sent,e.cachedText=n,t.abrupt("return",n);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var L=Object(r.i)({props:{definition:{type:Object,required:!0}},setup:function(t,e){var n=Object(N.a)(l()(i.a.mark((function n(){var r,o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.definition,n.prev=1,n.next=4,D(r);case 4:o=n.sent,n.next=11;break;case 7:throw n.prev=7,n.t0=n.catch(1),console.error(n.t0),n.t0;case 11:return e.emit("ready"),n.abrupt("return",o);case 13:case"end":return n.stop()}}),n,null,[[1,7]])}))));return Object(r.G)((function(){return t.definition}),(function(){n.perform()})),n.perform(),{markdownTask:n}},components:{Markdown:_}});L.render=function(t,e,n,a,i,s){var l=Object(r.A)("Markdown");return t.markdownTask.last.isRunning?(Object(r.s)(),Object(r.d)("p",o,"Loading markdown...")):t.markdownTask.last.isError?(Object(r.s)(),Object(r.d)("p",c,"Error loading markdown: "+Object(r.D)(t.markdownTask.last.error.message),1)):(Object(r.s)(),Object(r.d)(l,{key:2,markdown:t.markdownTask.last.value},null,8,["markdown"]))};e.a=L},610:function(t,e,n){"use strict";var r=n(96),o=n.n(r)()(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400);"]),o.push([t.i,'blockquote.twitter-tweet{display:inline-block;font-family:"Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;font-size:12px;font-weight:bold;line-height:16px;border-color:#eee #ddd #bbb;border-radius:5px;border-style:solid;border-width:1px;box-shadow:0 1px 3px rgba(0,0,0,0.15);margin:10px 5px;padding:0 16px 16px 16px;max-width:468px}blockquote.twitter-tweet p{font-size:16px;font-weight:normal;line-height:20px}blockquote.twitter-tweet a{color:inherit;font-weight:normal;text-decoration:none;outline:0 none}blockquote.twitter-tweet a:hover,blockquote.twitter-tweet a:focus{text-decoration:underline}.markdown h3{font-size:2rem;margin-bottom:0.5em}.markdown li{font-family:"Open Sans",sans-serif;color:#333}.markdown .twitter-tweet a{font-family:"Open Sans",sans-serif;color:#328546;text-decoration:underline;text-decoration-style:dotted}.banner{width:100%}\n',""]),e.a=o},612:function(t,e,n){"use strict";var r=n(6),o=Object(r.K)("data-v-4849d725"),c=o((function(t,e,n,c,a,i){var s=Object(r.A)("SvgSprite"),l=Object(r.A)("router-link");return Object(r.s)(),Object(r.d)(l,{class:"technology-badge",title:t.p.technology.name,to:"/technologies/".concat(t.p.technology.urlSafeName.value)},{default:o((function(){return[Object(r.g)(s,{name:t.spriteName},null,8,["name"])]})),_:1},8,["title","to"])})),a=n(235),i=Object(r.i)({props:{technology:{type:Object,required:!0}},setup:function(t,e){var n=Object(r.b)((function(){var e=t.technology;return"tech-".concat(e.iconName.value)}));return{p:t,spriteName:n}},components:{SvgSprite:a.a}}),s=n(95),l=n.n(s),p=n(614),u={insert:"head",singleton:!1};l()(p.a,u),p.a.locals;i.render=c,i.__scopeId="data-v-4849d725";e.a=i},614:function(t,e,n){"use strict";var r=n(96),o=n.n(r)()(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400);"]),o.push([t.i,".technology-badge[data-v-4849d725],.technology-badge>svg[data-v-4849d725]{display:block;background-color:#38944e;height:50px;width:50px}.technology-badge__icon[data-v-4849d725]{pointer-events:none;height:50px;width:50px}\n",""]),e.a=o},618:function(t,e,n){"use strict";var r=n(96),o=n.n(r)()(!1);o.push([t.i,".icons[data-v-1ba236d0]{display:flex;list-style:none;flex-direction:row;padding:0;margin:0}.icons__item[data-v-1ba236d0]{height:50px;width:50px;background-color:#12a112;margin-right:5px;margin-bottom:5px}@media only screen and (min-width: 650px){.icons--block[data-v-1ba236d0]{flex-wrap:wrap;flex-direction:row-reverse;max-width:calc((50px + 5px) * 3)}.icons--block .icons__item[data-v-1ba236d0]{margin-left:5px;margin-right:0}}.icons__icon[data-v-1ba236d0]{height:50px;width:50px}a[data-v-1ba236d0]{display:block;height:50px;width:50px}object[data-v-1ba236d0]{pointer-events:none}\n",""]),e.a=o},621:function(t,e,n){"use strict";var r=n(6),o=Object(r.K)("data-v-1ba236d0")((function(t,e,n,o,c,a){var i=Object(r.A)("TechnologyBadge");return Object(r.s)(),Object(r.d)("div",null,[Object(r.g)("ul",{class:t.iconsClass},[(Object(r.s)(!0),Object(r.d)(r.a,null,Object(r.y)(t.p.project.technologies,(function(t,e){return Object(r.s)(),Object(r.d)("li",{key:e,class:"icons__item"},[Object(r.g)(i,{technology:t},null,8,["technology"])])})),128))],2)])})),c=n(612),a=Object(r.i)({props:{project:{type:Object,required:!0},block:{type:Boolean}},setup:function(t,e){var n=Object(r.b)((function(){return"icons ".concat(t.block?"icons--block":"")}));return{p:t,iconsClass:n}},components:{TechnologyBadge:c.a}}),i=n(95),s=n.n(i),l=n(618),p={insert:"head",singleton:!1};s()(l.a,p),l.a.locals;a.render=o,a.__scopeId="data-v-1ba236d0";e.a=a},668:function(t,e,n){"use strict";n.r(e);var r=n(6),o={class:"card-column"},c={class:"card"},a={class:"card__content"},i={class:"page-title"},s={key:0},l=Object(r.g)("br",null,null,-1),p={key:4,class:"not-available-text"},u={key:5};var d=n(608),b=n(621),f=Object(r.i)({props:{project:{type:Object,required:!0}},setup:function(t,e){return{p:t}},components:{ProjectTechnologyList:b.a,MarkdownFromDef:d.a}});f.render=function(t,e,n,d,b,f){var j=Object(r.A)("MarkdownFromDef"),h=Object(r.A)("ProjectTechnologyList");return Object(r.s)(),Object(r.d)("div",o,[Object(r.e)(' <NotFound v-if="!project"></NotFound> '),Object(r.g)("article",c,[Object(r.g)("div",a,[Object(r.g)("h1",i,Object(r.D)(t.p.project.name),1),null===t.p.project.short?(Object(r.s)(),Object(r.d)("p",s,Object(r.D)(t.p.project.description),1)):(Object(r.s)(),Object(r.d)(j,{key:1,definition:t.p.project.short},null,8,["definition"])),Object(r.g)(h,{project:t.p.project},null,8,["project"]),l,t.p.project.siteUrl?(Object(r.s)(),Object(r.d)("a",{key:2,href:t.p.project.siteUrl,class:"button"},"Project site",8,["href"])):Object(r.e)("v-if",!0),t.p.project.gitUrl?(Object(r.s)(),Object(r.d)("a",{key:3,href:t.p.project.gitUrl,class:"button"},"Git repository",8,["href"])):Object(r.e)("v-if",!0),null===t.p.project.long?(Object(r.s)(),Object(r.d)("p",p," No detailed description available. ")):(Object(r.s)(),Object(r.d)("article",u,[Object(r.g)(j,{definition:t.p.project.long},null,8,["definition"])]))])])])};e.default=f}}]);