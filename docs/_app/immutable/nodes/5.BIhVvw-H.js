import{s as ue,b as fe,n as Y,r as he,c as de,o as ce,d as pe}from"../chunks/scheduler.NrZV1iTz.js";import{S as ve,i as me,e as d,s as E,c,a as M,l as B,f as L,d as I,o as H,n as r,g as ie,h as s,p as D,u as ne,q as R,r as _e,v as ge,t as be,b as Ce,w as Ee}from"../chunks/index.BNALcpTY.js";import{u as se}from"../chunks/user.CIJRMkxj.js";function ae(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function oe(t,o,a){const i=t.slice();return i[12]=o[a],i}function re(t){let o,a=t[12].name+"",i;return{c(){o=d("option"),i=be(a),this.h()},l(p){o=c(p,"OPTION",{});var b=M(o);i=Ce(b,a),b.forEach(I),this.h()},h(){o.__value=t[12].value,D(o,o.__value)},m(p,b){ie(p,o,b),s(o,i)},p:Y,d(p){p&&I(o)}}}function Le(t){let o,a,i,p="Registrering",b,h,C,e,v,U="Namn:",O,_,k,N,T="E-post:",V,x,J,w,Z="Lösenord:",j,y,z,A,$="Favorit färg",K,m,G,F,Q,P,ee='Har du redan ett konto? <a href="/login" class="linkText svelte-11ae9fh">Logga in!</a>',W,te,S=ae(t[4]),f=[];for(let l=0;l<S.length;l+=1)f[l]=re(oe(t,S,l));return{c(){o=d("main"),a=d("div"),i=d("h1"),i.textContent=p,b=E(),h=d("div"),C=E(),e=d("form"),v=d("label"),v.textContent=U,O=E(),_=d("input"),k=E(),N=d("label"),N.textContent=T,V=E(),x=d("input"),J=E(),w=d("label"),w.textContent=Z,j=E(),y=d("input"),z=E(),A=d("label"),A.textContent=$,K=E(),m=d("select");for(let l=0;l<f.length;l+=1)f[l].c();G=E(),F=d("input"),Q=E(),P=d("h1"),P.innerHTML=ee,this.h()},l(l){o=c(l,"MAIN",{class:!0});var g=M(o);a=c(g,"DIV",{class:!0});var n=M(a);i=c(n,"H1",{"data-svelte-h":!0}),B(i)!=="svelte-1bygy45"&&(i.textContent=p),b=L(n),h=c(n,"DIV",{style:!0});var q=M(h);q.forEach(I),C=L(n),e=c(n,"FORM",{action:!0});var u=M(e);v=c(u,"LABEL",{for:!0,"data-svelte-h":!0}),B(v)!=="svelte-t4ghih"&&(v.textContent=U),O=L(u),_=c(u,"INPUT",{type:!0,id:!0,class:!0}),k=L(u),N=c(u,"LABEL",{for:!0,"data-svelte-h":!0}),B(N)!=="svelte-11xt3y0"&&(N.textContent=T),V=L(u),x=c(u,"INPUT",{type:!0,id:!0,class:!0}),J=L(u),w=c(u,"LABEL",{for:!0,"data-svelte-h":!0}),B(w)!=="svelte-mjvdqs"&&(w.textContent=Z),j=L(u),y=c(u,"INPUT",{type:!0,id:!0,class:!0}),z=L(u),A=c(u,"LABEL",{for:!0,"data-svelte-h":!0}),B(A)!=="svelte-1xpzwds"&&(A.textContent=$),K=L(u),m=c(u,"SELECT",{name:!0,id:!0,class:!0});var le=M(m);for(let X=0;X<f.length;X+=1)f[X].l(le);le.forEach(I),G=L(u),F=c(u,"INPUT",{type:!0}),u.forEach(I),Q=L(n),P=c(n,"H1",{"data-svelte-h":!0}),B(P)!=="svelte-10nn3uy"&&(P.innerHTML=ee),n.forEach(I),g.forEach(I),this.h()},h(){H(h,"width","100px"),H(h,"height","100px"),H(h,"border-radius","50%"),H(h,"overflow","hidden"),H(h,"background-color",t[0]),r(v,"for","name"),r(_,"type","text"),r(_,"id","name"),r(_,"class","text svelte-11ae9fh"),r(N,"for","e-post"),r(x,"type","email"),r(x,"id","e-post"),r(x,"class","text svelte-11ae9fh"),r(w,"for","lösenord"),r(y,"type","password"),r(y,"id","lösenord"),r(y,"class","text svelte-11ae9fh"),r(A,"for","favoritFärg"),r(m,"name",""),r(m,"id","favoritFärg"),r(m,"class","text svelte-11ae9fh"),t[0]===void 0&&fe(()=>t[9].call(m)),r(F,"type","submit"),F.value="Registrera",r(e,"action",""),r(a,"class","container svelte-11ae9fh"),r(o,"class","svelte-11ae9fh")},m(l,g){ie(l,o,g),s(o,a),s(a,i),s(a,b),s(a,h),s(a,C),s(a,e),s(e,v),s(e,O),s(e,_),D(_,t[1]),s(e,k),s(e,N),s(e,V),s(e,x),D(x,t[3]),s(e,J),s(e,w),s(e,j),s(e,y),D(y,t[2]),s(e,z),s(e,A),s(e,K),s(e,m);for(let n=0;n<f.length;n+=1)f[n]&&f[n].m(m,null);ne(m,t[0],!0),s(e,G),s(e,F),s(a,Q),s(a,P),W||(te=[R(_,"input",t[6]),R(x,"input",t[7]),R(y,"input",t[8]),R(m,"change",t[9]),R(e,"submit",_e(t[5]))],W=!0)},p(l,[g]){if(g&1&&H(h,"background-color",l[0]),g&2&&_.value!==l[1]&&D(_,l[1]),g&8&&x.value!==l[3]&&D(x,l[3]),g&4&&y.value!==l[2]&&D(y,l[2]),g&16){S=ae(l[4]);let n;for(n=0;n<S.length;n+=1){const q=oe(l,S,n);f[n]?f[n].p(q,g):(f[n]=re(q),f[n].c(),f[n].m(m,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=S.length}g&17&&ne(m,l[0])},i:Y,o:Y,d(l){l&&I(o),ge(f,l),W=!1,he(te)}}}function xe(t,o,a){let i;de(t,se,T=>a(11,i=T));let p=[],b=[{name:"Blå",value:"blue"},{name:"Röd",value:"red"}],h="black",C,e,v;ce(()=>{i.length>2&&(p=JSON.parse(i))});function U(){if(C&&e&&v)if(p.filter(T=>T.username===C).length>0)alert("Kontot finns redan!");else{alert("Välkommen "+C+`
Din favoritfärg är: `+h+`
Din E-post är: `+v+`
Ditt lösenord är: `+e);let T={username:C,password:e,email:v,color:h};p=[...p,T],pe(se,i=JSON.stringify(p),i)}else alert("Du har glömt att fylla i något fält")}function O(){C=this.value,a(1,C)}function _(){v=this.value,a(3,v)}function k(){e=this.value,a(2,e)}function N(){h=Ee(this),a(0,h),a(4,b)}return[h,C,e,v,b,U,O,_,k,N]}class Ie extends ve{constructor(o){super(),me(this,o,xe,Le,ue,{})}}export{Ie as component};
