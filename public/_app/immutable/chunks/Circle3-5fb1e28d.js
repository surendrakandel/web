import{S as P,i as Q,s as U,k as u,q as V,a as S,l as d,m,r as w,h as r,c as q,n as h,O as c,p as f,b as W,J as s,B as N}from"./index-2a327d32.js";function X(o){let l,n,t,_,v,L,R,g,b,T,e,D,B,z,p,I,C,F;return{c(){l=u("div"),n=u("div"),t=u("div"),_=u("div"),v=u("div"),L=V("\xA0"),R=S(),g=u("div"),b=u("div"),T=V("\xA0"),e=S(),D=u("div"),B=u("div"),z=V("\xA0"),p=S(),I=u("div"),C=u("div"),F=V("\xA0"),this.h()},l(a){l=d(a,"DIV",{class:!0,style:!0});var i=m(l);n=d(i,"DIV",{class:!0});var k=m(n);t=d(k,"DIV",{class:!0});var E=m(t);_=d(E,"DIV",{class:!0});var J=m(_);v=d(J,"DIV",{class:!0});var O=m(v);L=w(O,"\xA0"),O.forEach(r),J.forEach(r),R=q(E),g=d(E,"DIV",{class:!0});var j=m(g);b=d(j,"DIV",{class:!0});var A=m(b);T=w(A,"\xA0"),A.forEach(r),j.forEach(r),e=q(E),D=d(E,"DIV",{class:!0});var G=m(D);B=d(G,"DIV",{class:!0});var H=m(B);z=w(H,"\xA0"),H.forEach(r),G.forEach(r),p=q(E),I=d(E,"DIV",{class:!0});var K=m(I);C=d(K,"DIV",{class:!0});var M=m(C);F=w(M,"\xA0"),M.forEach(r),K.forEach(r),E.forEach(r),k.forEach(r),i.forEach(r),this.h()},h(){h(v,"class","ball ball-top-left svelte-8rbowp"),c(v,"pause-animation",o[2]),h(_,"class","single-ball svelte-8rbowp"),h(b,"class","ball ball-top-right svelte-8rbowp"),c(b,"pause-animation",o[2]),h(g,"class","contener_mixte"),h(B,"class","ball ball-bottom-left svelte-8rbowp"),c(B,"pause-animation",o[2]),h(D,"class","contener_mixte"),h(C,"class","ball ball-bottom-right svelte-8rbowp"),c(C,"pause-animation",o[2]),h(I,"class","contener_mixte"),h(t,"class","ball-container svelte-8rbowp"),c(t,"pause-animation",o[2]),h(n,"class","inner svelte-8rbowp"),h(l,"class","wrapper svelte-8rbowp"),f(l,"--size",o[0]+o[1]),f(l,"--floatSize",o[0]),f(l,"--ballTopLeftColor",o[3]),f(l,"--ballTopRightColor",o[4]),f(l,"--ballBottomLeftColor",o[5]),f(l,"--ballBottomRightColor",o[6]),f(l,"--duration",o[7])},m(a,i){W(a,l,i),s(l,n),s(n,t),s(t,_),s(_,v),s(v,L),s(t,R),s(t,g),s(g,b),s(b,T),s(t,e),s(t,D),s(D,B),s(B,z),s(t,p),s(t,I),s(I,C),s(C,F)},p(a,[i]){i&4&&c(v,"pause-animation",a[2]),i&4&&c(b,"pause-animation",a[2]),i&4&&c(B,"pause-animation",a[2]),i&4&&c(C,"pause-animation",a[2]),i&4&&c(t,"pause-animation",a[2]),i&3&&f(l,"--size",a[0]+a[1]),i&1&&f(l,"--floatSize",a[0]),i&8&&f(l,"--ballTopLeftColor",a[3]),i&16&&f(l,"--ballTopRightColor",a[4]),i&32&&f(l,"--ballBottomLeftColor",a[5]),i&64&&f(l,"--ballBottomRightColor",a[6]),i&128&&f(l,"--duration",a[7])},i:N,o:N,d(a){a&&r(l)}}}function Y(o,l,n){let{size:t="60"}=l,{unit:_="px"}=l,{pause:v=!1}=l,{ballTopLeft:L="#FF3E00"}=l,{ballTopRight:R="#F8B334"}=l,{ballBottomLeft:g="#40B3FF"}=l,{ballBottomRight:b="#676778"}=l,{duration:T="1.5s"}=l;return o.$$set=e=>{"size"in e&&n(0,t=e.size),"unit"in e&&n(1,_=e.unit),"pause"in e&&n(2,v=e.pause),"ballTopLeft"in e&&n(3,L=e.ballTopLeft),"ballTopRight"in e&&n(4,R=e.ballTopRight),"ballBottomLeft"in e&&n(5,g=e.ballBottomLeft),"ballBottomRight"in e&&n(6,b=e.ballBottomRight),"duration"in e&&n(7,T=e.duration)},[t,_,v,L,R,g,b,T]}class y extends P{constructor(l){super(),Q(this,l,Y,X,U,{size:0,unit:1,pause:2,ballTopLeft:3,ballTopRight:4,ballBottomLeft:5,ballBottomRight:6,duration:7})}}export{y as C};