var m=(t,n,e)=>new Promise((s,u)=>{var c=a=>{try{r(e.next(a))}catch(l){u(l)}},o=a=>{try{r(e.throw(a))}catch(l){u(l)}},r=a=>a.done?s(a.value):Promise.resolve(a.value).then(c,o);r((e=e.apply(t,n)).next())});import{b8 as I,m as h,dL as z,E as g,f as b,aj as F,af as k,ag as A,k as d,r as p,c7 as N,a as C,B as T,aP as S,b3 as j,aQ as f,o as w,aR as y,p as v,q as P,t as R,aU as _,c as D,b as E,bN as O,aW as V,j as q,b9 as L,aV as U,bi as x,cx as $}from"./index.0d073eaa.js";function Q(t,n="value",e="change",s){const u=I(),c=u==null?void 0:u.emit,o=h({value:t[n]}),r=z(o),a=i=>{o.value=i};return g(()=>{o.value=t[n]}),[b({get(){return o.value},set(i){F(i,r.value)||(o.value=i,k(()=>{c==null||c(e,i,...A(d(s))||[])}))}}),a,r]}function W(t){const n=p(t),e=p(!1);let s;function u(){s&&window.clearInterval(s)}function c(){e.value=!1,u(),s=null}function o(){d(e)||!!s||(e.value=!0,s=setInterval(()=>{d(n)===1?(c(),n.value=t):n.value-=1},1e3))}function r(){n.value=t,c()}function a(){r(),o()}return N(()=>{r()}),{start:o,reset:r,restart:a,clear:u,stop:c,currentCount:n,isStart:e}}const G={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},H=C({name:"CountButton",components:{Button:T},props:G,setup(t){const n=p(!1),{currentCount:e,isStart:s,start:u,reset:c}=W(t.count),{t:o}=D(),r=b(()=>d(s)?o("component.countdown.sendText",[d(e)]):o("component.countdown.normalText"));g(()=>{t.value===void 0&&c()});function a(){return m(this,null,function*(){const{beforeStartFunc:l}=t;if(l&&j(l)){n.value=!0;try{(yield l())&&u()}finally{n.value=!1}}else u()})}return{handleStart:a,currentCount:e,loading:n,getButtonText:r,isStart:s}}});function J(t,n,e,s,u,c){const o=f("Button");return w(),y(o,_(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:v(()=>[P(R(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}var B=S(H,[["render",J]]);const K={value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},M=C({name:"CountDownInput",components:{CountButton:B},inheritAttrs:!1,props:K,setup(t){const{prefixCls:n}=E("countdown-input"),[e]=Q(t);return{prefixCls:n,state:e}}});function X(t,n,e,s,u,c){const o=f("CountButton"),r=f("a-input");return w(),y(r,_(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),O({addonAfter:v(()=>[q(o,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[V(Object.keys(t.$slots).filter(a=>a!=="addonAfter"),a=>({name:a,fn:v(l=>[L(t.$slots,a,U(x(l||{})))])}))]),1040,["class","size","value"])}var Y=S(M,[["render",X]]);const nt=$(Y);$(B);export{nt as C,Q as u};