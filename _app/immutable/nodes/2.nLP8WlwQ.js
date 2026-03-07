import{b as de,a as I,d as Ce,f as H,c as ge}from"../chunks/BN5ayv66.js";import{o as Se,h as N,n as re,z as f,q as Ie,ag as Me,t as fe,v as X,w as te,i as Z,aB as _e,aJ as xe,at as ue,f as Le,c as ie,aS as R,e as se,aT as He,s as Ve,M as Oe,aU as Ne,aI as ce,aV as Re,aW as ze,aO as Fe,ac as he,aX as De,F as Be,r as be,p as ye,b as ae,aY as Pe,aG as Ge,m as We,d as Ye,T as K,ae as Ze,aD as we,aZ as ke,a_ as Je,a5 as G,D as je,a$ as qe,aK as Ue,aE as Xe,R as Ke,b0 as Qe,b1 as $e,a7 as A,a8 as y,aR as W,a9 as B,aQ as en,B as pe,a3 as Ae,a6 as Ee,a4 as Te}from"../chunks/DpClGMvR.js";import{d as nn,s as Q,a as ve}from"../chunks/CaSinb4-.js";import{p as ne,i as Y}from"../chunks/DZ5pA-NQ.js";import{s as M}from"../chunks/kqMOlaZw.js";function $(e,n){return n}function tn(e,n,t){for(var l=[],d=n.length,r,o=n.length,u=0;u<d;u++){let E=n[u];ye(E,()=>{if(r){if(r.pending.delete(E),r.done.add(E),r.pending.size===0){var v=e.outrogroups;oe(e,ce(r.done)),v.delete(r),v.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var s=l.length===0&&t!==null;if(s){var p=t,c=p.parentNode;Ge(c),c.append(p),e.items.clear()}oe(e,n,!s)}else r={pending:new Set(n),done:new Set},(e.outrogroups??=new Set).add(r)}function oe(e,n,t=!0){var l;if(e.pending.size>0){l=new Set;for(const o of e.pending.values())for(const u of o)l.add(e.items.get(u).e)}for(var d=0;d<n.length;d++){var r=n[d];if(l?.has(r)){r.f|=R;const o=document.createDocumentFragment();We(r,o)}else Ye(n[d],t)}}var me;function ee(e,n,t,l,d,r=null){var o=e,u=new Map,s=(n&ke)!==0;if(s){var p=e;o=N?X(K(p)):p.appendChild(ie())}N&&re();var c=null,E=Oe(()=>{var a=t();return Ne(a)?a:a==null?[]:ce(a)}),v,x=new Map,L=!0;function z(a){(O.effect.f&Be)===0&&(O.pending.delete(a),O.fallback=c,an(O,v,o,n,l),c!==null&&(v.length===0?(c.f&R)===0?be(c):(c.f^=R,q(c,null,o)):ye(c,()=>{c=null})))}function i(a){O.pending.delete(a)}var b=Se(()=>{v=f(E);var a=v.length;let h=!1;if(N){var C=Ie(o)===Me;C!==(a===0)&&(o=fe(),X(o),te(!1),h=!0)}for(var T=new Set,_=Le,S=Ve(),k=0;k<a;k+=1){N&&Z.nodeType===_e&&Z.data===xe&&(o=Z,h=!0,te(!1));var m=v[k],w=l(m,k),g=L?null:u.get(w);g?(g.v&&ue(g.v,m),g.i&&ue(g.i,k),S&&_.unskip_effect(g.e)):(g=rn(u,L?o:me??=ie(),m,w,k,d,n,t),L||(g.e.f|=R),u.set(w,g)),T.add(w)}if(a===0&&r&&!c&&(L?c=se(()=>r(o)):(c=se(()=>r(me??=ie())),c.f|=R)),a>T.size&&He(),N&&a>0&&X(fe()),!L)if(x.set(_,T),S){for(const[V,F]of u)T.has(V)||_.skip_effect(F.e);_.oncommit(z),_.ondiscard(i)}else z(_);h&&te(!0),f(E)}),O={effect:b,items:u,pending:x,outrogroups:null,fallback:c};L=!1,N&&(o=Z)}function j(e){for(;e!==null&&(e.f&Pe)===0;)e=e.next;return e}function an(e,n,t,l,d){var r=(l&Je)!==0,o=n.length,u=e.items,s=j(e.effect.first),p,c=null,E,v=[],x=[],L,z,i,b;if(r)for(b=0;b<o;b+=1)L=n[b],z=d(L,b),i=u.get(z).e,(i.f&R)===0&&(i.nodes?.a?.measure(),(E??=new Set).add(i));for(b=0;b<o;b+=1){if(L=n[b],z=d(L,b),i=u.get(z).e,e.outrogroups!==null)for(const m of e.outrogroups)m.pending.delete(i),m.done.delete(i);if((i.f&R)!==0)if(i.f^=R,i===s)q(i,null,t);else{var O=c?c.next:s;i===e.effect.last&&(e.effect.last=i.prev),i.prev&&(i.prev.next=i.next),i.next&&(i.next.prev=i.prev),D(e,c,i),D(e,i,O),q(i,O,t),c=i,v=[],x=[],s=j(c.next);continue}if((i.f&ae)!==0&&(be(i),r&&(i.nodes?.a?.unfix(),(E??=new Set).delete(i))),i!==s){if(p!==void 0&&p.has(i)){if(v.length<x.length){var a=x[0],h;c=a.prev;var C=v[0],T=v[v.length-1];for(h=0;h<v.length;h+=1)q(v[h],a,t);for(h=0;h<x.length;h+=1)p.delete(x[h]);D(e,C.prev,T.next),D(e,c,C),D(e,T,a),s=a,c=T,b-=1,v=[],x=[]}else p.delete(i),q(i,s,t),D(e,i.prev,i.next),D(e,i,c===null?e.effect.first:c.next),D(e,c,i),c=i;continue}for(v=[],x=[];s!==null&&s!==i;)(p??=new Set).add(s),x.push(s),s=j(s.next);if(s===null)continue}(i.f&R)===0&&v.push(i),c=i,s=j(i.next)}if(e.outrogroups!==null){for(const m of e.outrogroups)m.pending.size===0&&(oe(e,ce(m.done)),e.outrogroups?.delete(m));e.outrogroups.size===0&&(e.outrogroups=null)}if(s!==null||p!==void 0){var _=[];if(p!==void 0)for(i of p)(i.f&ae)===0&&_.push(i);for(;s!==null;)(s.f&ae)===0&&s!==e.fallback&&_.push(s),s=j(s.next);var S=_.length;if(S>0){var k=(l&ke)!==0&&o===0?t:null;if(r){for(b=0;b<S;b+=1)_[b].nodes?.a?.measure();for(b=0;b<S;b+=1)_[b].nodes?.a?.fix()}tn(e,_,k)}}r&&Ze(()=>{if(E!==void 0)for(i of E)i.nodes?.a?.apply()})}function rn(e,n,t,l,d,r,o,u){var s=(o&Re)!==0?(o&ze)===0?Fe(t,!1,!1):he(t):null,p=(o&De)!==0?he(d):null;return{v:s,i:p,e:se(()=>(r(n,s??t,p??d,u),()=>{e.delete(l)}))}}function q(e,n,t){if(e.nodes)for(var l=e.nodes.start,d=e.nodes.end,r=n&&(n.f&R)===0?n.nodes.start:t;l!==null;){var o=we(l);if(r.before(l),l===d)return;l=o}}function D(e,n,t){n===null?e.effect.first=t:n.next=t,t===null?e.effect.last=n:t.prev=n}function P(e,n,t=!1,l=!1,d=!1){var r=e,o="";G(()=>{var u=je;if(o===(o=n()??"")){N&&re();return}if(u.nodes!==null&&(qe(u.nodes.start,u.nodes.end),u.nodes=null),o!==""){if(N){Z.data;for(var s=re(),p=s;s!==null&&(s.nodeType!==_e||s.data!=="");)p=s,s=we(s);if(s===null)throw Ue(),Xe;de(Z,p),r=X(s);return}var c=t?Qe:l?$e:void 0,E=Ke(t?"svg":l?"math":"template",c);E.innerHTML=o;var v=t||l?E:E.content;if(de(K(v),v.lastChild),t||l)for(;K(v);)r.before(K(v));else r.before(v)}})}function sn(e,n,t){var l=e==null?"":""+e;return l===""?null:l}function le(e,n,t,l,d,r){var o=e.__className;if(N||o!==t||o===void 0){var u=sn(t);(!N||u!==e.getAttribute("class"))&&(u==null?e.removeAttribute("class"):n?e.className=u:e.setAttribute("class",u)),e.__className=t}return r}const on={hero:{intro:`<h1>Firestarter</h1>
<p>I step into complex projects when execution stops moving.</p>
<p>Find the real constraint.<br>Remove structural friction.<br>Restore momentum.</p>
<p>Engineer — making everything from everything.</p>
<p>Sometimes as a strategist.<br>Sometimes as an interim lead.<br>Sometimes hands-on.</p>
<p>The role is defined by the problem — not by a title.</p>
`,contactLinks:[{label:"Email",href:"mailto:a.burdun@gmail.com",icon:null},{label:"LinkedIn",href:"https://linkedin.com/in/dukobpa3",icon:null},{label:"Instagram",href:"https://instagram.com/a.burdun",icon:null},{label:"Telegram",href:"https://t.me/buhomlab",icon:null}]},"what-i-do":`<h1>I work where execution is blocked</h1>
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
`}],footer:null},principles:`<h1>Principles</h1>
<p>Focus on constraints, not noise.</p>
<p>Execution matters more than plans.</p>
<p>Leave small fights for small fighters.</p>
`,closing:`<p>Systems are like trees.</p>
<p>When they are alive, they grow.<br>Otherwise they dry.</p>
`,contact:{intro:`<h1>Contact</h1>
<p>If your project needs a structural reset,<br>or execution feels harder than it should be —</p>
<p>let&#39;s talk.</p>
`,contactLinks:[{label:"Email",href:"mailto:a.burdun@gmail.com",icon:null},{label:"LinkedIn",href:"https://linkedin.com/in/dukobpa3",icon:null},{label:"Instagram",href:"https://instagram.com/a.burdun",icon:null},{label:"Telegram",href:"https://t.me/buhomlab",icon:null}]}},ln=["hero","what-i-do","where-i-step-in","manifesto","how-i-work","what-i-dont-do","background","work-format","principles","closing","contact"],cn={"where-i-step-in":{cards:"column"},"work-format":{cards:"row"}},dn={sections:on,sectionOrder:ln,sectionOptions:cn};function fn(){const{sections:e,sectionOrder:n,sectionOptions:t={}}=dn;return{sections:e,sectionOrder:n,sectionOptions:t}}const Bn=Object.freeze(Object.defineProperty({__proto__:null,load:fn},Symbol.toStringTag,{value:"Module"}));var un=Ce('<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor"></path></svg>');function hn(e,n){let t=ne(n,"size",3,1.25),l=ne(n,"class",3,"");const d=W(()=>`${t()*16}px`);var r=un(),o=A(r);y(r),G(()=>{le(r,0,`icon ${l()??""}`),M(r,"width",f(d)),M(r,"height",f(d)),M(o,"d",n.path)}),I(e,r)}var pn=H('<div class="aside-line"><div class="aside-line__trigger" role="button" tabindex="0"><span class="aside-line__text"><!></span> <span class="aside-line__chevron" aria-hidden="true"> </span></div> <div class="aside-line__body prose" role="region"><!></div></div>');function vn(e,n){let t=en(!1);var l=pn(),d=A(l),r=A(d),o=A(r);P(o,()=>n.trigger),y(r);var u=B(r,2),s=A(u,!0);y(u),y(d);var p=B(d,2),c=A(p);P(c,()=>n.body),y(p),y(l),G(()=>{M(l,"data-aside-id",n.id),M(d,"aria-expanded",f(t)),M(d,"aria-controls",`${n.id??""}-aside-body`),M(d,"id",`${n.id??""}-aside-trigger`),Q(s,f(t)?"▼":"▶"),M(p,"id",`${n.id??""}-aside-body`),M(p,"aria-labelledby",`${n.id??""}-aside-trigger`),M(p,"hidden",!f(t))}),ve("click",d,()=>pe(t,!f(t))),ve("keydown",d,E=>E.key==="Enter"&&pe(t,!f(t))),I(e,l)}nn(["click","keydown"]);var mn="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",gn="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z",_n="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z",bn="M2,21L23,12L2,3V10L17,12L2,14V21Z";const yn={email:mn,linkedin:_n,instagram:gn,telegram:bn};function wn(e){if(!e)return;const n=e.toLowerCase().trim();return yn[n]}var kn=H('<h2 class="section__title"> </h2>'),An=H('<div class="block__intro prose"><!></div>'),En=H('<a class="contact-links__item" rel="noopener noreferrer" target="_blank"><!> <span class="contact-links__label"> </span></a>'),Tn=H('<div class="block block--contact"><!> <nav class="contact-links" aria-label="Contact"></nav></div>'),Cn=H('<div class="prose"><!></div>'),Sn=H('<div class="section__body"></div>'),In=H('<div class="block__intro prose"><!></div>'),Mn=H('<article class="card"><h3 class="card__title"> </h3> <div class="card__body prose"><!></div></article>'),xn=H('<footer class="block__footer prose"><!></footer>'),Ln=H('<div class="block"><!> <div></div> <!></div>'),Hn=H('<div class="section__body prose"><!></div>'),Vn=H("<section><!> <!></section>");function On(e,n){Ae(n,!0);let t=ne(n,"title",3,""),l=ne(n,"cardsLayout",3,"row");const d=a=>typeof a=="object"&&a!==null&&Array.isArray(a.cards),r=a=>typeof a=="object"&&a!==null&&Array.isArray(a.contactLinks),o=a=>typeof a=="object"&&a!==null&&Array.isArray(a.blocks);function u(a){return a.type==="aside"}var s=Vn(),p=A(s);{var c=a=>{var h=kn(),C=A(h,!0);y(h),G(()=>{M(h,"id",`${n.id??""}-heading`),Q(C,t())}),I(a,h)};Y(p,a=>{t()&&a(c)})}var E=B(p,2);{var v=a=>{var h=Tn(),C=A(h);{var T=S=>{var k=An(),m=A(k);P(m,()=>n.html.intro),y(k),I(S,k)};Y(C,S=>{n.html.intro&&S(T)})}var _=B(C,2);ee(_,21,()=>n.html.contactLinks,$,(S,k)=>{const m=W(()=>wn(f(k).icon??f(k).label));var w=En(),g=A(w);{var V=J=>{hn(J,{get path(){return f(m)},size:1.25,class:"contact-links__icon"})};Y(g,J=>{f(m)&&J(V)})}var F=B(g,2),U=A(F,!0);y(F),y(w),G(()=>{M(w,"href",f(k).href),Q(U,f(k).label)}),I(S,w)}),y(_),y(h),I(a,h)},x=W(()=>r(n.html)),L=a=>{var h=Sn();ee(h,21,()=>n.html.blocks,$,(C,T)=>{var _=ge(),S=Te(_);{var k=g=>{var V=Cn(),F=A(V);P(F,()=>f(T).content),y(V),I(g,V)},m=g=>{vn(g,{get id(){return f(T).id},get trigger(){return f(T).trigger},get body(){return f(T).body}})},w=W(()=>u(f(T)));Y(S,g=>{f(T).type==="html"?g(k):f(w)&&g(m,1)})}I(C,_)}),y(h),I(a,h)},z=W(()=>o(n.html)),i=a=>{var h=Ln(),C=A(h);{var T=m=>{var w=In(),g=A(w);P(g,()=>n.html.intro),y(w),I(m,w)};Y(C,m=>{n.html.intro&&m(T)})}var _=B(C,2);ee(_,21,()=>n.html.cards,$,(m,w)=>{var g=Mn(),V=A(g),F=A(V,!0);y(V);var U=B(V,2),J=A(U);P(J,()=>f(w).html),y(U),y(g),G(()=>Q(F,f(w).title)),I(m,g)}),y(_);var S=B(_,2);{var k=m=>{var w=xn(),g=A(w);P(g,()=>n.html.footer),y(w),I(m,w)};Y(S,m=>{n.html.footer&&m(k)})}y(h),G(()=>le(_,1,`block__cards block__cards--${l()??""}`)),I(a,h)},b=W(()=>d(n.html)),O=a=>{var h=Hn(),C=A(h);P(C,()=>n.html),y(h),I(a,h)};Y(E,a=>{f(x)?a(v):f(z)?a(L,1):f(b)?a(i,2):a(O,-1)})}y(s),G(()=>{M(s,"id",n.id),le(s,1,`section section--${n.id??""}`),M(s,"aria-labelledby",t()?`${n.id}-heading`:void 0)}),I(e,s),Ee()}function Pn(e,n){Ae(n,!0);var t=ge(),l=Te(t);ee(l,17,()=>n.data.sectionOrder,$,(d,r)=>{const o=W(()=>n.data.sectionOptions[f(r)]);{let u=W(()=>f(o)?.cards==="row"||f(o)?.cards==="column"?f(o).cards:void 0);On(d,{get id(){return f(r)},get html(){return n.data.sections[f(r)]},get cardsLayout(){return f(u)}})}}),I(e,t),Ee()}export{Pn as component,Bn as universal};
