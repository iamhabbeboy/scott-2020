import{S as s,i as t,s as e,e as l,t as a,a as o,b as r,f as n,g as c,d as h,c as i,h as f,j as u,k as p,u as g,q as d,n as m,A as v}from"./client.09e75f82.js";import{u as j}from"./clientUtilities.858e543b.js";function E(s,t,e){const l=s.slice();return l[1]=t[e],l}function x(s){let t,e,d,m,v,j=s[1].title+"";return{c(){t=l("li"),e=l("a"),d=a(j),v=o(),this.h()},l(s){t=r(s,"LI",{class:!0});var l=n(t);e=r(l,"A",{rel:!0,href:!0,class:!0});var a=n(e);d=c(a,j),a.forEach(h),v=i(l),l.forEach(h),this.h()},h(){f(e,"rel","prefetch"),f(e,"href",m="posts/"+s[1].slug),f(e,"class","svelte-54eu1j"),f(t,"class","svelte-54eu1j")},m(s,l){u(s,t,l),p(t,e),p(e,d),p(t,v)},p(s,t){1&t&&j!==(j=s[1].title+"")&&g(d,j),1&t&&m!==(m="posts/"+s[1].slug)&&f(e,"href",m)},d(s){s&&h(t)}}}function b(s){let t,e,g,j,b,A=s[0],L=[];for(let t=0;t<A.length;t+=1)L[t]=x(E(s,A,t));return{c(){t=o(),e=l("h1"),g=a("Recent posts"),j=o(),b=l("ul");for(let s=0;s<L.length;s+=1)L[s].c();this.h()},l(s){d('[data-svelte="svelte-10h7psl"]',document.head).forEach(h),t=i(s),e=r(s,"H1",{class:!0});var l=n(e);g=c(l,"Recent posts"),l.forEach(h),j=i(s),b=r(s,"UL",{class:!0});var a=n(b);for(let s=0;s<L.length;s+=1)L[s].l(a);a.forEach(h),this.h()},h(){document.title="Blog",f(e,"class","svelte-54eu1j"),f(b,"class","svelte-54eu1j")},m(s,l){u(s,t,l),u(s,e,l),p(e,g),u(s,j,l),u(s,b,l);for(let s=0;s<L.length;s+=1)L[s].m(b,null)},p(s,[t]){if(1&t){let e;for(A=s[0],e=0;e<A.length;e+=1){const l=E(s,A,e);L[e]?L[e].p(l,t):(L[e]=x(l),L[e].c(),L[e].m(b,null))}for(;e<L.length;e+=1)L[e].d(1);L.length=A.length}},i:m,o:m,d(s){s&&h(t),s&&h(e),s&&h(j),s&&h(b),v(L,s)}}}async function A(){return{posts:await j(this,"posts")}}function L(s,t,e){let{posts:l}=t;return s.$set=(s=>{"posts"in s&&e(0,l=s.posts)}),[l]}export default class extends s{constructor(s){super(),t(this,s,L,b,e,{posts:0})}}export{A as preload};
