import{B as b}from"./TableImg.2aabef6a.js";import"./BasicForm.d11b68fd.js";import{getBasicColumns as p,getBasicShortColumns as R}from"./tableData.f7682e9a.js";import{aP as D,a as E,r as w,aQ as f,o as S,h as A,i as d,j as u,p as i,q as n,x as T,k as L}from"./index.0d073eaa.js";import{d as y}from"./table.5cb529f7.js";import"./index.965098be.js";import"./Checkbox.476f6e92.js";import"./index.1491cab6.js";import"./index.e8b360cf.js";import"./eagerComputed.156e81ff.js";import"./useForm.868c8e81.js";import"./index.566277e5.js";import"./index.e9a84cba.js";import"./index.0972fd96.js";import"./useSize.bb4e5ce5.js";import"./useWindowSizeFn.ef20ece8.js";import"./useContentViewHeight.01b9d1c6.js";import"./ArrowLeftOutlined.90d2e05e.js";import"./index.8680e4c4.js";import"./transButton.8c1b1a4f.js";import"./index.7075e2b7.js";import"./index.04f7e044.js";import"./index.e317a008.js";import"./uuid.2b29000c.js";import"./index.2b5ea4f6.js";import"./_baseIteratee.3919e7cf.js";import"./get.49a42f2e.js";import"./DeleteOutlined.247d1f35.js";import"./index.a8c197b8.js";import"./useRefs.e81831e2.js";import"./Form.48352728.js";import"./Col.a2eadc78.js";import"./useFlexGapSupport.474c31b7.js";import"./index.c05f9254.js";import"./FullscreenOutlined.401a7bcd.js";import"./index.0fb15725.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.32117fb5.js";import"./index.dd1f987c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f8a2fd00.js";import"./index.2ed1a060.js";/* empty css              *//* empty css              */import"./index.e8daa066.js";import"./index.81899e8a.js";import"./index.ffb8ac7d.js";import"./download.bb4c9304.js";import"./base64Conver.08b9f4ec.js";import"./index.31930d74.js";import"./index.1d29734e.js";import"./uniqBy.ac0f9c38.js";const K=E({components:{BasicTable:b},setup(){const o=w(null),{createMessage:s}=T();function t(){const m=L(o);if(!m)throw new Error("tableAction is null");return m}function l(){t().setLoading(!0),setTimeout(()=>{t().setLoading(!1)},1e3)}function c(){t().setColumns(R())}function r(){t().setColumns(p()),t().reload({page:1})}function e(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(t().getColumns())}function a(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(t().getDataSource())}function C(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(t().getRawDataSource())}function g(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(t().getPaginationRef())}function _(){t().setPagination({current:2}),t().reload()}function F(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(t().getSelectRows())}function B(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(t().getSelectRowKeys())}function k(){t().setSelectedRowKeys(["0","1","2"])}function h(){t().clearSelectedRowKeys()}return{tableRef:o,api:y,columns:p(),changeLoading:l,changeColumns:c,reloadTable:r,getColumn:e,getTableData:a,getTableRawData:C,getPagination:g,setPaginationInfo:_,getSelectRowList:F,getSelectRowKeyList:B,setSelectedRowKeyList:k,clearSelect:h}}}),P={class:"p-4"},v={class:"mb-4"},$=n(" \u8FD8\u539F "),M=n(" \u5F00\u542Floading "),N=n(" \u66F4\u6539Columns "),V=n(" \u83B7\u53D6Columns "),I=n(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),j=n(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E "),q=n(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),z={class:"mb-4"},H=n(" \u83B7\u53D6\u9009\u4E2D\u884C "),Q=n(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),G=n(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),J=n(" \u6E05\u7A7A\u9009\u4E2D\u884C "),O=n(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");function U(o,s,t,l,c,r){const e=f("a-button"),a=f("BasicTable");return S(),A("div",P,[d("div",v,[u(e,{class:"mr-2",onClick:o.reloadTable},{default:i(()=>[$]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.changeLoading},{default:i(()=>[M]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.changeColumns},{default:i(()=>[N]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getColumn},{default:i(()=>[V]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getTableData},{default:i(()=>[I]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getTableRawData},{default:i(()=>[j]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.setPaginationInfo},{default:i(()=>[q]),_:1},8,["onClick"])]),d("div",z,[u(e,{class:"mr-2",onClick:o.getSelectRowList},{default:i(()=>[H]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:i(()=>[Q]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:i(()=>[G]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.clearSelect},{default:i(()=>[J]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getPagination},{default:i(()=>[O]),_:1},8,["onClick"])]),u(a,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:o.api,columns:o.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var Uo=D(K,[["render",U]]);export{Uo as default};