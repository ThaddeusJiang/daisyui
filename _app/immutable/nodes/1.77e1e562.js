import{s as q,f as h,l as I,a as V,g as m,h as _,m as $,d as p,c as w,z,j as c,i as A,v as s,n as S,w as j,y as G}from"../chunks/scheduler.e5ccafd2.js";import{S as H,i as P}from"../chunks/index.fb4b3a7b.js";import{p as B}from"../chunks/stores.b58bbf3c.js";function F(v){let e,a,t,r,f=v[0].status+"",x,b,i,u=v[0].message+"",g,E,l,C="Go back";return{c(){e=h("div"),a=h("div"),t=h("div"),r=h("h1"),x=I(f),b=V(),i=h("p"),g=I(u),E=V(),l=h("a"),l.textContent=C,this.h()},l(n){e=m(n,"DIV",{class:!0});var o=_(e);a=m(o,"DIV",{class:!0});var k=_(a);t=m(k,"DIV",{class:!0});var d=_(t);r=m(d,"H1",{class:!0});var y=_(r);x=$(y,f),y.forEach(p),b=w(d),i=m(d,"P",{class:!0});var D=_(i);g=$(D,u),D.forEach(p),E=w(d),l=m(d,"A",{class:!0,href:!0,"data-svelte-h":!0}),z(l)!=="svelte-kaknrv"&&(l.textContent=C),d.forEach(p),k.forEach(p),o.forEach(p),this.h()},h(){c(r,"class","mb-5 text-5xl font-bold opacity-10 lg:text-7xl xl:text-9xl"),c(i,"class","mb-5"),c(l,"class","btn"),c(l,"href","/"),c(t,"class","max-w-md"),c(a,"class","hero-content text-center"),c(e,"class","hero not-prose min-h-screen")},m(n,o){A(n,e,o),s(e,a),s(a,t),s(t,r),s(r,x),s(t,b),s(t,i),s(i,g),s(t,E),s(t,l)},p(n,[o]){o&1&&f!==(f=n[0].status+"")&&S(x,f),o&1&&u!==(u=n[0].message+"")&&S(g,u)},i:j,o:j,d(n){n&&p(e)}}}function J(v,e,a){let t;return G(v,B,r=>a(0,t=r)),[t]}class N extends H{constructor(e){super(),P(this,e,J,F,q,{})}}export{N as component};
