import{aP as v,a as y,dq as B,l as P,fr as c,f as C,aQ as r,bK as T,o as n,aR as a,p as e,j as t,i as d,t as F,q as o,aS as _,w as f}from"./index.0d073eaa.js";import{A as g}from"./index.ffb8ac7d.js";import{D as U}from"./index.0fb15725.js";import{S as k}from"./index.81899e8a.js";import $ from"./CurrentPermissionMode.ded9592f.js";import{A as b}from"./index.0932c76c.js";import{P as w}from"./index.566277e5.js";import"./useFlexGapSupport.474c31b7.js";import"./index.e9a84cba.js";import"./index.0972fd96.js";import"./useSize.bb4e5ce5.js";import"./eagerComputed.156e81ff.js";import"./useWindowSizeFn.ef20ece8.js";import"./useContentViewHeight.01b9d1c6.js";import"./ArrowLeftOutlined.90d2e05e.js";import"./index.8680e4c4.js";import"./transButton.8c1b1a4f.js";const N=y({components:{Alert:g,PageWrapper:w,Space:k,CurrentPermissionMode:$,Divider:U,Authority:b},setup(){const{changeRole:u,hasPermission:l}=B(),E=P();return{userStore:E,RoleEnum:c,isSuper:C(()=>E.getRoleList.includes(c.SUPER)),isTest:C(()=>E.getRoleList.includes(c.TEST)),changeRole:u,hasPermission:l}}}),V=o(" \u5F53\u524D\u89D2\u8272: "),L={class:"mt-4"},M=o(" \u6743\u9650\u5207\u6362(\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F): "),W=o("\u7EC4\u4EF6\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u6709\u9700\u8981\u53EF\u4EE5\u81EA\u884C\u5168\u5C40\u6CE8\u518C)"),q=o(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),j=o(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),I=o(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),K=o("\u51FD\u6570\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u9002\u7528\u4E8E\u51FD\u6570\u5185\u90E8\u8FC7\u6EE4)"),Q=o(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),z=o(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),G=o(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),H=o("\u6307\u4EE4\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u8BE5\u65B9\u5F0F\u4E0D\u80FD\u52A8\u6001\u4FEE\u6539\u6743\u9650.)"),J=o(" \u62E5\u6709super\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),O=o(" \u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),X=o(" \u62E5\u6709[test,super]\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");function Y(u,l,E,Z,x,uu){const D=r("CurrentPermissionMode"),R=r("Alert"),s=r("a-button"),S=r("Space"),i=r("Divider"),m=r("Authority"),A=r("PageWrapper"),p=T("auth");return n(),a(A,{title:"\u524D\u7AEF\u6743\u9650\u6309\u94AE\u793A\u4F8B",contentBackground:"",contentClass:"p-4",content:"\u7531\u4E8E\u5237\u65B0\u7684\u65F6\u5019\u4F1A\u8BF7\u6C42\u7528\u6237\u4FE1\u606F\u63A5\u53E3\uFF0C\u4F1A\u6839\u636E\u63A5\u53E3\u91CD\u7F6E\u89D2\u8272\u4FE1\u606F\uFF0C\u6240\u4EE5\u5237\u65B0\u540E\u754C\u9762\u4F1A\u6062\u590D\u539F\u6837\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u6CE8\u91CA src/layout/default/index\u5185\u7684\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3"},{default:e(()=>[t(D),d("p",null,[V,d("a",null,F(u.userStore.getRoleList),1)]),t(R,{class:"mt-4",type:"info",message:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u6309\u94AE\u53D8\u5316","show-icon":""}),d("div",L,[M,t(S,null,{default:e(()=>[t(s,{onClick:l[0]||(l[0]=h=>u.changeRole(u.RoleEnum.SUPER)),type:u.isSuper?"primary":"default"},{default:e(()=>[o(F(u.RoleEnum.SUPER),1)]),_:1},8,["type"]),t(s,{onClick:l[1]||(l[1]=h=>u.changeRole(u.RoleEnum.TEST)),type:u.isTest?"primary":"default"},{default:e(()=>[o(F(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})]),t(i,null,{default:e(()=>[W]),_:1}),t(m,{value:u.RoleEnum.SUPER},{default:e(()=>[t(s,{type:"primary",class:"mx-4"},{default:e(()=>[q]),_:1})]),_:1},8,["value"]),t(m,{value:u.RoleEnum.TEST},{default:e(()=>[t(s,{color:"success",class:"mx-4"},{default:e(()=>[j]),_:1})]),_:1},8,["value"]),t(m,{value:[u.RoleEnum.TEST,u.RoleEnum.SUPER]},{default:e(()=>[t(s,{color:"error",class:"mx-4"},{default:e(()=>[I]),_:1})]),_:1},8,["value"]),t(i,null,{default:e(()=>[K]),_:1}),u.hasPermission(u.RoleEnum.SUPER)?(n(),a(s,{key:0,type:"primary",class:"mx-4"},{default:e(()=>[Q]),_:1})):_("",!0),u.hasPermission(u.RoleEnum.TEST)?(n(),a(s,{key:1,color:"success",class:"mx-4"},{default:e(()=>[z]),_:1})):_("",!0),u.hasPermission([u.RoleEnum.TEST,u.RoleEnum.SUPER])?(n(),a(s,{key:2,color:"error",class:"mx-4"},{default:e(()=>[G]),_:1})):_("",!0),t(i,null,{default:e(()=>[H]),_:1}),f((n(),a(s,{type:"primary",class:"mx-4"},{default:e(()=>[J]),_:1})),[[p,u.RoleEnum.SUPER]]),f((n(),a(s,{color:"success",class:"mx-4"},{default:e(()=>[O]),_:1})),[[p,u.RoleEnum.TEST]]),f((n(),a(s,{color:"error",class:"mx-4"},{default:e(()=>[X]),_:1})),[[p,[u.RoleEnum.TEST,u.RoleEnum.SUPER]]])]),_:1})}var Cu=v(N,[["render",Y],["__scopeId","data-v-a5cca872"]]);export{Cu as default};