import{B as v}from"./TableImg.2aabef6a.js";import"./BasicForm.d11b68fd.js";import{u as $}from"./useTable.13a8b0ff.js";import{getBasicColumns as p,getBasicShortColumns as M}from"./tableData.f7682e9a.js";import{aP as N,a as V,aQ as d,o as I,h as j,i as g,j as t,p as u,q as i,x as q}from"./index.0d073eaa.js";import{d as z}from"./table.5cb529f7.js";import"./index.965098be.js";import"./Checkbox.476f6e92.js";import"./index.1491cab6.js";import"./index.e8b360cf.js";import"./eagerComputed.156e81ff.js";import"./useForm.868c8e81.js";import"./index.566277e5.js";import"./index.e9a84cba.js";import"./index.0972fd96.js";import"./useSize.bb4e5ce5.js";import"./useWindowSizeFn.ef20ece8.js";import"./useContentViewHeight.01b9d1c6.js";import"./ArrowLeftOutlined.90d2e05e.js";import"./index.8680e4c4.js";import"./transButton.8c1b1a4f.js";import"./index.7075e2b7.js";import"./index.04f7e044.js";import"./index.e317a008.js";import"./uuid.2b29000c.js";import"./index.2b5ea4f6.js";import"./_baseIteratee.3919e7cf.js";import"./get.49a42f2e.js";import"./DeleteOutlined.247d1f35.js";import"./index.a8c197b8.js";import"./useRefs.e81831e2.js";import"./Form.48352728.js";import"./Col.a2eadc78.js";import"./useFlexGapSupport.474c31b7.js";import"./index.c05f9254.js";import"./FullscreenOutlined.401a7bcd.js";import"./index.0fb15725.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.32117fb5.js";import"./index.dd1f987c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f8a2fd00.js";import"./index.2ed1a060.js";/* empty css              *//* empty css              */import"./index.e8daa066.js";import"./index.81899e8a.js";import"./index.ffb8ac7d.js";import"./download.bb4c9304.js";import"./base64Conver.08b9f4ec.js";import"./index.31930d74.js";import"./index.1d29734e.js";import"./uniqBy.ac0f9c38.js";const H=V({components:{BasicTable:v},setup(){const{createMessage:o}=q();function n(){console.log("onChange",arguments)}const[c,{setLoading:s,setColumns:a,getColumns:r,getDataSource:e,getRawDataSource:l,reload:m,getPaginationRef:C,setPagination:f,getSelectRows:_,getSelectRowKeys:F,setSelectedRowKeys:B,clearSelectedRowKeys:h}]=$({canResize:!0,title:"useTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528useTable\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",api:z,columns:p(),defSort:{field:"name",order:"ascend"},rowKey:"id",showTableSetting:!0,onChange:n,rowSelection:{type:"checkbox"},onColumnsChange:P=>{console.log("ColumnsChanged",P)}});function k(){s(!0),setTimeout(()=>{s(!1)},1e3)}function b(){a(M())}function D(){a(p()),m({page:1})}function E(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(r())}function S(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(e())}function T(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(l())}function w(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(C())}function R(){f({current:2}),m()}function A(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(_())}function y(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(F())}function L(){B(["0","1","2"])}function K(){h()}return{registerTable:c,changeLoading:k,changeColumns:b,reloadTable:D,getColumn:E,getTableData:S,getTableRawData:T,getPagination:w,setPaginationInfo:R,getSelectRowList:A,getSelectRowKeyList:y,setSelectedRowKeyList:L,clearSelect:K,onChange:n}}}),Q={class:"p-4"},U={class:"mb-4"},G=i(" \u8FD8\u539F "),J=i(" \u5F00\u542Floading "),O=i(" \u66F4\u6539Columns "),W=i(" \u83B7\u53D6Columns "),X=i(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),Y=i(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E "),Z=i(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),x={class:"mb-4"},oo=i(" \u83B7\u53D6\u9009\u4E2D\u884C "),eo=i(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),to=i(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),uo=i(" \u6E05\u7A7A\u9009\u4E2D\u884C "),io=i(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");function no(o,n,c,s,a,r){const e=d("a-button"),l=d("BasicTable");return I(),j("div",Q,[g("div",U,[t(e,{class:"mr-2",onClick:o.reloadTable},{default:u(()=>[G]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.changeLoading},{default:u(()=>[J]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.changeColumns},{default:u(()=>[O]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getColumn},{default:u(()=>[W]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getTableData},{default:u(()=>[X]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getTableRawData},{default:u(()=>[Y]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.setPaginationInfo},{default:u(()=>[Z]),_:1},8,["onClick"])]),g("div",x,[t(e,{class:"mr-2",onClick:o.getSelectRowList},{default:u(()=>[oo]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:u(()=>[eo]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:u(()=>[to]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.clearSelect},{default:u(()=>[uo]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getPagination},{default:u(()=>[io]),_:1},8,["onClick"])]),t(l,{onRegister:o.registerTable},null,8,["onRegister"])])}var se=N(H,[["render",no]]);export{se as default};