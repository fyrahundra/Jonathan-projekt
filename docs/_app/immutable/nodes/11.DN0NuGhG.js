import{s as Ne,n as ke,r as Le,d as de,i as be}from"../chunks/scheduler.BpkR8Ea4.js";import{S as Pe,i as Ve,e as c,s as C,t as B,c as u,a as w,k as W,f as y,d,b as S,l as g,y as Ce,q as D,g as oe,h as t,r as ne,j as ae,u as we}from"../chunks/index.D8T7LVfr.js";import{e as ue}from"../chunks/each.D6YF6ztN.js";import{b as xe}from"../chunks/paths.DJZ5f0sY.js";function ye(n,l,e){const a=n.slice();return a[16]=l[e],a}function Te(n,l,e){const a=n.slice();return a[19]=l[e],a}function Ee(n){let l,e;return{c(){l=c("p"),e=B(n[2])},l(a){l=u(a,"P",{});var o=w(l);e=S(o,n[2]),o.forEach(d)},m(a,o){oe(a,l,o),t(l,e)},p(a,o){o&4&&ae(e,a[2])},d(a){a&&d(l)}}}function je(n){let l,e="9+";return{c(){l=c("p"),l.textContent=e},l(a){l=u(a,"P",{"data-svelte-h":!0}),W(l)!=="svelte-9z4uys"&&(l.textContent=e)},m(a,o){oe(a,l,o)},d(a){a&&d(l)}}}function Ie(n){let l,e,a,o,T,p,f,L=n[19].name+"",P,k,V=n[19].amount+"",x,h,z,A=n[19].price+"",E,F,K,s,m,H="+",M,v,ee="-",G,R,te;return{c(){l=c("div"),e=c("img"),T=C(),p=c("div"),f=c("p"),P=B(L),k=B(" x"),x=B(V),h=C(),z=c("p"),E=B(A),F=B("kr"),K=C(),s=c("div"),m=c("button"),m.textContent=H,M=C(),v=c("button"),v.textContent=ee,G=C(),this.h()},l(U){l=u(U,"DIV",{style:!0});var _=w(l);e=u(_,"IMG",{src:!0,alt:!0,style:!0}),T=y(_),p=u(_,"DIV",{style:!0});var J=w(p);f=u(J,"P",{});var Q=w(f);P=S(Q,L),k=S(Q," x"),x=S(Q,V),Q.forEach(d),h=y(J),z=u(J,"P",{});var Z=w(z);E=S(Z,A),F=S(Z,"kr"),Z.forEach(d),J.forEach(d),K=y(_),s=u(_,"DIV",{style:!0});var X=w(s);m=u(X,"BUTTON",{class:!0,"data-svelte-h":!0}),W(m)!=="svelte-7uus3b"&&(m.textContent=H),M=y(X),v=u(X,"BUTTON",{class:!0,"data-svelte-h":!0}),W(v)!=="svelte-12fgky2"&&(v.textContent=ee),X.forEach(d),G=y(_),_.forEach(d),this.h()},h(){de(e.src,a=n[19].img)||g(e,"src",a),g(e,"alt",o=n[19].name),D(e,"width","50px"),D(e,"height","50px"),D(p,"display","flex"),D(p,"flex-direction","column"),g(m,"class","change svelte-10m0b25"),g(v,"class","change svelte-10m0b25"),D(s,"display","flex"),D(s,"flex-direction","column"),D(l,"display","flex"),D(l,"flex-direction","row"),D(l,"justify-content","space-around")},m(U,_){oe(U,l,_),t(l,e),t(l,T),t(l,p),t(p,f),t(f,P),t(f,k),t(f,x),t(p,h),t(p,z),t(z,E),t(z,F),t(l,K),t(l,s),t(s,m),t(s,M),t(s,v),t(l,G),R||(te=[ne(m,"click",function(){be(n[9](n[19]))&&n[9](n[19]).apply(this,arguments)}),ne(v,"click",function(){be(n[10](n[19]))&&n[10](n[19]).apply(this,arguments)})],R=!0)},p(U,_){n=U,_&1&&!de(e.src,a=n[19].img)&&g(e,"src",a),_&1&&o!==(o=n[19].name)&&g(e,"alt",o),_&1&&L!==(L=n[19].name+"")&&ae(P,L),_&1&&V!==(V=n[19].amount+"")&&ae(x,V),_&1&&A!==(A=n[19].price+"")&&ae(E,A)},d(U){U&&d(l),R=!1,Le(te)}}}function De(n){let l,e,a,o,T,p=n[16].name+"",f,L,P=n[16].price+"",k,V,x,h,z="Add to cart",A,E,F;function K(){return n[14](n[16])}return{c(){l=c("div"),e=c("p"),a=c("img"),T=C(),f=B(p),L=B(" - "),k=B(P),V=B("kr"),x=C(),h=c("button"),h.textContent=z,A=C(),this.h()},l(s){l=u(s,"DIV",{});var m=w(l);e=u(m,"P",{});var H=w(e);a=u(H,"IMG",{src:!0,alt:!0,class:!0}),T=y(H),f=S(H,p),L=S(H," - "),k=S(H,P),V=S(H,"kr"),H.forEach(d),x=y(m),h=u(m,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),W(h)!=="svelte-r4u2vm"&&(h.textContent=z),A=y(m),m.forEach(d),this.h()},h(){de(a.src,o=n[16].img)||g(a,"src",o),g(a,"alt",n[16].name),g(a,"class","kotte svelte-10m0b25"),D(h,"background-color","green"),g(h,"class","buy svelte-10m0b25")},m(s,m){oe(s,l,m),t(l,e),t(e,a),t(e,T),t(e,f),t(e,L),t(e,k),t(e,V),t(l,x),t(l,h),t(l,A),E||(F=ne(h,"click",K),E=!0)},p(s,m){n=s},d(s){s&&d(l),E=!1,F()}}}function Oe(n){let l,e,a,o,T="Pinecone Emporium",p,f,L="|",P,k,V=`<a href="${xe}/pinecone-about-us">About us</a>`,x,h,z="|",A,E,F='<img src="https://blogg.loopia.se/wp-content/uploads/2020/01/shopping-cart@4x.png" alt="Shopping cart" class="shoppingCart svelte-10m0b25"/>',K,s,m,H,M,v,ee,G,R,te,U,_,J,Q,Z,X="Checkout",me,Y,pe,ge,N=n[2]<=9&&Ee(n),O=n[2]>9&&je(),le=ue(n[0]),j=[];for(let r=0;r<le.length;r+=1)j[r]=Ie(Te(n,le,r));let se=ue(n[5]),I=[];for(let r=0;r<se.length;r+=1)I[r]=De(ye(n,se,r));return{c(){l=c("main"),e=c("div"),a=c("div"),o=c("h1"),o.textContent=T,p=C(),f=c("p"),f.textContent=L,P=C(),k=c("div"),k.innerHTML=V,x=C(),h=c("p"),h.textContent=z,A=C(),E=c("button"),E.innerHTML=F,K=C(),s=c("button"),N&&N.c(),m=C(),O&&O.c(),H=C(),M=c("div"),v=c("div");for(let r=0;r<j.length;r+=1)j[r].c();ee=C(),G=c("div"),R=c("h1"),te=B(`Total: \r
                    `),U=c("p"),_=B(n[1]),J=B("kr"),Q=C(),Z=c("button"),Z.textContent=X,me=C(),Y=c("div");for(let r=0;r<I.length;r+=1)I[r].c();this.h()},l(r){l=u(r,"MAIN",{class:!0});var q=w(l);e=u(q,"DIV",{class:!0});var i=w(e);a=u(i,"DIV",{class:!0});var b=w(a);o=u(b,"H1",{class:!0,"data-svelte-h":!0}),W(o)!=="svelte-1n98xle"&&(o.textContent=T),p=y(b),f=u(b,"P",{class:!0,"data-svelte-h":!0}),W(f)!=="svelte-1jb1zz9"&&(f.textContent=L),P=y(b),k=u(b,"DIV",{class:!0,"data-svelte-h":!0}),W(k)!=="svelte-ryeo8v"&&(k.innerHTML=V),x=y(b),h=u(b,"P",{class:!0,"data-svelte-h":!0}),W(h)!=="svelte-dp9r3o"&&(h.textContent=z),A=y(b),E=u(b,"BUTTON",{"data-svelte-h":!0}),W(E)!=="svelte-1kiyka8"&&(E.innerHTML=F),K=y(b),s=u(b,"BUTTON",{class:!0});var ie=w(s);N&&N.l(ie),m=y(ie),O&&O.l(ie),ie.forEach(d),b.forEach(d),H=y(i),M=u(i,"DIV",{class:!0,style:!0});var re=w(M);v=u(re,"DIV",{style:!0});var _e=w(v);for(let $=0;$<j.length;$+=1)j[$].l(_e);_e.forEach(d),ee=y(re),G=u(re,"DIV",{class:!0});var ce=w(G);R=u(ce,"H1",{});var fe=w(R);te=S(fe,`Total: \r
                    `),U=u(fe,"P",{});var he=w(U);_=S(he,n[1]),J=S(he,"kr"),he.forEach(d),fe.forEach(d),Q=y(ce),Z=u(ce,"BUTTON",{style:!0,"data-svelte-h":!0}),W(Z)!=="svelte-16iv10x"&&(Z.textContent=X),ce.forEach(d),re.forEach(d),me=y(i),Y=u(i,"DIV",{class:!0});var ve=w(Y);for(let $=0;$<I.length;$+=1)I[$].l(ve);ve.forEach(d),i.forEach(d),q.forEach(d),this.h()},h(){g(o,"class","title svelte-10m0b25"),g(f,"class","divider1 svelte-10m0b25"),g(k,"class","info svelte-10m0b25"),g(h,"class","divider2 svelte-10m0b25"),g(s,"class","cartAmount svelte-10m0b25"),Ce(s,"bought",n[3]),g(a,"class","bar svelte-10m0b25"),D(v,"height","75%"),D(v,"overfill-y","scroll"),D(v,"margin-top","10px"),D(v,"position","absolute"),D(Z,"background-color","green"),g(G,"class","checkout svelte-10m0b25"),g(M,"class","shoppingList svelte-10m0b25"),D(M,"display",n[4]?"block":"none"),g(Y,"class","container svelte-10m0b25"),g(e,"class","shop svelte-10m0b25"),g(l,"class","backdrop svelte-10m0b25")},m(r,q){oe(r,l,q),t(l,e),t(e,a),t(a,o),t(a,p),t(a,f),t(a,P),t(a,k),t(a,x),t(a,h),t(a,A),t(a,E),t(a,K),t(a,s),N&&N.m(s,null),t(s,m),O&&O.m(s,null),t(e,H),t(e,M),t(M,v);for(let i=0;i<j.length;i+=1)j[i]&&j[i].m(v,null);t(M,ee),t(M,G),t(G,R),t(R,te),t(R,U),t(U,_),t(U,J),t(G,Q),t(G,Z),t(e,me),t(e,Y);for(let i=0;i<I.length;i+=1)I[i]&&I[i].m(Y,null);pe||(ge=[ne(E,"click",n[11]),ne(s,"click",n[12]),ne(Z,"click",n[13])],pe=!0)},p(r,[q]){if(r[2]<=9?N?N.p(r,q):(N=Ee(r),N.c(),N.m(s,m)):N&&(N.d(1),N=null),r[2]>9?O||(O=je(),O.c(),O.m(s,null)):O&&(O.d(1),O=null),q&8&&Ce(s,"bought",r[3]),q&1537){le=ue(r[0]);let i;for(i=0;i<le.length;i+=1){const b=Te(r,le,i);j[i]?j[i].p(b,q):(j[i]=Ie(b),j[i].c(),j[i].m(v,null))}for(;i<j.length;i+=1)j[i].d(1);j.length=le.length}if(q&2&&ae(_,r[1]),q&16&&D(M,"display",r[4]?"block":"none"),q&288){se=ue(r[5]);let i;for(i=0;i<se.length;i+=1){const b=ye(r,se,i);I[i]?I[i].p(b,q):(I[i]=De(b),I[i].c(),I[i].m(Y,null))}for(;i<I.length;i+=1)I[i].d(1);I.length=se.length}},i:ke,o:ke,d(r){r&&d(l),N&&N.d(),O&&O.d(),we(j,r),we(I,r),pe=!1,Le(ge)}}}function ze(n,l,e){let a=[{name:"Tallkotte",price:60,img:"https://img.fruugo.com/product/5/27/1700472275_0340_0340.jpg",amount:1},{name:"Stor Tallkotte",price:100,img:"https://www.kransmakaren.se/bilder/artiklar/7133.jpg?m=1710277924",amount:1},{name:"Grankotte",price:80,img:"https://www.floristik24.se/media/images/popup/Fichtenzapfen-Natur-10kg-503_1.jpg",amount:1},{name:"Lärkkotte",price:90,img:"https://kristinasscrapbooking.se/images/zoom/50250_5.jpg",amount:1},{name:"Lyx kotte",price:3e4,img:"https://eldabutiken.cdn.storm.io/a5ba665a-2de4-4011-b0e3-99039c2a2fef/hem%20och%20inredning-tommre-kotte-lykta-sandgr-eldabutiken.png?w=1000",amount:1},{name:"Sequoia kotte",price:80,img:"https://03.cdn37.se/mL/images/2.272500/zqare-sequoiatradkottar-300-g-ca-15-st.jpeg",amount:1},{name:"Farlig kotte",price:500,img:"https://nycdn.nyehandel.se/store_a8bb5895-4daf-4735-8c62-c71aa5a01004/images/sfUWsNz7m27D9kw1682325029.jpeg?width=800&height=800",amount:1},{name:"Cypress kotte",price:70,img:"https://www.floristik24.se/media/images/popup/Zypressen-Zapfen-Natur-3cm-500g-2271.jpg",amount:1},{name:"Ängel kotte",price:2e3,img:"https://www.lekolar.se/globalassets/inriver/resources/pt_1590_114387.jpg",amount:1},{name:"Igelkotte",price:1e3,img:"https://a.1stdibscdn.com/walter-bosse-hedgehog-stackable-ashtray-set-for-bertha-baller-1955-for-sale/f_61002/f_408653421722439396188/f_40865342_1722439396874_bg_processed.jpg?width=768",amount:1},{name:"Hemlock-kotte",price:90,img:"https://cdn.pixabay.com/photo/2021/09/01/15/39/pine-cone-6591668_640.jpg",amount:1},{name:"Douglas kotte",price:70,img:"https://www.floristik24.se/media/images/popup/Douglas-Zapfen-1kg-57241.jpg",amount:1},{name:"Rosa kotte",price:100,img:"https://images.nexusapp.co/assets/92/81/38/186029216.jpg",amount:1},{name:"Kotte lampa",price:500,img:"https://miljogarden.se/wp-content/uploads/2022/02/belysning-ph-84-kotte-taklampa-koppar-louis-poulsen.jpg",amount:1},{name:"Sockertallskotte",price:80,img:"https://03.cdn37.se/mL/images/2.204113/sockertallskotte-xl-20-28-cm.jpeg",amount:1},{name:"Glad kotte",price:1e6,img:"https://www.barnkalaset.se/pub_images/original/A3PCN.jpg",amount:1}],o=[],T=0,p=0,f=!1,L=!1;function P(){e(4,L=!L)}function k(){e(0,o=[]),e(1,T=0),e(2,p=0),a.forEach(s=>{s.bought=!1,s.amount=1})}function V(s){e(1,T=0),e(2,p=0),e(3,f=!0),setTimeout(()=>{e(3,f=!1)},500),console.log(s.bought),o.includes(s)?e(0,o[o.indexOf(s)].amount++,o):o.push(s);for(let m=0;m<o.length;m++)e(1,T+=o[m].price*o[m].amount),e(2,p+=o[m].amount);e(0,o)}function x(){e(1,T=0),e(2,p=0);for(let s=0;s<o.length;s++)e(1,T+=o[s].price*o[s].amount),e(2,p+=o[s].amount);e(0,o)}function h(s){s.amount++,x()}function z(s){s.amount>1?s.amount--:o.splice(o.indexOf(s),1),x()}return[o,T,p,f,L,a,P,k,V,h,z,()=>P(),()=>P(),()=>k(),s=>V(s)]}class qe extends Pe{constructor(l){super(),Ve(this,l,ze,Oe,Ne,{})}}export{qe as component};
