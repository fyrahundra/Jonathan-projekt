import{s as $,d as ee,n as Q,r as te,c as se,o as le,f as ae}from"../chunks/scheduler.BpkR8Ea4.js";import{S as oe,i as re,e as b,s as P,t as R,c as w,f as j,a as S,b as V,d as v,k as ne,l as m,q as U,g as A,h as p,r as W,u as M,v as ie,j as B,y as fe}from"../chunks/index.1JHZ04jE.js";import{e as X}from"../chunks/each.D6YF6ztN.js";import{b as ce}from"../chunks/paths.DfZlaBOx.js";import{s as Y,e as ue}from"../chunks/index.DdkGFfjq.js";import{g as he}from"../chunks/entry.LAwLFxDB.js";function Z(a,t,o){const n=a.slice();return n[15]=t[o],n}function x(a){let t,o=a[15].name+"",n,i,l=a[15].id+"",h,d;return{c(){t=b("a"),n=R(o),i=R(`\r
                            #`),h=R(l),this.h()},l(f){t=w(f,"A",{href:!0,class:!0});var c=S(t);n=V(c,o),i=V(c,`\r
                            #`),h=V(c,l),c.forEach(v),this.h()},h(){m(t,"href",d=a[15].link),m(t,"class","link svelte-1ale1fg")},m(f,c){A(f,t,c),p(t,n),p(t,i),p(t,h)},p(f,c){c&1&&o!==(o=f[15].name+"")&&B(n,o),c&1&&l!==(l=f[15].id+"")&&B(h,l),c&1&&d!==(d=f[15].link)&&m(t,"href",d)},d(f){f&&v(t)}}}function pe(a){let t,o,n,i,l,h,d,f=a[3][0]+"",c,I,E,_,D,C,y,k,N,r,O="Reset",F,G,T=X(a[0]),u=[];for(let e=0;e<T.length;e+=1)u[e]=x(Z(a,T,e));return{c(){t=b("img"),n=P(),i=b("main"),l=b("div"),h=b("div"),d=R("Suggestion: "),c=R(f),I=P(),E=b("form"),_=b("input"),D=P(),C=b("div"),y=b("footer"),k=b("div");for(let e=0;e<u.length;e+=1)u[e].c();N=P(),r=b("button"),r.textContent=O,this.h()},l(e){t=w(e,"IMG",{src:!0,alt:!0,class:!0}),n=j(e),i=w(e,"MAIN",{class:!0});var g=S(i);l=w(g,"DIV",{class:!0});var s=S(l);h=w(s,"DIV",{style:!0});var q=S(h);d=V(q,"Suggestion: "),c=V(q,f),q.forEach(v),I=j(s),E=w(s,"FORM",{class:!0});var z=S(E);_=w(z,"INPUT",{type:!0,placeholder:!0}),z.forEach(v),D=j(s),C=w(s,"DIV",{});var H=S(C);y=w(H,"FOOTER",{style:!0,class:!0});var K=S(y);k=w(K,"DIV",{class:!0});var L=S(k);for(let J=0;J<u.length;J+=1)u[J].l(L);N=j(L),r=w(L,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(r)!=="svelte-1qg07w"&&(r.textContent=O),L.forEach(v),K.forEach(v),H.forEach(v),s.forEach(v),g.forEach(v),this.h()},h(){ee(t.src,o="https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png")||m(t,"src",o),m(t,"alt","Pokemon logo"),m(t,"class","img svelte-1ale1fg"),U(h,"color","black"),m(_,"type","text"),m(_,"placeholder","Sök upp en pokemon"),m(E,"class","searchbox svelte-1ale1fg"),m(r,"class","reset svelte-1ale1fg"),m(k,"class","dropdown svelte-1ale1fg"),U(y,"display",a[2]),m(y,"class","svelte-1ale1fg"),m(l,"class","layerCorrect svelte-1ale1fg"),m(i,"class","svelte-1ale1fg")},m(e,g){A(e,t,g),A(e,n,g),A(e,i,g),p(i,l),p(l,h),p(h,d),p(h,c),p(l,I),p(l,E),p(E,_),W(_,a[1]),p(l,D),p(l,C),p(C,y),p(y,k);for(let s=0;s<u.length;s+=1)u[s]&&u[s].m(k,null);p(k,N),p(k,r),F||(G=[M(_,"input",a[7]),M(_,"click",a[4]),M(_,"input",a[6]),M(E,"submit",ie(a[8])),M(r,"click",a[5])],F=!0)},p(e,[g]){if(g&8&&f!==(f=e[3][0]+"")&&B(c,f),g&2&&_.value!==e[1]&&W(_,e[1]),g&1){T=X(e[0]);let s;for(s=0;s<T.length;s+=1){const q=Z(e,T,s);u[s]?u[s].p(q,g):(u[s]=x(q),u[s].c(),u[s].m(k,N))}for(;s<u.length;s+=1)u[s].d(1);u.length=T.length}g&4&&U(y,"display",e[2])},i:Q,o:Q,d(e){e&&(v(t),v(n),v(i)),fe(u,e),F=!1,te(G)}}}function me(a,t,o){let n;se(a,Y,r=>o(11,n=r));let i,l=[],h="none",d=!1,f=[],c=[],I=[];le(()=>{n.length>2&&o(0,l=JSON.parse(n)),C()}),typeof window<"u"&&window.addEventListener("click",_);function E(){d=!0}function _(){d==!0?(o(2,h="block"),d=!1):o(2,h="none")}function D(){o(0,l=[]),ae(Y,n=JSON.stringify(l),n)}async function C(){const r=await fetch("https://pokeapi.co/api/v2/pokemon?limit=1302");if(r.status!=200)throw ue(r.status,{message:r.statusText});f=await r.json(),f.results.forEach(O=>{c.push(O.name)})}function y(){o(3,I=c.filter(r=>r.toLowerCase().includes(i.toLowerCase()))),i.trim()||o(3,I=[])}function k(){i=this.value,o(1,i)}const N=()=>he(ce+i);return a.$$.update=()=>{a.$$.dirty&1&&l.sort(function(r,O){return O.id-r.id})},[l,i,h,I,E,D,y,k,N]}class we extends oe{constructor(t){super(),re(this,t,me,pe,$,{})}}export{we as component};
