import{aP as _,a as C,I as E,b0 as B,r as D,f,k as a,aQ as r,o as h,aR as A,p,q as o,t as k,j as l,i as e}from"./index.0d073eaa.js";import{P as v}from"./index.566277e5.js";import"./index.e9a84cba.js";import"./index.0972fd96.js";import"./useSize.bb4e5ce5.js";import"./eagerComputed.156e81ff.js";import"./useWindowSizeFn.ef20ece8.js";import"./useContentViewHeight.01b9d1c6.js";import"./ArrowLeftOutlined.90d2e05e.js";import"./index.8680e4c4.js";import"./transButton.8c1b1a4f.js";const b=C({name:"TestMenu",components:{PageWrapper:v,Input:E},setup(){const{currentRoute:u,replace:t}=B(),n=D("");return{value:n,handleClickGo:()=>{const{name:s}=a(u);t({name:s,params:{id:a(n)}})},params:f(()=>a(u).params)}}}),P=e("br",null,null,-1),g=o(" \u8F93\u5165\u53C2\u6570\u5207\u6362\u8DEF\u7531\uFF1A "),I=o("\u5207\u6362\u8DEF\u7531"),$=e("br",null,null,-1),y=o(" \u5207\u6362\u8DEF\u7531\u540E "),G=e("ul",null,[e("li",null,"\u53EF\u5237\u65B0\u9875\u9762\u6D4B\u8BD5\u8DEF\u7531\u53C2\u6570\u60C5\u51B5\u662F\u5426\u6B63\u5E38\u3002"),e("li",null,"\u53EF\u4E8E\u5DE6\u4FA7\u83DC\u5355\u4E2D\u5C55\u5F00\u5B50\u83DC\u5355\uFF0C\u70B9\u51FB\u6D4B\u8BD5\u53C2\u6570\u662F\u5426\u643A\u5E26\u6B63\u5E38\u3002")],-1);function N(u,t,n,i,s,R){const c=r("Input"),F=r("a-button"),m=r("PageWrapper");return h(),A(m,{title:"\u5E26\u53C2\u6570\u83DC\u5355\uFF08\u8DEF\u7531\uFF09",content:"\u652F\u6301\u591A\u7EA7\u53C2\u6570"},{default:p(()=>[o(" \u5F53\u524D\u53C2\u6570\uFF1A"+k(u.params)+" ",1),P,g,l(c,{value:u.value,"onUpdate:value":t[0]||(t[0]=d=>u.value=d),placeholder:"\u5EFA\u8BAE\u4E3Aurl\u6807\u51C6\u5B57\u7B26\uFF0C\u8F93\u5165\u540E\u70B9\u51FB\u5207\u6362"},null,8,["value"]),l(F,{type:"primary",onClick:u.handleClickGo},{default:p(()=>[I]),_:1},8,["onClick"]),$,y,G]),_:1})}var z=_(b,[["render",N]]);export{z as default};