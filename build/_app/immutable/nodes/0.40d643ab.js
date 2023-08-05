import{s as W,f as w,g as V,h as b,d as i,j as d,i as E,r as T,u as J,v as K,w as N,x as U,a as H,c as j,y as Y,H as O,z as P,A as g,l as B,m as L,B as x,C as ee}from"../chunks/scheduler.df013046.js";import{S as y,i as S,b as I,d as M,m as D,a as k,t as C,e as Z}from"../chunks/index.a3089b0f.js";import{w as te}from"../chunks/index.8c81203e.js";import{B as se,W as Q}from"../chunks/Button4.98967d03.js";const ne=0,le=1,re=2,ae=3,oe=4,fe=te(0);const R=`<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M35.35 4.46504C34.7101 3.97578 34.0425 3.52085 33.35 3.10299V40.803C34.0425 40.3851 34.7101 39.9302 35.35 39.4409V4.46504Z" fill="white"/>\r
<path d="M38.2833 36.7469V7.15906C41.8352 11.0662 44 16.2568 44 21.953C44 27.6492 41.8352 32.8398 38.2833 36.7469Z" fill="white"/>\r
<path d="M28.4167 0.903445C29.0979 1.11086 29.7652 1.35044 30.4167 1.62042V42.2855C29.7652 42.5555 29.0979 42.7951 28.4167 43.0025V0.903445Z" fill="white"/>\r
<path d="M25.4833 0.227198C24.8259 0.12262 24.1588 0.0471638 23.4833 0.00219398V43.9038C24.1588 43.8588 24.8259 43.7833 25.4833 43.6788V0.227198Z" fill="white"/>\r
<path d="M18.55 0.221922C19.2074 0.118375 19.8746 0.0439469 20.55 0V43.906C19.8746 43.862 19.2074 43.7876 18.55 43.684V0.221922Z" fill="white"/>\r
<path d="M15.6167 43.0126C14.9354 42.8064 14.2682 42.5681 13.6167 42.2993V1.60663C14.2682 1.33789 14.9354 1.09953 15.6167 0.893326V43.0126Z" fill="white"/>\r
<path d="M8.68333 39.4664C9.32339 39.9538 9.99097 40.4069 10.6833 40.823V3.08292C9.99097 3.49903 9.32339 3.95217 8.68333 4.4396V39.4664Z" fill="white"/>\r
<path d="M5.75 7.12248C2.17839 11.0337 0 16.239 0 21.953C0 27.667 2.17839 32.8722 5.75 36.7835V7.12248Z" fill="white"/>\r
</svg>`;function ce(o){let e;const t=o[1].default,s=T(t,o,o[3],null);return{c(){s&&s.c()},l(r){s&&s.l(r)},m(r,a){s&&s.m(r,a),e=!0},p(r,a){s&&s.p&&(!e||a&8)&&J(s,t,r,r[3],e?N(t,r[3],a,null):K(r[3]),null)},i(r){e||(k(s,r),e=!0)},o(r){C(s,r),e=!1},d(r){s&&s.d(r)}}}function ie(o){let e,t,s;return t=new se({props:{$$slots:{default:[ce]},$$scope:{ctx:o}}}),t.$on("click",o[2]),{c(){e=w("a"),I(t.$$.fragment),this.h()},l(r){e=V(r,"A",{class:!0,href:!0});var a=b(e);M(t.$$.fragment,a),a.forEach(i),this.h()},h(){d(e,"class","link"),d(e,"href",o[0])},m(r,a){E(r,e,a),D(t,e,null),s=!0},p(r,[a]){const n={};a&8&&(n.$$scope={dirty:a,ctx:r}),t.$set(n),(!s||a&1)&&d(e,"href",r[0])},i(r){s||(k(t.$$.fragment,r),s=!0)},o(r){C(t.$$.fragment,r),s=!1},d(r){r&&i(e),Z(t)}}}function $e(o,e,t){let{$$slots:s={},$$scope:r}=e,{href:a}=e;function n(f){U.call(this,o,f)}return o.$$set=f=>{"href"in f&&t(0,a=f.href),"$$scope"in f&&t(3,r=f.$$scope)},[a,s,n,r]}class A extends y{constructor(e){super(),S(this,e,$e,ie,W,{href:0})}}function ue(o){let e;return{c(){e=B("Обо мне")},l(t){e=L(t,"Обо мне")},m(t,s){E(t,e,s)},d(t){t&&i(e)}}}function _e(o){let e;return{c(){e=B("Каталог")},l(t){e=L(t,"Каталог")},m(t,s){E(t,e,s)},d(t){t&&i(e)}}}function he(o){let e;return{c(){e=B("Контакты")},l(t){e=L(t,"Контакты")},m(t,s){E(t,e,s)},d(t){t&&i(e)}}}function me(o){let e,t,s,r,a,n,f,h,u,z,_,$;return f=new A({props:{href:"/#about",$$slots:{default:[ue]},$$scope:{ctx:o}}}),u=new A({props:{href:"/#catalog",$$slots:{default:[_e]},$$scope:{ctx:o}}}),_=new A({props:{href:"/#contacts",$$slots:{default:[he]},$$scope:{ctx:o}}}),{c(){e=w("div"),t=w("a"),s=new O(!1),r=H(),a=w("div"),n=w("div"),I(f.$$.fragment),h=H(),I(u.$$.fragment),z=H(),I(_.$$.fragment),this.h()},l(l){e=V(l,"DIV",{class:!0});var c=b(e);t=V(c,"A",{class:!0,href:!0});var p=b(t);s=P(p,!1),p.forEach(i),r=j(c),a=V(c,"DIV",{class:!0});var v=b(a);n=V(v,"DIV",{class:!0});var m=b(n);M(f.$$.fragment,m),h=j(m),M(u.$$.fragment,m),z=j(m),M(_.$$.fragment,m),m.forEach(i),v.forEach(i),c.forEach(i),this.h()},h(){s.a=null,d(t,"class","footer__left svelte-133covo"),d(t,"href","/"),d(n,"class","footer__navigation svelte-133covo"),d(a,"class","footer__right svelte-133covo"),d(e,"class","footer svelte-133covo")},m(l,c){E(l,e,c),g(e,t),s.m(R,t),g(e,r),g(e,a),g(a,n),D(f,n,null),g(n,h),D(u,n,null),g(n,z),D(_,n,null),$=!0},p(l,c){const p={};c&1&&(p.$$scope={dirty:c,ctx:l}),f.$set(p);const v={};c&1&&(v.$$scope={dirty:c,ctx:l}),u.$set(v);const m={};c&1&&(m.$$scope={dirty:c,ctx:l}),_.$set(m)},i(l){$||(k(f.$$.fragment,l),k(u.$$.fragment,l),k(_.$$.fragment,l),$=!0)},o(l){C(f.$$.fragment,l),C(u.$$.fragment,l),C(_.$$.fragment,l),$=!1},d(l){l&&i(e),Z(f),Z(u),Z(_)}}}function de(o){let e,t,s,r,a;return e=new Q({props:{$$slots:{default:[me]},$$scope:{ctx:o}}}),{c(){I(e.$$.fragment),t=H(),s=w("img"),this.h()},l(n){M(e.$$.fragment,n),t=j(n),s=V(n,"IMG",{src:!0,class:!0}),this.h()},h(){Y(s.src,r="/images/blobs/3.png")||d(s,"src",r),d(s,"class","svelte-133covo")},m(n,f){D(e,n,f),E(n,t,f),E(n,s,f),a=!0},p(n,[f]){const h={};f&1&&(h.$$scope={dirty:f,ctx:n}),e.$set(h)},i(n){a||(k(e.$$.fragment,n),a=!0)},o(n){C(e.$$.fragment,n),a=!1},d(n){n&&(i(t),i(s)),Z(e,n)}}}class pe extends y{constructor(e){super(),S(this,e,null,de,W,{})}}function ge(o){let e;return{c(){e=B("Обо мне")},l(t){e=L(t,"Обо мне")},m(t,s){E(t,e,s)},d(t){t&&i(e)}}}function ve(o){let e;return{c(){e=B("Каталог")},l(t){e=L(t,"Каталог")},m(t,s){E(t,e,s)},d(t){t&&i(e)}}}function we(o){let e;return{c(){e=B("Контакты")},l(t){e=L(t,"Контакты")},m(t,s){E(t,e,s)},d(t){t&&i(e)}}}function Ve(o){let e,t,s,r,a,n,f,h,u,z,_,$;return f=new A({props:{href:"/#about",$$slots:{default:[ge]},$$scope:{ctx:o}}}),u=new A({props:{href:"/#catalog",$$slots:{default:[ve]},$$scope:{ctx:o}}}),_=new A({props:{href:"/#contacts",$$slots:{default:[we]},$$scope:{ctx:o}}}),{c(){e=w("div"),t=w("a"),s=new O(!1),r=H(),a=w("div"),n=w("div"),I(f.$$.fragment),h=H(),I(u.$$.fragment),z=H(),I(_.$$.fragment),this.h()},l(l){e=V(l,"DIV",{class:!0});var c=b(e);t=V(c,"A",{class:!0,href:!0});var p=b(t);s=P(p,!1),p.forEach(i),r=j(c),a=V(c,"DIV",{class:!0});var v=b(a);n=V(v,"DIV",{class:!0});var m=b(n);M(f.$$.fragment,m),h=j(m),M(u.$$.fragment,m),z=j(m),M(_.$$.fragment,m),m.forEach(i),v.forEach(i),c.forEach(i),this.h()},h(){s.a=null,d(t,"class","header__left svelte-11z65ws"),d(t,"href","/"),d(n,"class","header__navigation svelte-11z65ws"),d(a,"class","header__right svelte-11z65ws"),d(e,"class","header svelte-11z65ws")},m(l,c){E(l,e,c),g(e,t),s.m(R,t),g(e,r),g(e,a),g(a,n),D(f,n,null),g(n,h),D(u,n,null),g(n,z),D(_,n,null),$=!0},p(l,c){const p={};c&1&&(p.$$scope={dirty:c,ctx:l}),f.$set(p);const v={};c&1&&(v.$$scope={dirty:c,ctx:l}),u.$set(v);const m={};c&1&&(m.$$scope={dirty:c,ctx:l}),_.$set(m)},i(l){$||(k(f.$$.fragment,l),k(u.$$.fragment,l),k(_.$$.fragment,l),$=!0)},o(l){C(f.$$.fragment,l),C(u.$$.fragment,l),C(_.$$.fragment,l),$=!1},d(l){l&&i(e),Z(f),Z(u),Z(_)}}}function ke(o){let e,t;return e=new Q({props:{$$slots:{default:[Ve]},$$scope:{ctx:o}}}),{c(){I(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,r){D(e,s,r),t=!0},p(s,[r]){const a={};r&1&&(a.$$scope={dirty:r,ctx:s}),e.$set(a)},i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){C(e.$$.fragment,s),t=!1},d(s){Z(e,s)}}}class Ce extends y{constructor(e){super(),S(this,e,null,ke,W,{})}}function be(o){let e,t,s,r,a,n,f,h,u,z;x(o[4]),s=new Ce({});const _=o[3].default,$=T(_,o,o[2],null);return f=new pe({}),{c(){e=w("div"),t=w("div"),I(s.$$.fragment),r=H(),$&&$.c(),a=H(),n=w("div"),I(f.$$.fragment),this.h()},l(l){e=V(l,"DIV",{class:!0});var c=b(e);t=V(c,"DIV",{class:!0});var p=b(t);M(s.$$.fragment,p),r=j(p),$&&$.l(p),p.forEach(i),a=j(c),n=V(c,"DIV",{class:!0});var v=b(n);M(f.$$.fragment,v),v.forEach(i),c.forEach(i),this.h()},h(){d(t,"class","content svelte-17jynli"),d(n,"class","footer svelte-17jynli"),d(e,"class","layout svelte-17jynli")},m(l,c){E(l,e,c),g(e,t),D(s,t,null),g(t,r),$&&$.m(t,null),g(e,a),g(e,n),D(f,n,null),h=!0,u||(z=ee(window,"resize",o[4]),u=!0)},p(l,[c]){$&&$.p&&(!h||c&4)&&J($,_,l,l[2],h?N(_,l[2],c,null):K(l[2]),null)},i(l){h||(k(s.$$.fragment,l),k($,l),k(f.$$.fragment,l),h=!0)},o(l){C(s.$$.fragment,l),C($,l),C(f.$$.fragment,l),h=!1},d(l){l&&i(e),Z(s),$&&$.d(l),Z(f),u=!1,z()}}}const q=2300,F=1680,X=1024,G=768;function Ee(o,e,t){let{$$slots:s={},$$scope:r}=e,a,n;function f(){t(0,a=window.innerWidth)}return o.$$set=h=>{"$$scope"in h&&t(2,r=h.$$scope)},o.$$.update=()=>{o.$$.dirty&3&&(a>=q?t(1,n=oe):a<q&&a>=F?t(1,n=ae):a<F&&a>=X?t(1,n=re):a<X&&a>=G?t(1,n=le):a<G&&t(1,n=ne),fe.update(()=>n))},[a,n,r,s,f]}class ze extends y{constructor(e){super(),S(this,e,Ee,be,W,{})}}export{ze as component};