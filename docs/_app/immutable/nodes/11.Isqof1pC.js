import{s as Ne,n as Ce,r as Le,d as de,i as we}from"../chunks/scheduler.BpkR8Ea4.js";import{S as Pe,i as xe,e as c,s as C,t as B,c as u,a as k,k as W,f as w,d as m,b as S,l as g,y as ye,q as U,g as oe,h as t,r as ae,j as ne,u as qe}from"../chunks/index.D8T7LVfr.js";import{e as ue}from"../chunks/each.D6YF6ztN.js";import{b as Me}from"../chunks/paths.CIpbIGNM.js";function Ee(a,l,e){const n=a.slice();return n[16]=l[e],n}function Te(a,l,e){const n=a.slice();return n[19]=l[e],n}function je(a){let l,e;return{c(){l=c("p"),e=B(a[2])},l(n){l=u(n,"P",{});var o=k(l);e=S(o,a[2]),o.forEach(m)},m(n,o){oe(n,l,o),t(l,e)},p(n,o){o&4&&ne(e,n[2])},d(n){n&&m(l)}}}function Ie(a){let l,e="9+";return{c(){l=c("p"),l.textContent=e},l(n){l=u(n,"P",{"data-svelte-h":!0}),W(l)!=="svelte-9z4uys"&&(l.textContent=e)},m(n,o){oe(n,l,o)},d(n){n&&m(l)}}}function De(a){let l,e,n,o,y,f,h,j=a[19].name+"",V,v,L=a[19].amount+"",N,d,x,M=a[19].price+"",q,F,K,s,p,O="+",z,I,te="-",G,R,J;return{c(){l=c("div"),e=c("img"),y=C(),f=c("div"),h=c("p"),V=B(j),v=B(" x"),N=B(L),d=C(),x=c("p"),q=B(M),F=B("kr"),K=C(),s=c("div"),p=c("button"),p.textContent=O,z=C(),I=c("button"),I.textContent=te,G=C(),this.h()},l(Z){l=u(Z,"DIV",{style:!0});var _=k(l);e=u(_,"IMG",{src:!0,alt:!0,style:!0}),y=w(_),f=u(_,"DIV",{style:!0});var Q=k(f);h=u(Q,"P",{});var X=k(h);V=S(X,j),v=S(X," x"),N=S(X,L),X.forEach(m),d=w(Q),x=u(Q,"P",{});var Y=k(x);q=S(Y,M),F=S(Y,"kr"),Y.forEach(m),Q.forEach(m),K=w(_),s=u(_,"DIV",{style:!0});var A=k(s);p=u(A,"BUTTON",{class:!0,"data-svelte-h":!0}),W(p)!=="svelte-7uus3b"&&(p.textContent=O),z=w(A),I=u(A,"BUTTON",{class:!0,"data-svelte-h":!0}),W(I)!=="svelte-12fgky2"&&(I.textContent=te),A.forEach(m),G=w(_),_.forEach(m),this.h()},h(){de(e.src,n=a[19].img)||g(e,"src",n),g(e,"alt",o=a[19].name),U(e,"width","50px"),U(e,"height","50px"),U(f,"display","flex"),U(f,"flex-direction","column"),g(p,"class","change svelte-a9qk3b"),g(I,"class","change svelte-a9qk3b"),U(s,"display","flex"),U(s,"flex-direction","column"),U(l,"display","flex"),U(l,"flex-direction","row"),U(l,"justify-content","space-around")},m(Z,_){oe(Z,l,_),t(l,e),t(l,y),t(l,f),t(f,h),t(h,V),t(h,v),t(h,N),t(f,d),t(f,x),t(x,q),t(x,F),t(l,K),t(l,s),t(s,p),t(s,z),t(s,I),t(l,G),R||(J=[ae(p,"click",function(){we(a[9](a[19]))&&a[9](a[19]).apply(this,arguments)}),ae(I,"click",function(){we(a[10](a[19]))&&a[10](a[19]).apply(this,arguments)})],R=!0)},p(Z,_){a=Z,_&1&&!de(e.src,n=a[19].img)&&g(e,"src",n),_&1&&o!==(o=a[19].name)&&g(e,"alt",o),_&1&&j!==(j=a[19].name+"")&&ne(V,j),_&1&&L!==(L=a[19].amount+"")&&ne(N,L),_&1&&M!==(M=a[19].price+"")&&ne(q,M)},d(Z){Z&&m(l),R=!1,Le(J)}}}function Ve(a){let l,e,n,o,y,f=a[16].name+"",h,j,V=a[16].price+"",v,L,N,d,x="Add to cart",M,q,F;function K(){return a[14](a[16])}return{c(){l=c("div"),e=c("p"),n=c("img"),y=C(),h=B(f),j=B(" - "),v=B(V),L=B("kr"),N=C(),d=c("button"),d.textContent=x,M=C(),this.h()},l(s){l=u(s,"DIV",{});var p=k(l);e=u(p,"P",{});var O=k(e);n=u(O,"IMG",{src:!0,alt:!0,class:!0}),y=w(O),h=S(O,f),j=S(O," - "),v=S(O,V),L=S(O,"kr"),O.forEach(m),N=w(p),d=u(p,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),W(d)!=="svelte-r4u2vm"&&(d.textContent=x),M=w(p),p.forEach(m),this.h()},h(){de(n.src,o=a[16].img)||g(n,"src",o),g(n,"alt",a[16].name),g(n,"class","kotte svelte-a9qk3b"),U(d,"background-color","green"),g(d,"class","buy svelte-a9qk3b")},m(s,p){oe(s,l,p),t(l,e),t(e,n),t(e,y),t(e,h),t(e,j),t(e,v),t(e,L),t(l,N),t(l,d),t(l,M),q||(F=ae(d,"click",K),q=!0)},p(s,p){a=s},d(s){s&&m(l),q=!1,F()}}}function Oe(a){let l,e,n,o,y="Pinecone Emporium",f,h,j="|",V,v,L=`<a href="${Me}/pinecone-about-us">About us</a>`,N,d,x="|",M,q,F='<img src="https://blogg.loopia.se/wp-content/uploads/2020/01/shopping-cart@4x.png" alt="Shopping cart" class="shoppingCart svelte-a9qk3b"/>',K,s,p,O,z,I,te,G,R,J,Z,_,Q,X,Y,A,ge="Checkout",pe,$,me,_e,D=a[2]<=9&&je(a),P=a[2]>9&&Ie(),le=ue(a[0]),E=[];for(let r=0;r<le.length;r+=1)E[r]=De(Te(a,le,r));let se=ue(a[5]),T=[];for(let r=0;r<se.length;r+=1)T[r]=Ve(Ee(a,se,r));return{c(){l=c("main"),e=c("div"),n=c("div"),o=c("h1"),o.textContent=y,f=C(),h=c("p"),h.textContent=j,V=C(),v=c("div"),v.innerHTML=L,N=C(),d=c("p"),d.textContent=x,M=C(),q=c("button"),q.innerHTML=F,K=C(),s=c("button"),D&&D.c(),p=C(),P&&P.c(),O=C(),z=c("div"),I=c("div");for(let r=0;r<E.length;r+=1)E[r].c();te=C(),G=c("div"),R=c("div"),J=c("h1"),Z=B(`Total: \r
                        `),_=c("p"),Q=B(a[1]),X=B("kr"),Y=C(),A=c("button"),A.textContent=ge,pe=C(),$=c("div");for(let r=0;r<T.length;r+=1)T[r].c();this.h()},l(r){l=u(r,"MAIN",{class:!0});var H=k(l);e=u(H,"DIV",{class:!0});var i=k(e);n=u(i,"DIV",{class:!0});var b=k(n);o=u(b,"H1",{class:!0,"data-svelte-h":!0}),W(o)!=="svelte-1n98xle"&&(o.textContent=y),f=w(b),h=u(b,"P",{class:!0,"data-svelte-h":!0}),W(h)!=="svelte-1jb1zz9"&&(h.textContent=j),V=w(b),v=u(b,"DIV",{class:!0,"data-svelte-h":!0}),W(v)!=="svelte-ryeo8v"&&(v.innerHTML=L),N=w(b),d=u(b,"P",{class:!0,"data-svelte-h":!0}),W(d)!=="svelte-dp9r3o"&&(d.textContent=x),M=w(b),q=u(b,"BUTTON",{"data-svelte-h":!0}),W(q)!=="svelte-1kiyka8"&&(q.innerHTML=F),K=w(b),s=u(b,"BUTTON",{class:!0});var ie=k(s);D&&D.l(ie),p=w(ie),P&&P.l(ie),ie.forEach(m),b.forEach(m),O=w(i),z=u(i,"DIV",{class:!0,style:!0});var re=k(z);I=u(re,"DIV",{class:!0});var ke=k(I);for(let ee=0;ee<E.length;ee+=1)E[ee].l(ke);ke.forEach(m),te=w(re),G=u(re,"DIV",{class:!0});var ce=k(G);R=u(ce,"DIV",{class:!0});var ve=k(R);J=u(ve,"H1",{});var fe=k(J);Z=S(fe,`Total: \r
                        `),_=u(fe,"P",{});var he=k(_);Q=S(he,a[1]),X=S(he,"kr"),he.forEach(m),fe.forEach(m),ve.forEach(m),Y=w(ce),A=u(ce,"BUTTON",{style:!0,"data-svelte-h":!0}),W(A)!=="svelte-16iv10x"&&(A.textContent=ge),ce.forEach(m),re.forEach(m),pe=w(i),$=u(i,"DIV",{class:!0});var be=k($);for(let ee=0;ee<T.length;ee+=1)T[ee].l(be);be.forEach(m),i.forEach(m),H.forEach(m),this.h()},h(){g(o,"class","title svelte-a9qk3b"),g(h,"class","divider1 svelte-a9qk3b"),g(v,"class","info svelte-a9qk3b"),g(d,"class","divider2 svelte-a9qk3b"),g(s,"class","cartAmount svelte-a9qk3b"),ye(s,"bought",a[3]),g(n,"class","bar svelte-a9qk3b"),g(I,"class","shopItems svelte-a9qk3b"),g(R,"class","phoneMod svelte-a9qk3b"),U(A,"background-color","green"),g(G,"class","checkout svelte-a9qk3b"),g(z,"class","shoppingList svelte-a9qk3b"),U(z,"display",a[4]?"flex":"none"),g($,"class","container svelte-a9qk3b"),g(e,"class","shop svelte-a9qk3b"),g(l,"class","backdrop svelte-a9qk3b")},m(r,H){oe(r,l,H),t(l,e),t(e,n),t(n,o),t(n,f),t(n,h),t(n,V),t(n,v),t(n,N),t(n,d),t(n,M),t(n,q),t(n,K),t(n,s),D&&D.m(s,null),t(s,p),P&&P.m(s,null),t(e,O),t(e,z),t(z,I);for(let i=0;i<E.length;i+=1)E[i]&&E[i].m(I,null);t(z,te),t(z,G),t(G,R),t(R,J),t(J,Z),t(J,_),t(_,Q),t(_,X),t(G,Y),t(G,A),t(e,pe),t(e,$);for(let i=0;i<T.length;i+=1)T[i]&&T[i].m($,null);me||(_e=[ae(q,"click",a[11]),ae(s,"click",a[12]),ae(A,"click",a[13])],me=!0)},p(r,[H]){if(r[2]<=9?D?D.p(r,H):(D=je(r),D.c(),D.m(s,p)):D&&(D.d(1),D=null),r[2]>9?P||(P=Ie(),P.c(),P.m(s,null)):P&&(P.d(1),P=null),H&8&&ye(s,"bought",r[3]),H&1537){le=ue(r[0]);let i;for(i=0;i<le.length;i+=1){const b=Te(r,le,i);E[i]?E[i].p(b,H):(E[i]=De(b),E[i].c(),E[i].m(I,null))}for(;i<E.length;i+=1)E[i].d(1);E.length=le.length}if(H&2&&ne(Q,r[1]),H&16&&U(z,"display",r[4]?"flex":"none"),H&288){se=ue(r[5]);let i;for(i=0;i<se.length;i+=1){const b=Ee(r,se,i);T[i]?T[i].p(b,H):(T[i]=Ve(b),T[i].c(),T[i].m($,null))}for(;i<T.length;i+=1)T[i].d(1);T.length=se.length}},i:Ce,o:Ce,d(r){r&&m(l),D&&D.d(),P&&P.d(),qe(E,r),qe(T,r),me=!1,Le(_e)}}}function ze(a,l,e){let n=[{name:"Tallkotte",price:60,img:"https://img.fruugo.com/product/5/27/1700472275_0340_0340.jpg",amount:1},{name:"Stor Tallkotte",price:100,img:"https://www.kransmakaren.se/bilder/artiklar/7133.jpg?m=1710277924",amount:1},{name:"Grankotte",price:80,img:"https://www.floristik24.se/media/images/popup/Fichtenzapfen-Natur-10kg-503_1.jpg",amount:1},{name:"Lärkkotte",price:90,img:"https://kristinasscrapbooking.se/images/zoom/50250_5.jpg",amount:1},{name:"Lyx kotte",price:3e4,img:"https://eldabutiken.cdn.storm.io/a5ba665a-2de4-4011-b0e3-99039c2a2fef/hem%20och%20inredning-tommre-kotte-lykta-sandgr-eldabutiken.png?w=1000",amount:1},{name:"Sequoia kotte",price:80,img:"https://03.cdn37.se/mL/images/2.272500/zqare-sequoiatradkottar-300-g-ca-15-st.jpeg",amount:1},{name:"Farlig kotte",price:500,img:"https://nycdn.nyehandel.se/store_a8bb5895-4daf-4735-8c62-c71aa5a01004/images/sfUWsNz7m27D9kw1682325029.jpeg?width=800&height=800",amount:1},{name:"Cypress kotte",price:70,img:"https://www.floristik24.se/media/images/popup/Zypressen-Zapfen-Natur-3cm-500g-2271.jpg",amount:1},{name:"Ängel kotte",price:2e3,img:"https://www.lekolar.se/globalassets/inriver/resources/pt_1590_114387.jpg",amount:1},{name:"Igelkotte",price:1e3,img:"https://a.1stdibscdn.com/walter-bosse-hedgehog-stackable-ashtray-set-for-bertha-baller-1955-for-sale/f_61002/f_408653421722439396188/f_40865342_1722439396874_bg_processed.jpg?width=768",amount:1},{name:"Hemlock-kotte",price:90,img:"https://cdn.pixabay.com/photo/2021/09/01/15/39/pine-cone-6591668_640.jpg",amount:1},{name:"Douglas kotte",price:70,img:"https://www.floristik24.se/media/images/popup/Douglas-Zapfen-1kg-57241.jpg",amount:1},{name:"Rosa kotte",price:100,img:"https://images.nexusapp.co/assets/92/81/38/186029216.jpg",amount:1},{name:"Kotte lampa",price:500,img:"https://miljogarden.se/wp-content/uploads/2022/02/belysning-ph-84-kotte-taklampa-koppar-louis-poulsen.jpg",amount:1},{name:"Sockertallskotte",price:80,img:"https://03.cdn37.se/mL/images/2.204113/sockertallskotte-xl-20-28-cm.jpeg",amount:1},{name:"Glad kotte",price:1e6,img:"https://www.barnkalaset.se/pub_images/original/A3PCN.jpg",amount:1}],o=[],y=0,f=0,h=!1,j=!1;function V(){e(4,j=!j)}function v(){e(0,o=[]),e(1,y=0),e(2,f=0),n.forEach(s=>{s.bought=!1,s.amount=1})}function L(s){e(1,y=0),e(2,f=0),e(3,h=!0),setTimeout(()=>{e(3,h=!1)},500),console.log(s.bought),o.includes(s)?e(0,o[o.indexOf(s)].amount++,o):o.push(s);for(let p=0;p<o.length;p++)e(1,y+=o[p].price*o[p].amount),e(2,f+=o[p].amount);e(0,o)}function N(){e(1,y=0),e(2,f=0);for(let s=0;s<o.length;s++)e(1,y+=o[s].price*o[s].amount),e(2,f+=o[s].amount);e(0,o)}function d(s){s.amount++,N()}function x(s){s.amount>1?s.amount--:o.splice(o.indexOf(s),1),N()}return[o,y,f,h,j,n,V,v,L,d,x,()=>V(),()=>V(),()=>v(),s=>L(s)]}class Se extends Pe{constructor(l){super(),xe(this,l,ze,Oe,Ne,{})}}export{Se as component};
