import{b as oe,a as H,d as we,f as O,c as ye}from"../chunks/BN5ayv66.js";import{o as ke,h as x,n as $,z as _,q as Ae,ag as Ee,t as se,v as j,w as X,i as B,aB as fe,aJ as Te,at as le,f as Ie,c as J,aS as V,e as ee,aT as Ce,s as Me,M as Se,aU as Le,aI as re,aV as He,aW as xe,aO as Ve,ac as ce,aX as Oe,F as Ne,r as ue,p as he,b as K,aY as Re,aG as ze,m as De,d as Fe,T as q,ae as Pe,aD as ve,aZ as pe,a_ as Be,a5 as z,D as Ge,a$ as We,aK as Ye,aE as Ze,R as je,b0 as qe,b1 as Ue,a7 as C,a8 as k,aR as G,a3 as me,a9 as F,a6 as ge,a4 as Xe}from"../chunks/DpClGMvR.js";import{s as Q}from"../chunks/wSN3vEbQ.js";import{p as U,i as P}from"../chunks/DZ5pA-NQ.js";import{s as D}from"../chunks/kqMOlaZw.js";function ne(e,n){return n}function Je(e,n,a){for(var s=[],p=n.length,r,i=n.length,c=0;c<p;c++){let w=n[c];he(w,()=>{if(r){if(r.pending.delete(w),r.done.add(w),r.pending.size===0){var h=e.outrogroups;te(e,re(r.done)),h.delete(r),h.size===0&&(e.outrogroups=null)}}else i-=1},!1)}if(i===0){var o=s.length===0&&a!==null;if(o){var g=a,l=g.parentNode;ze(l),l.append(g),e.items.clear()}te(e,n,!o)}else r={pending:new Set(n),done:new Set},(e.outrogroups??=new Set).add(r)}function te(e,n,a=!0){var s;if(e.pending.size>0){s=new Set;for(const i of e.pending.values())for(const c of i)s.add(e.items.get(c).e)}for(var p=0;p<n.length;p++){var r=n[p];if(s?.has(r)){r.f|=V;const i=document.createDocumentFragment();De(r,i)}else Fe(n[p],a)}}var de;function ie(e,n,a,s,p,r=null){var i=e,c=new Map,o=(n&pe)!==0;if(o){var g=e;i=x?j(q(g)):g.appendChild(J())}x&&$();var l=null,w=Se(()=>{var v=a();return Le(v)?v:v==null?[]:re(v)}),h,M=new Map,S=!0;function f(v){(L.effect.f&Ne)===0&&(L.pending.delete(v),L.fallback=l,Ke(L,h,i,n,s),l!==null&&(h.length===0?(l.f&V)===0?ue(l):(l.f^=V,Z(l,null,i)):he(l,()=>{l=null})))}function t(v){L.pending.delete(v)}var d=ke(()=>{h=_(w);var v=h.length;let b=!1;if(x){var A=Ae(i)===Ee;A!==(v===0)&&(i=se(),j(i),X(!1),b=!0)}for(var m=new Set,u=Ie,y=Me(),I=0;I<v;I+=1){x&&B.nodeType===fe&&B.data===Te&&(i=B,b=!0,X(!1));var E=h[I],N=s(E,I),T=S?null:c.get(N);T?(T.v&&le(T.v,E),T.i&&le(T.i,I),y&&u.unskip_effect(T.e)):(T=Qe(c,S?i:de??=J(),E,N,I,p,n,a),S||(T.e.f|=V),c.set(N,T)),m.add(N)}if(v===0&&r&&!l&&(S?l=ee(()=>r(i)):(l=ee(()=>r(de??=J())),l.f|=V)),v>m.size&&Ce(),x&&v>0&&j(se()),!S)if(M.set(u,m),y){for(const[_e,be]of c)m.has(_e)||u.skip_effect(be.e);u.oncommit(f),u.ondiscard(t)}else f(u);b&&X(!0),_(w)}),L={effect:d,items:c,pending:M,outrogroups:null,fallback:l};S=!1,x&&(i=B)}function W(e){for(;e!==null&&(e.f&Re)===0;)e=e.next;return e}function Ke(e,n,a,s,p){var r=(s&Be)!==0,i=n.length,c=e.items,o=W(e.effect.first),g,l=null,w,h=[],M=[],S,f,t,d;if(r)for(d=0;d<i;d+=1)S=n[d],f=p(S,d),t=c.get(f).e,(t.f&V)===0&&(t.nodes?.a?.measure(),(w??=new Set).add(t));for(d=0;d<i;d+=1){if(S=n[d],f=p(S,d),t=c.get(f).e,e.outrogroups!==null)for(const E of e.outrogroups)E.pending.delete(t),E.done.delete(t);if((t.f&V)!==0)if(t.f^=V,t===o)Z(t,null,a);else{var L=l?l.next:o;t===e.effect.last&&(e.effect.last=t.prev),t.prev&&(t.prev.next=t.next),t.next&&(t.next.prev=t.prev),R(e,l,t),R(e,t,L),Z(t,L,a),l=t,h=[],M=[],o=W(l.next);continue}if((t.f&K)!==0&&(ue(t),r&&(t.nodes?.a?.unfix(),(w??=new Set).delete(t))),t!==o){if(g!==void 0&&g.has(t)){if(h.length<M.length){var v=M[0],b;l=v.prev;var A=h[0],m=h[h.length-1];for(b=0;b<h.length;b+=1)Z(h[b],v,a);for(b=0;b<M.length;b+=1)g.delete(M[b]);R(e,A.prev,m.next),R(e,l,A),R(e,m,v),o=v,l=m,d-=1,h=[],M=[]}else g.delete(t),Z(t,o,a),R(e,t.prev,t.next),R(e,t,l===null?e.effect.first:l.next),R(e,l,t),l=t;continue}for(h=[],M=[];o!==null&&o!==t;)(g??=new Set).add(o),M.push(o),o=W(o.next);if(o===null)continue}(t.f&V)===0&&h.push(t),l=t,o=W(t.next)}if(e.outrogroups!==null){for(const E of e.outrogroups)E.pending.size===0&&(te(e,re(E.done)),e.outrogroups?.delete(E));e.outrogroups.size===0&&(e.outrogroups=null)}if(o!==null||g!==void 0){var u=[];if(g!==void 0)for(t of g)(t.f&K)===0&&u.push(t);for(;o!==null;)(o.f&K)===0&&o!==e.fallback&&u.push(o),o=W(o.next);var y=u.length;if(y>0){var I=(s&pe)!==0&&i===0?a:null;if(r){for(d=0;d<y;d+=1)u[d].nodes?.a?.measure();for(d=0;d<y;d+=1)u[d].nodes?.a?.fix()}Je(e,u,I)}}r&&Pe(()=>{if(w!==void 0)for(t of w)t.nodes?.a?.apply()})}function Qe(e,n,a,s,p,r,i,c){var o=(i&He)!==0?(i&xe)===0?Ve(a,!1,!1):ce(a):null,g=(i&Oe)!==0?ce(p):null;return{v:o,i:g,e:ee(()=>(r(n,o??a,g??p,c),()=>{e.delete(s)}))}}function Z(e,n,a){if(e.nodes)for(var s=e.nodes.start,p=e.nodes.end,r=n&&(n.f&V)===0?n.nodes.start:a;s!==null;){var i=ve(s);if(r.before(s),s===p)return;s=i}}function R(e,n,a){n===null?e.effect.first=a:n.next=a,a===null?e.effect.last=n:a.prev=n}function Y(e,n,a=!1,s=!1,p=!1){var r=e,i="";z(()=>{var c=Ge;if(i===(i=n()??"")){x&&$();return}if(c.nodes!==null&&(We(c.nodes.start,c.nodes.end),c.nodes=null),i!==""){if(x){B.data;for(var o=$(),g=o;o!==null&&(o.nodeType!==fe||o.data!=="");)g=o,o=ve(o);if(o===null)throw Ye(),Ze;oe(B,g),r=j(o);return}var l=a?qe:s?Ue:void 0,w=je(a?"svg":s?"math":"template",l);w.innerHTML=i;var h=a||s?w:w.content;if(oe(q(h),h.lastChild),a||s)for(;q(h);)r.before(q(h));else r.before(h)}})}function $e(e,n,a){var s=e==null?"":""+e;return s===""?null:s}function ae(e,n,a,s,p,r){var i=e.__className;if(x||i!==a||i===void 0){var c=$e(a);(!x||c!==e.getAttribute("class"))&&(c==null?e.removeAttribute("class"):n?e.className=c:e.setAttribute("class",c)),e.__className=a}return r}const en={hero:{intro:`<h1>Firestarter</h1>
<p>I step into complex projects when things stop moving.
Find the real constraint, remove structural friction, and help the system start working again.</p>
<p>Sometimes as a strategist.
Sometimes as an interim lead.
Sometimes hands-on.</p>
<p>The role is defined by the problem — not by a title.</p>
`,contactLinks:[{label:"Email",href:"mailto:a.burdun@gmail.com",icon:null},{label:"LinkedIn",href:"https://linkedin.com/in/dukobpa3",icon:null},{label:"Instagram",href:"https://instagram.com/a.burdun",icon:null},{label:"Telegram",href:"https://t.me/buhomlab",icon:null}]},"what-i-do":`<h1>I work where execution is blocked</h1>
<p>Most projects don&#39;t fail because people are incompetent.
They fail because systems become unclear, overloaded, or politically stuck.</p>
<p>At that point the problem is no longer technical —
it becomes structural.</p>
<p>That&#39;s where I usually step in.</p>
<p>My work is to identify the real constraint in the system and restore the ability to move forward.</p>
`,"where-i-step-in":{intro:`<h1>Where I step in</h1>
`,cards:[{title:"1. Starting from zero",html:`<p>Early-stage projects often move fast but lack structure.
This works for a while — until decisions begin to conflict and execution slows down.</p>
<p>Typical work:</p>
<ul>
<li>defining a clear execution model</li>
<li>aligning stakeholders around real priorities</li>
<li>separating product vision from operational noise</li>
<li>building the minimal structure needed to move fast without chaos</li>
</ul>
<p><strong>Goal:</strong> a system that can execute consistently, not just improvise.</p>
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
`}],footer:null},"how-i-work":`<h1>How I work</h1>
<p>I don&#39;t sell predefined roles.</p>
<p>When entering a project, the first task is always diagnosis.</p>
<p>In most cases I spend the first weeks understanding:</p>
<ul>
<li>where decisions are actually made</li>
<li>where the real constraint lives</li>
<li>what structure already exists</li>
<li>which parts of the system should stay untouched</li>
</ul>
<p>Only then the role becomes clear.</p>
<p>Sometimes that means acting as a strategist.
Sometimes as interim leadership.
Sometimes temporarily helping execution.</p>
<p>The goal is always the same:
restore a system that can move without constant intervention.</p>
`,"what-i-dont-do":`<h1>What I don&#39;t do</h1>
<p>I&#39;m usually not the right person if:</p>
<ul>
<li>the goal is to maintain the current process rather than change it</li>
<li>the team is looking for validation rather than diagnosis</li>
<li>decisions are expected to be avoided rather than made</li>
<li>the organization prefers meetings over execution</li>
</ul>
<p>My work only makes sense when there is real willingness to change the system.</p>
`,background:`<h1>Background</h1>
<p>I&#39;ve spent more than two decades working inside complex technical organizations.</p>
<p>My work has included:</p>
<ul>
<li>building and restructuring engineering teams</li>
<li>leading R&amp;D directions</li>
<li>designing system architecture and execution models</li>
<li>helping projects move through difficult transitions</li>
</ul>
<p>I&#39;m comfortable moving between strategy and technical depth, and stepping into unstable environments where structure is missing.</p>
`,"work-format":{intro:`<h1>Typical engagement formats</h1>
`,cards:[{title:"Fractional involvement",html:`<p>Regular strategic participation while the system stabilizes.</p>
`},{title:"Focused intervention",html:`<p>A limited period to identify constraints and reset execution.</p>
`},{title:"Architecture and system review",html:`<p>Independent structural diagnosis and recommendations.</p>
`}],footer:`<p>The exact format depends on the situation.</p>
`},contact:{intro:`<h1>Contact</h1>
<p>If you believe your project needs a structural reset,
or if execution feels harder than it should be —</p>
<p>let&#39;s talk.</p>
`,contactLinks:[{label:"Email",href:"mailto:a.burdun@gmail.com",icon:null},{label:"LinkedIn",href:"https://linkedin.com/in/dukobpa3",icon:null},{label:"Instagram",href:"https://instagram.com/a.burdun",icon:null},{label:"Telegram",href:"https://t.me/buhomlab",icon:null}]}},nn=["hero","what-i-do","where-i-step-in","how-i-work","what-i-dont-do","background","work-format","contact"],tn={"where-i-step-in":{cards:"column"},"work-format":{cards:"row"}},an={sections:en,sectionOrder:nn,sectionOptions:tn};function rn(){const{sections:e,sectionOrder:n,sectionOptions:a={}}=an;return{sections:e,sectionOrder:n,sectionOptions:a}}const Ln=Object.freeze(Object.defineProperty({__proto__:null,load:rn},Symbol.toStringTag,{value:"Module"}));var on=we('<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor"></path></svg>');function sn(e,n){let a=U(n,"size",3,1.25),s=U(n,"class",3,"");const p=G(()=>`${a()*16}px`);var r=on(),i=C(r);k(r),z(()=>{ae(r,0,`icon ${s()??""}`),D(r,"width",_(p)),D(r,"height",_(p)),D(i,"d",n.path)}),H(e,r)}var ln="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",cn="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z",dn="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z",fn="M2,21L23,12L2,3V10L17,12L2,14V21Z";const un={email:ln,linkedin:dn,instagram:cn,telegram:fn};function hn(e){if(!e)return;const n=e.toLowerCase().trim();return un[n]}var vn=O('<h2 class="section__title"> </h2>'),pn=O('<div class="block__intro prose"><!></div>'),mn=O('<a class="contact-links__item" rel="noopener noreferrer" target="_blank"><!> <span class="contact-links__label"> </span></a>'),gn=O('<div class="block block--contact"><!> <nav class="contact-links" aria-label="Contact"></nav></div>'),_n=O('<div class="block__intro prose"><!></div>'),bn=O('<article class="card"><h3 class="card__title"> </h3> <div class="card__body prose"><!></div></article>'),wn=O('<footer class="block__footer prose"><!></footer>'),yn=O('<div class="block"><!> <div></div> <!></div>'),kn=O('<div class="section__body prose"><!></div>'),An=O("<section><!> <!></section>");function En(e,n){me(n,!0);let a=U(n,"title",3,""),s=U(n,"cardsLayout",3,"row");const p=f=>typeof f=="object"&&f!==null&&Array.isArray(f.cards),r=f=>typeof f=="object"&&f!==null&&Array.isArray(f.contactLinks);var i=An(),c=C(i);{var o=f=>{var t=vn(),d=C(t,!0);k(t),z(()=>{D(t,"id",`${n.id??""}-heading`),Q(d,a())}),H(f,t)};P(c,f=>{a()&&f(o)})}var g=F(c,2);{var l=f=>{var t=gn(),d=C(t);{var L=b=>{var A=pn(),m=C(A);Y(m,()=>n.html.intro),k(A),H(b,A)};P(d,b=>{n.html.intro&&b(L)})}var v=F(d,2);ie(v,21,()=>n.html.contactLinks,ne,(b,A)=>{const m=G(()=>hn(_(A).icon??_(A).label));var u=mn(),y=C(u);{var I=T=>{sn(T,{get path(){return _(m)},size:1.25,class:"contact-links__icon"})};P(y,T=>{_(m)&&T(I)})}var E=F(y,2),N=C(E,!0);k(E),k(u),z(()=>{D(u,"href",_(A).href),Q(N,_(A).label)}),H(b,u)}),k(v),k(t),H(f,t)},w=G(()=>r(n.html)),h=f=>{var t=yn(),d=C(t);{var L=m=>{var u=_n(),y=C(u);Y(y,()=>n.html.intro),k(u),H(m,u)};P(d,m=>{n.html.intro&&m(L)})}var v=F(d,2);ie(v,21,()=>n.html.cards,ne,(m,u)=>{var y=bn(),I=C(y),E=C(I,!0);k(I);var N=F(I,2),T=C(N);Y(T,()=>_(u).html),k(N),k(y),z(()=>Q(E,_(u).title)),H(m,y)}),k(v);var b=F(v,2);{var A=m=>{var u=wn(),y=C(u);Y(y,()=>n.html.footer),k(u),H(m,u)};P(b,m=>{n.html.footer&&m(A)})}k(t),z(()=>ae(v,1,`block__cards block__cards--${s()??""}`)),H(f,t)},M=G(()=>p(n.html)),S=f=>{var t=kn(),d=C(t);Y(d,()=>n.html),k(t),H(f,t)};P(g,f=>{_(w)?f(l):_(M)?f(h,1):f(S,-1)})}k(i),z(()=>{D(i,"id",n.id),ae(i,1,`section section--${n.id??""}`),D(i,"aria-labelledby",a()?`${n.id}-heading`:void 0)}),H(e,i),ge()}function Hn(e,n){me(n,!0);var a=ye(),s=Xe(a);ie(s,17,()=>n.data.sectionOrder,ne,(p,r)=>{const i=G(()=>n.data.sectionOptions[_(r)]);{let c=G(()=>_(i)?.cards==="row"||_(i)?.cards==="column"?_(i).cards:void 0);En(p,{get id(){return _(r)},get html(){return n.data.sections[_(r)]},get cardsLayout(){return _(c)}})}}),H(e,a),ge()}export{Hn as component,Ln as universal};
