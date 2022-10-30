import{S as Te,i as De,s as Oe,k as c,a as $,q as H,l as u,m as p,c as j,r as J,h as f,L as Z,n as e,b as ee,J as t,M as Ve,B as Se,K as ve,e as ye,f as S,t as D,d as je,o as Re,N as Me,w as we,x as be,y as Ee,z as $e,F as Ue,G as ze,H as Qe,I as He,g as ke,O as Y}from"../../../../chunks/index-2a327d32.js";import{p as Fe}from"../../../../chunks/stores-32538211.js";import{r as xe,t as Je}from"../../../../chunks/nav_state_provider-d02ba264.js";import{I as Ke}from"../../../../chunks/Index-9fc9c67c.js";import{C as We}from"../../../../chunks/index-28668d24.js";import{n as Xe,q as qe}from"../../../../chunks/quote_store-03fbda1a.js";import{a as Ye,g as Ze}from"../../../../chunks/navigation-6a7bdca7.js";import{C as et}from"../../../../chunks/Circle3-5fb1e28d.js";import{E as tt}from"../../../../chunks/toast_options-4765ddd4.js";import{v as st}from"../../../../chunks/validate_token-4226ebb6.js";import{t as lt}from"../../../../chunks/SvelteToast.svelte_svelte_type_style_lang-be24e2c6.js";import{g as at}from"../../../../chunks/get_basic_info-f94497d8.js";function rt(_){let l,r,i,a,s,m,d,h,C,g,n,o,v,b,k,K,y,R,te,O,se,P,N,x,W,M,U,le,V,ae,G,A,I,X,q,z,re,F,ie,T;return{c(){l=c("footer"),r=c("ul"),i=c("li"),a=c("a"),s=c("img"),d=$(),h=c("span"),C=H("New Quote"),o=$(),v=c("li"),b=c("a"),k=c("img"),y=$(),R=c("span"),te=H("Track"),se=$(),P=c("li"),N=c("a"),x=c("img"),M=$(),U=c("span"),le=H("Settings"),ae=$(),G=c("li"),A=c("button"),I=c("img"),q=$(),z=c("span"),re=H("More"),this.h()},l(B){l=u(B,"FOOTER",{class:!0});var L=p(l);r=u(L,"UL",{class:!0});var w=p(r);i=u(w,"LI",{class:!0,color:!0});var E=p(i);a=u(E,"A",{href:!0,class:!0});var ne=p(a);s=u(ne,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),d=j(ne),h=u(ne,"SPAN",{class:!0,color:!0});var me=p(h);C=J(me,"New Quote"),me.forEach(f),ne.forEach(f),E.forEach(f),o=j(w),v=u(w,"LI",{class:!0,color:!0});var oe=p(v);b=u(oe,"A",{href:!0,class:!0});var ce=p(b);k=u(ce,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),y=j(ce),R=u(ce,"SPAN",{class:!0});var he=p(R);te=J(he,"Track"),he.forEach(f),ce.forEach(f),oe.forEach(f),se=j(w),P=u(w,"LI",{class:!0,color:!0});var pe=p(P);N=u(pe,"A",{href:!0,class:!0});var Q=p(N);x=u(Q,"IMG",{src:!0,height:!0,width:!0,alt:!0,class:!0}),M=j(Q),U=u(Q,"SPAN",{class:!0});var de=p(U);le=J(de,"Settings"),de.forEach(f),Q.forEach(f),pe.forEach(f),ae=j(w),G=u(w,"LI",{class:!0,color:!0});var _e=p(G);A=u(_e,"BUTTON",{class:!0});var ue=p(A);I=u(ue,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),q=j(ue),z=u(ue,"SPAN",{class:!0});var fe=p(z);re=J(fe,"More"),fe.forEach(f),ue.forEach(f),_e.forEach(f),w.forEach(f),L.forEach(f),this.h()},h(){Z(s.src,m="/images/icons/package.svg")||e(s,"src",m),e(s,"alt","get quote"),e(s,"height","26px"),e(s,"width","26px"),e(s,"class","svelte-j6l6af"),e(h,"class","font-bold text-[#5CB971] svelte-j6l6af"),e(h,"color",g=_[0].url.pathname.includes("quote")?"#5CB971":"#161628"),e(a,"href","/admin/quote"),e(a,"class","flex flex-col justify-center items-center svelte-j6l6af"),e(i,"class","h-full w-1/4 flex items-center justify-center svelte-j6l6af"),e(i,"color",n=_[0].url.pathname.includes("quote")?"#5CB971":"#161628"),Z(k.src,K="/images/icons/track.svg")||e(k,"src",K),e(k,"alt","track shipment"),e(k,"height","26px"),e(k,"width","26px"),e(k,"class","svelte-j6l6af"),e(R,"class","svelte-j6l6af"),e(b,"href","/admin/track"),e(b,"class","flex flex-col justify-center items-center svelte-j6l6af"),e(v,"class","h-full w-1/4 flex items-center justify-center svelte-j6l6af"),e(v,"color",O=_[0].url.pathname.includes("track")?"#5CB971":"#161628"),Z(x.src,W="/images/icons/setting.svg")||e(x,"src",W),e(x,"height","26px"),e(x,"width","26px"),e(x,"alt","settings"),e(x,"class","svelte-j6l6af"),e(U,"class","svelte-j6l6af"),e(N,"href","/admin/settings"),e(N,"class","flex flex-col justify-center items-center svelte-j6l6af"),e(P,"class","h-full w-1/4 flex items-center justify-center svelte-j6l6af"),e(P,"color",V=_[0].url.pathname.includes("settings")?"#5CB971":"#161628"),Z(I.src,X="/images/icons/burger.svg")||e(I,"src",X),e(I,"alt","more options"),e(I,"height","26px"),e(I,"width","26px"),e(I,"class","svelte-j6l6af"),e(z,"class","svelte-j6l6af"),e(A,"class","flex flex-col justify-center items-center svelte-j6l6af"),e(G,"class","h-full w-1/4 flex items-center justify-center svelte-j6l6af"),e(G,"color",F=_[0].url.pathname.includes("more")?"#5CB971":"#161628"),e(r,"class","flex w-full h-full justify-around items-center bg-gray-100"),e(l,"class","lg:hidden h-16 z-50 svelte-j6l6af")},m(B,L){ee(B,l,L),t(l,r),t(r,i),t(i,a),t(a,s),t(a,d),t(a,h),t(h,C),t(r,o),t(r,v),t(v,b),t(b,k),t(b,y),t(b,R),t(R,te),t(r,se),t(r,P),t(P,N),t(N,x),t(N,M),t(N,U),t(U,le),t(r,ae),t(r,G),t(G,A),t(A,I),t(A,q),t(A,z),t(z,re),ie||(T=Ve(A,"click",_[1]),ie=!0)},p(B,[L]){L&1&&g!==(g=B[0].url.pathname.includes("quote")?"#5CB971":"#161628")&&e(h,"color",g),L&1&&n!==(n=B[0].url.pathname.includes("quote")?"#5CB971":"#161628")&&e(i,"color",n),L&1&&O!==(O=B[0].url.pathname.includes("track")?"#5CB971":"#161628")&&e(v,"color",O),L&1&&V!==(V=B[0].url.pathname.includes("settings")?"#5CB971":"#161628")&&e(P,"color",V),L&1&&F!==(F=B[0].url.pathname.includes("more")?"#5CB971":"#161628")&&e(G,"color",F)},i:Se,o:Se,d(B){B&&f(l),ie=!1,T()}}}function it(_,l,r){let i;ve(_,Fe,s=>r(0,i=s));function a(){xe.update(s=>!s)}return[i,a]}class nt extends Te{constructor(l){super(),De(this,l,it,rt,Oe,{})}}function Le(_){let l,r,i,a,s,m,d;return i=new et({props:{size:"60",unit:"px",duration:"1s"}}),{c(){l=c("div"),r=c("div"),we(i.$$.fragment),a=$(),s=c("div"),m=H("Refreshing"),this.h()},l(h){l=u(h,"DIV",{class:!0});var C=p(l);r=u(C,"DIV",{class:!0});var g=p(r);be(i.$$.fragment,g),a=j(g),s=u(g,"DIV",{class:!0});var n=p(s);m=J(n,"Refreshing"),n.forEach(f),g.forEach(f),C.forEach(f),this.h()},h(){e(s,"class","mt-3 text-black font-mono text-lg sm:text-md"),e(r,"class","flex flex-col pb-[100px] w-full justify-center items-center"),e(l,"class","inset-0 bg-white flex w-full min-h-[400px] items-center justify-center duration-300 transition-opacity")},m(h,C){ee(h,l,C),t(l,r),Ee(i,r,null),t(r,a),t(r,s),t(s,m),d=!0},i(h){d||(S(i.$$.fragment,h),d=!0)},o(h){D(i.$$.fragment,h),d=!1},d(h){h&&f(l),$e(i)}}}function Pe(_){let l,r,i,a,s,m,d,h;l=new Ke({});const C=_[5].default,g=Ue(C,_,_[4],null);let n=_[2]&&Ge(_);return d=new nt({}),{c(){we(l.$$.fragment),r=$(),i=c("div"),a=c("div"),g&&g.c(),s=$(),n&&n.c(),m=$(),we(d.$$.fragment),this.h()},l(o){be(l.$$.fragment,o),r=j(o),i=u(o,"DIV",{class:!0});var v=p(i);a=u(v,"DIV",{class:!0});var b=p(a);g&&g.l(b),b.forEach(f),s=j(v),n&&n.l(v),v.forEach(f),m=j(o),be(d.$$.fragment,o),this.h()},h(){e(a,"class","p-2"),e(i,"class","lg:ml-[160px] max-w-[calc(80rem+320px)] min-h-[100vh] mt-[60px] mb-[50px]")},m(o,v){Ee(l,o,v),ee(o,r,v),ee(o,i,v),t(i,a),g&&g.m(a,null),t(i,s),n&&n.m(i,null),ee(o,m,v),Ee(d,o,v),h=!0},p(o,v){g&&g.p&&(!h||v&16)&&ze(g,C,o,o[4],h?He(C,o[4],v,null):Qe(o[4]),null),o[2]?n?(n.p(o,v),v&4&&S(n,1)):(n=Ge(o),n.c(),S(n,1),n.m(i,null)):n&&(ke(),D(n,1,1,()=>{n=null}),je())},i(o){h||(S(l.$$.fragment,o),S(g,o),S(n),S(d.$$.fragment,o),h=!0)},o(o){D(l.$$.fragment,o),D(g,o),D(n),D(d.$$.fragment,o),h=!1},d(o){$e(l,o),o&&f(r),o&&f(i),g&&g.d(o),n&&n.d(),o&&f(m),$e(d,o)}}}function Ge(_){let l,r,i,a,s,m,d,h,C,g,n,o,v,b,k,K,y,R,te,O,se,P,N,x,W,M,U,le,V,ae,G,A,I,X,q,z,re,F,ie,T,B,L;return i=new We({}),{c(){l=c("ul"),r=c("button"),we(i.$$.fragment),a=$(),s=c("li"),m=c("a"),d=c("span"),h=c("img"),g=$(),n=c("span"),o=H("Documents"),v=$(),b=c("li"),k=c("a"),K=c("span"),y=c("img"),te=$(),O=c("span"),se=H("Claims"),P=$(),N=c("li"),x=c("a"),W=c("span"),M=c("img"),le=$(),V=c("span"),ae=H("Customer"),G=$(),A=c("li"),I=c("a"),X=c("span"),q=c("img"),re=$(),F=c("span"),ie=H("Feedback"),this.h()},l(w){l=u(w,"UL",{class:!0});var E=p(l);r=u(E,"BUTTON",{class:!0});var ne=p(r);be(i.$$.fragment,ne),ne.forEach(f),a=j(E),s=u(E,"LI",{});var me=p(s);m=u(me,"A",{href:!0,class:!0});var oe=p(m);d=u(oe,"SPAN",{});var ce=p(d);h=u(ce,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),ce.forEach(f),g=j(oe),n=u(oe,"SPAN",{});var he=p(n);o=J(he,"Documents"),he.forEach(f),oe.forEach(f),me.forEach(f),v=j(E),b=u(E,"LI",{});var pe=p(b);k=u(pe,"A",{href:!0,class:!0});var Q=p(k);K=u(Q,"SPAN",{});var de=p(K);y=u(de,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),de.forEach(f),te=j(Q),O=u(Q,"SPAN",{});var _e=p(O);se=J(_e,"Claims"),_e.forEach(f),Q.forEach(f),pe.forEach(f),P=j(E),N=u(E,"LI",{});var ue=p(N);x=u(ue,"A",{href:!0,class:!0});var fe=p(x);W=u(fe,"SPAN",{});var Ie=p(W);M=u(Ie,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),Ie.forEach(f),le=j(fe),V=u(fe,"SPAN",{});var Ce=p(V);ae=J(Ce,"Customer"),Ce.forEach(f),fe.forEach(f),ue.forEach(f),G=j(E),A=u(E,"LI",{});var Ne=p(A);I=u(Ne,"A",{href:!0,class:!0});var ge=p(I);X=u(ge,"SPAN",{});var Ae=p(X);q=u(Ae,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),Ae.forEach(f),re=j(ge),F=u(ge,"SPAN",{});var Be=p(F);ie=J(Be,"Feedback"),Be.forEach(f),ge.forEach(f),Ne.forEach(f),E.forEach(f),this.h()},h(){e(r,"class","self-end py-2 px-2 h-10"),Z(h.src,C="/images/icons/document.svg")||e(h,"src",C),e(h,"width","26"),e(h,"height","26"),e(h,"alt","documents"),e(h,"class","bg-white rounded-sm"),e(m,"href","/admin/documents"),e(m,"class","flex gap-4"),Y(s,"active",_[3].url.pathname=="/admin/documents"),Z(y.src,R="/images/icons/claims.svg")||e(y,"src",R),e(y,"width","26"),e(y,"height","26"),e(y,"alt","claims"),e(y,"class","bg-white rounded-sm"),e(k,"href","/admin/claims"),e(k,"class","flex gap-4"),Y(b,"active",_[3].url.pathname=="/admin/claims"),Z(M.src,U="/images/icons/customer.svg")||e(M,"src",U),e(M,"width","26"),e(M,"height","26"),e(M,"alt","customer"),e(M,"class","bg-white rounded-sm"),e(x,"href","/admin/settings"),e(x,"class","flex gap-4"),Y(N,"active",_[3].url.pathname=="/admin/settings"),Z(q.src,z="/images/icons/feedback.svg")||e(q,"src",z),e(q,"width","26"),e(q,"height","26"),e(q,"alt","feedback"),e(q,"class","bg-white rounded-sm"),e(I,"href","/admin/feedback"),e(I,"class","flex gap-4"),Y(A,"active",_[3].url.pathname=="/admin/feedback"),e(l,"class","flex flex-col fixed bottom-[70px] right-[5px] w-[250px] max-w-[90%] transition-[transform 0.12s ease-out 0s] justify-between bg-[#1B2752] rounded-sm pl-3 text-white pb-4 h-[300px]")},m(w,E){ee(w,l,E),t(l,r),Ee(i,r,null),t(l,a),t(l,s),t(s,m),t(m,d),t(d,h),t(m,g),t(m,n),t(n,o),t(l,v),t(l,b),t(b,k),t(k,K),t(K,y),t(k,te),t(k,O),t(O,se),t(l,P),t(l,N),t(N,x),t(x,W),t(W,M),t(x,le),t(x,V),t(V,ae),t(l,G),t(l,A),t(A,I),t(I,X),t(X,q),t(I,re),t(I,F),t(F,ie),T=!0,B||(L=Ve(r,"click",_[6]),B=!0)},p(w,E){(!T||E&8)&&Y(s,"active",w[3].url.pathname=="/admin/documents"),(!T||E&8)&&Y(b,"active",w[3].url.pathname=="/admin/claims"),(!T||E&8)&&Y(N,"active",w[3].url.pathname=="/admin/settings"),(!T||E&8)&&Y(A,"active",w[3].url.pathname=="/admin/feedback")},i(w){T||(S(i.$$.fragment,w),T=!0)},o(w){D(i.$$.fragment,w),T=!1},d(w){w&&f(l),$e(i),B=!1,L()}}}function ot(_){let l,r,i,a=_[0]&&Le(),s=_[1]&&Pe(_);return{c(){a&&a.c(),l=$(),s&&s.c(),r=ye()},l(m){a&&a.l(m),l=j(m),s&&s.l(m),r=ye()},m(m,d){a&&a.m(m,d),ee(m,l,d),s&&s.m(m,d),ee(m,r,d),i=!0},p(m,[d]){m[0]?a?d&1&&S(a,1):(a=Le(),a.c(),S(a,1),a.m(l.parentNode,l)):a&&(ke(),D(a,1,1,()=>{a=null}),je()),m[1]?s?(s.p(m,d),d&2&&S(s,1)):(s=Pe(m),s.c(),S(s,1),s.m(r.parentNode,r)):s&&(ke(),D(s,1,1,()=>{s=null}),je())},i(m){i||(S(a),S(s),i=!0)},o(m){D(a),D(s),i=!1},d(m){a&&a.d(m),m&&f(l),s&&s.d(m),m&&f(r)}}}function ct(_,l,r){let i,a,s;ve(_,qe,n=>r(7,i=n)),ve(_,xe,n=>r(2,a=n)),ve(_,Fe,n=>r(3,s=n));let{$$slots:m={},$$scope:d}=l,h=!0;Ye(n=>{console.log("in afternavigate: ",n),Je.update(o=>o&&!o)});let C=!1;Re(async()=>{debugger;let n=await st();await at();debugger;if(n==!1){lt.push("please login",tt),r(0,h=!1),Ze("/login");return}Me(qe,i=Xe(),i),r(0,h=!1),r(1,C=!0)});const g=()=>Me(xe,a=!a,a);return _.$$set=n=>{"$$scope"in n&&r(4,d=n.$$scope)},[h,C,a,s,d,m,g]}class $t extends Te{constructor(l){super(),De(this,l,ct,ot,Oe,{})}}export{$t as default};