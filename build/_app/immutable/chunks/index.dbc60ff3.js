var E=Object.defineProperty;var C=(t,e,n)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>(C(t,typeof e!="symbol"?e+"":e,n),n);import{O as $,C as c,P as p,h as O,d as b,E as I,Q as v,R as P,A as x,S as R,T as U,U as w,V,W as j,X as A,Y as B,Z as L}from"./scheduler.5cf656b1.js";const u=new Set;let d;function Z(){d={r:0,c:[],p:d}}function z(){d.r||$(d.c),d=d.p}function M(t,e){t&&t.i&&(u.delete(t),t.i(e))}function D(t,e,n,a){if(t&&t.o){if(u.has(t))return;u.add(t),d.c.push(()=>{u.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function F(t){t&&t.c()}function G(t,e){t&&t.l(e)}function N(t,e,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,n),x(()=>{const f=t.$$.on_mount.map(V).filter(v);t.$$.on_destroy?t.$$.on_destroy.push(...f):$(f),t.$$.on_mount=[]}),i.forEach(x)}function Q(t,e){const n=t.$$;n.fragment!==null&&(R(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e){t.$$.dirty[0]===-1&&(j.push(t),A(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(t,e,n,a,i,f,h,S=[-1]){const o=U;w(t);const s=t.$$={fragment:null,ctx:[],props:f,update:c,not_equal:i,bound:p(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:p(),dirty:S,skip_bound:!1,root:e.target||o.$$.root};h&&h(s.root);let l=!1;if(s.ctx=n?n(t,e.props||{},(r,g,...m)=>{const y=m.length?m[0]:g;return s.ctx&&i(s.ctx[r],s.ctx[r]=y)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](y),l&&T(t,r)),g}):[],s.update(),l=!0,$(s.before_update),s.fragment=a?a(s.ctx):!1,e.target){if(e.hydrate){B();const r=O(e.target);s.fragment&&s.fragment.l(r),r.forEach(b)}else s.fragment&&s.fragment.c();e.intro&&M(t.$$.fragment),N(t,e.target,e.anchor),L(),I()}w(o)}class J{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){Q(this,1),this.$destroy=c}$on(e,n){if(!v(n))return c;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!P(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const W="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(W);export{J as S,M as a,F as b,z as c,G as d,Q as e,Z as g,H as i,N as m,D as t};
