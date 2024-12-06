/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as r,jsxs as i,Fragment as N}from"@dropins/tools/preact-jsx-runtime.js";import{useMemo as V}from"@dropins/tools/preact-hooks.js";import{classes as R,Slot as Q}from"@dropins/tools/lib.js";import{IllustratedMessage as n1,Icon as S,Card as U,ContentGrid as a1,Image as i1,Header as J,Pagination as c1}from"@dropins/tools/components.js";import*as l from"@dropins/tools/preact-compat.js";import{useMemo as L1}from"@dropins/tools/preact-compat.js";import"./ShippingStatusCard.js";import{f as T}from"./returnOrdersHelper.js";import"@dropins/tools/preact.js";import"@dropins/tools/event-bus.js";import{C as W}from"./OrderLoaders.js";import{c as s1}from"./capitalizeFirst.js";import{Text as X}from"@dropins/tools/i18n.js";const Y=c=>l.createElement("svg",{id:"Icon_Chevron_right_Base","data-name":"Icon \\u2013 Chevron right \\u2013 Base",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...c},l.createElement("g",{id:"Large"},l.createElement("rect",{id:"Placement_area","data-name":"Placement area",width:24,height:24,fill:"#fff",opacity:0}),l.createElement("g",{id:"Chevron_right_icon","data-name":"Chevron right icon"},l.createElement("path",{vectorEffect:"non-scaling-stroke",id:"chevron",d:"M199.75,367.5l4.255,-4.255-4.255,-4.255",transform:"translate(-189.25 -351.0)",fill:"none",stroke:"currentColor"})))),d1=c=>l.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...c},l.createElement("path",{d:"M12.002 21L11.8275 21.4686C11.981 21.5257 12.1528 21.5041 12.2873 21.4106C12.4218 21.3172 12.502 21.1638 12.502 21H12.002ZM3.89502 17.9823H3.39502C3.39502 18.1912 3.52485 18.378 3.72059 18.4509L3.89502 17.9823ZM3.89502 8.06421L4.07193 7.59655C3.91831 7.53844 3.74595 7.55948 3.61082 7.65284C3.47568 7.74619 3.39502 7.89997 3.39502 8.06421H3.89502ZM12.0007 21H11.5007C11.5007 21.1638 11.5809 21.3172 11.7154 21.4106C11.8499 21.5041 12.0216 21.5257 12.1751 21.4686L12.0007 21ZM20.1076 17.9823L20.282 18.4509C20.4778 18.378 20.6076 18.1912 20.6076 17.9823H20.1076ZM20.1076 8.06421H20.6076C20.6076 7.89997 20.527 7.74619 20.3918 7.65284C20.2567 7.55948 20.0843 7.53844 19.9307 7.59655L20.1076 8.06421ZM12.0007 11.1311L11.8238 10.6634C11.6293 10.737 11.5007 10.9232 11.5007 11.1311H12.0007ZM20.2858 8.53191C20.5441 8.43421 20.6743 8.14562 20.5766 7.88734C20.4789 7.62906 20.1903 7.49889 19.932 7.5966L20.2858 8.53191ZM12.002 4.94826L12.1775 4.48008C12.0605 4.43623 11.9314 4.43775 11.8154 4.48436L12.002 4.94826ZM5.87955 6.87106C5.62334 6.97407 5.49915 7.26528 5.60217 7.52149C5.70518 7.77769 5.99639 7.90188 6.2526 7.79887L5.87955 6.87106ZM18.1932 7.80315C18.4518 7.90008 18.74 7.76904 18.8369 7.51047C18.9338 7.2519 18.8028 6.96371 18.5442 6.86678L18.1932 7.80315ZM12 4.94827L11.5879 5.23148C11.6812 5.36719 11.8353 5.44827 12 5.44827C12.1647 5.44827 12.3188 5.36719 12.4121 5.23148L12 4.94827ZM14.0263 2L14.2028 1.53218C13.9875 1.45097 13.7446 1.52717 13.6143 1.71679L14.0263 2ZM21.8421 4.94827L22.2673 5.2113C22.3459 5.08422 22.3636 4.92863 22.3154 4.78717C22.2673 4.64571 22.1584 4.53319 22.0186 4.48045L21.8421 4.94827ZM9.97368 2L10.3857 1.71679C10.2554 1.52717 10.0125 1.45097 9.79721 1.53218L9.97368 2ZM2.15789 4.94827L1.98142 4.48045C1.84161 4.53319 1.73271 4.64571 1.68456 4.78717C1.63641 4.92863 1.65406 5.08422 1.73267 5.2113L2.15789 4.94827ZM12 11.1256L11.6702 11.5014C11.8589 11.667 12.1411 11.667 12.3298 11.5014L12 11.1256ZM15.0395 8.45812L14.8732 7.98659C14.8131 8.00779 14.7576 8.04028 14.7097 8.08232L15.0395 8.45812ZM23 5.65024L23.3288 6.0269C23.5095 5.86916 23.5527 5.60532 23.4318 5.39817C23.3109 5.19102 23.0599 5.09893 22.8337 5.17871L23 5.65024ZM8.96053 8.45812L9.29034 8.08232C9.24244 8.04028 9.18695 8.00779 9.12685 7.98659L8.96053 8.45812ZM1 5.65024L1.16632 5.17871C0.940115 5.09893 0.689119 5.19102 0.568192 5.39817C0.447264 5.60532 0.49048 5.86916 0.671176 6.0269L1 5.65024ZM12.1764 20.5314L4.06945 17.5137L3.72059 18.4509L11.8275 21.4686L12.1764 20.5314ZM4.39502 17.9823V8.06421H3.39502V17.9823H4.39502ZM3.71811 8.53187L11.8251 11.5987L12.1789 10.6634L4.07193 7.59655L3.71811 8.53187ZM11.502 11.1311V21H12.502V11.1311H11.502ZM12.1751 21.4686L20.282 18.4509L19.9332 17.5137L11.8262 20.5314L12.1751 21.4686ZM20.6076 17.9823V8.06421H19.6076V17.9823H20.6076ZM19.9307 7.59655L11.8238 10.6634L12.1776 11.5987L20.2845 8.53187L19.9307 7.59655ZM11.5007 11.1311V21H12.5007V11.1311H11.5007ZM19.932 7.5966L11.8251 10.6634L12.1789 11.5987L20.2858 8.53191L19.932 7.5966ZM11.8154 4.48436L5.87955 6.87106L6.2526 7.79887L12.1885 5.41217L11.8154 4.48436ZM11.8265 5.41645L18.1932 7.80315L18.5442 6.86678L12.1775 4.48008L11.8265 5.41645ZM11.502 4.94826V11.1311H12.502V4.94826H11.502ZM12.4121 5.23148L14.4384 2.28321L13.6143 1.71679L11.5879 4.66507L12.4121 5.23148ZM13.8498 2.46782L21.6656 5.4161L22.0186 4.48045L14.2028 1.53218L13.8498 2.46782ZM21.4169 4.68525L20.5485 6.08919L21.3989 6.61524L22.2673 5.2113L21.4169 4.68525ZM12.4121 4.66507L10.3857 1.71679L9.56162 2.28321L11.5879 5.23148L12.4121 4.66507ZM9.79721 1.53218L1.98142 4.48045L2.33437 5.4161L10.1502 2.46782L9.79721 1.53218ZM1.73267 5.2113L2.60109 6.61524L3.45154 6.08919L2.58312 4.68525L1.73267 5.2113ZM12.3298 11.5014L15.3693 8.83392L14.7097 8.08232L11.6702 10.7498L12.3298 11.5014ZM15.2058 8.92965L23.1663 6.12177L22.8337 5.17871L14.8732 7.98659L15.2058 8.92965ZM22.6712 5.27358L19.7764 7.80067L20.4341 8.554L23.3288 6.0269L22.6712 5.27358ZM12.3298 10.7498L9.29034 8.08232L8.63072 8.83392L11.6702 11.5014L12.3298 10.7498ZM9.12685 7.98659L1.16632 5.17871L0.83368 6.12177L8.79421 8.92965L9.12685 7.98659ZM0.671176 6.0269L3.56591 8.554L4.22356 7.80067L1.32882 5.27358L0.671176 6.0269Z",fill:"#D6D6D6"})),K=({typeList:c,isEmpty:M,minifiedView:g,message:C})=>{const t=L1(()=>{switch(c){case"orders":return{icon:d1,text:r("p",{children:C}),className:"order-empty-list--empty-box"};default:return{icon:"",text:"",className:""}}},[c,C]);return!M||!c||!t.text?null:r(n1,{className:R(["order-empty-list",t.className,g?"order-empty-list--minified":""]),message:t.text,icon:r(S,{source:t.icon}),"data-testid":"emptyList"})},I={size:"32",stroke:"2"},v1=({placeholderImage:c,minifiedViewKey:M,withReturnNumber:g=!1,withOrderNumber:C=!1,slots:t,pageInfo:L,withReturnsListButton:z=!0,isMobile:$=!1,returnsInMinifiedView:D=1,translations:a={},orderReturns:s=[],minifiedView:h=!1,withHeader:f=!0,withThumbnails:A=!0,selectedPage:B=1,handleSetSelectPage:k,routeReturnDetails:d,routeOrderDetails:v,routeTracking:b,routeReturnsList:x,routeProductDetails:m,loading:y})=>{const F=h?D:s.length,j=m!=null&&m()?"a":"span",H=V(()=>s.slice(0,F).map((e,t1)=>{var G,q;const w=((e==null?void 0:e.items)??[]).reduce((n,u)=>(u.requestQuantity??0)+n,0);return r(U,{variant:"secondary",className:"order-returns-list-content__cards-list",children:i("div",{className:"order-returns-list-content__cards-grid",children:[i("div",{className:"order-returns-list-content__descriptions",children:[r("p",{className:"order-returns-list-content__return-status",children:T(e.returnStatus)?r(X,{id:`Order.Returns.${M}.returnsList.returnStatus.${T(e.returnStatus)}`}):r("span",{children:s1(e.returnStatus)})}),g?i("p",{children:[a.returnNumber," ",r("a",{href:(d==null?void 0:d({returnNumber:e.returnNumber,orderNumber:e.orderNumber,token:e.token}))??"#",rel:"noreferrer",children:e.returnNumber})]}):null,C?i("p",{children:[a.orderNumber," ",r("a",{href:(v==null?void 0:v({orderNumber:e.orderNumber,token:e.token}))??"#",rel:"noreferrer",children:e.orderNumber})]}):null,(G=e==null?void 0:e.tracking)==null?void 0:G.map((n,u)=>{var _,p;const Z={title:"",number:(n==null?void 0:n.trackingNumber)??"",carrier:((_=n==null?void 0:n.carrier)==null?void 0:_.label)??""},E=b==null?void 0:b(Z),o=`${Z.number}_${u}`;return i("p",{children:[`${a.carrier} `,`${(p=Z.carrier)==null?void 0:p.toLocaleUpperCase()} | `,E?r("a",{href:E,target:"_blank",rel:"noreferrer","data-testid":`${o}_link`,children:n.trackingNumber}):r("span",{"data-testid":`${o}_span`,children:n.trackingNumber})]},o)}),t!=null&&t.ReturnItemsDetails?r(Q,{"data-testid":"returnItemsDetails",name:"ReturnItemsDetails",slot:t==null?void 0:t.ReturnItemsDetails,context:{items:e.items}}):null,!(t!=null&&t.ReturnItemsDetails)&&e.items.length?i("p",{children:[w," ",r(X,{id:`Order.Returns.${M}.returnsList.itemText`,plural:w,fields:{count:w}})]}):null]}),A?r(a1,{maxColumns:$?3:9,emptyGridContent:r(N,{}),className:R(["order-returns-list-content__images",["order-returns-list-content__images-3",$]]),children:(q=e==null?void 0:e.items)==null?void 0:q.map((n,u)=>{var _,p,O,P;const Z=(_=n.thumbnail)==null?void 0:_.label,E=(O=(p=n.thumbnail)==null?void 0:p.url)!=null&&O.length?(P=n.thumbnail)==null?void 0:P.url:c,o=`key_${u}_${n.uid}`;return r(j,{"data-testid":o,href:(m==null?void 0:m(n))??"#",children:r(i1,{alt:Z,src:E,width:85,height:114})},o)})}):null,t!=null&&t.DetailsActionParams?r(Q,{className:"order-returns-list-content__actions","data-testid":"detailsActionParams",name:"DetailsActionParams",slot:t==null?void 0:t.DetailsActionParams,context:{returnOrderItem:e}}):r("a",{href:(d==null?void 0:d({returnNumber:e.returnNumber,token:e.token,orderNumber:e.orderNumber}))??"#",className:"order-returns-list-content__actions",children:r(S,{source:Y,...I})})]})},t1)}),[s,F,M,g,a,C,t,A,$,c,j,b,m,d,v]),r1=V(()=>i(N,{children:[r("h1",{children:"renderMinifiedView"}),f?r(J,{title:a.minifiedViewTitle,divider:!1,className:"order-returns__header--minified"}):null,y?r(W,{withCard:!1}):i(N,{children:[H,r(K,{minifiedView:h,typeList:"orders",isEmpty:!s.length,message:a.emptyOrdersListMessage}),z?r("a",{className:"order-returns-list-content__actions",href:(x==null?void 0:x())??"#",children:r(U,{variant:"secondary",className:"order-returns-list-content__card",children:i("div",{className:"order-returns-list-content__card-wrapper",children:[r("p",{children:a.viewAllOrdersButton}),r(S,{source:Y,...I})]})})}):null]})]}),[x,z,f,a,H,h,s.length,y]),e1=V(()=>i(N,{children:[r("h1",{children:"renderFullSizeView"}),f?r(J,{title:a.minifiedViewTitle,divider:!0,className:"order-returns__header--full-size"}):null,y?r(W,{withCard:!1}):i(N,{children:[r(K,{minifiedView:h,typeList:"orders",isEmpty:!s.length,message:a.emptyOrdersListMessage}),H,(L==null?void 0:L.totalPages)>1?r(c1,{totalPages:L==null?void 0:L.totalPages,currentPage:B,onChange:k}):null]})]}),[H,h,s,a,L==null?void 0:L.totalPages,B,k,y,f]);return r("div",{className:"order-returns-list-content",children:h?r1:e1})};export{v1 as R};
