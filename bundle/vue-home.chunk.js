(self.webpackChunk=self.webpackChunk||[]).push([[462],{68083:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(93476),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".banner{width:100%}",""]);const a=o},1915:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(93476),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400);"]),o.push([e.id,'blockquote.twitter-tweet{display:inline-block;font-family:"Helvetica Neue",Roboto,"Segoe UI",Calibri,sans-serif;font-size:12px;font-weight:bold;line-height:16px;border-color:#eee #ddd #bbb;border-radius:5px;border-style:solid;border-width:1px;box-shadow:0 1px 3px rgba(0,0,0,.15);margin:10px 5px;padding:0 16px 16px 16px;max-width:468px}blockquote.twitter-tweet p{font-size:16px;font-weight:normal;line-height:20px}blockquote.twitter-tweet a{color:inherit;font-weight:normal;text-decoration:none;outline:0 none}blockquote.twitter-tweet a:hover,blockquote.twitter-tweet a:focus{text-decoration:underline}.markdown h3{font-size:2rem;margin-bottom:.5em}.markdown li{font-family:"Open Sans",sans-serif;color:#333}.markdown .twitter-tweet a{font-family:"Open Sans",sans-serif;color:#328546;text-decoration:underline;text-decoration-style:dotted}.banner{width:100%}',""]);const a=o},72748:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(92117),o=(0,r.Wm)("h1",{class:"page-title"},"Pieter Fiers",-1),a=n(22233),i=n(62047);const l=(0,r.aZ)({props:{home:{type:Object,required:!0}},setup:(e,t)=>({p:e,onReady:()=>{}}),components:{MarkdownFromDef:a.Z,CardColumn:i.Z}});n(31442),l.render=function(e,t,n,a,i,l){var c=(0,r.up)("MarkdownFromDef"),s=(0,r.up)("CardColumn");return(0,r.wg)(),(0,r.j4)(s,null,{"first-item":(0,r.w5)((()=>[o,(0,r.Wm)(c,{definition:e.p.home.long,onReady:e.onReady},null,8,["definition","onReady"])])),_:1})};const c=l},22233:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var r=n(92117),o={key:0},a={key:1},i=n(53102),l=n(44559),c=n.n(l),s=n(322),d=n.n(s),u=n(26254),p=n(59339),f=n(66653),m=n(24288),w=n(66296),h=n(64402),k=n.n(h);function y(e,t,n){var r,o=null===t?"":'title="'.concat(t,'"'),a="".concat(o,' class="link"');if(null==e)return c()(r="<a ".concat(a,">")).call(r,n,"</a>");var i,l,s,m,h,k,y=(0,p.C3)(e),g=y.protocol,v=(0,w.Jr)(y);if(g===f.Z.CONTENT){var x,b,T=new(d())(v,u.I),Z=(0,w.Xu)(T,"/content".concat(T.pathname)).href;return c()(x=c()(b='<a href="'.concat(Z,'" ')).call(b,a,">")).call(x,n,"</a>")}return g===f.Z.EXTERNAL?c()(i=c()(l='<a href="'.concat(v,'" target="_blank" rel="noopener" ')).call(l,a,">")).call(i,n,"</a>"):g===f.Z.RELATIVE?c()(s=c()(m='<router-link to="'.concat(v,'" ')).call(m,a,">")).call(s,n,"</router-link>"):c()(h=c()(k='<a href="'.concat(y.href,'" ')).call(k,a,">")).call(h,n,"</a>")}var g=function(){var e=new(k().Renderer);return e.link=y,e.image=(e,t,n)=>{var r,o,a=null===e?"":'src="'.concat((0,m.X)((0,p.C3)(e)),'"');return c()(r=c()(o="<img ".concat(a,' title="')).call(o,t,'" alt="')).call(r,n,'">')},e}();const v=(0,r.aZ)({props:{markdown:{type:String,required:!0}},setup:(e,t)=>({html:(0,r.Fl)((()=>{return t=e.markdown,n=k().parse(t,{renderer:g}),"<div>".concat(n,"</div>");var t,n}))}),components:{DynamicVc:(x={},(0,r.aZ)({name:"DyanmicVc",props:{content:{type:String,required:!0}},components:x,setup:(e,t)=>()=>{var t=e.content||'<p class="not-available-text">No content</p>';return(0,r.Wm)({name:"DynamicVcContent",components:x,template:t})}}))}});var x;n(72377),v.render=function(e,t,n,o,a,i){var l=(0,r.up)("dynamic-vc");return(0,r.wg)(),(0,r.j4)(l,{class:"markdown",content:e.html},null,8,["content"])};const b=v;var T=n(41216),Z=n(16072);function C(e){return q.apply(this,arguments)}function q(){return(q=(0,i.Z)((function*(e){var t,n=yield(0,Z.b)(e.href);if(!n.ok)throw new Error(c()(t="HTTP error fetching markdown from ".concat(e.href,": ")).call(t,n.statusText));return yield n.text()}))).apply(this,arguments)}function E(){return(E=(0,i.Z)((function*(e){if(null!==e.text)return e.text;if(null!==e.cachedText)return e.cachedText;if(null===e.url)throw Error("MarkdownDefinition doesn't have url defined");var t=yield C(e.url);return e.cachedText=t,t}))).apply(this,arguments)}const R=(0,r.aZ)({props:{definition:{type:Object,required:!0}},setup(e,t){var n=(0,T.KP)((0,i.Z)((function*(){var n,r=e.definition;try{n=yield function(e){return E.apply(this,arguments)}(r)}catch(e){throw console.error(e),e}return t.emit("ready"),n})));return(0,r.YP)((()=>e.definition),(()=>{n.perform()})),n.perform(),{markdownTask:n}},components:{Markdown:b}});R.render=function(e,t,n,i,l,c){var s=(0,r.up)("Markdown");return e.markdownTask.last.isRunning?((0,r.wg)(),(0,r.j4)("p",o,"Loading markdown...")):e.markdownTask.last.isError?((0,r.wg)(),(0,r.j4)("p",a,"Error loading markdown: "+(0,r.zw)(e.markdownTask.last.error.message),1)):((0,r.wg)(),(0,r.j4)(s,{key:2,markdown:e.markdownTask.last.value},null,8,["markdown"]))};const j=R},31442:(e,t,n)=>{var r=n(68083);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(49441).Z)("780717f4",r,!1,{})},72377:(e,t,n)=>{var r=n(1915);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(49441).Z)("56b3e6a6",r,!1,{})}}]);