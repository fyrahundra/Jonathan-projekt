import{e as Ie,s as me}from"../chunks/index.HRq1aK_q.js";import{l as Oe,m as Pe,p as ne,q as Se,s as Le,n as G,c as ve,o as ke,f as Ne,d as de}from"../chunks/scheduler.BpkR8Ea4.js";import{B as xe,n as He,C as Me,m as Ae,S as De,i as Ve,w as ce,g as _,d as a,e as k,t as D,s as E,c as d,a as j,b as V,f as T,k as Q,q as A,l as g,h as q,j as F,y as ae}from"../chunks/index.1JHZ04jE.js";import{e as W}from"../chunks/each.D6YF6ztN.js";import{b as je}from"../chunks/paths.CGKn5qha.js";import{p as Ge}from"../chunks/stores.BWBcWGzT.js";function be(n,e){const s=e.token={};function l(r,o,h,p){if(e.token!==s)return;e.resolved=p;let u=e.ctx;h!==void 0&&(u=u.slice(),u[h]=p);const b=r&&(e.current=r)(u);let I=!1;e.block&&(e.blocks?e.blocks.forEach((O,C)=>{C!==o&&O&&(xe(),He(O,1,1,()=>{e.blocks[C]===O&&(e.blocks[C]=null)}),Me())}):e.block.d(1),b.c(),Ae(b,1),b.m(e.mount(),e.anchor),I=!0),e.block=b,e.blocks&&(e.blocks[o]=b),I&&Se()}if(Oe(n)){const r=Pe();if(n.then(o=>{ne(r),l(e.then,1,e.value,o),ne(null)},o=>{if(ne(r),l(e.catch,2,e.error,o),ne(null),!e.hasCatch)throw o}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,n),!0;e.resolved=n}}function Je(n,e,s){const l=e.slice(),{resolved:r}=n;n.current===n.then&&(l[n.value]=r),n.current===n.catch&&(l[n.error]=r),n.block.p(l,s)}const Re=!1,ze=!1;async function Be({params:n,fetch:e}){n.pokemon=n.pokemon.toLowerCase(),console.log(n.pokemon);const s=await e("https://pokeapi.co/api/v2/pokemon/"+n.pokemon,{method:"GET"});if(s.status!=200)throw Ie(s.status,{message:s.statusText});let l=await s.json();return console.log(l),{params:n,response:l}}const lt=Object.freeze(Object.defineProperty({__proto__:null,load:Be,prerender:ze,ssr:Re},Symbol.toStringTag,{value:"Module"}));function ge(n,e,s){const l=n.slice();return l[6]=e[s],l}function Ce(n,e,s){const l=n.slice();return l[9]=e[s],l}function we(n,e,s){const l=n.slice();return l[12]=e[s],l}function We(n){return{c:G,l:G,m:G,p:G,d:G}}function Fe(n){let e,s=n[1](n[5].response.weight,n[5].response.name,n[5].response.id)+"",l,r,o,h="← Home",p,u,b=n[5].response.name+"",I,O,C=n[5].response.id+"",U,X,P,Y,S,ie="Type(s):",Z,L,$,N,ue="Weight:",ee,J,x,K=n[5].response.weight/10+"",te,re,le,H,he="Moves:",se,M,R=W(Object.entries(n[5].response.sprites)),f=[];for(let t=0;t<R.length;t+=1)f[t]=qe(we(n,R,t));let z=W(n[5].response.types),m=[];for(let t=0;t<z.length;t+=1)m[t]=Ee(Ce(n,z,t));let B=W(n[5].response.moves),v=[];for(let t=0;t<B.length;t+=1)v[t]=Te(ge(n,B,t));return{c(){e=k("div"),l=D(s),r=E(),o=k("a"),o.textContent=h,p=E(),u=k("p"),I=D(b),O=D(" #"),U=D(C),X=E(),P=k("article");for(let t=0;t<f.length;t+=1)f[t].c();Y=E(),S=k("h1"),S.textContent=ie,Z=E(),L=k("div");for(let t=0;t<m.length;t+=1)m[t].c();$=E(),N=k("h1"),N.textContent=ue,ee=E(),J=k("div"),x=k("p"),te=D(K),re=D(" kg"),le=E(),H=k("h1"),H.textContent=he,se=E(),M=k("section");for(let t=0;t<v.length;t+=1)v[t].c();this.h()},l(t){e=d(t,"DIV",{style:!0});var i=j(e);l=V(i,s),i.forEach(a),r=T(t),o=d(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),Q(o)!=="svelte-1hto9mo"&&(o.textContent=h),p=T(t),u=d(t,"P",{style:!0,class:!0});var c=j(u);I=V(c,b),O=V(c," #"),U=V(c,C),c.forEach(a),X=T(t),P=d(t,"ARTICLE",{style:!0,class:!0});var w=j(P);for(let y=0;y<f.length;y+=1)f[y].l(w);w.forEach(a),Y=T(t),S=d(t,"H1",{style:!0,"data-svelte-h":!0}),Q(S)!=="svelte-yelr9f"&&(S.textContent=ie),Z=T(t),L=d(t,"DIV",{class:!0});var _e=j(L);for(let y=0;y<m.length;y+=1)m[y].l(_e);_e.forEach(a),$=T(t),N=d(t,"H1",{style:!0,"data-svelte-h":!0}),Q(N)!=="svelte-17hwvl1"&&(N.textContent=ue),ee=T(t),J=d(t,"DIV",{});var pe=j(J);x=d(pe,"P",{style:!0,class:!0});var oe=j(x);te=V(oe,K),re=V(oe," kg"),oe.forEach(a),pe.forEach(a),le=T(t),H=d(t,"H1",{style:!0,"data-svelte-h":!0}),Q(H)!=="svelte-q75c9x"&&(H.textContent=he),se=T(t),M=d(t,"SECTION",{class:!0});var fe=j(M);for(let y=0;y<v.length;y+=1)v[y].l(fe);fe.forEach(a),this.h()},h(){A(e,"display","none"),g(o,"href",je+"/search/"),g(o,"class","home svelte-8kcq0s"),A(u,"color","black"),g(u,"class","name svelte-8kcq0s"),A(P,"overflow","scroll"),g(P,"class","svelte-8kcq0s"),A(S,"color","black"),g(L,"class","types svelte-8kcq0s"),A(N,"color","black"),A(x,"color","black"),g(x,"class","svelte-8kcq0s"),A(H,"color","black"),g(M,"class","grid svelte-8kcq0s")},m(t,i){_(t,e,i),q(e,l),_(t,r,i),_(t,o,i),_(t,p,i),_(t,u,i),q(u,I),q(u,O),q(u,U),_(t,X,i),_(t,P,i);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(P,null);_(t,Y,i),_(t,S,i),_(t,Z,i),_(t,L,i);for(let c=0;c<m.length;c+=1)m[c]&&m[c].m(L,null);_(t,$,i),_(t,N,i),_(t,ee,i),_(t,J,i),q(J,x),q(x,te),q(x,re),_(t,le,i),_(t,H,i),_(t,se,i),_(t,M,i);for(let c=0;c<v.length;c+=1)v[c]&&v[c].m(M,null)},p(t,i){if(i&1&&s!==(s=t[1](t[5].response.weight,t[5].response.name,t[5].response.id)+"")&&F(l,s),i&1&&b!==(b=t[5].response.name+"")&&F(I,b),i&1&&C!==(C=t[5].response.id+"")&&F(U,C),i&1){R=W(Object.entries(t[5].response.sprites));let c;for(c=0;c<R.length;c+=1){const w=we(t,R,c);f[c]?f[c].p(w,i):(f[c]=qe(w),f[c].c(),f[c].m(P,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=R.length}if(i&1){z=W(t[5].response.types);let c;for(c=0;c<z.length;c+=1){const w=Ce(t,z,c);m[c]?m[c].p(w,i):(m[c]=Ee(w),m[c].c(),m[c].m(L,null))}for(;c<m.length;c+=1)m[c].d(1);m.length=z.length}if(i&1&&K!==(K=t[5].response.weight/10+"")&&F(te,K),i&1){B=W(t[5].response.moves);let c;for(c=0;c<B.length;c+=1){const w=ge(t,B,c);v[c]?v[c].p(w,i):(v[c]=Te(w),v[c].c(),v[c].m(M,null))}for(;c<v.length;c+=1)v[c].d(1);v.length=B.length}},d(t){t&&(a(e),a(r),a(o),a(p),a(u),a(X),a(P),a(Y),a(S),a(Z),a(L),a($),a(N),a(ee),a(J),a(le),a(H),a(se),a(M)),ae(f,t),ae(m,t),ae(v,t)}}}function ye(n){let e,s;return{c(){e=k("img"),this.h()},l(l){e=d(l,"IMG",{src:!0,alt:!0}),this.h()},h(){de(e.src,s=n[12][1])||g(e,"src",s),g(e,"alt","bild")},m(l,r){_(l,e,r)},p(l,r){r&1&&!de(e.src,s=l[12][1])&&g(e,"src",s)},d(l){l&&a(e)}}}function qe(n){let e,s=typeof n[12][1]=="string"&&ye(n);return{c(){s&&s.c(),e=ce()},l(l){s&&s.l(l),e=ce()},m(l,r){s&&s.m(l,r),_(l,e,r)},p(l,r){typeof l[12][1]=="string"?s?s.p(l,r):(s=ye(l),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(l){l&&a(e),s&&s.d(l)}}}function Ee(n){let e,s=n[9].type.name+"",l;return{c(){e=k("p"),l=D(s),this.h()},l(r){e=d(r,"P",{class:!0});var o=j(e);l=V(o,s),o.forEach(a),this.h()},h(){g(e,"class","svelte-8kcq0s")},m(r,o){_(r,e,o),q(e,l)},p(r,o){o&1&&s!==(s=r[9].type.name+"")&&F(l,s)},d(r){r&&a(e)}}}function Te(n){let e,s,l=n[6].move.name+"",r,o;return{c(){e=k("article"),s=k("p"),r=D(l),o=E(),this.h()},l(h){e=d(h,"ARTICLE",{style:!0,class:!0});var p=j(e);s=d(p,"P",{class:!0});var u=j(s);r=V(u,l),u.forEach(a),o=T(p),p.forEach(a),this.h()},h(){g(s,"class","svelte-8kcq0s"),A(e,"color","black"),g(e,"class","moves svelte-8kcq0s")},m(h,p){_(h,e,p),q(e,s),q(s,r),q(e,o)},p(h,p){p&1&&l!==(l=h[6].move.name+"")&&F(r,l)},d(h){h&&a(e)}}}function Ke(n){let e,s=".. waiting";return{c(){e=k("p"),e.textContent=s,this.h()},l(l){e=d(l,"P",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-ju3n2x"&&(e.textContent=s),this.h()},h(){g(e,"class","svelte-8kcq0s")},m(l,r){_(l,e,r)},p:G,d(l){l&&a(e)}}}function Qe(n){let e,s,l={ctx:n,current:null,token:null,hasCatch:!1,pending:Ke,then:Fe,catch:We,value:5};return be(s=n[0],l),{c(){e=ce(),l.block.c()},l(r){e=ce(),l.block.l(r)},m(r,o){_(r,e,o),l.block.m(r,l.anchor=o),l.mount=()=>e.parentNode,l.anchor=e},p(r,[o]){n=r,l.ctx=n,o&1&&s!==(s=n[0])&&be(s,l)||Je(l,n,o)},i:G,o:G,d(r){r&&a(e),l.block.d(r),l.token=null,l=null}}}function Ue(n,e,s){let l,r;ve(n,me,u=>s(3,l=u)),ve(n,Ge,u=>s(4,r=u));let{data:o}=e,h=[];ke(()=>{l.length>2&&(h=JSON.parse(l))});async function p(u,b,I){await ke;let O=b;h=h.filter(C=>C.name!==O),h.length==5&&(h.shift(),h=h),h=[...h,{link:je+"/search/"+r.params.pokemon.toLowerCase(),name:b,weight:u,id:I}],Ne(me,l=JSON.stringify(h),l),console.log(h.length)}return n.$$set=u=>{"data"in u&&s(0,o=u.data)},[o,p]}class st extends De{constructor(e){super(),Ve(this,e,Ue,Qe,Le,{data:0})}}export{st as component,lt as universal};
