import{a9 as w,k as c,fm as y,fn as v,G as x,r as W,fo as b,b8 as $,dB as g,aP as B,a as R,cB as I,aQ as k,o as P,aR as M,p as d,j as u,q as C}from"./index.0d073eaa.js";import{P as S}from"./index.566277e5.js";import"./index.e9a84cba.js";import"./index.0972fd96.js";import"./useSize.bb4e5ce5.js";import"./eagerComputed.156e81ff.js";import"./useWindowSizeFn.ef20ece8.js";import"./useContentViewHeight.01b9d1c6.js";import"./ArrowLeftOutlined.90d2e05e.js";import"./index.8680e4c4.js";import"./transButton.8c1b1a4f.js";const z=Symbol("watermark-dom");function E(n=W(document.body)){const r=b(function(){const t=c(n);if(!t)return;const{clientHeight:e,clientWidth:a}=t;i({height:e,width:a})}),s=z.toString(),l=w(),f=()=>{const t=c(l);l.value=void 0;const e=c(n);!e||(t&&e.removeChild(t),y(e,r))};function _(t){const e=document.createElement("canvas"),a=300,m=240;Object.assign(e,{width:a,height:m});const o=e.getContext("2d");return o&&(o.rotate(-20*Math.PI/120),o.font="15px Vedana",o.fillStyle="rgba(0, 0, 0, 0.15)",o.textAlign="left",o.textBaseline="middle",o.fillText(t,a/20,m)),e.toDataURL("image/png")}function i(t={}){const e=c(l);!e||(g(t.width)&&(e.style.width=`${t.width}px`),g(t.height)&&(e.style.height=`${t.height}px`),g(t.str)&&(e.style.background=`url(${_(t.str)}) left top repeat`))}const p=t=>{if(c(l))return i({str:t}),s;const e=document.createElement("div");l.value=e,e.id=s,e.style.pointerEvents="none",e.style.top="0px",e.style.left="0px",e.style.position="absolute",e.style.zIndex="100000";const a=c(n);if(!a)return s;const{clientHeight:m,clientWidth:o}=a;return i({str:t,width:o,height:m}),a.appendChild(e),s};function h(t){p(t),v(document.documentElement,r),$()&&x(()=>{f()})}return{setWatermark:h,clear:f}}const L=R({components:{CollapseContainer:I,PageWrapper:S},setup(){const n=W(null),{setWatermark:r,clear:s}=E();return{setWatermark:r,clear:s,areaRef:n}}}),N=C(" Create "),T=C(" Clear "),V=C(" Reset ");function j(n,r,s,l,f,_){const i=k("a-button"),p=k("CollapseContainer"),h=k("PageWrapper");return P(),M(h,{title:"\u6C34\u5370\u793A\u4F8B"},{default:d(()=>[u(p,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:d(()=>[u(i,{type:"primary",class:"mr-2",onClick:r[0]||(r[0]=t=>n.setWatermark("WaterMark Info"))},{default:d(()=>[N]),_:1}),u(i,{color:"error",class:"mr-2",onClick:n.clear},{default:d(()=>[T]),_:1},8,["onClick"]),u(i,{color:"warning",class:"mr-2",onClick:r[1]||(r[1]=t=>n.setWatermark("WaterMark Info New"))},{default:d(()=>[V]),_:1})]),_:1})]),_:1})}var X=B(L,[["render",j]]);export{X as default};