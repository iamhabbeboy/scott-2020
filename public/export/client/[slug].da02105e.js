import{S as t,i as s,s as e,a,e as n,t as o,q as i,d as r,c,b as l,f as h,g as u,h as f,j as p,k as d,u as m,n as v}from"./client.09e75f82.js";function g(t){let s,e,g,j,q,w,x=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){e=a(),g=n("h1"),j=o(x),q=a(),w=n("div"),this.h()},l(t){i('[data-svelte="svelte-iu3vwn"]',document.head).forEach(r),e=c(t),g=l(t,"H1",{});var s=h(g);j=u(s,x),s.forEach(r),q=c(t),w=l(t,"DIV",{class:!0}),h(w).forEach(r),this.h()},h(){f(w,"class","content svelte-qerhge")},m(t,s){p(t,e,s),p(t,g,s),d(g,j),p(t,q,s),p(t,w,s),w.innerHTML=E},p(t,[e]){1&e&&s!==(s=t[0].title)&&(document.title=s),1&e&&x!==(x=t[0].title+"")&&m(j,x),1&e&&E!==(E=t[0].html+"")&&(w.innerHTML=E)},i:v,o:v,d(t){t&&r(e),t&&r(g),t&&r(q),t&&r(w)}}}async function j({params:t,query:s}){const e=await this.fetch(`posts/${t.slug}.json`),a=await e.json();if(200===e.status)return{post:a};this.error(e.status,a.message)}function q(t,s,e){let{post:a}=s;return t.$set=(t=>{"post"in t&&e(0,a=t.post)}),[a]}export default class extends t{constructor(t){super(),s(this,t,q,g,e,{post:0})}}export{j as preload};
