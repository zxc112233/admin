var E=Object.defineProperty;var f=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var S=(t,e,o)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_=(t,e)=>{for(var o in e||(e={}))x.call(e,o)&&S(t,o,e[o]);if(f)for(var o of f(e))A.call(e,o)&&S(t,o,e[o]);return t};import{aP as k,a as R,r as w,m as $,a$ as y,aQ as p,o as a,aR as u,p as v,i as h,j as n,w as m,v as s,aS as F}from"./index.0d073eaa.js";import D from"./Step1.7bdc5881.js";import V from"./Step2.0911d3d2.js";import W from"./Step3.f4b362f4.js";import{P as b}from"./index.566277e5.js";import{S as i}from"./index.3a07339a.js";import"./index.a8c197b8.js";import"./BasicForm.d11b68fd.js";/* empty css              *//* empty css              */import"./index.0fb15725.js";import"./index.965098be.js";import"./Checkbox.476f6e92.js";import"./index.1491cab6.js";import"./index.e317a008.js";import"./index.7075e2b7.js";import"./index.04f7e044.js";import"./index.e8daa066.js";import"./get.49a42f2e.js";import"./index.e8b360cf.js";import"./eagerComputed.156e81ff.js";import"./index.2b5ea4f6.js";import"./_baseIteratee.3919e7cf.js";import"./DeleteOutlined.247d1f35.js";import"./Form.48352728.js";import"./Col.a2eadc78.js";import"./useFlexGapSupport.474c31b7.js";import"./useSize.bb4e5ce5.js";import"./index.81899e8a.js";import"./index.c05f9254.js";import"./useWindowSizeFn.ef20ece8.js";import"./FullscreenOutlined.401a7bcd.js";import"./index.ffb8ac7d.js";import"./index.dd1f987c.js";import"./uuid.2b29000c.js";import"./download.bb4c9304.js";import"./base64Conver.08b9f4ec.js";import"./index.31930d74.js";import"./useRefs.e81831e2.js";import"./index.1d29734e.js";import"./uniqBy.ac0f9c38.js";import"./useForm.868c8e81.js";import"./data.1866c55a.js";import"./index.875b4490.js";import"./index.3fd6d808.js";import"./index.e9a84cba.js";import"./index.0972fd96.js";import"./useContentViewHeight.01b9d1c6.js";import"./ArrowLeftOutlined.90d2e05e.js";import"./index.8680e4c4.js";import"./transButton.8c1b1a4f.js";const j=R({name:"FormStepPage",components:{Step1:D,Step2:V,Step3:W,PageWrapper:b,[i.name]:i,[i.Step.name]:i.Step},setup(){const t=w(0),e=$({initSetp2:!1,initSetp3:!1});function o(r){t.value++,e.initSetp2=!0,console.log(r)}function d(){t.value--}function c(r){t.value++,e.initSetp3=!0,console.log(r)}function l(){t.value=0,e.initSetp2=!1,e.initSetp3=!1}return _({current:t,handleStep1Next:o,handleStep2Next:c,handleRedo:l,handleStepPrev:d},y(e))}}),I={class:"step-form-form"},Q={class:"mt-5"};function q(t,e,o,d,c,l){const r=p("a-step"),B=p("a-steps"),C=p("Step1"),g=p("Step2"),N=p("Step3"),P=p("PageWrapper");return a(),u(P,{title:"\u5206\u6B65\u8868\u5355",contentBackground:"",content:" \u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",contentClass:"p-4"},{default:v(()=>[h("div",I,[n(B,{current:t.current},{default:v(()=>[n(r,{title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F"}),n(r,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"}),n(r,{title:"\u5B8C\u6210"})]),_:1},8,["current"])]),h("div",Q,[m(n(C,{onNext:t.handleStep1Next},null,8,["onNext"]),[[s,t.current===0]]),t.initSetp2?m((a(),u(g,{key:0,onPrev:t.handleStepPrev,onNext:t.handleStep2Next},null,8,["onPrev","onNext"])),[[s,t.current===1]]):F("",!0),t.initSetp3?m((a(),u(N,{key:1,onRedo:t.handleRedo},null,8,["onRedo"])),[[s,t.current===2]]):F("",!0)])]),_:1})}var Qt=k(j,[["render",q],["__scopeId","data-v-46d6ddea"]]);export{Qt as default};