(self.webpackChunk=self.webpackChunk||[]).push([[462],{16171:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>a});var r=t(93476),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".banner{width:100%}",""]);const a=o},1915:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>a});var r=t(93476),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:400&display=swap);"]),o.push([e.id,'blockquote.twitter-tweet{display:inline-block;font-family:"Helvetica Neue",Roboto,"Segoe UI",Calibri,sans-serif;font-size:12px;font-weight:bold;line-height:16px;border-color:#eee #ddd #bbb;border-radius:5px;border-style:solid;border-width:1px;box-shadow:0 1px 3px rgba(0,0,0,.15);margin:10px 5px;padding:0 16px 16px 16px;max-width:468px}blockquote.twitter-tweet p{font-size:16px;font-weight:normal;line-height:20px}blockquote.twitter-tweet a{color:inherit;font-weight:normal;text-decoration:none;outline:0 none}blockquote.twitter-tweet a:hover,blockquote.twitter-tweet a:focus{text-decoration:underline}.markdown h3{font-size:2rem;margin-bottom:.5em}.markdown li{font-family:"Open Sans",sans-serif;color:#333}.markdown .twitter-tweet a{font-family:"Open Sans",sans-serif;color:#328546;text-decoration:underline;text-decoration-style:dotted}.banner{width:100%}',""]);const a=o},44346:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var r=t(92117),o=(0,r.Wm)("h1",{class:"page-title"},"Pieter Fiers",-1),a=t(39013),i=t(62047);const l=(0,r.aZ)({props:{home:{type:Object,required:!0}},setup:(e,n)=>({p:e,onReady:()=>{}}),components:{MarkdownFromDef:a.Z,CardColumn:i.Z}});t(70035),l.render=function(e,n,t,a,i,l){var c=(0,r.up)("MarkdownFromDef"),d=(0,r.up)("CardColumn");return(0,r.wg)(),(0,r.j4)(d,null,{"first-item":(0,r.w5)((()=>[o,(0,r.Wm)(c,{definition:e.p.home.long,onReady:e.onReady},null,8,["definition","onReady"])])),_:1})};const c=l},39013:(e,n,t)=>{"use strict";t.d(n,{Z:()=>j});var r=t(92117),o={key:0},a={key:1},i=t(44559),l=t.n(i),c=t(322),d=t.n(c),s=t(26254),u=t(59339),p=t(66653),f=t(66296),m=t(64402),w=t.n(m);function k(e,n,t){var r,o=null===n?"":'title="'.concat(n,'"'),a="".concat(o,' class="link"');if(null==e)return l()(r="<a ".concat(a,">")).call(r,t,"</a>");var i,c,m,w,k,h,g=(0,u.C3)(e),y=g.protocol,v=(0,f.Jr)(g);if(y===p.Z.CONTENT){var x,b,T=new(d())(v,s.I),Z=(0,f.Xu)(T,"/content".concat(T.pathname)).href;return l()(x=l()(b='<a href="'.concat(Z,'" ')).call(b,a,">")).call(x,t,"</a>")}return y===p.Z.EXTERNAL?l()(i=l()(c='<a href="'.concat(v,'" target="_blank" rel="noopener" ')).call(c,a,">")).call(i,t,"</a>"):y===p.Z.RELATIVE?l()(m=l()(w='<router-link to="'.concat(v,'" ')).call(w,a,">")).call(m,t,"</router-link>"):l()(k=l()(h='<a href="'.concat(g.href,'" ')).call(h,a,">")).call(k,t,"</a>")}function h(e,n,t){var r,o;return l()(r=l()(o='<ResponsiveImage url="'.concat(e,'" title="')).call(o,n,'" alt="')).call(r,t,'" />')}var g=function(){var e=new(w().Renderer);return e.link=k,e.image=h,e}();const y=(0,r.aZ)({props:{markdown:{type:String,required:!0}},setup:(e,n)=>({html:(0,r.Fl)((()=>{return n=e.markdown,t=w().parse(n,{renderer:g}),"<div>".concat(t,"</div>");var n,t}))}),components:{DynamicVc:(v={},(0,r.aZ)({name:"DyanmicVc",props:{content:{type:String,required:!0}},components:v,setup:(e,n)=>()=>{var n=e.content||'<p class="not-available-text">No content</p>';return(0,r.Wm)({name:"DynamicVcContent",components:v,template:n})}}))}});var v;t(72377),y.render=function(e,n,t,o,a,i){var l=(0,r.up)("dynamic-vc");return(0,r.wg)(),(0,r.j4)(l,{class:"markdown",content:e.html},null,8,["content"])};const x=y;var b=t(41216),T=t(53102),Z=t(16072);function C(){return(C=(0,T.Z)((function*(e){var n,t=yield(0,Z.b)(e.href);if(!t.ok)throw new Error(l()(n="HTTP error fetching markdown from ".concat(e.href,": ")).call(n,t.statusText));return yield t.text()}))).apply(this,arguments)}const R=(0,r.aZ)({props:{definition:{type:Object,required:!0}},setup(e,n){var t=e.definition,{markdown:o,fetch:a}=function(e){if(null!==e.text)return{markdown:e.text};if(null!==e.cachedText)return{markdown:e.cachedText};var n,t=e.url;if(null===t)throw Error("MarkdownDefinition doesn't have url defined");return{fetch:(n=(0,T.Z)((function*(){var n=yield function(e){return C.apply(this,arguments)}(t);return e.cachedText=n,n})),function(){return n.apply(this,arguments)})}}(t),i=null==o?(0,b.KP)(a):null;return null!=i&&(0,r.YP)((()=>e.definition),(()=>{i.perform()}),{immediate:!0}),{markdown:o,markdownTask:i}},components:{Markdown:x}});R.render=function(e,n,t,i,l,c){var d=(0,r.up)("Markdown");return null==e.markdown?((0,r.wg)(),(0,r.j4)(r.HY,{key:0},[e.markdownTask.last.isRunning?((0,r.wg)(),(0,r.j4)("p",o,"Loading markdown...")):e.markdownTask.last.isError?((0,r.wg)(),(0,r.j4)("p",a,"Error loading markdown: "+(0,r.zw)(e.markdownTask.last.error.message),1)):((0,r.wg)(),(0,r.j4)(d,{key:2,markdown:e.markdownTask.last.value},null,8,["markdown"]))],2112)):((0,r.wg)(),(0,r.j4)(d,{key:1,markdown:e.markdown},null,8,["markdown"]))};const j=R},70035:(e,n,t)=>{var r=t(16171);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,t(49441).Z)("146defd0",r,!1,{})},72377:(e,n,t)=>{var r=t(1915);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,t(49441).Z)("56b3e6a6",r,!1,{})}}]);