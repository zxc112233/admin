import{B as u,a as c}from"./index.c05f9254.js";import{a as p,aP as d,aQ as r,o as _,aR as m,p as e,j as n,q as l}from"./index.0d073eaa.js";import"./useWindowSizeFn.ef20ece8.js";import"./FullscreenOutlined.401a7bcd.js";const M=p({components:{BasicModal:u},setup(){const[o,{closeModal:t,setModalProps:a}]=c();return{register:o,closeModal:t,setModalProps:()=>{a({title:"Modal New Title"})}}}}),f=l(" \u4ECE\u5185\u90E8\u5173\u95ED\u5F39\u7A97 "),C=l(" \u4ECE\u5185\u90E8\u4FEE\u6539title ");function E(o,t,a,k,B,g){const s=r("a-button"),i=r("BasicModal");return _(),m(i,{onRegister:o.register,title:"Modal Title",helpMessage:["\u63D0\u793A1","\u63D0\u793A2"],okButtonProps:{disabled:!0}},{default:e(()=>[n(s,{type:"primary",onClick:o.closeModal,class:"mr-2"},{default:e(()=>[f]),_:1},8,["onClick"]),n(s,{type:"primary",onClick:o.setModalProps},{default:e(()=>[C]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var b=d(M,[["render",E]]);export{b as default};