import{s as w,f as s,W as I,g as h,d as l,j as e,v as f,w as O,y as R}from"./scheduler.e5ccafd2.js";import{S,i as V}from"./index.fb4b3a7b.js";import{r as A,a as v,e as M}from"./i18n.481e5112.js";function b(a){let i,o,d,m,r,u,_,n,T,g,E,p;return document.title=i=a[2],{c(){o=s("meta"),d=s("meta"),m=s("meta"),r=s("meta"),u=s("meta"),n=s("meta"),T=s("meta"),g=s("meta"),E=s("meta"),this.h()},l(c){const t=I("svelte-16rcqg9",document.head);o=h(t,"META",{name:!0,content:!0}),d=h(t,"META",{name:!0,content:!0}),m=h(t,"META",{name:!0,content:!0}),r=h(t,"META",{name:!0,content:!0}),u=h(t,"META",{name:!0,content:!0}),n=h(t,"META",{name:!0,content:!0}),T=h(t,"META",{property:!0,content:!0}),g=h(t,"META",{property:!0,content:!0}),E=h(t,"META",{property:!0,content:!0}),t.forEach(l),this.h()},h(){e(o,"name","description"),e(o,"content",a[0]),e(d,"name","twitter:card"),e(d,"content","summary_large_image"),e(m,"name","twitter:title"),e(m,"content",a[2]),e(r,"name","twitter:description"),e(r,"content",a[0]),e(u,"name","twitter:image"),e(u,"content",_=A("VITE_ROOT")+a[1]),e(n,"name","twitter:image:alt"),e(n,"content",a[2]),e(T,"property","og:title"),e(T,"content",a[2]),e(g,"property","og:description"),e(g,"content",a[0]),e(E,"property","og:image"),e(E,"content",p=A("VITE_ROOT")+a[1])},m(c,t){f(document.head,o),f(document.head,d),f(document.head,m),f(document.head,r),f(document.head,u),f(document.head,n),f(document.head,T),f(document.head,g),f(document.head,E)},p(c,[t]){t&4&&i!==(i=c[2])&&(document.title=i),t&1&&e(o,"content",c[0]),t&4&&e(m,"content",c[2]),t&1&&e(r,"content",c[0]),t&2&&_!==(_=A("VITE_ROOT")+c[1])&&e(u,"content",_),t&4&&e(n,"content",c[2]),t&4&&e(T,"content",c[2]),t&1&&e(g,"content",c[0]),t&2&&p!==(p=A("VITE_ROOT")+c[1])&&e(E,"content",p)},i:O,o:O,d(c){l(o),l(d),l(m),l(r),l(u),l(n),l(T),l(g),l(E)}}}function q(a,i,o){let d,m;R(a,v,n=>o(4,m=n));let{title:r=""}=i,{desc:u=M.desc}=i,{img:_=M.card}=i;return a.$$set=n=>{"title"in n&&o(3,r=n.title),"desc"in n&&o(0,u=n.desc),"img"in n&&o(1,_=n.img)},a.$$.update=()=>{a.$$.dirty&24&&o(2,d=r?`${m(r)} — ${m(M.title)}`:`${m(M.title)}`)},[u,_,d,r,m]}class D extends S{constructor(i){super(),V(this,i,q,b,w,{title:3,desc:0,img:1})}}export{D as S};
