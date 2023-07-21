import{s as K,E as j,y as Q,O as G,a as A,c as H,i as f,d as h,f as u,g as m,z as Z,j as w,w as k,l as C,h as E,m as B,v as y,Y as T,U as S}from"../chunks/scheduler.e5ccafd2.js";import{S as W,i as X,b as _,d as g,m as b,a as x,t as L,e as M}from"../chunks/index.fb4b3a7b.js";import{g as ee,a as I}from"../chunks/index.18b79e66.js";import{M as te}from"../chunks/mdsvex.9d3d8acd.js";import{p as se,C as le,a as V,r as P}from"../chunks/ClassTable.44ae526d.js";function ae(p){let e,o='<input type="checkbox"/> <div class="swap-on">ON</div> <div class="swap-off">OFF</div>';return{c(){e=u("label"),e.innerHTML=o,this.h()},l(t){e=m(t,"LABEL",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-b4ektt"&&(e.innerHTML=o),this.h()},h(){w(e,"class","swap")},m(t,l){f(t,e,l)},p:k,d(t){t&&h(e)}}}function ne(p){let e,o=`<label class="$$swap">
  <input type="checkbox" />
  <div class="$$swap-on">ON</div>
  <div class="$$swap-off">OFF</div>
</label>`,t,l,n,c;return{c(){e=u("pre"),t=C(o),this.h()},l(s){e=m(s,"PRE",{slot:!0});var i=E(e);t=B(i,o),i.forEach(h),this.h()},h(){w(e,"slot","html")},m(s,i){f(s,e,i),y(e,t),n||(c=T(l=P.call(null,e,{to:p[0]})),n=!0)},p(s,i){l&&S(l.update)&&i&1&&l.update.call(null,{to:s[0]})},d(s){s&&h(e),n=!1,c()}}}function oe(p){let e,o='<input type="checkbox"/> <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"></path></svg> <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"></path></svg>';return{c(){e=u("label"),e.innerHTML=o,this.h()},l(t){e=m(t,"LABEL",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-14mu7ug"&&(e.innerHTML=o),this.h()},h(){w(e,"class","swap")},m(t,l){f(t,e,l)},p:k,d(t){t&&h(e)}}}function ie(p){let e,o=`<label class="$$swap">
  
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" />
  
  <!-- volume on icon -->
  <svg class="$$swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/></svg>
  
  <!-- volume off icon -->
  <svg class="$$swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"/></svg>
  
</label>`,t,l,n,c;return{c(){e=u("pre"),t=C(o),this.h()},l(s){e=m(s,"PRE",{slot:!0});var i=E(e);t=B(i,o),i.forEach(h),this.h()},h(){w(e,"slot","html")},m(s,i){f(s,e,i),y(e,t),n||(c=T(l=P.call(null,e,{to:p[0]})),n=!0)},p(s,i){l&&S(l.update)&&i&1&&l.update.call(null,{to:s[0]})},d(s){s&&h(e),n=!1,c()}}}function ce(p){let e,o='<input type="checkbox"/> <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg> <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg>';return{c(){e=u("label"),e.innerHTML=o,this.h()},l(t){e=m(t,"LABEL",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-1m0ryk8"&&(e.innerHTML=o),this.h()},h(){w(e,"class","swap swap-rotate")},m(t,l){f(t,e,l)},p:k,d(t){t&&h(e)}}}function pe(p){let e,o=`<label class="$$swap swap-rotate">
  
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" />
  
  <!-- sun icon -->
  <svg class="$$swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  <!-- moon icon -->
  <svg class="$$swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>`,t,l,n,c;return{c(){e=u("pre"),t=C(o),this.h()},l(s){e=m(s,"PRE",{slot:!0});var i=E(e);t=B(i,o),i.forEach(h),this.h()},h(){w(e,"slot","html")},m(s,i){f(s,e,i),y(e,t),n||(c=T(l=P.call(null,e,{to:p[0]})),n=!0)},p(s,i){l&&S(l.update)&&i&1&&l.update.call(null,{to:s[0]})},d(s){s&&h(e),n=!1,c()}}}function re(p){let e,o='<input type="checkbox"/> <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"></path></svg> <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"></polygon></svg>';return{c(){e=u("label"),e.innerHTML=o,this.h()},l(t){e=m(t,"LABEL",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-sp7qy4"&&(e.innerHTML=o),this.h()},h(){w(e,"class","btn btn-circle swap swap-rotate")},m(t,l){f(t,e,l)},p:k,d(t){t&&h(e)}}}function he(p){let e,o=`<label class="$$btn $$btn-circle $$swap $$swap-rotate">
  
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" />
  
  <!-- hamburger icon -->
  <svg class="$$swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  <!-- close icon -->
  <svg class="$$swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
</label>`,t,l,n,c;return{c(){e=u("pre"),t=C(o),this.h()},l(s){e=m(s,"PRE",{slot:!0});var i=E(e);t=B(i,o),i.forEach(h),this.h()},h(){w(e,"slot","html")},m(s,i){f(s,e,i),y(e,t),n||(c=T(l=P.call(null,e,{to:p[0]})),n=!0)},p(s,i){l&&S(l.update)&&i&1&&l.update.call(null,{to:s[0]})},d(s){s&&h(e),n=!1,c()}}}function fe(p){let e,o='<input type="checkbox"/> <div class="swap-on">😈</div> <div class="swap-off">😇</div>';return{c(){e=u("label"),e.innerHTML=o,this.h()},l(t){e=m(t,"LABEL",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-vm09ke"&&(e.innerHTML=o),this.h()},h(){w(e,"class","swap swap-flip text-9xl")},m(t,l){f(t,e,l)},p:k,d(t){t&&h(e)}}}function ue(p){let e,o=`<label class="$$swap $$swap-flip text-9xl">
  
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" />
  
  <div class="$$swap-on">😈</div>
  <div class="$$swap-off">😇</div>
</label>`,t,l,n,c;return{c(){e=u("pre"),t=C(o),this.h()},l(s){e=m(s,"PRE",{slot:!0});var i=E(e);t=B(i,o),i.forEach(h),this.h()},h(){w(e,"slot","html")},m(s,i){f(s,e,i),y(e,t),n||(c=T(l=P.call(null,e,{to:p[0]})),n=!0)},p(s,i){l&&S(l.update)&&i&1&&l.update.call(null,{to:s[0]})},d(s){s&&h(e),n=!1,c()}}}function me(p){let e,o='<div class="swap-on">🥵</div> <div class="swap-off">🥶</div>',t,l,n='<div class="swap-on">🥳</div> <div class="swap-off">😭</div>';return{c(){e=u("label"),e.innerHTML=o,t=A(),l=u("label"),l.innerHTML=n,this.h()},l(c){e=m(c,"LABEL",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-2gwtzt"&&(e.innerHTML=o),t=H(c),l=m(c,"LABEL",{class:!0,"data-svelte-h":!0}),Z(l)!=="svelte-7bu0x1"&&(l.innerHTML=n),this.h()},h(){w(e,"class","swap text-6xl"),w(l,"class","swap swap-active text-6xl")},m(c,s){f(c,e,s),f(c,t,s),f(c,l,s)},p:k,d(c){c&&(h(e),h(t),h(l))}}}function we(p){let e,o=`<label class="$$swap text-6xl">
  <div class="$$swap-on">🥵</div>
  <div class="$$swap-off">🥶</div>
</label>
<label class="$$swap $$swap-active text-6xl">
  <div class="$$swap-on">🥳</div>
  <div class="$$swap-off">😭</div>
</label>`,t,l,n,c;return{c(){e=u("pre"),t=C(o),this.h()},l(s){e=m(s,"PRE",{slot:!0});var i=E(e);t=B(i,o),i.forEach(h),this.h()},h(){w(e,"slot","html")},m(s,i){f(s,e,i),y(e,t),n||(c=T(l=P.call(null,e,{to:p[0]})),n=!0)},p(s,i){l&&S(l.update)&&i&1&&l.update.call(null,{to:s[0]})},d(s){s&&h(e),n=!1,c()}}}function $e(p){let e,o,t,l,n,c,s,i,$,R,d,O,v,F;return e=new le({props:{data:[{type:"component",class:"swap",desc:"Container element"},{type:"component",class:"swap-on",desc:"The child element that should be visible when checkbox is checked or when swap is active"},{type:"component",class:"swap-off",desc:"The child element that should be visible when checkbox is not checked or when swap is not active"},{type:"component",class:"swap-indeterminate",desc:"The child element that should be visible when checkbox is indeterminate"},{type:"modifier",class:"swap-active",desc:"Activates the swap (no need for checkbox)"},{type:"modifier",class:"swap-rotate",desc:"Adds rotate effect to swap"},{type:"modifier",class:"swap-flip",desc:"Adds flip effect to swap"}]}}),t=new V({props:{title:"Swap text",$$slots:{html:[ne],default:[ae]},$$scope:{ctx:p}}}),n=new V({props:{title:"Swap volume icons",$$slots:{html:[ie],default:[oe]},$$scope:{ctx:p}}}),s=new V({props:{title:"Swap icons with rotate effect",$$slots:{html:[pe],default:[ce]},$$scope:{ctx:p}}}),$=new V({props:{title:"Hamburger button",$$slots:{html:[he],default:[re]},$$scope:{ctx:p}}}),d=new V({props:{title:"Swap icons with flip effect",$$slots:{html:[ue],default:[fe]},$$scope:{ctx:p}}}),v=new V({props:{title:"Activate using class name instead of checkbox",$$slots:{html:[we],default:[me]},$$scope:{ctx:p}}}),{c(){_(e.$$.fragment),o=A(),_(t.$$.fragment),l=A(),_(n.$$.fragment),c=A(),_(s.$$.fragment),i=A(),_($.$$.fragment),R=A(),_(d.$$.fragment),O=A(),_(v.$$.fragment)},l(a){g(e.$$.fragment,a),o=H(a),g(t.$$.fragment,a),l=H(a),g(n.$$.fragment,a),c=H(a),g(s.$$.fragment,a),i=H(a),g($.$$.fragment,a),R=H(a),g(d.$$.fragment,a),O=H(a),g(v.$$.fragment,a)},m(a,r){b(e,a,r),f(a,o,r),b(t,a,r),f(a,l,r),b(n,a,r),f(a,c,r),b(s,a,r),f(a,i,r),b($,a,r),f(a,R,r),b(d,a,r),f(a,O,r),b(v,a,r),F=!0},p(a,r){const q={};r&5&&(q.$$scope={dirty:r,ctx:a}),t.$set(q);const z={};r&5&&(z.$$scope={dirty:r,ctx:a}),n.$set(z);const N={};r&5&&(N.$$scope={dirty:r,ctx:a}),s.$set(N);const U={};r&5&&(U.$$scope={dirty:r,ctx:a}),$.$set(U);const Y={};r&5&&(Y.$$scope={dirty:r,ctx:a}),d.$set(Y);const D={};r&5&&(D.$$scope={dirty:r,ctx:a}),v.$set(D)},i(a){F||(x(e.$$.fragment,a),x(t.$$.fragment,a),x(n.$$.fragment,a),x(s.$$.fragment,a),x($.$$.fragment,a),x(d.$$.fragment,a),x(v.$$.fragment,a),F=!0)},o(a){L(e.$$.fragment,a),L(t.$$.fragment,a),L(n.$$.fragment,a),L(s.$$.fragment,a),L($.$$.fragment,a),L(d.$$.fragment,a),L(v.$$.fragment,a),F=!1},d(a){a&&(h(o),h(l),h(c),h(i),h(R),h(O)),M(e,a),M(t,a),M(n,a),M(s,a),M($,a),M(d,a),M(v,a)}}}function de(p){let e,o;const t=[p[1],J];let l={$$slots:{default:[$e]},$$scope:{ctx:p}};for(let n=0;n<t.length;n+=1)l=j(l,t[n]);return e=new te({props:l}),{c(){_(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,c){b(e,n,c),o=!0},p(n,[c]){const s=c&2?ee(t,[c&2&&I(n[1]),c&0&&I(J)]):{};c&5&&(s.$$scope={dirty:c,ctx:n}),e.$set(s)},i(n){o||(x(e.$$.fragment,n),o=!0)},o(n){L(e.$$.fragment,n),o=!1},d(n){M(e,n)}}}const J={title:"Swap",desc:"Swap allows you to toggle the visibility of two elements using a checkbox or a class name.",published:!0};function ve(p,e,o){let t;return Q(p,se,l=>o(0,t=l)),p.$$set=l=>{o(1,e=j(j({},e),G(l)))},e=G(e),[t,e]}class Me extends W{constructor(e){super(),X(this,e,ve,de,K,{})}}export{Me as component};
