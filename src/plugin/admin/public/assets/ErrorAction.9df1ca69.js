import{aP as l,a as m,aO as f,ba as d,b0 as _,fp as g,f as E,aQ as e,o as C,aR as L,p as s,j as c,c as h,aF as B}from"./index.0d073eaa.js";import{B as R}from"./index.2ed1a060.js";const T=m({name:"ErrorAction",components:{Icon:f,Tooltip:d,Badge:R},setup(){const{t:o}=h(),{push:n}=_(),t=g(),r=E(()=>t.getErrorLogListCount);function a(){n(B.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:o,getCount:r,handleToErrorList:a}}});function b(o,n,t,r,a,k){const u=e("Icon"),i=e("Badge"),p=e("Tooltip");return C(),L(p,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:s(()=>[c(i,{count:o.getCount,offset:[0,10],overflowCount:99},{default:s(()=>[c(u,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","mouseEnterDelay","onClick"])}var v=l(T,[["render",b]]);export{v as default};