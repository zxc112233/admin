var f=(e,m,r)=>new Promise((c,t)=>{var d=o=>{try{a(r.next(o))}catch(i){t(i)}},s=o=>{try{a(r.throw(o))}catch(i){t(i)}},a=o=>o.done?c(o.value):Promise.resolve(o.value).then(d,s);a((r=r.apply(e,m)).next())});import{aP as C,a as w,b as y,l as $,f as _,aQ as u,o as x,aR as F,p as h,i as p,n as l,t as g,j as k,q as L,aU as M,c as S}from"./index.0d073eaa.js";import{B as I,a as R}from"./index.c05f9254.js";import{B as N}from"./BasicForm.d11b68fd.js";import{u as P}from"./useForm.868c8e81.js";import{u as U}from"./lock.2102e909.js";import{h as V}from"./header.d801b988.js";import"./useWindowSizeFn.ef20ece8.js";import"./FullscreenOutlined.401a7bcd.js";/* empty css              *//* empty css              */import"./index.0fb15725.js";import"./index.965098be.js";import"./Checkbox.476f6e92.js";import"./index.1491cab6.js";import"./index.e317a008.js";import"./index.7075e2b7.js";import"./index.04f7e044.js";import"./index.e8daa066.js";import"./get.49a42f2e.js";import"./index.e8b360cf.js";import"./eagerComputed.156e81ff.js";import"./index.2b5ea4f6.js";import"./_baseIteratee.3919e7cf.js";import"./DeleteOutlined.247d1f35.js";import"./index.a8c197b8.js";import"./useRefs.e81831e2.js";import"./Form.48352728.js";import"./Col.a2eadc78.js";import"./useFlexGapSupport.474c31b7.js";import"./useSize.bb4e5ce5.js";import"./index.81899e8a.js";import"./index.ffb8ac7d.js";import"./index.dd1f987c.js";import"./uuid.2b29000c.js";import"./download.bb4c9304.js";import"./base64Conver.08b9f4ec.js";import"./index.31930d74.js";import"./index.1d29734e.js";import"./uniqBy.ac0f9c38.js";const q=w({name:"LockModal",components:{BasicModal:I,BasicForm:N},setup(){const{t:e}=S(),{prefixCls:m}=y("header-lock-modal"),r=$(),c=U(),t=_(()=>{var n;return(n=r.getUserInfo)==null?void 0:n.realName}),[d,{closeModal:s}]=R(),[a,{validateFields:o,resetFields:i}]=P({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const B=(yield o()).password;s(),c.setLockInfo({isLock:!0,pwd:B}),yield i()})}const b=_(()=>{const{avatar:n}=r.getUserInfo;return n||V});return{t:e,prefixCls:m,getRealName:t,register:d,registerForm:a,handleLock:v,avatar:b}}}),D=["src"];function j(e,m,r,c,t,d){const s=u("BasicForm"),a=u("a-button"),o=u("BasicModal");return x(),F(o,M({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:h(()=>[p("div",{class:l(`${e.prefixCls}__entry`)},[p("div",{class:l(`${e.prefixCls}__header`)},[p("img",{src:e.avatar,class:l(`${e.prefixCls}__header-img`)},null,10,D),p("p",{class:l(`${e.prefixCls}__header-name`)},g(e.getRealName),3)],2),k(s,{onRegister:e.registerForm},null,8,["onRegister"]),p("div",{class:l(`${e.prefixCls}__footer`)},[k(a,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:h(()=>[L(g(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var xe=C(q,[["render",j]]);export{xe as default};