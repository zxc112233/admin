var B=(e,l,t)=>new Promise((s,r)=>{var c=o=>{try{i(t.next(o))}catch(a){r(a)}},u=o=>{try{i(t.throw(o))}catch(a){r(a)}},i=o=>o.done?s(o.value):Promise.resolve(o.value).then(c,u);i((t=t.apply(e,l)).next())});import{B as h}from"./BasicForm.d11b68fd.js";import{u as f}from"./useForm.868c8e81.js";import{aP as C,a as F,cB as _,aQ as m,o as P,aR as g,p,i as k,j as n,q as d}from"./index.0d073eaa.js";import{P as A}from"./index.566277e5.js";/* empty css              *//* empty css              */import"./index.0fb15725.js";import"./index.965098be.js";import"./Checkbox.476f6e92.js";import"./index.1491cab6.js";import"./index.e317a008.js";import"./index.7075e2b7.js";import"./index.04f7e044.js";import"./index.e8daa066.js";import"./get.49a42f2e.js";import"./index.e8b360cf.js";import"./eagerComputed.156e81ff.js";import"./index.2b5ea4f6.js";import"./_baseIteratee.3919e7cf.js";import"./DeleteOutlined.247d1f35.js";import"./index.a8c197b8.js";import"./useRefs.e81831e2.js";import"./Form.48352728.js";import"./Col.a2eadc78.js";import"./useFlexGapSupport.474c31b7.js";import"./useSize.bb4e5ce5.js";import"./index.81899e8a.js";import"./index.c05f9254.js";import"./useWindowSizeFn.ef20ece8.js";import"./FullscreenOutlined.401a7bcd.js";import"./index.ffb8ac7d.js";import"./index.dd1f987c.js";import"./uuid.2b29000c.js";import"./download.bb4c9304.js";import"./base64Conver.08b9f4ec.js";import"./index.31930d74.js";import"./index.1d29734e.js";import"./uniqBy.ac0f9c38.js";import"./index.e9a84cba.js";import"./index.0972fd96.js";import"./useContentViewHeight.01b9d1c6.js";import"./ArrowLeftOutlined.90d2e05e.js";import"./index.8680e4c4.js";import"./transButton.8c1b1a4f.js";const b=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[],componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field5",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"\u662F\u5426\u7981\u7528\u5B57\u6BB53",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",colProps:{span:8},labelWidth:200}],W=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"\u540C\u6B65f2\u7684\u503C\u4E3Af1",onChange:l=>{e.f2=l.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"\u503C\u6539\u53D8\u65F6\u6267\u884C\u67E5\u8BE2,\u67E5\u770B\u63A7\u5236\u53F0",onChange:()=>B(void 0,null,function*(){const{validate:l}=e,t=yield l();console.log(t)})})}],w=F({components:{BasicForm:h,CollapseContainer:_,PageWrapper:A},setup(){const[e,{setProps:l,updateSchema:t,appendSchemaByField:s,removeSchemaByFiled:r}]=f({labelWidth:120,schemas:b,actionColOptions:{span:24}}),[c]=f({labelWidth:120,schemas:W,actionColOptions:{span:24}});function u(){t({field:"field3",label:"\u5B57\u6BB53 New"})}function i(){t([{field:"field3",label:"\u5B57\u6BB53 New++"},{field:"field4",label:"\u5B57\u6BB54 New++"}])}function o(){s({field:"field10",label:"\u5B57\u6BB510",component:"Input",colProps:{span:8}},"field3")}function a(){r("field11")}return{register:e,register1:c,schemas:b,setProps:l,changeLabel3:u,changeLabel34:i,appendField:o,deleteField:a}}}),D={class:"mb-4"},E=d(" \u66F4\u6539\u5B57\u6BB53label "),S=d(" \u540C\u65F6\u66F4\u6539\u5B57\u6BB53,4label "),v=d(" \u5F80\u5B57\u6BB53\u540E\u9762\u63D2\u5165\u5B57\u6BB510 "),y=d(" \u5220\u9664\u5B57\u6BB511 ");function I(e,l,t,s,r,c){const u=m("a-button"),i=m("BasicForm"),o=m("CollapseContainer"),a=m("PageWrapper");return P(),g(a,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B"},{default:p(()=>[k("div",D,[n(u,{onClick:e.changeLabel3,class:"mr-2"},{default:p(()=>[E]),_:1},8,["onClick"]),n(u,{onClick:e.changeLabel34,class:"mr-2"},{default:p(()=>[S]),_:1},8,["onClick"]),n(u,{onClick:e.appendField,class:"mr-2"},{default:p(()=>[v]),_:1},8,["onClick"]),n(u,{onClick:e.deleteField,class:"mr-2"},{default:p(()=>[y]),_:1},8,["onClick"])]),n(o,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B,\u52A8\u6001\u6839\u636E\u8868\u5355\u5185\u5176\u4ED6\u503C\u6539\u53D8"},{default:p(()=>[n(i,{onRegister:e.register},null,8,["onRegister"])]),_:1}),n(o,{class:"mt-5",title:"componentProps\u52A8\u6001\u6539\u53D8"},{default:p(()=>[n(i,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}var Ae=C(w,[["render",I]]);export{Ae as default};