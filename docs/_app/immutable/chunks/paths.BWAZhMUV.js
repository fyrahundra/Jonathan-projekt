import{n as u,s as h}from"./scheduler.NrZV1iTz.js";const i=[];function q(t,r){return{subscribe:p(t,r).subscribe}}function p(t,r=u){let o;const n=new Set;function b(e){if(h(t,e)&&(t=e,o)){const c=!i.length;for(const s of n)s[1](),i.push(s,t);if(c){for(let s=0;s<i.length;s+=2)i[s][0](i[s+1]);i.length=0}}}function a(e){b(e(t))}function _(e,c=u){const s=[e,c];return n.add(s),n.size===1&&(o=r(b,a)||u),e(t),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:b,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_iotovy)==null?void 0:f.base)??"";var l;const k=((l=globalThis.__sveltekit_iotovy)==null?void 0:l.assets)??d;export{k as a,d as b,q as r,p as w};