import{jsx as c,Fragment as R,jsxs as L}from"@dropins/tools/preact-jsx-runtime.js";import{Field as x,Picker as ne,Input as re,InputDate as te,Checkbox as p,TextArea as se,Price as he,CartItem as de,Icon as ue,Image as T,Incrementer as ie,Button as ce}from"@dropins/tools/components.js";import"@dropins/tools/preact.js";import{useRef as be,useState as P,useEffect as g,useCallback as V}from"@dropins/tools/preact-hooks.js";import{useText as oe}from"@dropins/tools/i18n.js";import*as q from"@dropins/tools/preact-compat.js";import{memo as ee,useCallback as F}from"@dropins/tools/preact-compat.js";import{classes as _,Slot as me}from"@dropins/tools/lib.js";import"@dropins/tools/event-bus.js";const $e=s=>q.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},q.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.8052 14.4968C10.8552 14.4968 9.9752 14.0268 9.4452 13.2368L9.4152 13.1868L9.3852 13.1268C8.1352 11.2268 7.5352 8.96681 7.6852 6.68681C7.7552 4.42681 9.6052 2.61681 11.8652 2.60681H12.0052C14.2752 2.47681 16.2152 4.21681 16.3452 6.47681C16.3452 6.55681 16.3452 6.62681 16.3452 6.70681C16.4852 8.94681 15.9052 11.1768 14.6852 13.0568L14.6052 13.1768C14.0552 13.9868 13.1352 14.4668 12.1652 14.4768H12.0052C11.9352 14.4768 11.8652 14.4868 11.7952 14.4868L11.8052 14.4968Z",stroke:"currentColor"}),q.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M4.3252 21.5469C4.3552 20.4169 4.4752 19.2869 4.6752 18.1769C4.8952 17.1669 6.4752 16.0269 8.9052 15.1569C9.2352 15.0369 9.4852 14.7869 9.5952 14.4569L9.8052 14.0269",stroke:"currentColor"}),q.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M14.425 14.4069L14.165 14.1569C14.375 14.5969 14.725 14.9569 15.155 15.1869C16.945 15.7969 19.125 16.9569 19.375 18.2069C19.585 19.3069 19.685 20.4269 19.675 21.5369",stroke:"currentColor"})),Ee=s=>q.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},q.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),q.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.75 5.88423V4.75H12.25V5.88423L12.0485 13.0713H11.9515L11.75 5.88423ZM11.7994 18.25V16.9868H12.2253V18.25H11.7994Z",stroke:"currentColor"})),ve=s=>s.reduce((e,{code:v,required:$,defaultValue:u})=>($&&(e[v]=u),e),{}),ke=({fieldsConfig:s,onSubmit:e})=>{const{requiredFieldError:v}=oe({requiredFieldError:"Order.Form.notifications.requiredFieldError"}),$=be(null),[u,b]=P({}),[m,d]=P({});g(()=>{if(b({}),!s||!s.length)return;const r=ve(s);b(r)},[s==null?void 0:s.length]),g(()=>()=>{var r;b({}),(r=$.current)==null||r.reset()},[]);const E=V((r,a)=>{const h=s.find(l=>l.code===r);return h!=null&&h.required&&!a?v:""},[s,v]),f=V(r=>{const{name:a,value:h,type:i,checked:l}=r==null?void 0:r.target,n=i==="checkbox"?l:h;b(t=>({...t,[a]:n}))},[]),o=V(r=>{const{name:a,value:h,type:i,checked:l}=r==null?void 0:r.target,n=i==="checkbox"?l:h;d(t=>({...t,[a]:E(a,n)}))},[E]),k=V(r=>{r.preventDefault();let a=!0,h={},i=null;for(const[l,n]of Object.entries(u)){const t=E(l,n);t&&(h[l]=t,a=!1,i||(i=l))}if(d(h),i&&$.current){const l=$.current.elements.namedItem(i);l==null||l.focus()}e==null||e(r,a)},[u,E,e]);return{formData:u,errors:m,formRef:$,handleChange:f,handleBlur:o,handleSubmit:k}},ye=ee(({loading:s,values:e,fields:v=[],errors:$,className:u="",onChange:b,onBlur:m})=>{const d=`${u}__item`,E=F((a,h,i)=>{const l=a.options.map(n=>({text:n.label,value:n.value}));return c(x,{error:i,className:_([d,`${d}--${a.id}`,[`${d}--${a.id}-hidden`,a.is_hidden],a.className]),"data-testid":`${u}--${a.id}`,disabled:s,children:c(ne,{name:a.id,floatingLabel:`${a.label} ${a.required?"*":""}`,placeholder:a.label,"aria-label":a.label,options:l,onBlur:m,handleSelect:b,value:h||a.defaultValue})},a.id)},[u,s,d,m,b]),f=F((a,h,i)=>{const l=a.id==="email",n=l?c($e,{}):void 0,t=l?"username":"";return c(x,{error:i,className:_([d,`${d}--${a.id}`,[`${d}--${a.id}-hidden`,a==null?void 0:a.is_hidden],a.className]),"data-testid":`${u}--${a.id}`,disabled:s,children:c(re,{"aria-label":a.label,"aria-required":a.required,autoComplete:t,icon:n,type:"text",name:a.id,value:h||a.defaultValue,placeholder:a.label,floatingLabel:`${a.label} ${a.required?"*":""}`,onBlur:m,onChange:b})},a.id)},[u,s,d,m,b]),o=F((a,h,i)=>c(x,{error:i,className:_([d,`${d}--${a.id}`,[`${d}--${a.id}-hidden`,a.is_hidden],a.className]),"data-testid":`${u}--${a.id}`,disabled:s,children:c(te,{type:"text",name:a.id,value:h||a.defaultValue,placeholder:a.label,floatingLabel:`${a.label} ${a.required?"*":""}`,onBlur:m,onChange:b})},a.id),[u,s,d,m,b]),k=F((a,h,i)=>c(x,{error:i,className:_([d,`${d}--${a.id}`,[`${d}--${a.id}-hidden`,a.is_hidden],a.className]),"data-testid":`${u}--${a.id}`,disabled:s,children:c(p,{name:a.id,checked:h||a.defaultValue,placeholder:a.label,label:`${a.label} ${a.required?"*":""}`,onBlur:m,onChange:b})},a.id),[u,s,d,m,b]),r=F((a,h,i)=>c(x,{error:i,className:_([d,`${d}--${a.id}`,[`${d}--${a.id}-hidden`,a.is_hidden],a.className]),"data-testid":`${u}--${a.id}`,disabled:s,children:c(se,{type:"text",name:a.id,value:h===void 0?a.defaultValue:h,label:`${a.label} ${a.required?"*":""}`,onBlur:m,onChange:b})},a.id),[u,s,d,m,b]);return v.length?c(R,{children:v.map(a=>{var l;const h=($==null?void 0:$[a.id])??"",i=(e==null?void 0:e[a.id])??"";switch(a.fieldType){case"TEXT":return(l=a==null?void 0:a.options)!=null&&l.length?E(a,i,h):f(a,i,h);case"MULTILINE":return f(a,i,h);case"SELECT":return E(a,i,h);case"DATE":return o(a,i,h);case"BOOLEAN":return k(a,i,h);case"TEXTAREA":return r(a,i,h);default:return null}})}):null}),Re=ee(({name:s,loading:e,children:v,className:$="defaultForm",fieldsConfig:u,onSubmit:b})=>{const{formData:m,errors:d,formRef:E,handleChange:f,handleBlur:o,handleSubmit:k}=ke({fieldsConfig:u,onSubmit:b});return L("form",{className:_(["order-form",$]),onSubmit:k,name:s,ref:E,children:[c(ye,{className:$,loading:e,fields:u,onChange:f,onBlur:o,errors:d,values:m}),v]})}),fe=({loading:s,product:e,itemType:v,taxConfig:$,translations:u,disabledIncrementer:b,showConfigurableOptions:m,onQuantity:d,routeProductDetails:E,isReturnProductList:f})=>{var D,Q,A,H,Z,z,j,C,U,W,X,I,K,G,J,Y,B;const{taxExcluded:o,taxIncluded:k}=$,r=V((w,ae,le)=>c(he,{amount:w,currency:ae,weight:"normal",...le}),[]);let a={};const h=v==="cancelled",i=(Q=(D=e==null?void 0:e.product)==null?void 0:D.stockStatus)==null?void 0:Q.includes("IN_STOCK"),l=(e==null?void 0:e.giftCard)||{},n=(A=e==null?void 0:e.itemPrices)==null?void 0:A.priceIncludingTax,t=(H=e==null?void 0:e.itemPrices)==null?void 0:H.originalPrice,y=(Z=e==null?void 0:e.itemPrices)==null?void 0:Z.price,S=v==="returned"?e==null?void 0:e.requestQuantity:e==null?void 0:e.totalQuantity,N=e.discounted&&((z=e.price)==null?void 0:z.value)!==(t==null?void 0:t.value)*S,M={..."configurableOptions"in e?e.configurableOptions:{},..."bundleOptions"in e?e.bundleOptions:{},..."senderName"in l&&(l!=null&&l.senderName)?{[u.sender]:l==null?void 0:l.senderName}:{},..."senderEmail"in l&&(l!=null&&l.senderEmail)?{[u.sender]:l==null?void 0:l.senderEmail}:{},..."recipientName"in l&&(l!=null&&l.recipientName)?{[u.recipient]:l==null?void 0:l.recipientName}:{},..."recipientEmail"in l&&(l!=null&&l.recipientEmail)?{[u.recipient]:l==null?void 0:l.recipientEmail}:{},..."message"in l&&(l!=null&&l.message)?{[u.message]:l==null?void 0:l.message}:{},..."downloadableLinks"in e&&(e!=null&&e.downloadableLinks)?{[`${(j=e==null?void 0:e.downloadableLinks)==null?void 0:j.count} ${u.downloadableCount}`]:(C=e==null?void 0:e.downloadableLinks)==null?void 0:C.result}:{}};if(k&&o){const w=N?t==null?void 0:t.value:(n==null?void 0:n.value)*S;a={taxExcluded:!0,taxIncluded:void 0,price:r(t==null?void 0:t.value,t==null?void 0:t.currency),total:L(R,{children:[r(w,t==null?void 0:t.currency,{variant:e.discounted&&(n==null?void 0:n.value)!==w?"strikethrough":"default"}),e.discounted&&(n==null?void 0:n.value)!==w?r(n==null?void 0:n.value,n==null?void 0:n.currency,{sale:!0,weight:"bold"}):null]}),totalExcludingTax:r((y==null?void 0:y.value)*S,y==null?void 0:y.currency)}}else if(!k&&o)a={taxExcluded:void 0,taxIncluded:void 0,price:r(t==null?void 0:t.value,t==null?void 0:t.currency),total:L(R,{children:[r((t==null?void 0:t.value)*S,n==null?void 0:n.currency,{variant:N?"strikethrough":"default"}),N?r((U=e.price)==null?void 0:U.value,(W=e.price)==null?void 0:W.currency,{sale:!0,weight:"bold"}):null]}),totalExcludingTax:r((y==null?void 0:y.value)*(e==null?void 0:e.totalQuantity),y==null?void 0:y.currency)};else if(k&&!o){const w=N?t.value:n.value*S;a={taxExcluded:void 0,taxIncluded:!0,price:r(n==null?void 0:n.value,n==null?void 0:n.currency),total:L(R,{children:[r(w,n==null?void 0:n.currency,{variant:N?"strikethrough":"default",weight:"bold"}),N?r(n==null?void 0:n.value,n==null?void 0:n.currency,{sale:!0,weight:"bold"}):null]})}}return c(de,{loading:s,alert:h&&i?L("span",{children:[c(ue,{source:Ee}),u.outOfStock]}):c(R,{}),configurations:(m==null?void 0:m(M))??M,title:E?c("a",{"data-testid":"product-name",className:_(["cart-summary-item__title",["cart-summary-item__title--strikethrough",h]]),href:E(e),children:(X=e==null?void 0:e.product)==null?void 0:X.name}):c("div",{"data-testid":"product-name",className:_(["cart-summary-item__title",["cart-summary-item__title--strikethrough",h]]),children:(I=e==null?void 0:e.product)==null?void 0:I.name}),sku:c("div",{children:(K=e==null?void 0:e.product)==null?void 0:K.sku}),quantity:e!=null&&e.eligibleForReturn&&(e!=null&&e.returnableQuantity)?(e==null?void 0:e.returnableQuantity)??e.totalQuantity:f?void 0:e.totalQuantity,image:E?c("a",{href:E(e),children:c(T,{src:(G=e==null?void 0:e.product)==null?void 0:G.thumbnail.url,alt:(J=e==null?void 0:e.product)==null?void 0:J.thumbnail.label,loading:"lazy",width:"90",height:"120"})}):c(T,{src:(Y=e==null?void 0:e.product)==null?void 0:Y.thumbnail.url,alt:(B=e==null?void 0:e.product)==null?void 0:B.thumbnail.label,loading:"lazy",width:"90",height:"120"}),...a,footer:d&&!b?c(ie,{value:1,min:1,max:e==null?void 0:e.returnableQuantity,onValue:w=>d==null?void 0:d(Number(w)),name:"quantity"}):void 0})},O=Math.random().toString(36).slice(2)+Date.now().toString(36),Ve=({itemsEligibleForReturn:s,slots:e,loading:v=!1,taxConfig:$,translations:u={},selectedProductList:b,handleSelectedProductList:m,showConfigurableOptions:d,handleSetQuantity:E,handleChangeStep:f})=>L("ul",{className:"order-return-order-product-list",children:[s==null?void 0:s.map((o,k)=>{const r=b.some(a=>(a==null?void 0:a.productSku)===o.productSku&&o.eligibleForReturn&&o.quantityReturned===0);return L("li",{className:_(["order-return-order-product-list__item",["order-return-order-product-list__item--blur",!o.eligibleForReturn]]),children:[c(p,{"data-testid":`${O}_${k+1}`,name:O+k,checked:r,disabled:!o.eligibleForReturn||o.quantityReturned!==0,onChange:()=>{m({...o,currentReturnOrderQuantity:1})}}),c(fe,{loading:v,product:o,itemType:"",taxConfig:$,translations:u,showConfigurableOptions:d,disabledIncrementer:!r,isReturnProductList:!0,onQuantity:(o==null?void 0:o.returnableQuantity)>1?a=>E(a,o.productSku):void 0}),e!=null&&e.ReturnOrderItem?c(me,{"data-testid":"returnOrderItem",name:"ReturnOrderItem",slot:e==null?void 0:e.ReturnOrderItem,context:{}}):null]},O+k)}),c("li",{className:"order-return-order-product-list__item",children:c(ce,{type:"button",onClick:()=>f("attributes"),disabled:!b.length,children:u.nextStep})})]});export{fe as C,Re as F,Ve as R,Ee as S,ye as a,ke as u};