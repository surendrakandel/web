import{S as J,i as M,s as O,k as i,q as C,a as E,l as o,m as u,r as k,h as n,c as S,n as l,p as Y,b as z,J as e,P as H,M as L,B as R,D as F}from"../../../../chunks/index-2a327d32.js";import{g as K}from"../../../../chunks/navigation-6a7bdca7.js";import{i as Q}from"../../../../chunks/valid_email-ea157053.js";function W(_){let a,r,t,f,y,I,v,d,m,j,D,s,U,c,B,P,w,V,N;return{c(){a=i("div"),r=i("div"),t=i("div"),f=i("h1"),y=C("Sorry to See you Go."),I=E(),v=i("div"),d=i("div"),m=i("label"),j=C("Plese enter email address to unsubscribe from future email."),D=E(),s=i("input"),U=E(),c=i("button"),B=C("UNSUSCRIBE"),P=E(),w=i("div"),this.h()},l(p){a=o(p,"DIV",{class:!0});var h=u(a);r=o(h,"DIV",{class:!0});var b=u(r);t=o(b,"DIV",{class:!0});var x=u(t);f=o(x,"H1",{class:!0});var T=u(f);y=k(T,"Sorry to See you Go."),T.forEach(n),I=S(x),v=o(x,"DIV",{class:!0});var $=u(v);d=o($,"DIV",{class:!0});var g=u(d);m=o(g,"LABEL",{for:!0,class:!0});var q=u(m);j=k(q,"Plese enter email address to unsubscribe from future email."),q.forEach(n),D=S(g),s=o(g,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0}),g.forEach(n),$.forEach(n),U=S(x),c=o(x,"BUTTON",{id:!0,class:!0,style:!0});var G=u(c);B=k(G,"UNSUSCRIBE"),G.forEach(n),x.forEach(n),P=S(b),w=o(b,"DIV",{class:!0});var A=u(w);A.forEach(n),b.forEach(n),h.forEach(n),this.h()},h(){l(f,"class","text-white text-left text-5xl py-12"),l(m,"for","email"),l(m,"class","text-white py-3 self-start"),l(s,"type","email"),l(s,"id","email"),l(s,"class","min-w-[100%] text-xs placeholder:font-space"),l(s,"placeholder","email address"),l(d,"class","flex flex-col w-[100%] justify-center items-center py-2 svelte-4wpa77"),l(v,"class","flex flex-col lg:flex-row gap-3 items-center justify-center pt-8 svelte-4wpa77"),l(c,"id","get_quote"),l(c,"class","btn-primary flex flex-col w-[100%] p-[16px] rounded-md text-white font-space justify-center font-semibold items-center mt-10 mb-4 svelte-4wpa77"),Y(c,"background-color","#5CB971"),l(t,"class","flex flex-col w-full lg:w-1/2 pt-16 lg:h-full px-8 justify-center svelte-4wpa77"),l(w,"class","flex flex-col w-full lg:w-1/2 py-4 lg:h-full px-8 justify-center sidePallet svelte-4wpa77"),l(r,"class","flex flex-col lg:flex-row gap-4 w-full h-full justify-around lg:justify-center max-w-screen-2xl mx-auto svelte-4wpa77"),l(a,"class","h-[120vh] lg:h-[calc(100vh-60px)] mainContainer svelte-4wpa77")},m(p,h){z(p,a,h),e(a,r),e(r,t),e(t,f),e(f,y),e(t,I),e(t,v),e(v,d),e(d,m),e(m,j),e(d,D),e(d,s),H(s,_[0].email),e(t,U),e(t,c),e(c,B),e(r,P),e(r,w),V||(N=[L(s,"input",_[2]),L(c,"click",_[1])],V=!0)},p(p,[h]){h&1&&s.value!==p[0].email&&H(s,p[0].email)},i:R,o:R,d(p){p&&n(a),V=!1,F(N)}}}function X(_,a,r){let t={email:""};function f(){Q(t.email)&&(alert("Thank you. Hope to see you again. You have been unsubscribed from future email communication"),K("/"))}function y(){t.email=this.value,r(0,t)}return[t,f,y]}class le extends J{constructor(a){super(),M(this,a,X,W,O,{})}}export{le as default};
