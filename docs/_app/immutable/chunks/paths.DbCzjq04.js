import{n as u,s as g}from"./scheduler.BpkR8Ea4.js";const n=[];function q(e,o){return{subscribe:h(e,o).subscribe}}function h(e,o=u){let r;const i=new Set;function b(t){if(g(e,t)&&(e=t,r)){const c=!n.length;for(const s of i)s[1](),n.push(s,e);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(t){b(t(e))}function _(t,c=u){const s=[t,c];return i.add(s),i.size===1&&(r=o(b,a)||u),t(e),()=>{i.delete(s),i.size===0&&r&&(r(),r=null)}}return{set:b,update:a,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_g164ra)==null?void 0:f.base)??"";var l;const k=((l=globalThis.__sveltekit_g164ra)==null?void 0:l.assets)??p;export{k as a,p as b,q as r,h as w};
