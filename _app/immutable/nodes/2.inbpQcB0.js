import{b as de,a as C,d as Ie,f as H,c as ge}from"../chunks/BN5ayv66.js";import{o as xe,h as V,n as re,z as u,q as Ce,ag as Se,t as ue,v as X,w as te,i as Y,aB as ye,aJ as Me,at as pe,f as Le,c as ie,aS as N,e as se,aT as He,s as Oe,M as ze,aU as Ve,aI as ce,aV as Ne,aW as Re,aO as De,ac as he,aX as Fe,F as Be,r as be,p as _e,b as ae,aY as Pe,aG as We,m as Ge,d as je,T as K,ae as Ye,aD as we,aZ as ke,a_ as Ze,a5 as W,D as qe,a$ as Je,aK as Ue,aE as Xe,R as Ke,b0 as Qe,b1 as $e,a7 as A,a8 as _,aR as G,a9 as B,aQ as en,B as fe,a3 as Ae,a6 as Te,a4 as Ee}from"../chunks/DpClGMvR.js";import{d as nn,s as Q,a as me}from"../chunks/CaSinb4-.js";import{p as ne,i as j}from"../chunks/DZ5pA-NQ.js";import{s as S}from"../chunks/kqMOlaZw.js";function $(e,n){return n}function tn(e,n,t){for(var l=[],d=n.length,r,o=n.length,p=0;p<d;p++){let T=n[p];_e(T,()=>{if(r){if(r.pending.delete(T),r.done.add(T),r.pending.size===0){var m=e.outrogroups;oe(e,ce(r.done)),m.delete(r),m.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var s=l.length===0&&t!==null;if(s){var f=t,c=f.parentNode;We(c),c.append(f),e.items.clear()}oe(e,n,!s)}else r={pending:new Set(n),done:new Set},(e.outrogroups??=new Set).add(r)}function oe(e,n,t=!0){var l;if(e.pending.size>0){l=new Set;for(const o of e.pending.values())for(const p of o)l.add(e.items.get(p).e)}for(var d=0;d<n.length;d++){var r=n[d];if(l?.has(r)){r.f|=N;const o=document.createDocumentFragment();Ge(r,o)}else je(n[d],t)}}var ve;function ee(e,n,t,l,d,r=null){var o=e,p=new Map,s=(n&ke)!==0;if(s){var f=e;o=V?X(K(f)):f.appendChild(ie())}V&&re();var c=null,T=ze(()=>{var a=t();return Ve(a)?a:a==null?[]:ce(a)}),m,M=new Map,L=!0;function R(a){(z.effect.f&Be)===0&&(z.pending.delete(a),z.fallback=c,an(z,m,o,n,l),c!==null&&(m.length===0?(c.f&N)===0?be(c):(c.f^=N,J(c,null,o)):_e(c,()=>{c=null})))}function i(a){z.pending.delete(a)}var b=xe(()=>{m=u(T);var a=m.length;let h=!1;if(V){var I=Ce(o)===Se;I!==(a===0)&&(o=ue(),X(o),te(!1),h=!0)}for(var E=new Set,y=Le,x=Oe(),k=0;k<a;k+=1){V&&Y.nodeType===ye&&Y.data===Me&&(o=Y,h=!0,te(!1));var v=m[k],w=l(v,k),g=L?null:p.get(w);g?(g.v&&pe(g.v,v),g.i&&pe(g.i,k),x&&y.unskip_effect(g.e)):(g=rn(p,L?o:ve??=ie(),v,w,k,d,n,t),L||(g.e.f|=N),p.set(w,g)),E.add(w)}if(a===0&&r&&!c&&(L?c=se(()=>r(o)):(c=se(()=>r(ve??=ie())),c.f|=N)),a>E.size&&He(),V&&a>0&&X(ue()),!L)if(M.set(y,E),x){for(const[O,D]of p)E.has(O)||y.skip_effect(D.e);y.oncommit(R),y.ondiscard(i)}else R(y);h&&te(!0),u(T)}),z={effect:b,items:p,pending:M,outrogroups:null,fallback:c};L=!1,V&&(o=Y)}function q(e){for(;e!==null&&(e.f&Pe)===0;)e=e.next;return e}function an(e,n,t,l,d){var r=(l&Ze)!==0,o=n.length,p=e.items,s=q(e.effect.first),f,c=null,T,m=[],M=[],L,R,i,b;if(r)for(b=0;b<o;b+=1)L=n[b],R=d(L,b),i=p.get(R).e,(i.f&N)===0&&(i.nodes?.a?.measure(),(T??=new Set).add(i));for(b=0;b<o;b+=1){if(L=n[b],R=d(L,b),i=p.get(R).e,e.outrogroups!==null)for(const v of e.outrogroups)v.pending.delete(i),v.done.delete(i);if((i.f&N)!==0)if(i.f^=N,i===s)J(i,null,t);else{var z=c?c.next:s;i===e.effect.last&&(e.effect.last=i.prev),i.prev&&(i.prev.next=i.next),i.next&&(i.next.prev=i.prev),F(e,c,i),F(e,i,z),J(i,z,t),c=i,m=[],M=[],s=q(c.next);continue}if((i.f&ae)!==0&&(be(i),r&&(i.nodes?.a?.unfix(),(T??=new Set).delete(i))),i!==s){if(f!==void 0&&f.has(i)){if(m.length<M.length){var a=M[0],h;c=a.prev;var I=m[0],E=m[m.length-1];for(h=0;h<m.length;h+=1)J(m[h],a,t);for(h=0;h<M.length;h+=1)f.delete(M[h]);F(e,I.prev,E.next),F(e,c,I),F(e,E,a),s=a,c=E,b-=1,m=[],M=[]}else f.delete(i),J(i,s,t),F(e,i.prev,i.next),F(e,i,c===null?e.effect.first:c.next),F(e,c,i),c=i;continue}for(m=[],M=[];s!==null&&s!==i;)(f??=new Set).add(s),M.push(s),s=q(s.next);if(s===null)continue}(i.f&N)===0&&m.push(i),c=i,s=q(i.next)}if(e.outrogroups!==null){for(const v of e.outrogroups)v.pending.size===0&&(oe(e,ce(v.done)),e.outrogroups?.delete(v));e.outrogroups.size===0&&(e.outrogroups=null)}if(s!==null||f!==void 0){var y=[];if(f!==void 0)for(i of f)(i.f&ae)===0&&y.push(i);for(;s!==null;)(s.f&ae)===0&&s!==e.fallback&&y.push(s),s=q(s.next);var x=y.length;if(x>0){var k=(l&ke)!==0&&o===0?t:null;if(r){for(b=0;b<x;b+=1)y[b].nodes?.a?.measure();for(b=0;b<x;b+=1)y[b].nodes?.a?.fix()}tn(e,y,k)}}r&&Ye(()=>{if(T!==void 0)for(i of T)i.nodes?.a?.apply()})}function rn(e,n,t,l,d,r,o,p){var s=(o&Ne)!==0?(o&Re)===0?De(t,!1,!1):he(t):null,f=(o&Fe)!==0?he(d):null;return{v:s,i:f,e:se(()=>(r(n,s??t,f??d,p),()=>{e.delete(l)}))}}function J(e,n,t){if(e.nodes)for(var l=e.nodes.start,d=e.nodes.end,r=n&&(n.f&N)===0?n.nodes.start:t;l!==null;){var o=we(l);if(r.before(l),l===d)return;l=o}}function F(e,n,t){n===null?e.effect.first=t:n.next=t,t===null?e.effect.last=n:t.prev=n}function P(e,n,t=!1,l=!1,d=!1){var r=e,o="";W(()=>{var p=qe;if(o===(o=n()??"")){V&&re();return}if(p.nodes!==null&&(Je(p.nodes.start,p.nodes.end),p.nodes=null),o!==""){if(V){Y.data;for(var s=re(),f=s;s!==null&&(s.nodeType!==ye||s.data!=="");)f=s,s=we(s);if(s===null)throw Ue(),Xe;de(Y,f),r=X(s);return}var c=t?Qe:l?$e:void 0,T=Ke(t?"svg":l?"math":"template",c);T.innerHTML=o;var m=t||l?T:T.content;if(de(K(m),m.lastChild),t||l)for(;K(m);)r.before(K(m));else r.before(m)}})}function sn(e,n,t){var l=e==null?"":""+e;return l===""?null:l}function le(e,n,t,l,d,r){var o=e.__className;if(V||o!==t||o===void 0){var p=sn(t);(!V||p!==e.getAttribute("class"))&&(p==null?e.removeAttribute("class"):n?e.className=p:e.setAttribute("class",p)),e.__className=t}return r}const on={hero:{intro:`<h1>Firestarter</h1>
<p>I step into complex projects when execution stops moving.</p>
<p>Or earlier — before it does.</p>
<p>Identify the real constraint.<br>Restore momentum.</p>
`,contactLinks:[{label:"Email",href:"mailto:a.burdun@gmail.com",icon:null},{label:"LinkedIn",href:"https://linkedin.com/in/dukobpa3",icon:null},{label:"Telegram",href:"https://t.me/Dukobpa3",icon:null}]},identity:`<p>Strategist — identify the real constraint</p>
<p>Integrator — make systems actually work together</p>
<p>Engineer — build what the system is missing</p>
`,"what-i-do":`<h1>I work where execution is blocked</h1>
<p>Most projects don&#39;t fail because people are incompetent.</p>
<p>They fail because systems become unclear, overloaded, or politically stuck.</p>
<p>That&#39;s where I step in — to identify the real constraint and make the system move again.</p>
`,"where-i-step-in":{intro:`<h1>Where I step in</h1>
`,cards:[{title:"Starting from zero",html:`<p>Early-stage projects often move fast — but without structure.</p>
<p>That works for a while.<br>But small mistakes here compound quickly and become hard to fix later.</p>
<p>Typical interventions:</p>
<ul>
<li>defining a clear execution model</li>
<li>aligning stakeholders around real priorities</li>
<li>separating signal from operational noise</li>
<li>building minimal structure that still allows speed</li>
</ul>
<p><strong>Goal:</strong> build structure early so growth doesn&#39;t break execution later.</p>
`},{title:"When a system becomes stuck",html:`<p>Many teams reach a point where effort grows but results stop improving.</p>
<p>This usually means the system accumulated friction:</p>
<ul>
<li>unclear ownership</li>
<li>architectural debt</li>
<li>decision bottlenecks</li>
<li>political noise</li>
</ul>
<p>Typical interventions:</p>
<ul>
<li>identifying the real constraint</li>
<li>simplifying architecture and responsibilities</li>
<li>restoring decision velocity</li>
<li>resetting the execution model</li>
</ul>
<p><strong>Goal:</strong> remove friction so the system starts moving again.</p>
`},{title:"Launching a new direction",html:`<p>Sometimes a company needs to open a new direction while the main system keeps running.</p>
<p>Typical interventions:</p>
<ul>
<li>isolating the new initiative from legacy noise</li>
<li>defining structure and ownership early</li>
<li>building a minimal execution framework</li>
<li>stabilizing the first stage of growth</li>
</ul>
<p><strong>Goal:</strong> launch something new without breaking the existing system.</p>
`}],footer:null},results:`<h1>What changes after I step in</h1>
<p>The goal is not to add more effort.</p>
<p>The goal is to restore a system that can move again.</p>
<p>Typical outcomes:</p>
<ul>
<li>decisions become faster and clearer</li>
<li>ownership becomes explicit instead of assumed</li>
<li>architecture aligns with how the system actually evolves</li>
<li>teams stop fighting symptoms and start addressing real constraints</li>
<li>execution regains predictability</li>
</ul>
<p>Progress becomes visible within weeks because the system stops working against itself.</p>
`,manifesto:`<p>Systems rarely collapse because people are weak.</p>
<p>They collapse because structure dissolves.</p>
<p>Fix the structure and execution returns.</p>
`,perspective:`<h1>How I see systems</h1>
<p>Most organizations don&#39;t slow down because people work less.</p>
<p>They slow down because complexity grows faster than clarity.</p>
<p>At some point decisions become slower than problems.</p>
<p>When that happens, the system stops moving.</p>
<p>The work is not adding more effort.</p>
<p>The work is restoring structure.</p>
`,"failure-modes":`<h1>Typical failure modes</h1>
<p>Over the years the same patterns appear again and again.</p>
<ul>
<li>architecture grows faster than shared understanding</li>
<li>decision ownership becomes unclear</li>
<li>teams optimize locally but the system slows globally</li>
<li>delivery pressure accumulates technical debt faster than it can be repaid</li>
<li>organizations add process when the real problem is structure</li>
</ul>
<p>At that point execution stops looking like a technical problem.</p>
<p>It becomes a systems problem.</p>
`,"how-i-work":`<h1>How I work</h1>
<p>I don&#39;t sell predefined roles.</p>
<p>The first step is always diagnosis.</p>
<ul>
<li>where decisions are actually made in practice</li>
<li>where the real constraint lives</li>
<li>what structure already exists</li>
<li>which parts of the system should stay untouched</li>
</ul>
<p>Engagement ranges from a single session to ongoing involvement depending on how deep the problem goes.</p>
<p>Only then does the role become clear.</p>
<p>Sometimes that means acting as a strategist.<br>Sometimes as interim leadership.<br>Sometimes temporarily helping execution.</p>
<p>Leave small fights for small fighters.</p>
<p>The goal is always the same: restore a system that can move without constant intervention.</p>
`,deliverables:`<h1>What you get</h1>
<p>Typical outputs:</p>
<ul>
<li>a clear map of the system and its real constraints</li>
<li>concrete changes to structure, ownership and decision flow</li>
<li>simplified architecture and responsibilities</li>
<li>a reset execution model the team can actually follow</li>
</ul>
<p>Not a report — but a system that works better than before.</p>
`,reality:`<h1>Reality</h1>
<p>Not every project can be fixed.</p>
<p>Sometimes the real constraint is political.<br>Sometimes it&#39;s structural debt accumulated over years.<br>Sometimes the organization simply isn&#39;t ready to change.</p>
<p>In those cases the most valuable outcome is understanding the real situation early.</p>
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
<p>More than two decades inside complex technical organizations, working across structure, architecture and execution.</p>
<p>Work included:</p>
<ul>
<li>restructuring engineering teams</li>
<li>leading R&amp;D directions</li>
<li>designing system architectures</li>
<li>navigating difficult project transitions</li>
</ul>
`},{type:"aside",id:"technical-footnote",trigger:`<p>Comfortable operating between strategy and deep technical work.</p>
`,body:`<p>Technical background ranges from low-level systems engineering
(C/C++, Go, Lua, IoT and similar environments)</p>
<p>to modern product stacks and distributed platforms
(JavaScript / TypeScript ecosystems, backend services, system architecture)</p>
<p>as well as delivery infrastructure and engineering workflows
(GitHub Actions, Jenkins, TeamCity and comparable CI/CD environments).</p>
<p>Work also includes building AI-assisted tools and systems,
integrating modern AI capabilities into engineering workflows and decision-making.</p>
<p>If necessary, I can remove blockers directly — not only design around them.</p>
`}]},"work-format":{intro:`<h1>Typical engagement formats</h1>
<p>The exact format depends on the situation — from short advisory sessions to ongoing fractional involvement.</p>
`,cards:[{title:"Fractional involvement",html:`<p>Regular strategic participation (part-time) while the system stabilizes.</p>
`},{title:"Focused intervention",html:`<p>A limited period to identify constraints and reset execution.</p>
`},{title:"Architecture and system review",html:`<p>Independent structural diagnosis and recommendations.</p>
`}],footer:null},"about-photo":`<p><img src="/photo1.jpg" alt="Oleksandr B."></p>
<p><strong>Oleksandr B.</strong><br>
Engineering leader / system architect<br>
<span class="about-photo__years">20+ years building complex systems</span><br><br><br><br>
<span class="about-photo__accent">Engineer — making everything from everything</span></p>
`,principles:`<h1>Principles</h1>
<p>Focus on constraints, not noise.</p>
<p>Execution matters more than plans.</p>
<p>Leave small fights for small fighters.</p>
<p>Healthy systems grow.<br>Broken systems stall.</p>
`,"current-focus":`<h1>Current focus</h1>
<p>Right now I&#39;m most interested in situations where:</p>
<ul>
<li>execution slowed down despite strong teams</li>
<li>a system became politically or structurally stuck</li>
<li>early-stage systems need to be set up correctly from the start</li>
<li>a new direction needs to be launched inside an existing organization</li>
</ul>
<p>Perfect systems are boring.</p>
<p>The interesting work starts when something important stops moving.</p>
`,closing:`<p>Systems either move or decay.</p>
`,contact:{intro:`<h1>Contact</h1>
<p>If your project needs a structural reset, or execution feels harder than it should be — reach out.</p>
<p>A short conversation is usually enough to identify the real constraint and define the next step.</p>
`,contactLinks:[{label:"Email",href:"mailto:a.burdun@gmail.com",icon:null},{label:"LinkedIn",href:"https://linkedin.com/in/dukobpa3",icon:null},{label:"Telegram",href:"https://t.me/Dukobpa3",icon:null}]}},ln=["hero","identity","what-i-do","where-i-step-in","results","manifesto","perspective","failure-modes","how-i-work","deliverables","reality","what-i-dont-do","background","work-format","about-photo","principles","current-focus","closing","contact"],cn={"where-i-step-in":{cards:"column"},"work-format":{cards:"row"}},dn={sections:on,sectionOrder:ln,sectionOptions:cn};function un(){const{sections:e,sectionOrder:n,sectionOptions:t={}}=dn;return{sections:e,sectionOrder:n,sectionOptions:t}}const Bn=Object.freeze(Object.defineProperty({__proto__:null,load:un},Symbol.toStringTag,{value:"Module"}));var pn=Ie('<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor"></path></svg>');function hn(e,n){let t=ne(n,"size",3,1.25),l=ne(n,"class",3,"");const d=G(()=>`${t()*16}px`);var r=pn(),o=A(r);_(r),W(()=>{le(r,0,`icon ${l()??""}`),S(r,"width",u(d)),S(r,"height",u(d)),S(o,"d",n.path)}),C(e,r)}var fn=H('<div class="aside-line"><div class="aside-line__trigger" role="button" tabindex="0"><span class="aside-line__text"><!></span> <span class="aside-line__chevron" aria-hidden="true"> </span></div> <div class="aside-line__body prose" role="region"><!></div></div>');function mn(e,n){let t=en(!1);var l=fn(),d=A(l),r=A(d),o=A(r);P(o,()=>n.trigger),_(r);var p=B(r,2),s=A(p,!0);_(p),_(d);var f=B(d,2),c=A(f);P(c,()=>n.body),_(f),_(l),W(()=>{S(l,"data-aside-id",n.id),S(d,"aria-expanded",u(t)),S(d,"aria-controls",`${n.id??""}-aside-body`),S(d,"id",`${n.id??""}-aside-trigger`),Q(s,u(t)?"▼":"▶"),S(f,"id",`${n.id??""}-aside-body`),S(f,"aria-labelledby",`${n.id??""}-aside-trigger`),S(f,"hidden",!u(t))}),me("click",d,()=>fe(t,!u(t))),me("keydown",d,T=>T.key==="Enter"&&fe(t,!u(t))),C(e,l)}nn(["click","keydown"]);var vn="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",gn="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z",yn="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z",bn="M2,21L23,12L2,3V10L17,12L2,14V21Z";const _n={email:vn,linkedin:yn,instagram:gn,telegram:bn};function wn(e){if(!e)return;const n=e.toLowerCase().trim();return _n[n]}var kn=H('<h2 class="section__title"> </h2>'),An=H('<div class="block__intro prose"><!></div>'),Tn=H('<a class="contact-links__item" rel="noopener noreferrer" target="_blank"><!> <span class="contact-links__label"> </span></a>'),En=H('<div class="block block--contact"><!> <nav class="contact-links" aria-label="Contact"></nav></div>'),In=H('<div class="prose"><!></div>'),xn=H('<div class="section__body"></div>'),Cn=H('<div class="block__intro prose"><!></div>'),Sn=H('<article class="card"><h3 class="card__title"> </h3> <div class="card__body prose"><!></div></article>'),Mn=H('<footer class="block__footer prose"><!></footer>'),Ln=H('<div class="block"><!> <div></div> <!></div>'),Hn=H('<div class="section__body prose"><!></div>'),On=H("<section><!> <!></section>");function zn(e,n){Ae(n,!0);let t=ne(n,"title",3,""),l=ne(n,"cardsLayout",3,"row");const d=a=>typeof a=="object"&&a!==null&&Array.isArray(a.cards),r=a=>typeof a=="object"&&a!==null&&Array.isArray(a.contactLinks),o=a=>typeof a=="object"&&a!==null&&Array.isArray(a.blocks);function p(a){return a.type==="aside"}var s=On(),f=A(s);{var c=a=>{var h=kn(),I=A(h,!0);_(h),W(()=>{S(h,"id",`${n.id??""}-heading`),Q(I,t())}),C(a,h)};j(f,a=>{t()&&a(c)})}var T=B(f,2);{var m=a=>{var h=En(),I=A(h);{var E=x=>{var k=An(),v=A(k);P(v,()=>n.html.intro),_(k),C(x,k)};j(I,x=>{n.html.intro&&x(E)})}var y=B(I,2);ee(y,21,()=>n.html.contactLinks,$,(x,k)=>{const v=G(()=>wn(u(k).icon??u(k).label));var w=Tn(),g=A(w);{var O=Z=>{hn(Z,{get path(){return u(v)},size:1.25,class:"contact-links__icon"})};j(g,Z=>{u(v)&&Z(O)})}var D=B(g,2),U=A(D,!0);_(D),_(w),W(()=>{S(w,"href",u(k).href),Q(U,u(k).label)}),C(x,w)}),_(y),_(h),C(a,h)},M=G(()=>r(n.html)),L=a=>{var h=xn();ee(h,21,()=>n.html.blocks,$,(I,E)=>{var y=ge(),x=Ee(y);{var k=g=>{var O=In(),D=A(O);P(D,()=>u(E).content),_(O),C(g,O)},v=g=>{mn(g,{get id(){return u(E).id},get trigger(){return u(E).trigger},get body(){return u(E).body}})},w=G(()=>p(u(E)));j(x,g=>{u(E).type==="html"?g(k):u(w)&&g(v,1)})}C(I,y)}),_(h),C(a,h)},R=G(()=>o(n.html)),i=a=>{var h=Ln(),I=A(h);{var E=v=>{var w=Cn(),g=A(w);P(g,()=>n.html.intro),_(w),C(v,w)};j(I,v=>{n.html.intro&&v(E)})}var y=B(I,2);ee(y,21,()=>n.html.cards,$,(v,w)=>{var g=Sn(),O=A(g),D=A(O,!0);_(O);var U=B(O,2),Z=A(U);P(Z,()=>u(w).html),_(U),_(g),W(()=>Q(D,u(w).title)),C(v,g)}),_(y);var x=B(y,2);{var k=v=>{var w=Mn(),g=A(w);P(g,()=>n.html.footer),_(w),C(v,w)};j(x,v=>{n.html.footer&&v(k)})}_(h),W(()=>le(y,1,`block__cards block__cards--${l()??""}`)),C(a,h)},b=G(()=>d(n.html)),z=a=>{var h=Hn(),I=A(h);P(I,()=>n.html),_(h),C(a,h)};j(T,a=>{u(M)?a(m):u(R)?a(L,1):u(b)?a(i,2):a(z,-1)})}_(s),W(()=>{S(s,"id",n.id),le(s,1,`section section--${n.id??""}`),S(s,"aria-labelledby",t()?`${n.id}-heading`:void 0)}),C(e,s),Te()}function Pn(e,n){Ae(n,!0);var t=ge(),l=Ee(t);ee(l,17,()=>n.data.sectionOrder,$,(d,r)=>{const o=G(()=>n.data.sectionOptions[u(r)]);{let p=G(()=>u(o)?.cards==="row"||u(o)?.cards==="column"?u(o).cards:void 0);zn(d,{get id(){return u(r)},get html(){return n.data.sections[u(r)]},get cardsLayout(){return u(p)}})}}),C(e,t),Te()}export{Pn as component,Bn as universal};
