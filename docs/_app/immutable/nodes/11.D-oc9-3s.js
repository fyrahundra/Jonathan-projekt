import{s as Ne,n as Ce,r as Le,d as de,i as we}from"../chunks/scheduler.BpkR8Ea4.js";import{S as Pe,i as xe,e as c,s as C,t as B,c as u,a as v,k as W,f as w,d as p,b as S,l as g,y as ye,q as U,g as oe,h as t,r as ae,j as ne,u as qe}from"../chunks/index.D8T7LVfr.js";import{e as ue}from"../chunks/each.D6YF6ztN.js";import{b as Me}from"../chunks/paths.CA_XRzaY.js";function Ee(a,l,e){const n=a.slice();return n[16]=l[e],n}function Te(a,l,e){const n=a.slice();return n[19]=l[e],n}function je(a){let l,e;return{c(){l=c("p"),e=B(a[2])},l(n){l=u(n,"P",{});var o=v(l);e=S(o,a[2]),o.forEach(p)},m(n,o){oe(n,l,o),t(l,e)},p(n,o){o&4&&ne(e,n[2])},d(n){n&&p(l)}}}function Ie(a){let l,e="9+";return{c(){l=c("p"),l.textContent=e},l(n){l=u(n,"P",{"data-svelte-h":!0}),W(l)!=="svelte-9z4uys"&&(l.textContent=e)},m(n,o){oe(n,l,o)},d(n){n&&p(l)}}}function De(a){let l,e,n,o,y,m,h,j=a[19].name+"",V,k,L=a[19].amount+"",N,d,x,M=a[19].price+"",q,F,K,s,f,O="+",z,I,te="-",R,G,J;return{c(){l=c("div"),e=c("img"),y=C(),m=c("div"),h=c("p"),V=B(j),k=B(" x"),N=B(L),d=C(),x=c("p"),q=B(M),F=B("kr"),K=C(),s=c("div"),f=c("button"),f.textContent=O,z=C(),I=c("button"),I.textContent=te,R=C(),this.h()},l(Z){l=u(Z,"DIV",{style:!0});var _=v(l);e=u(_,"IMG",{src:!0,alt:!0,style:!0}),y=w(_),m=u(_,"DIV",{style:!0});var Q=v(m);h=u(Q,"P",{});var X=v(h);V=S(X,j),k=S(X," x"),N=S(X,L),X.forEach(p),d=w(Q),x=u(Q,"P",{});var Y=v(x);q=S(Y,M),F=S(Y,"kr"),Y.forEach(p),Q.forEach(p),K=w(_),s=u(_,"DIV",{style:!0});var A=v(s);f=u(A,"BUTTON",{class:!0,"data-svelte-h":!0}),W(f)!=="svelte-7uus3b"&&(f.textContent=O),z=w(A),I=u(A,"BUTTON",{class:!0,"data-svelte-h":!0}),W(I)!=="svelte-12fgky2"&&(I.textContent=te),A.forEach(p),R=w(_),_.forEach(p),this.h()},h(){de(e.src,n=a[19].img)||g(e,"src",n),g(e,"alt",o=a[19].name),U(e,"width","50px"),U(e,"height","50px"),U(m,"display","flex"),U(m,"flex-direction","column"),g(f,"class","change svelte-29fq54"),g(I,"class","change svelte-29fq54"),U(s,"display","flex"),U(s,"flex-direction","column"),U(l,"display","flex"),U(l,"flex-direction","row"),U(l,"justify-content","space-around")},m(Z,_){oe(Z,l,_),t(l,e),t(l,y),t(l,m),t(m,h),t(h,V),t(h,k),t(h,N),t(m,d),t(m,x),t(x,q),t(x,F),t(l,K),t(l,s),t(s,f),t(s,z),t(s,I),t(l,R),G||(J=[ae(f,"click",function(){we(a[9](a[19]))&&a[9](a[19]).apply(this,arguments)}),ae(I,"click",function(){we(a[10](a[19]))&&a[10](a[19]).apply(this,arguments)})],G=!0)},p(Z,_){a=Z,_&1&&!de(e.src,n=a[19].img)&&g(e,"src",n),_&1&&o!==(o=a[19].name)&&g(e,"alt",o),_&1&&j!==(j=a[19].name+"")&&ne(V,j),_&1&&L!==(L=a[19].amount+"")&&ne(N,L),_&1&&M!==(M=a[19].price+"")&&ne(q,M)},d(Z){Z&&p(l),G=!1,Le(J)}}}function Ve(a){let l,e,n,o,y,m=a[16].name+"",h,j,V=a[16].price+"",k,L,N,d,x="Add to cart",M,q,F;function K(){return a[14](a[16])}return{c(){l=c("div"),e=c("p"),n=c("img"),y=C(),h=B(m),j=B(" - "),k=B(V),L=B("kr"),N=C(),d=c("button"),d.textContent=x,M=C(),this.h()},l(s){l=u(s,"DIV",{});var f=v(l);e=u(f,"P",{});var O=v(e);n=u(O,"IMG",{src:!0,alt:!0,class:!0}),y=w(O),h=S(O,m),j=S(O," - "),k=S(O,V),L=S(O,"kr"),O.forEach(p),N=w(f),d=u(f,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),W(d)!=="svelte-r4u2vm"&&(d.textContent=x),M=w(f),f.forEach(p),this.h()},h(){de(n.src,o=a[16].img)||g(n,"src",o),g(n,"alt",a[16].name),g(n,"class","kotte svelte-29fq54"),U(d,"background-color","green"),g(d,"class","buy svelte-29fq54")},m(s,f){oe(s,l,f),t(l,e),t(e,n),t(e,y),t(e,h),t(e,j),t(e,k),t(e,L),t(l,N),t(l,d),t(l,M),q||(F=ae(d,"click",K),q=!0)},p(s,f){a=s},d(s){s&&p(l),q=!1,F()}}}function Oe(a){let l,e,n,o,y="Pinecone Emporium",m,h,j="|",V,k,L=`<a href="${Me}/pinecone-about-us">About us</a>`,N,d,x="|",M,q,F='<img src="https://blogg.loopia.se/wp-content/uploads/2020/01/shopping-cart@4x.png" alt="Shopping cart" class="shoppingCart svelte-29fq54"/>',K,s,f,O,z,I,te,R,G,J,Z,_,Q,X,Y,A,ge="Checkout",fe,$,pe,_e,D=a[2]<=9&&je(a),P=a[2]>9&&Ie(),le=ue(a[0]),E=[];for(let r=0;r<le.length;r+=1)E[r]=De(Te(a,le,r));let se=ue(a[5]),T=[];for(let r=0;r<se.length;r+=1)T[r]=Ve(Ee(a,se,r));return{c(){l=c("main"),e=c("div"),n=c("div"),o=c("h1"),o.textContent=y,m=C(),h=c("p"),h.textContent=j,V=C(),k=c("div"),k.innerHTML=L,N=C(),d=c("p"),d.textContent=x,M=C(),q=c("button"),q.innerHTML=F,K=C(),s=c("button"),D&&D.c(),f=C(),P&&P.c(),O=C(),z=c("div"),I=c("div");for(let r=0;r<E.length;r+=1)E[r].c();te=C(),R=c("div"),G=c("div"),J=c("h1"),Z=B(`Total: \r
                        `),_=c("p"),Q=B(a[1]),X=B("kr"),Y=C(),A=c("button"),A.textContent=ge,fe=C(),$=c("div");for(let r=0;r<T.length;r+=1)T[r].c();this.h()},l(r){l=u(r,"MAIN",{class:!0});var H=v(l);e=u(H,"DIV",{class:!0});var i=v(e);n=u(i,"DIV",{class:!0});var b=v(n);o=u(b,"H1",{class:!0,"data-svelte-h":!0}),W(o)!=="svelte-1n98xle"&&(o.textContent=y),m=w(b),h=u(b,"P",{class:!0,"data-svelte-h":!0}),W(h)!=="svelte-1jb1zz9"&&(h.textContent=j),V=w(b),k=u(b,"DIV",{class:!0,"data-svelte-h":!0}),W(k)!=="svelte-ryeo8v"&&(k.innerHTML=L),N=w(b),d=u(b,"P",{class:!0,"data-svelte-h":!0}),W(d)!=="svelte-dp9r3o"&&(d.textContent=x),M=w(b),q=u(b,"BUTTON",{"data-svelte-h":!0}),W(q)!=="svelte-1kiyka8"&&(q.innerHTML=F),K=w(b),s=u(b,"BUTTON",{class:!0});var ie=v(s);D&&D.l(ie),f=w(ie),P&&P.l(ie),ie.forEach(p),b.forEach(p),O=w(i),z=u(i,"DIV",{class:!0,style:!0});var re=v(z);I=u(re,"DIV",{class:!0});var ve=v(I);for(let ee=0;ee<E.length;ee+=1)E[ee].l(ve);ve.forEach(p),te=w(re),R=u(re,"DIV",{class:!0});var ke=v(R);G=u(ke,"DIV",{class:!0});var ce=v(G);J=u(ce,"H1",{});var me=v(J);Z=S(me,`Total: \r
                        `),_=u(me,"P",{});var he=v(_);Q=S(he,a[1]),X=S(he,"kr"),he.forEach(p),me.forEach(p),Y=w(ce),A=u(ce,"BUTTON",{style:!0,"data-svelte-h":!0}),W(A)!=="svelte-16iv10x"&&(A.textContent=ge),ce.forEach(p),ke.forEach(p),re.forEach(p),fe=w(i),$=u(i,"DIV",{class:!0});var be=v($);for(let ee=0;ee<T.length;ee+=1)T[ee].l(be);be.forEach(p),i.forEach(p),H.forEach(p),this.h()},h(){g(o,"class","title svelte-29fq54"),g(h,"class","divider1 svelte-29fq54"),g(k,"class","info svelte-29fq54"),g(d,"class","divider2 svelte-29fq54"),g(s,"class","cartAmount svelte-29fq54"),ye(s,"bought",a[3]),g(n,"class","bar svelte-29fq54"),g(I,"class","shopItems svelte-29fq54"),U(A,"background-color","green"),g(G,"class","phoneMod svelte-29fq54"),g(R,"class","checkout svelte-29fq54"),g(z,"class","shoppingList svelte-29fq54"),U(z,"display",a[4]?"flex":"none"),g($,"class","container svelte-29fq54"),g(e,"class","shop svelte-29fq54"),g(l,"class","backdrop svelte-29fq54")},m(r,H){oe(r,l,H),t(l,e),t(e,n),t(n,o),t(n,m),t(n,h),t(n,V),t(n,k),t(n,N),t(n,d),t(n,M),t(n,q),t(n,K),t(n,s),D&&D.m(s,null),t(s,f),P&&P.m(s,null),t(e,O),t(e,z),t(z,I);for(let i=0;i<E.length;i+=1)E[i]&&E[i].m(I,null);t(z,te),t(z,R),t(R,G),t(G,J),t(J,Z),t(J,_),t(_,Q),t(_,X),t(G,Y),t(G,A),t(e,fe),t(e,$);for(let i=0;i<T.length;i+=1)T[i]&&T[i].m($,null);pe||(_e=[ae(q,"click",a[11]),ae(s,"click",a[12]),ae(A,"click",a[13])],pe=!0)},p(r,[H]){if(r[2]<=9?D?D.p(r,H):(D=je(r),D.c(),D.m(s,f)):D&&(D.d(1),D=null),r[2]>9?P||(P=Ie(),P.c(),P.m(s,null)):P&&(P.d(1),P=null),H&8&&ye(s,"bought",r[3]),H&1537){le=ue(r[0]);let i;for(i=0;i<le.length;i+=1){const b=Te(r,le,i);E[i]?E[i].p(b,H):(E[i]=De(b),E[i].c(),E[i].m(I,null))}for(;i<E.length;i+=1)E[i].d(1);E.length=le.length}if(H&2&&ne(Q,r[1]),H&16&&U(z,"display",r[4]?"flex":"none"),H&288){se=ue(r[5]);let i;for(i=0;i<se.length;i+=1){const b=Ee(r,se,i);T[i]?T[i].p(b,H):(T[i]=Ve(b),T[i].c(),T[i].m($,null))}for(;i<T.length;i+=1)T[i].d(1);T.length=se.length}},i:Ce,o:Ce,d(r){r&&p(l),D&&D.d(),P&&P.d(),qe(E,r),qe(T,r),pe=!1,Le(_e)}}}function ze(a,l,e){let n=[{name:"Tallkotte",price:60,img:"https://img.fruugo.com/product/5/27/1700472275_0340_0340.jpg",amount:1},{name:"Stor Tallkotte",price:100,img:"https://www.kransmakaren.se/bilder/artiklar/7133.jpg?m=1710277924",amount:1},{name:"Grankotte",price:80,img:"https://www.floristik24.se/media/images/popup/Fichtenzapfen-Natur-10kg-503_1.jpg",amount:1},{name:"Lärkkotte",price:90,img:"https://kristinasscrapbooking.se/images/zoom/50250_5.jpg",amount:1},{name:"Lyx kotte",price:3e4,img:"https://eldabutiken.cdn.storm.io/a5ba665a-2de4-4011-b0e3-99039c2a2fef/hem%20och%20inredning-tommre-kotte-lykta-sandgr-eldabutiken.png?w=1000",amount:1},{name:"Sequoia kotte",price:80,img:"https://03.cdn37.se/mL/images/2.272500/zqare-sequoiatradkottar-300-g-ca-15-st.jpeg",amount:1},{name:"Farlig kotte",price:500,img:"https://nycdn.nyehandel.se/store_a8bb5895-4daf-4735-8c62-c71aa5a01004/images/sfUWsNz7m27D9kw1682325029.jpeg?width=800&height=800",amount:1},{name:"Cypress kotte",price:70,img:"https://www.floristik24.se/media/images/popup/Zypressen-Zapfen-Natur-3cm-500g-2271.jpg",amount:1},{name:"Ängel kotte",price:2e3,img:"https://www.lekolar.se/globalassets/inriver/resources/pt_1590_114387.jpg",amount:1},{name:"Igelkotte",price:1e3,img:"https://a.1stdibscdn.com/walter-bosse-hedgehog-stackable-ashtray-set-for-bertha-baller-1955-for-sale/f_61002/f_408653421722439396188/f_40865342_1722439396874_bg_processed.jpg?width=768",amount:1},{name:"Hemlock-kotte",price:90,img:"https://cdn.pixabay.com/photo/2021/09/01/15/39/pine-cone-6591668_640.jpg",amount:1},{name:"Douglas kotte",price:70,img:"https://www.floristik24.se/media/images/popup/Douglas-Zapfen-1kg-57241.jpg",amount:1},{name:"Rosa kotte",price:100,img:"https://images.nexusapp.co/assets/92/81/38/186029216.jpg",amount:1},{name:"Kotte lampa",price:500,img:"https://miljogarden.se/wp-content/uploads/2022/02/belysning-ph-84-kotte-taklampa-koppar-louis-poulsen.jpg",amount:1},{name:"Sockertallskotte",price:80,img:"https://03.cdn37.se/mL/images/2.204113/sockertallskotte-xl-20-28-cm.jpeg",amount:1},{name:"Glad kotte",price:1e6,img:"https://www.barnkalaset.se/pub_images/original/A3PCN.jpg",amount:1}],o=[],y=0,m=0,h=!1,j=!1;function V(){e(4,j=!j)}function k(){e(0,o=[]),e(1,y=0),e(2,m=0),n.forEach(s=>{s.bought=!1,s.amount=1})}function L(s){e(1,y=0),e(2,m=0),e(3,h=!0),setTimeout(()=>{e(3,h=!1)},500),console.log(s.bought),o.includes(s)?e(0,o[o.indexOf(s)].amount++,o):o.push(s);for(let f=0;f<o.length;f++)e(1,y+=o[f].price*o[f].amount),e(2,m+=o[f].amount);e(0,o)}function N(){e(1,y=0),e(2,m=0);for(let s=0;s<o.length;s++)e(1,y+=o[s].price*o[s].amount),e(2,m+=o[s].amount);e(0,o)}function d(s){s.amount++,N()}function x(s){s.amount>1?s.amount--:o.splice(o.indexOf(s),1),N()}return[o,y,m,h,j,n,V,k,L,d,x,()=>V(),()=>V(),()=>k(),s=>L(s)]}class Se extends Pe{constructor(l){super(),xe(this,l,ze,Oe,Ne,{})}}export{Se as component};
