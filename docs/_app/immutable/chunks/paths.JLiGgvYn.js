import{n as u,s as h}from"./scheduler.BpkR8Ea4.js";const n=[];function q(t,r){return{subscribe:p(t,r).subscribe}}function p(t,r=u){let i;const o=new Set;function b(e){if(h(t,e)&&(t=e,i)){const c=!n.length;for(const s of o)s[1](),n.push(s,t);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(e){b(e(t))}function _(e,c=u){const s=[e,c];return o.add(s),o.size===1&&(i=r(b,a)||u),e(t),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:b,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_a9ot6f)==null?void 0:f.base)??"";var l;const k=((l=globalThis.__sveltekit_a9ot6f)==null?void 0:l.assets)??d;export{k as a,d as b,q as r,p as w};
