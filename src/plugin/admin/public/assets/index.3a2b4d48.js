import{B as f}from"./TableImg.2aabef6a.js";import{j as h}from"./BasicForm.d11b68fd.js";import{u as b}from"./useTable.13a8b0ff.js";import{a as g}from"./system.d37449cd.js";import{b as _}from"./index.c05f9254.js";import{D as C,c as T,s as D}from"./DeptModal.94926f9b.js";import{aP as E,a as B,aQ as e,o as M,h as S,j as i,p,q as R}from"./index.0d073eaa.js";import"./index.965098be.js";import"./Checkbox.476f6e92.js";import"./index.1491cab6.js";import"./index.e8b360cf.js";import"./eagerComputed.156e81ff.js";import"./useForm.868c8e81.js";import"./index.566277e5.js";import"./index.e9a84cba.js";import"./index.0972fd96.js";import"./useSize.bb4e5ce5.js";import"./useWindowSizeFn.ef20ece8.js";import"./useContentViewHeight.01b9d1c6.js";import"./ArrowLeftOutlined.90d2e05e.js";import"./index.8680e4c4.js";import"./transButton.8c1b1a4f.js";import"./index.7075e2b7.js";import"./index.04f7e044.js";import"./index.e317a008.js";import"./uuid.2b29000c.js";import"./index.2b5ea4f6.js";import"./_baseIteratee.3919e7cf.js";import"./get.49a42f2e.js";import"./DeleteOutlined.247d1f35.js";import"./index.a8c197b8.js";import"./useRefs.e81831e2.js";import"./Form.48352728.js";import"./Col.a2eadc78.js";import"./useFlexGapSupport.474c31b7.js";import"./index.0fb15725.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.32117fb5.js";import"./FullscreenOutlined.401a7bcd.js";import"./index.dd1f987c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f8a2fd00.js";import"./index.2ed1a060.js";/* empty css              *//* empty css              */import"./index.e8daa066.js";import"./index.81899e8a.js";import"./index.ffb8ac7d.js";import"./download.bb4c9304.js";import"./base64Conver.08b9f4ec.js";import"./index.31930d74.js";import"./index.1d29734e.js";import"./uniqBy.ac0f9c38.js";const k=B({name:"DeptManagement",components:{BasicTable:f,DeptModal:C,TableAction:h},setup(){const[o,{openModal:r}]=_(),[m,{reload:s}]=b({title:"\u90E8\u95E8\u5217\u8868",api:g,columns:T,formConfig:{labelWidth:120,schemas:D},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function n(t){console.log(t)}function a(){s()}return{registerTable:m,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:a}}}),v=R(" \u65B0\u589E\u90E8\u95E8 ");function w(o,r,m,s,l,c){const n=e("a-button"),a=e("TableAction"),t=e("BasicTable"),d=e("DeptModal");return M(),S("div",null,[i(t,{onRegister:o.registerTable},{toolbar:p(()=>[i(n,{type:"primary",onClick:o.handleCreate},{default:p(()=>[v]),_:1},8,["onClick"])]),action:p(({record:u})=>[i(a,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),i(d,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ao=E(k,[["render",w]]);export{Ao as default};