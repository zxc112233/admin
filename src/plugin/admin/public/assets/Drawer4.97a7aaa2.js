import{B as a,a as n}from"./index.c4338a98.js";import{B as c}from"./BasicForm.d11b68fd.js";import{u as l}from"./useForm.868c8e81.js";import{a as u,aP as f,aQ as i,o as d,aR as B,p as _,i as g,j as w,aU as F}from"./index.0d073eaa.js";import"./index.c9bfdeac.js";import"./ArrowLeftOutlined.90d2e05e.js";/* empty css              *//* empty css              */import"./index.0fb15725.js";import"./index.965098be.js";import"./Checkbox.476f6e92.js";import"./index.1491cab6.js";import"./index.e317a008.js";import"./index.7075e2b7.js";import"./index.04f7e044.js";import"./index.e8daa066.js";import"./get.49a42f2e.js";import"./index.e8b360cf.js";import"./eagerComputed.156e81ff.js";import"./index.2b5ea4f6.js";import"./_baseIteratee.3919e7cf.js";import"./DeleteOutlined.247d1f35.js";import"./index.a8c197b8.js";import"./useRefs.e81831e2.js";import"./Form.48352728.js";import"./Col.a2eadc78.js";import"./useFlexGapSupport.474c31b7.js";import"./useSize.bb4e5ce5.js";import"./index.81899e8a.js";import"./index.c05f9254.js";import"./useWindowSizeFn.ef20ece8.js";import"./FullscreenOutlined.401a7bcd.js";import"./index.ffb8ac7d.js";import"./index.dd1f987c.js";import"./uuid.2b29000c.js";import"./download.bb4c9304.js";import"./base64Conver.08b9f4ec.js";import"./index.31930d74.js";import"./index.1d29734e.js";import"./uniqBy.ac0f9c38.js";const p=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:12}}],h=u({components:{BasicDrawer:a,BasicForm:c},setup(){const[o,{setFieldsValue:t}]=l({labelWidth:120,schemas:p,showActionButtonGroup:!1,actionColOptions:{span:24}}),[e]=n(r=>{t({field2:r.data,field1:r.info})});return{register:e,schemas:p,registerForm:o}}});function D(o,t,e,r,R,$){const m=i("BasicForm"),s=i("BasicDrawer");return d(),B(s,F(o.$attrs,{onRegister:o.register,title:"Drawer Title",width:"50%"}),{default:_(()=>[g("div",null,[w(m,{onRegister:o.registerForm},null,8,["onRegister"])])]),_:1},16,["onRegister"])}var co=f(h,[["render",D]]);export{co as default};