import{b as ne,a as C,f as z}from"../chunks/DV0z8vUo.js";import{h as E,v as j,T as P,c as q,o as Z,n as me,z as Y,q as ge,ag as _e,t as te,w as U,i as H,aB as le,aJ as we,at as ie,f as ye,e as Q,aS as be,s as ke,O as Te,aT as Ee,aI as ee,aU as Ie,ac as ae,aV as Se,aW as Ae,aO as Me,aX as A,F as xe,r as ce,p as de,b as X,aY as Ne,aG as Re,m as Ce,d as ze,aD as ue,a5 as G,D as Oe,aZ as De,aK as Fe,aE as He,R as Le,a_ as Ge,a$ as We,a3 as fe,a6 as he,a7 as S,a9 as k,a8 as T,aR as Ye,a4 as Be}from"../chunks/CrtqYAFF.js";import{s as re}from"../chunks/HWEw0Fbz.js";import{p as J,i as B}from"../chunks/DnaSbC4k.js";import{s as K}from"../chunks/CMI1nLK0.js";function Ve(e,n){return n}function je(e,n,r){for(var c=[],h=n.length,o,a=n.length,i=0;i<h;i++){let u=n[i];de(u,()=>{if(o){if(o.pending.delete(u),o.done.add(u),o.pending.size===0){var m=e.outrogroups;$(e,ee(o.done)),m.delete(o),m.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=c.length===0&&r!==null;if(l){var s=r,p=s.parentNode;Re(p),p.append(s),e.items.clear()}$(e,n,!l)}else o={pending:new Set(n),done:new Set},(e.outrogroups??=new Set).add(o)}function $(e,n,r=!0){var c;if(e.pending.size>0){c=new Set;for(const a of e.pending.values())for(const i of a)c.add(e.items.get(i).e)}for(var h=0;h<n.length;h++){var o=n[h];if(c?.has(o)){o.f|=A;const a=document.createDocumentFragment();Ce(o,a)}else ze(n[h],r)}}var se;function Pe(e,n,r,c,h,o=null){var a=e,i=new Map;{var l=e;a=E?j(P(l)):l.appendChild(q())}E&&Z();var s=null,p=Te(()=>{var d=r();return Ee(d)?d:d==null?[]:ee(d)}),u,m=new Map,f=!0;function t(d){(w.effect.f&xe)===0&&(w.pending.delete(d),w.fallback=s,qe(w,u,a,n,c),s!==null&&(u.length===0?(s.f&A)===0?ce(s):(s.f^=A,W(s,null,a)):de(s,()=>{s=null})))}function _(d){w.pending.delete(d)}var O=me(()=>{u=Y(p);var d=u.length;let M=!1;if(E){var y=ge(a)===_e;y!==(d===0)&&(a=te(),j(a),U(!1),M=!0)}for(var v=new Set,g=ye,x=ke(),b=0;b<d;b+=1){E&&H.nodeType===le&&H.data===we&&(a=H,M=!0,U(!1));var D=u[b],F=c(D,b),I=f?null:i.get(F);I?(I.v&&ie(I.v,D),I.i&&ie(I.i,b),x&&g.unskip_effect(I.e)):(I=Ue(i,f?a:se??=q(),D,F,b,h,n,r),f||(I.e.f|=A),i.set(F,I)),v.add(F)}if(d===0&&o&&!s&&(f?s=Q(()=>o(a)):(s=Q(()=>o(se??=q())),s.f|=A)),d>v.size&&be(),E&&d>0&&j(te()),!f)if(m.set(g,v),x){for(const[pe,ve]of i)v.has(pe)||g.skip_effect(ve.e);g.oncommit(t),g.ondiscard(_)}else t(g);M&&U(!0),Y(p)}),w={effect:O,items:i,pending:m,outrogroups:null,fallback:s};f=!1,E&&(a=H)}function L(e){for(;e!==null&&(e.f&Ne)===0;)e=e.next;return e}function qe(e,n,r,c,h){var o=n.length,a=e.items,i=L(e.effect.first),l,s=null,p=[],u=[],m,f,t,_;for(_=0;_<o;_+=1){if(m=n[_],f=h(m,_),t=a.get(f).e,e.outrogroups!==null)for(const b of e.outrogroups)b.pending.delete(t),b.done.delete(t);if((t.f&A)!==0)if(t.f^=A,t===i)W(t,null,r);else{var O=s?s.next:i;t===e.effect.last&&(e.effect.last=t.prev),t.prev&&(t.prev.next=t.next),t.next&&(t.next.prev=t.prev),N(e,s,t),N(e,t,O),W(t,O,r),s=t,p=[],u=[],i=L(s.next);continue}if((t.f&X)!==0&&ce(t),t!==i){if(l!==void 0&&l.has(t)){if(p.length<u.length){var w=u[0],d;s=w.prev;var M=p[0],y=p[p.length-1];for(d=0;d<p.length;d+=1)W(p[d],w,r);for(d=0;d<u.length;d+=1)l.delete(u[d]);N(e,M.prev,y.next),N(e,s,M),N(e,y,w),i=w,s=y,_-=1,p=[],u=[]}else l.delete(t),W(t,i,r),N(e,t.prev,t.next),N(e,t,s===null?e.effect.first:s.next),N(e,s,t),s=t;continue}for(p=[],u=[];i!==null&&i!==t;)(l??=new Set).add(i),u.push(i),i=L(i.next);if(i===null)continue}(t.f&A)===0&&p.push(t),s=t,i=L(t.next)}if(e.outrogroups!==null){for(const b of e.outrogroups)b.pending.size===0&&($(e,ee(b.done)),e.outrogroups?.delete(b));e.outrogroups.size===0&&(e.outrogroups=null)}if(i!==null||l!==void 0){var v=[];if(l!==void 0)for(t of l)(t.f&X)===0&&v.push(t);for(;i!==null;)(i.f&X)===0&&i!==e.fallback&&v.push(i),i=L(i.next);var g=v.length;if(g>0){var x=o===0?r:null;je(e,v,x)}}}function Ue(e,n,r,c,h,o,a,i){var l=(a&Se)!==0?(a&Ae)===0?Me(r,!1,!1):ae(r):null,s=(a&Ie)!==0?ae(h):null;return{v:l,i:s,e:Q(()=>(o(n,l??r,s??h,i),()=>{e.delete(c)}))}}function W(e,n,r){if(e.nodes)for(var c=e.nodes.start,h=e.nodes.end,o=n&&(n.f&A)===0?n.nodes.start:r;c!==null;){var a=ue(c);if(o.before(c),c===h)return;c=a}}function N(e,n,r){n===null?e.effect.first=r:n.next=r,r===null?e.effect.last=n:r.prev=n}function V(e,n,r=!1,c=!1,h=!1){var o=e,a="";G(()=>{var i=Oe;if(a===(a=n()??"")){E&&Z();return}if(i.nodes!==null&&(De(i.nodes.start,i.nodes.end),i.nodes=null),a!==""){if(E){H.data;for(var l=Z(),s=l;l!==null&&(l.nodeType!==le||l.data!=="");)s=l,l=ue(l);if(l===null)throw Fe(),He;ne(H,s),o=j(l);return}var p=r?Ge:c?We:void 0,u=Le(r?"svg":c?"math":"template",p);u.innerHTML=a;var m=r||c?u:u.content;if(ne(P(m),m.lastChild),r||c)for(;P(m);)o.before(P(m));else o.before(m)}})}function Xe(e,n,r){var c=e==null?"":""+e;return c===""?null:c}function oe(e,n,r,c,h,o){var a=e.__className;if(E||a!==r||a===void 0){var i=Xe(r);(!E||i!==e.getAttribute("class"))&&(i==null?e.removeAttribute("class"):e.className=i),e.__className=r}return o}const Je=`<h1>Firestarter</h1>
<p>I step into complex projects when things stop moving.
Find the real constraint, remove structural friction, and help the system start working again.</p>
<p>Sometimes as a strategist.
Sometimes as an interim lead.
Sometimes hands-on.</p>
<p>The role is defined by the problem — not by a title.</p>
`,Ke=`<h1>Background</h1>
<p>I&#39;ve spent more than two decades working inside complex technical organizations.</p>
<p>My work has included:</p>
<ul>
<li>building and restructuring engineering teams</li>
<li>leading R&amp;D directions</li>
<li>designing system architecture and execution models</li>
<li>helping projects move through difficult transitions</li>
</ul>
<p>I&#39;m comfortable moving between strategy and technical depth, and stepping into unstable environments where structure is missing.</p>
`,Ze=`<h1>Contact</h1>
<p>If you believe your project needs a structural reset,
or if execution feels harder than it should be —</p>
<p>let&#39;s talk.</p>
<p>[Email]
[LinkedIn / Telegram]</p>
`,Qe={hero:Je,"what-i-do":`<h1>I work where execution is blocked</h1>
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
`,background:Ke,"work-format":{intro:`<h1>Typical engagement formats</h1>
`,cards:[{title:"Fractional involvement",html:`<p>Regular strategic participation while the system stabilizes.</p>
`},{title:"Focused intervention",html:`<p>A limited period to identify constraints and reset execution.</p>
`},{title:"Architecture and system review",html:`<p>Independent structural diagnosis and recommendations.</p>
`}],footer:`<p>The exact format depends on the situation.</p>
`},contact:Ze};function $e(){return{sections:Qe}}const pn=Object.freeze(Object.defineProperty({__proto__:null,load:$e},Symbol.toStringTag,{value:"Module"}));var en=z('<h2 class="section__title"> </h2>'),nn=z('<div class="block__intro prose"><!></div>'),tn=z('<article class="card"><h3 class="card__title"> </h3> <div class="card__body prose"><!></div></article>'),an=z('<footer class="block__footer prose"><!></footer>'),rn=z('<div class="block"><!> <div></div> <!></div>'),sn=z('<div class="section__body prose"><!></div>'),on=z("<section><!> <!></section>");function R(e,n){fe(n,!0);let r=J(n,"title",3,""),c=J(n,"class",3,""),h=J(n,"cardsLayout",3,"row");const o=f=>typeof f=="object"&&f!==null&&Array.isArray(f.cards);var a=on(),i=S(a);{var l=f=>{var t=en(),_=S(t,!0);T(t),G(()=>{K(t,"id",`${n.id??""}-heading`),re(_,r())}),C(f,t)};B(i,f=>{r()&&f(l)})}var s=k(i,2);{var p=f=>{var t=rn(),_=S(t);{var O=y=>{var v=nn(),g=S(v);V(g,()=>n.html.intro),T(v),C(y,v)};B(_,y=>{n.html.intro&&y(O)})}var w=k(_,2);Pe(w,21,()=>n.html.cards,Ve,(y,v)=>{var g=tn(),x=S(g),b=S(x,!0);T(x);var D=k(x,2),F=S(D);V(F,()=>Y(v).html),T(D),T(g),G(()=>re(b,Y(v).title)),C(y,g)}),T(w);var d=k(w,2);{var M=y=>{var v=an(),g=S(v);V(g,()=>n.html.footer),T(v),C(y,v)};B(d,y=>{n.html.footer&&y(M)})}T(t),G(()=>oe(w,1,`block__cards block__cards--${h()??""}`)),C(f,t)},u=Ye(()=>o(n.html)),m=f=>{var t=sn(),_=S(t);V(_,()=>n.html),T(t),C(f,t)};B(s,f=>{Y(u)?f(p):f(m,-1)})}T(a),G(()=>{K(a,"id",n.id),oe(a,1,`section ${c()??""}`),K(a,"aria-labelledby",r()?`${n.id}-heading`:void 0)}),C(e,a),he()}var ln=z("<!> <!> <!> <!> <!> <!> <!> <!>",1);function vn(e,n){fe(n,!0);var r=ln(),c=Be(r);R(c,{id:"hero",get html(){return n.data.sections.hero},class:"section--hero"});var h=k(c,2);R(h,{id:"what-i-do",get html(){return n.data.sections["what-i-do"]}});var o=k(h,2);R(o,{id:"where-i-step-in",get html(){return n.data.sections["where-i-step-in"]},cardsLayout:"column"});var a=k(o,2);R(a,{id:"how-i-work",get html(){return n.data.sections["how-i-work"]}});var i=k(a,2);R(i,{id:"what-i-dont-do",get html(){return n.data.sections["what-i-dont-do"]}});var l=k(i,2);R(l,{id:"background",get html(){return n.data.sections.background}});var s=k(l,2);R(s,{id:"work-format",get html(){return n.data.sections["work-format"]},cardsLayout:"row"});var p=k(s,2);R(p,{id:"contact",get html(){return n.data.sections.contact},class:"section--contact"}),C(e,r),he()}export{vn as component,pn as universal};
