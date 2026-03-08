import{b as de,a as S,d as Ce,f as H,c as ge}from"../chunks/BN5ayv66.js";import{o as Ie,h as N,n as re,z as u,q as Se,ag as Me,t as ue,v as X,w as te,i as Z,aB as _e,aJ as xe,at as fe,f as Le,c as ie,aS as R,e as se,aT as He,s as Oe,M as Ve,aU as Ne,aI as ce,aV as Re,aW as ze,aO as De,ac as he,aX as Fe,F as Be,r as be,p as ye,b as ae,aY as Pe,aG as Ge,m as We,d as Ye,T as K,ae as Ze,aD as we,aZ as ke,a_ as je,a5 as G,D as Je,a$ as qe,aK as Ue,aE as Xe,R as Ke,b0 as Qe,b1 as $e,a7 as A,a8 as y,aR as W,a9 as B,aQ as en,B as pe,a3 as Ae,a6 as Ee,a4 as Te}from"../chunks/DpClGMvR.js";import{d as nn,s as Q,a as ve}from"../chunks/CaSinb4-.js";import{p as ne,i as Y}from"../chunks/DZ5pA-NQ.js";import{s as M}from"../chunks/kqMOlaZw.js";function $(e,n){return n}function tn(e,n,t){for(var l=[],d=n.length,r,o=n.length,f=0;f<d;f++){let E=n[f];ye(E,()=>{if(r){if(r.pending.delete(E),r.done.add(E),r.pending.size===0){var v=e.outrogroups;oe(e,ce(r.done)),v.delete(r),v.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var s=l.length===0&&t!==null;if(s){var p=t,c=p.parentNode;Ge(c),c.append(p),e.items.clear()}oe(e,n,!s)}else r={pending:new Set(n),done:new Set},(e.outrogroups??=new Set).add(r)}function oe(e,n,t=!0){var l;if(e.pending.size>0){l=new Set;for(const o of e.pending.values())for(const f of o)l.add(e.items.get(f).e)}for(var d=0;d<n.length;d++){var r=n[d];if(l?.has(r)){r.f|=R;const o=document.createDocumentFragment();We(r,o)}else Ye(n[d],t)}}var me;function ee(e,n,t,l,d,r=null){var o=e,f=new Map,s=(n&ke)!==0;if(s){var p=e;o=N?X(K(p)):p.appendChild(ie())}N&&re();var c=null,E=Ve(()=>{var a=t();return Ne(a)?a:a==null?[]:ce(a)}),v,x=new Map,L=!0;function z(a){(V.effect.f&Be)===0&&(V.pending.delete(a),V.fallback=c,an(V,v,o,n,l),c!==null&&(v.length===0?(c.f&R)===0?be(c):(c.f^=R,q(c,null,o)):ye(c,()=>{c=null})))}function i(a){V.pending.delete(a)}var b=Ie(()=>{v=u(E);var a=v.length;let h=!1;if(N){var C=Se(o)===Me;C!==(a===0)&&(o=ue(),X(o),te(!1),h=!0)}for(var T=new Set,_=Le,I=Oe(),k=0;k<a;k+=1){N&&Z.nodeType===_e&&Z.data===xe&&(o=Z,h=!0,te(!1));var m=v[k],w=l(m,k),g=L?null:f.get(w);g?(g.v&&fe(g.v,m),g.i&&fe(g.i,k),I&&_.unskip_effect(g.e)):(g=rn(f,L?o:me??=ie(),m,w,k,d,n,t),L||(g.e.f|=R),f.set(w,g)),T.add(w)}if(a===0&&r&&!c&&(L?c=se(()=>r(o)):(c=se(()=>r(me??=ie())),c.f|=R)),a>T.size&&He(),N&&a>0&&X(ue()),!L)if(x.set(_,T),I){for(const[O,D]of f)T.has(O)||_.skip_effect(D.e);_.oncommit(z),_.ondiscard(i)}else z(_);h&&te(!0),u(E)}),V={effect:b,items:f,pending:x,outrogroups:null,fallback:c};L=!1,N&&(o=Z)}function J(e){for(;e!==null&&(e.f&Pe)===0;)e=e.next;return e}function an(e,n,t,l,d){var r=(l&je)!==0,o=n.length,f=e.items,s=J(e.effect.first),p,c=null,E,v=[],x=[],L,z,i,b;if(r)for(b=0;b<o;b+=1)L=n[b],z=d(L,b),i=f.get(z).e,(i.f&R)===0&&(i.nodes?.a?.measure(),(E??=new Set).add(i));for(b=0;b<o;b+=1){if(L=n[b],z=d(L,b),i=f.get(z).e,e.outrogroups!==null)for(const m of e.outrogroups)m.pending.delete(i),m.done.delete(i);if((i.f&R)!==0)if(i.f^=R,i===s)q(i,null,t);else{var V=c?c.next:s;i===e.effect.last&&(e.effect.last=i.prev),i.prev&&(i.prev.next=i.next),i.next&&(i.next.prev=i.prev),F(e,c,i),F(e,i,V),q(i,V,t),c=i,v=[],x=[],s=J(c.next);continue}if((i.f&ae)!==0&&(be(i),r&&(i.nodes?.a?.unfix(),(E??=new Set).delete(i))),i!==s){if(p!==void 0&&p.has(i)){if(v.length<x.length){var a=x[0],h;c=a.prev;var C=v[0],T=v[v.length-1];for(h=0;h<v.length;h+=1)q(v[h],a,t);for(h=0;h<x.length;h+=1)p.delete(x[h]);F(e,C.prev,T.next),F(e,c,C),F(e,T,a),s=a,c=T,b-=1,v=[],x=[]}else p.delete(i),q(i,s,t),F(e,i.prev,i.next),F(e,i,c===null?e.effect.first:c.next),F(e,c,i),c=i;continue}for(v=[],x=[];s!==null&&s!==i;)(p??=new Set).add(s),x.push(s),s=J(s.next);if(s===null)continue}(i.f&R)===0&&v.push(i),c=i,s=J(i.next)}if(e.outrogroups!==null){for(const m of e.outrogroups)m.pending.size===0&&(oe(e,ce(m.done)),e.outrogroups?.delete(m));e.outrogroups.size===0&&(e.outrogroups=null)}if(s!==null||p!==void 0){var _=[];if(p!==void 0)for(i of p)(i.f&ae)===0&&_.push(i);for(;s!==null;)(s.f&ae)===0&&s!==e.fallback&&_.push(s),s=J(s.next);var I=_.length;if(I>0){var k=(l&ke)!==0&&o===0?t:null;if(r){for(b=0;b<I;b+=1)_[b].nodes?.a?.measure();for(b=0;b<I;b+=1)_[b].nodes?.a?.fix()}tn(e,_,k)}}r&&Ze(()=>{if(E!==void 0)for(i of E)i.nodes?.a?.apply()})}function rn(e,n,t,l,d,r,o,f){var s=(o&Re)!==0?(o&ze)===0?De(t,!1,!1):he(t):null,p=(o&Fe)!==0?he(d):null;return{v:s,i:p,e:se(()=>(r(n,s??t,p??d,f),()=>{e.delete(l)}))}}function q(e,n,t){if(e.nodes)for(var l=e.nodes.start,d=e.nodes.end,r=n&&(n.f&R)===0?n.nodes.start:t;l!==null;){var o=we(l);if(r.before(l),l===d)return;l=o}}function F(e,n,t){n===null?e.effect.first=t:n.next=t,t===null?e.effect.last=n:t.prev=n}function P(e,n,t=!1,l=!1,d=!1){var r=e,o="";G(()=>{var f=Je;if(o===(o=n()??"")){N&&re();return}if(f.nodes!==null&&(qe(f.nodes.start,f.nodes.end),f.nodes=null),o!==""){if(N){Z.data;for(var s=re(),p=s;s!==null&&(s.nodeType!==_e||s.data!=="");)p=s,s=we(s);if(s===null)throw Ue(),Xe;de(Z,p),r=X(s);return}var c=t?Qe:l?$e:void 0,E=Ke(t?"svg":l?"math":"template",c);E.innerHTML=o;var v=t||l?E:E.content;if(de(K(v),v.lastChild),t||l)for(;K(v);)r.before(K(v));else r.before(v)}})}function sn(e,n,t){var l=e==null?"":""+e;return l===""?null:l}function le(e,n,t,l,d,r){var o=e.__className;if(N||o!==t||o===void 0){var f=sn(t);(!N||f!==e.getAttribute("class"))&&(f==null?e.removeAttribute("class"):n?e.className=f:e.setAttribute("class",f)),e.__className=t}return r}const on={hero:{intro:`<h1>Firestarter</h1>
<p>I step into complex projects when execution stops moving.<br>I identify the real constraint and restore momentum.</p>
<p>Engineer — making everything from everything.</p>
`,contactLinks:[{label:"Email",href:"mailto:a.burdun@gmail.com",icon:null},{label:"LinkedIn",href:"https://linkedin.com/in/dukobpa3",icon:null},{label:"Instagram",href:"https://instagram.com/a.burdun",icon:null},{label:"Telegram",href:"https://t.me/buhomlab",icon:null}]},identity:`<p><strong>Engineer</strong> — making everything from everything</p>
<p><strong>Strategist</strong> — finding the real constraint</p>
<p><strong>Integrator</strong> — turning chaos into structure</p>
`,"what-i-do":`<h1>I work where execution is blocked</h1>
<p>Most projects don&#39;t fail because people are incompetent.</p>
<p>They fail because systems become unclear,<br>overloaded,<br>or politically stuck.</p>
<p>At that point the problem is no longer technical —<br>it becomes structural.</p>
<p>That&#39;s where I usually step in.</p>
<p>My work is to identify the real constraint in the system<br>and restore the ability to move forward.</p>
`,"where-i-step-in":{intro:`<h1>Where I step in</h1>
`,cards:[{title:"1. Starting from zero",html:`<p>Early projects move fast but lack structure.<br>This works for a while — until decisions start conflicting and execution slows down.</p>
<p>Typical work:</p>
<ul>
<li>defining a clear execution model</li>
<li>aligning stakeholders around real priorities</li>
<li>separating signal from operational noise</li>
<li>building minimal structure that still allows speed</li>
</ul>
<p><strong>Goal:</strong> consistent execution instead of improvisation.</p>
`},{title:"2. When a system becomes stuck",html:`<p>Many teams reach a point where effort grows but results stop improving.</p>
<p>This usually means the system accumulated friction:</p>
<ul>
<li>unclear ownership</li>
<li>architectural debt</li>
<li>decision bottlenecks</li>
<li>political noise</li>
</ul>
<p>Typical work:</p>
<ul>
<li>identifying the real constraint</li>
<li>simplifying architecture and responsibilities</li>
<li>restoring decision velocity</li>
<li>resetting the execution model</li>
</ul>
<p><strong>Goal:</strong> remove friction so the system starts moving again.</p>
`},{title:"3. Launching a new direction",html:`<p>Sometimes a company needs to open a new direction while the main system keeps running.</p>
<p>Typical work:</p>
<ul>
<li>isolating the new initiative from legacy noise</li>
<li>defining structure and ownership early</li>
<li>building a minimal execution framework</li>
<li>stabilizing the first stage of growth</li>
</ul>
<p><strong>Goal:</strong> launch something new without breaking the existing system.</p>
`}],footer:null},manifesto:`<p>Systems rarely collapse because people are weak.</p>
<p>They collapse because structure slowly dissolves.</p>
<p>Fix the structure —<br>and execution returns.</p>
`,"how-i-work":`<h1>How I work</h1>
<p>I don&#39;t sell predefined roles.</p>
<p>The first step is always diagnosis.</p>
<p>I focus on understanding:</p>
<ul>
<li>where decisions are actually made</li>
<li>where the real constraint lives</li>
<li>what structure already exists</li>
<li>which parts of the system should stay untouched</li>
</ul>
<p>Only then the role becomes clear.</p>
<p>Sometimes that means acting as a strategist.<br>Sometimes as interim leadership.<br>Sometimes temporarily helping execution.</p>
<p>Leave small fights for small fighters.</p>
<p>The goal is always the same:</p>
<p>restore a system that can move without constant intervention.</p>
`,"what-i-dont-do":`<h1>What I don&#39;t do</h1>
<p>I&#39;m usually not the right person if:</p>
<ul>
<li>the goal is to maintain the current process rather than change it</li>
<li>the team wants validation instead of diagnosis</li>
<li>decisions are expected to be avoided rather than made</li>
<li>the organization prefers meetings over execution</li>
</ul>
<p>My work only makes sense when there is real willingness to change the system.</p>
`,background:{blocks:[{type:"html",content:`<h1>Background</h1>
<p>More than two decades inside complex technical organizations.</p>
<p>Work included:</p>
<ul>
<li>restructuring engineering teams</li>
<li>leading R&amp;D directions</li>
<li>designing system architectures</li>
<li>navigating difficult project transitions</li>
</ul>
`},{type:"aside",id:"technical-footnote",trigger:`<p>Comfortable operating between strategy and deep technical work.</p>
`,body:`<p>Technical background spans from low-level systems work<br>(ANSI-C, C/C++, Go)</p>
<p>to product stacks and platforms<br>(C#, ActionScript, JavaScript, TypeScript, Java and others)</p>
<p>as well as delivery pipelines and infrastructure<br>(GitHub Actions, Jenkins, TeamCity and similar environments).</p>
<p>In other words — if needed, I can remove blockers directly.</p>
`}]},"work-format":{intro:`<h1>Typical engagement formats</h1>
<p>The exact format depends on the situation.</p>
`,cards:[{title:"Fractional involvement",html:`<p>Regular strategic participation while the system stabilizes.</p>
`},{title:"Focused intervention",html:`<p>A limited period to identify constraints and reset execution.</p>
`},{title:"Architecture and system review",html:`<p>Independent structural diagnosis and recommendations.</p>
`}],footer:null},"about-photo":`<p><img src="/photo1.jpg" alt="Oleksandr B."></p>
<p><strong>Oleksandr B.</strong><br>Engineering leader / system architect<br>20+ years building complex systems</p>
`,principles:`<h1>Principles</h1>
<p>Focus on constraints, not noise.</p>
<p>Execution matters more than plans.</p>
<p>Leave small fights for small fighters.</p>
<p>Healthy systems grow. Broken systems stall.</p>
`,closing:`<p>Systems are like trees.</p>
<p>When they are alive, they grow.<br>Otherwise they dry.</p>
`,contact:{intro:`<h1>Contact</h1>
<p>If your project needs a structural reset,<br>or execution feels harder than it should be —</p>
<p>let&#39;s talk.</p>
`,contactLinks:[{label:"Email",href:"mailto:a.burdun@gmail.com",icon:null},{label:"LinkedIn",href:"https://linkedin.com/in/dukobpa3",icon:null},{label:"Instagram",href:"https://instagram.com/a.burdun",icon:null},{label:"Telegram",href:"https://t.me/buhomlab",icon:null}]}},ln=["hero","identity","what-i-do","where-i-step-in","manifesto","how-i-work","what-i-dont-do","background","work-format","about-photo","principles","closing","contact"],cn={"where-i-step-in":{cards:"column"},"work-format":{cards:"row"}},dn={sections:on,sectionOrder:ln,sectionOptions:cn};function un(){const{sections:e,sectionOrder:n,sectionOptions:t={}}=dn;return{sections:e,sectionOrder:n,sectionOptions:t}}const Bn=Object.freeze(Object.defineProperty({__proto__:null,load:un},Symbol.toStringTag,{value:"Module"}));var fn=Ce('<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor"></path></svg>');function hn(e,n){let t=ne(n,"size",3,1.25),l=ne(n,"class",3,"");const d=W(()=>`${t()*16}px`);var r=fn(),o=A(r);y(r),G(()=>{le(r,0,`icon ${l()??""}`),M(r,"width",u(d)),M(r,"height",u(d)),M(o,"d",n.path)}),S(e,r)}var pn=H('<div class="aside-line"><div class="aside-line__trigger" role="button" tabindex="0"><span class="aside-line__text"><!></span> <span class="aside-line__chevron" aria-hidden="true"> </span></div> <div class="aside-line__body prose" role="region"><!></div></div>');function vn(e,n){let t=en(!1);var l=pn(),d=A(l),r=A(d),o=A(r);P(o,()=>n.trigger),y(r);var f=B(r,2),s=A(f,!0);y(f),y(d);var p=B(d,2),c=A(p);P(c,()=>n.body),y(p),y(l),G(()=>{M(l,"data-aside-id",n.id),M(d,"aria-expanded",u(t)),M(d,"aria-controls",`${n.id??""}-aside-body`),M(d,"id",`${n.id??""}-aside-trigger`),Q(s,u(t)?"▼":"▶"),M(p,"id",`${n.id??""}-aside-body`),M(p,"aria-labelledby",`${n.id??""}-aside-trigger`),M(p,"hidden",!u(t))}),ve("click",d,()=>pe(t,!u(t))),ve("keydown",d,E=>E.key==="Enter"&&pe(t,!u(t))),S(e,l)}nn(["click","keydown"]);var mn="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",gn="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z",_n="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z",bn="M2,21L23,12L2,3V10L17,12L2,14V21Z";const yn={email:mn,linkedin:_n,instagram:gn,telegram:bn};function wn(e){if(!e)return;const n=e.toLowerCase().trim();return yn[n]}var kn=H('<h2 class="section__title"> </h2>'),An=H('<div class="block__intro prose"><!></div>'),En=H('<a class="contact-links__item" rel="noopener noreferrer" target="_blank"><!> <span class="contact-links__label"> </span></a>'),Tn=H('<div class="block block--contact"><!> <nav class="contact-links" aria-label="Contact"></nav></div>'),Cn=H('<div class="prose"><!></div>'),In=H('<div class="section__body"></div>'),Sn=H('<div class="block__intro prose"><!></div>'),Mn=H('<article class="card"><h3 class="card__title"> </h3> <div class="card__body prose"><!></div></article>'),xn=H('<footer class="block__footer prose"><!></footer>'),Ln=H('<div class="block"><!> <div></div> <!></div>'),Hn=H('<div class="section__body prose"><!></div>'),On=H("<section><!> <!></section>");function Vn(e,n){Ae(n,!0);let t=ne(n,"title",3,""),l=ne(n,"cardsLayout",3,"row");const d=a=>typeof a=="object"&&a!==null&&Array.isArray(a.cards),r=a=>typeof a=="object"&&a!==null&&Array.isArray(a.contactLinks),o=a=>typeof a=="object"&&a!==null&&Array.isArray(a.blocks);function f(a){return a.type==="aside"}var s=On(),p=A(s);{var c=a=>{var h=kn(),C=A(h,!0);y(h),G(()=>{M(h,"id",`${n.id??""}-heading`),Q(C,t())}),S(a,h)};Y(p,a=>{t()&&a(c)})}var E=B(p,2);{var v=a=>{var h=Tn(),C=A(h);{var T=I=>{var k=An(),m=A(k);P(m,()=>n.html.intro),y(k),S(I,k)};Y(C,I=>{n.html.intro&&I(T)})}var _=B(C,2);ee(_,21,()=>n.html.contactLinks,$,(I,k)=>{const m=W(()=>wn(u(k).icon??u(k).label));var w=En(),g=A(w);{var O=j=>{hn(j,{get path(){return u(m)},size:1.25,class:"contact-links__icon"})};Y(g,j=>{u(m)&&j(O)})}var D=B(g,2),U=A(D,!0);y(D),y(w),G(()=>{M(w,"href",u(k).href),Q(U,u(k).label)}),S(I,w)}),y(_),y(h),S(a,h)},x=W(()=>r(n.html)),L=a=>{var h=In();ee(h,21,()=>n.html.blocks,$,(C,T)=>{var _=ge(),I=Te(_);{var k=g=>{var O=Cn(),D=A(O);P(D,()=>u(T).content),y(O),S(g,O)},m=g=>{vn(g,{get id(){return u(T).id},get trigger(){return u(T).trigger},get body(){return u(T).body}})},w=W(()=>f(u(T)));Y(I,g=>{u(T).type==="html"?g(k):u(w)&&g(m,1)})}S(C,_)}),y(h),S(a,h)},z=W(()=>o(n.html)),i=a=>{var h=Ln(),C=A(h);{var T=m=>{var w=Sn(),g=A(w);P(g,()=>n.html.intro),y(w),S(m,w)};Y(C,m=>{n.html.intro&&m(T)})}var _=B(C,2);ee(_,21,()=>n.html.cards,$,(m,w)=>{var g=Mn(),O=A(g),D=A(O,!0);y(O);var U=B(O,2),j=A(U);P(j,()=>u(w).html),y(U),y(g),G(()=>Q(D,u(w).title)),S(m,g)}),y(_);var I=B(_,2);{var k=m=>{var w=xn(),g=A(w);P(g,()=>n.html.footer),y(w),S(m,w)};Y(I,m=>{n.html.footer&&m(k)})}y(h),G(()=>le(_,1,`block__cards block__cards--${l()??""}`)),S(a,h)},b=W(()=>d(n.html)),V=a=>{var h=Hn(),C=A(h);P(C,()=>n.html),y(h),S(a,h)};Y(E,a=>{u(x)?a(v):u(z)?a(L,1):u(b)?a(i,2):a(V,-1)})}y(s),G(()=>{M(s,"id",n.id),le(s,1,`section section--${n.id??""}`),M(s,"aria-labelledby",t()?`${n.id}-heading`:void 0)}),S(e,s),Ee()}function Pn(e,n){Ae(n,!0);var t=ge(),l=Te(t);ee(l,17,()=>n.data.sectionOrder,$,(d,r)=>{const o=W(()=>n.data.sectionOptions[u(r)]);{let f=W(()=>u(o)?.cards==="row"||u(o)?.cards==="column"?u(o).cards:void 0);Vn(d,{get id(){return u(r)},get html(){return n.data.sections[u(r)]},get cardsLayout(){return u(f)}})}}),S(e,t),Ee()}export{Pn as component,Bn as universal};
