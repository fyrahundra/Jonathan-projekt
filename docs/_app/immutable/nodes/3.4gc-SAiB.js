import{s as D,n as B,r as F,c as O,o as V}from"../chunks/scheduler.NrZV1iTz.js";import{S as J,i as R,e as p,s as C,c as f,a as q,l as T,f as b,d as k,n as l,g as z,h as s,p as H,q as A,r as G}from"../chunks/index.BNALcpTY.js";import{u as K}from"../chunks/user.CIJRMkxj.js";function Q(m){let a,n,r,x="Inloggning",d,t,c,E="E-post:",y,e,L,h,U="Lösenord:",M,o,N,I,S,_,j='Har du inte ett konto? <a href="/register" class="linkText svelte-1pc9tui">Skapa ett!</a>',P,w;return{c(){a=p("main"),n=p("div"),r=p("h1"),r.textContent=x,d=C(),t=p("form"),c=p("label"),c.textContent=E,y=C(),e=p("input"),L=C(),h=p("label"),h.textContent=U,M=C(),o=p("input"),N=C(),I=p("input"),S=C(),_=p("h1"),_.innerHTML=j,this.h()},l(i){a=f(i,"MAIN",{class:!0});var v=q(a);n=f(v,"DIV",{class:!0});var g=q(n);r=f(g,"H1",{"data-svelte-h":!0}),T(r)!=="svelte-58kgg2"&&(r.textContent=x),d=b(g),t=f(g,"FORM",{action:!0});var u=q(t);c=f(u,"LABEL",{for:!0,"data-svelte-h":!0}),T(c)!=="svelte-11xt3y0"&&(c.textContent=E),y=b(u),e=f(u,"INPUT",{type:!0,id:!0,class:!0}),L=b(u),h=f(u,"LABEL",{for:!0,"data-svelte-h":!0}),T(h)!=="svelte-mjvdqs"&&(h.textContent=U),M=b(u),o=f(u,"INPUT",{type:!0,id:!0,class:!0}),N=b(u),I=f(u,"INPUT",{type:!0}),u.forEach(k),S=b(g),_=f(g,"H1",{"data-svelte-h":!0}),T(_)!=="svelte-p03aj0"&&(_.innerHTML=j),g.forEach(k),v.forEach(k),this.h()},h(){l(c,"for","e-post"),l(e,"type","email"),l(e,"id","e-post"),l(e,"class","text svelte-1pc9tui"),l(h,"for","lösenord"),l(o,"type","password"),l(o,"id","lösenord"),l(o,"class","text svelte-1pc9tui"),l(I,"type","submit"),I.value="Logga in",l(t,"action",""),l(n,"class","container svelte-1pc9tui"),l(a,"class","svelte-1pc9tui")},m(i,v){z(i,a,v),s(a,n),s(n,r),s(n,d),s(n,t),s(t,c),s(t,y),s(t,e),H(e,m[1]),s(t,L),s(t,h),s(t,M),s(t,o),H(o,m[0]),s(t,N),s(t,I),s(n,S),s(n,_),P||(w=[A(e,"input",m[3]),A(o,"input",m[4]),A(t,"submit",G(m[2]))],P=!0)},p(i,[v]){v&2&&e.value!==i[1]&&H(e,i[1]),v&1&&o.value!==i[0]&&H(o,i[0])},i:B,o:B,d(i){i&&k(a),P=!1,F(w)}}}function W(m,a,n){let r;O(m,K,e=>n(6,r=e));let x=[],d,t;V(()=>{r.length>2&&(x=JSON.parse(r))});function c(){if(d&&t){let e=x.filter(L=>L.email===t);e.length>0&&e[0].password===d?alert("Välkommen "+e[0].username):alert("Fel lösenord eller epost-adress")}else alert("Du har glömt att fylla i något fält")}function E(){t=this.value,n(1,t)}function y(){d=this.value,n(0,d)}return[d,t,c,E,y]}class $ extends J{constructor(a){super(),R(this,a,W,Q,D,{})}}export{$ as component};
