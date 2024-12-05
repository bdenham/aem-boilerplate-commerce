/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as r,jsxs as x}from"@dropins/tools/preact-jsx-runtime.js";import{classes as B,Slot as P}from"@dropins/tools/lib.js";import{Icon as H,Header as $,InLineAlert as W,Button as F,Checkbox as j,CartItem as V,Image as Z}from"@dropins/tools/components.js";import{useState as w,useRef as D,useEffect as q,useCallback as E}from"@dropins/tools/preact-hooks.js";import{u as U,a as z}from"../chunks/ShippingStatusCard.js";import*as C from"@dropins/tools/preact-compat.js";import{u as G}from"../chunks/useGetStoreConfig.js";import{createRef as J,Fragment as K}from"@dropins/tools/preact.js";import{s as X,p as Y,r as I,m as ee}from"../chunks/returnOrdersHelper.js";import{events as te}from"@dropins/tools/event-bus.js";import{g as ne,r as re}from"../chunks/requestReturn.js";import{s as se}from"../chunks/setTaxStatus.js";import{S as ae,C as ce}from"../chunks/CartSummaryItem.js";import{a as ie}from"../chunks/OrderLoaders.js";import{useText as ue}from"@dropins/tools/i18n.js";import"../chunks/getStoreConfig.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/getFormValues.js";import"../chunks/network-error.js";import"../chunks/transform-attributes-form.js";import"../chunks/convertCase.js";const oe=a=>C.createElement("svg",{id:"Icon_Warning_Base",width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},C.createElement("g",{clipPath:"url(#clip0_841_1324)"},C.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.9949 2.30237L0.802734 21.6977H23.1977L11.9949 2.30237Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),C.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M12.4336 10.5504L12.3373 14.4766H11.6632L11.5669 10.5504V9.51273H12.4336V10.5504ZM11.5883 18.2636V17.2687H12.4229V18.2636H11.5883Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),C.createElement("defs",null,C.createElement("clipPath",{id:"clip0_841_1324"},C.createElement("rect",{width:24,height:21,fill:"white",transform:"translate(0 1.5)"})))),le=a=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},C.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),C.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M6.75 12.762L10.2385 15.75L17.25 9",stroke:"currentColor"})),de=({onSuccess:a,onError:s,handleSetInLineAlert:c,orderData:l})=>{const[g,O]=w({id:"",email:"",...l}),[d,f]=w("products"),[L,k]=w(!0),[p,m]=w([]),[_,R]=w([]),[y,t]=w([]),u=D([]);u.current.length!==p.length&&(u.current=p.map((n,o)=>u.current[o]||J())),q(()=>{const n=te.on("order/data",o=>{O(o);const S=X(o);t(S),k(!1)},{eager:!0});return()=>{n==null||n.off()}},[]),q(()=>{ne("RMA_ITEM").then(n=>{n!=null&&n.length&&(R(n),k(!1))})},[]);const e=E(n=>{m(o=>o.findIndex(h=>(h==null?void 0:h.productSku)===(n==null?void 0:n.productSku))>-1?o.filter(h=>(h==null?void 0:h.productSku)!==(n==null?void 0:n.productSku)):[...o,n])},[]),i=E(n=>{f(n),c(),n==="products"&&m([])},[c]),b=E((n,o)=>{const S=p.map(h=>h.productSku===o?{...h,currentReturnOrderQuantity:n}:h);m(S)},[p]),N=E(async(n,o)=>{if(!o)return;k(!0);const S={orderUid:g.id,contactEmail:g.email},h=Y(u);re({...S,items:h}).then(v=>{a==null||a(v),i("success"),c()}).catch(v=>{s==null||s(v.message),c({type:"error",heading:v.message})}),k(!1)},[i,s,a,c,g]);return{order:g,steps:d,loading:L,formsRef:u,attributesList:_,selectedProductList:p,itemsEligibleForReturn:y,handleSelectedProductList:e,handleSetQuantity:b,handleChangeStep:i,onSubmit:N}},pe={success:le,warning:oe,error:ae},he=()=>{const[a,s]=w({type:"success",heading:""}),c=E(l=>{if(!(l!=null&&l.type)){s({type:"success",heading:""});return}const g=r(H,{source:pe[l.type]});s({...l,icon:g})},[]);return{inLineAlertProps:a,handleSetInLineAlert:c}},Pe=({className:a,orderData:s,slots:c,onSuccess:l,onError:g,routeReturnSuccess:O,showConfigurableOptions:d})=>{const f=ue({headerText:"Order.CreateReturn.headerText",successTitle:"Order.CreateReturn.success.title",successMessage:"Order.CreateReturn.success.message",sender:"Order.CreateReturn.giftCard.sender",recipient:"Order.CreateReturn.giftCard.recipient",message:"Order.CreateReturn.giftCard.message",outOfStock:"Order.CreateReturn.stockStatus.outOfStock",nextStep:"Order.CreateReturn.buttons.nextStep",backStep:"Order.CreateReturn.buttons.backStep",submit:"Order.CreateReturn.buttons.submit",backStore:"Order.CreateReturn.buttons.backStore",downloadableCount:"Order.CreateReturn.downloadableCount",returnedItems:"Order.CreateReturn.returnedItems",configurationsListQuantity:"Order.CreateReturn.configurationsList.quantity"}),{inLineAlertProps:L,handleSetInLineAlert:k}=he(),p=G(),{order:m,itemsEligibleForReturn:_,formsRef:R,attributesList:y,steps:t,loading:u,selectedProductList:e,handleSelectedProductList:i,handleSetQuantity:b,handleChangeStep:N,onSubmit:n}=de({orderData:s,onSuccess:l,onError:g,handleSetInLineAlert:k});if(u)return r("div",{children:r(ie,{})});if(!u&&!y.length)return r("div",{});const o=(p==null?void 0:p.baseMediaUrl)??"",S={products:r(ge,{itemsEligibleForReturn:_,placeholderImage:o,taxConfig:se((p==null?void 0:p.shoppingCartDisplayPrice)??0),slots:c,translations:f,loading:u,selectedProductList:e,handleSelectedProductList:i,showConfigurableOptions:d,handleSetQuantity:b,handleChangeStep:N}),attributes:r(fe,{placeholderImage:o,slots:c,formsRef:R,loading:u,fieldsConfig:y,selectedProductList:e,handleChangeStep:N,translations:f,onSubmit:n}),success:r(me,{translations:f,routeReturnSuccess:O,orderData:m}),error:null};return x("div",{className:B(["order-create-return",a]),children:[r($,{title:f.headerText}),L.heading?r(W,{className:"order-create-return_notification",variant:"secondary","data-testid":"orderCreateReturnNotification",...L}):null,S[t]]})},me=({routeReturnSuccess:a,translations:s,orderData:c})=>x("div",{className:"order-return-order-message",children:[r("p",{className:"order-return-order-message__title",children:s.successTitle}),r("p",{className:"order-return-order-message__subtitle",children:s.successMessage}),r(F,{href:(a==null?void 0:a(c))??"#",children:s.backStore})]}),ge=({placeholderImage:a,itemsEligibleForReturn:s,slots:c,loading:l,taxConfig:g,translations:O,selectedProductList:d,handleSelectedProductList:f,showConfigurableOptions:L,handleSetQuantity:k,handleChangeStep:p})=>x("ul",{className:"order-return-order-product-list",children:[s==null?void 0:s.map((m,_)=>{const{quantityReturnRequested:R,quantityShipped:y,eligibleForReturn:t}=m,u=d.some(b=>(b==null?void 0:b.productSku)===m.productSku&&m.eligibleForReturn),e=y===R&&t,i=y-R===0?R:y-R;return x("li",{className:B(["order-return-order-product-list__item",["order-return-order-product-list__item--blur",e]]),children:[r(j,{"data-testid":`key_${_}`,name:`key_${_}`,checked:u,disabled:e,onChange:()=>{f({...m,currentReturnOrderQuantity:1})}}),r(ce,{placeholderImage:a,loading:l,product:{...m,totalQuantity:i},itemType:"",taxConfig:g,translations:O,showConfigurableOptions:L,disabledIncrementer:!u,onQuantity:i>1?b=>{k(b,m.productSku)}:void 0}),r(P,{"data-testid":"returnOrderItem",name:"ReturnOrderItem",slot:c==null?void 0:c.ReturnOrderItem})]},m.id)}),r("li",{className:"order-return-order-product-list__item",children:r(F,{type:"button",onClick:()=>p("attributes"),disabled:!d.length,children:O.nextStep})})]}),fe=({placeholderImage:a,slots:s,formsRef:c,selectedProductList:l,loading:g,fieldsConfig:O,translations:d,handleChangeStep:f,onSubmit:L})=>{const{formData:k,errors:p,formRef:m,handleChange:_,handleBlur:R,handleSubmit:y}=U({fieldsConfig:I(O,l==null?void 0:l.length),onSubmit:L});return x("form",{className:"order-return-reason-form",ref:m,onSubmit:y,name:"returnReasonForm",children:[l.map((t,u)=>{var h,v,M,Q,A,T;const e=t==null?void 0:t.giftCard,i=t==null?void 0:t.product,b=ee(O,u),N=`${t==null?void 0:t.id}_${u}`,n=(t==null?void 0:t.currentReturnOrderQuantity)??1,o={...t!=null&&t.currentReturnOrderQuantity?{[d.configurationsListQuantity]:n}:{},...t.configurableOptions||{},...t.bundleOptions||{},...e!=null&&e.senderName?{[d.sender]:e==null?void 0:e.senderName}:{},...e!=null&&e.senderEmail?{[d.sender]:e==null?void 0:e.senderEmail}:{},...e!=null&&e.recipientName?{[d.recipient]:e==null?void 0:e.recipientName}:{},...e!=null&&e.recipientEmail?{[d.recipient]:e==null?void 0:e.recipientEmail}:{},...e!=null&&e.message?{[d.message]:e==null?void 0:e.message}:{},...t!=null&&t.downloadableLinks?{[`${(h=t==null?void 0:t.downloadableLinks)==null?void 0:h.count} ${d.downloadableCount}`]:(v=t==null?void 0:t.downloadableLinks)==null?void 0:v.result}:{}},S=(Q=(M=i==null?void 0:i.thumbnail)==null?void 0:M.url)!=null&&Q.length?i.thumbnail.url:a;return x(K,{children:[r(V,{loading:g,title:r("div",{"data-testid":"product-name",children:(A=t==null?void 0:t.product)==null?void 0:A.name}),sku:r("div",{children:i==null?void 0:i.sku}),image:r(Z,{src:S,alt:((T=i==null?void 0:i.thumbnail)==null?void 0:T.label)??"",loading:"lazy",width:"90",height:"120"}),configurations:o}),r("form",{name:N,ref:c==null?void 0:c.current[u],"data-quantity":n,children:r(z,{className:"className",loading:g,fields:b,onChange:_,onBlur:R,errors:p,values:k})})]},t.id)}),r(P,{"data-testid":"returnFormActions",name:"ReturnFormActions",slot:s==null?void 0:s.ReturnFormActions,context:{handleChangeStep:f},children:x("div",{className:"order-return-reason-form__actions",children:[r(F,{variant:"secondary",type:"button",onClick:()=>{f("products")},children:d.backStep}),r(F,{children:d.submit})]})})]})};export{Pe as CreateReturn,Pe as default};
