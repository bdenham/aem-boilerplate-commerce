/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as s,jsxs as L,Fragment as N}from"@dropins/tools/preact-jsx-runtime.js";import{classes as C,Slot as J}from"@dropins/tools/lib.js";import{S as D,c as K,E as W,C as j}from"../chunks/CustomerInformationCard.js";import"@dropins/tools/preact-compat.js";import{Card as V,Icon as E,ContentGrid as G,Image as H,Header as U,Picker as Q,Pagination as R}from"@dropins/tools/components.js";import{useText as I}from"@dropins/tools/i18n.js";import{useState as v,useEffect as z,useMemo as X,useCallback as q}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/event-bus.js";import{g as Z}from"../chunks/getOrderHistoryList.js";import"../chunks/removeCustomerAddress.js";import"@dropins/tools/fetch-graphql.js";import"@dropins/tools/preact.js";const B={size:"32",stroke:"2"},F=({minifiedView:c,orderNumber:r,orderToken:e,routeOrdersList:a,routeOrderDetails:d})=>{const i=c?"minifiedView":"fullSizeView",h=I({viewAllOrdersButton:`Account.${i}.OrdersList.viewAllOrdersButton`,ariaLabelLink:`Account.${i}.OrdersList.ariaLabelLink`});return a?s("a",{className:C(["account-orders-list-action",["account-orders-list-action--minifiedView",c]]),"data-testid":"ordersListActionButtonMinifiedView",href:a(),children:s(V,{"data-testid":"ordersListActionMinifiedView",variant:"secondary",children:L("div",{className:"account-orders-list-action__card-wrapper",children:[s("p",{children:h.viewAllOrdersButton}),s(E,{source:D,...B})]})})}):s("a",{"aria-label":`${h.ariaLabelLink} ${r??e}`,href:K(d)?d(r,e):"#",className:"account-orders-list-action","data-testid":"ordersListActionButton",children:s(E,{source:D,...B})})},m=()=>{const[c,r]=v(window.innerWidth<768);return z(()=>{const e=()=>{r(window.innerWidth<768)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),c},rr=({minifiedView:c,item:r,withThumbnails:e,children:a,slots:d,routeTracking:i,routeOrderProduct:h,routeReturnDetails:O,...A})=>{var S,y,$,_,k,w,x,M,g;const p=c?"minifiedView":"fullSizeView",o=I({orderNumber:`Account.${p}.OrdersList.OrdersListCard.orderNumber`,itemsAmount:`Account.${p}.OrdersList.OrdersListCard.itemsAmount`,carrier:`Account.${p}.OrdersList.OrdersListCard.carrier`,returnsText:`Account.${p}.OrdersList.OrdersListCard.returns`,deliveryDateText:`Account.${p}.OrdersList.OrdersListCard.orderDate`}),f=m(),n=K(h);return L(V,{variant:"secondary",...A,className:C(["account-orders-list-card",["account-orders-list-card--full",((S=r==null?void 0:r.items)==null?void 0:S.length)>6]]),children:[s("div",{className:"account-orders-list-card__content",children:d!=null&&d.OrdersListCard?s(J,{"data-testid":`ordersListCard${r.id}`,name:"OrdersListCard",slot:d==null?void 0:d.OrdersListCard,context:{orderHistoryListItem:r}}):L(N,{children:[s("div",{children:r==null?void 0:r.status}),L("p",{children:[o.deliveryDateText," ",r==null?void 0:r.orderDate]}),L("p",{children:[o.orderNumber," ",r.number]}),(y=r==null?void 0:r.shipments)==null?void 0:y.map(t=>{var l;return(l=t==null?void 0:t.tracking)==null?void 0:l.map(u=>{const b=i==null?void 0:i(u);return L("p",{"data-testid":u.number,children:[s("span",{children:`${o.carrier} ${u.carrier.toLocaleUpperCase()} `}),b?s("a",{href:b,target:"_blank",className:"account-orders-list-card__content--track_number",rel:"noreferrer",children:u.number}):s("span",{className:"account-orders-list-card__content--track_number",children:u.number})]},t.id)})}),r!=null&&r.returns&&(($=r.returns)!=null&&$.length)?L("p",{"data-testid":r.number,children:[L("span",{children:[o.returnsText," "]}),(_=r==null?void 0:r.returns)==null?void 0:_.map(t=>s("span",{"data-testid":t.number,children:L("a",{href:(O==null?void 0:O({orderNumber:r.number,orderToken:r.token,returnNumber:t.number}))??"#",className:"account-orders-list-card__content--return_number",children:[t.number," "]})},t.uid))]},r.id):null,L("p",{children:["$",(k=r==null?void 0:r.total)==null?void 0:k.grandTotal.value]}),L("p",{"data-testid":"itemsAmount",children:[(w=r==null?void 0:r.items)!=null&&w.length?(x=r==null?void 0:r.items)==null?void 0:x.reduce((t,l)=>{const u=(l==null?void 0:l.quantityOrdered)||0;return t+u},0):0," ",o.itemsAmount]}),(M=r==null?void 0:r.items)==null?void 0:M.map((t,l)=>{if(l>=0&&l<10)return L("p",{className:"account-orders-list-card__content--product-name",children:[L("span",{className:"account-orders-list-card__content--quantity",children:[(t==null?void 0:t.quantityOrdered)>1?t==null?void 0:t.quantityOrdered:null," "]}),t==null?void 0:t.productName.replaceAll("-"," ")]},`${l}_${t.id}`);if(l===11)return s("p",{children:"..."},"ellipsis")})]})}),e&&((g=r==null?void 0:r.items)!=null&&g.length)?s(G,{maxColumns:f?3:9,emptyGridContent:s(N,{}),className:C(["account-orders-list-card__images",["account-orders-list-card__images-3",f]]),"data-testid":"ordersListCardImages",children:r.items.map((t,l)=>{var T,Y;if(!(t!=null&&t.product))return null;const u=((Y=(T=t==null?void 0:t.product)==null?void 0:T.smallImage)==null?void 0:Y.url)||"",b=t==null?void 0:t.productName;return n?s("a",{href:h==null?void 0:h(t),target:"_blank",rel:"noreferrer",children:s(H,{src:u,width:65,height:65,alt:b})},t.id+l):s(H,{src:u,width:65,height:65,alt:b},t.id+l)})}):null,s("div",{className:"account-orders-list-card__actions",children:a})]})},tr=({ordersInMinifiedView:c,minifiedView:r,pageSize:e,selectedDate:a,selectedPage:d,handleSetFirstOrderDate:i})=>{const[h,O]=v([]),[A,p]=v({totalPages:1,currentPage:1,pageSize:1}),[o,f]=v(!1);return z(()=>{f(!0),Z(r?c:e,a,d).then(n=>{!n||!n.items||(p(n.pageInfo),O(n.items),i==null||i(n.dateOfFirstOrder))}).finally(()=>{f(!1)})},[i,r,c,e,a,d]),{loading:o,orderHistoryListItems:h,pageInfo:A}},P=(c,r=1)=>{const e=new Date,a=new Date(e);switch(c){case"sixMonthsAgo":{a.setMonth(a.getMonth()-r);break}case"oneYearAgo":{a.setFullYear(a.getFullYear()-r);break}default:return""}return{from:a==null?void 0:a.toISOString().split("T")[0],to:`${e==null?void 0:e.toISOString().split("T")[0]} 23:59:59`}},sr=c=>{const r=[],e=new Date().getFullYear();for(let a=c;a<=e-1;a++)r.push({value:`{"from":"${a}-01-01","to":"${a+1}-01-01 23:59:59"}`,text:a.toString()});return r},er=()=>{const c=I({pastSixMonths:"Account.fullSizeView.OrdersList.OrdersListSelectDate.pastSixMonths",currentYear:"Account.fullSizeView.OrdersList.OrdersListSelectDate.currentYear",viewAll:"Account.fullSizeView.OrdersList.OrdersListSelectDate.viewAll"}),[r,e]=v(),[a,d]=v(JSON.stringify(P("sixMonthsAgo",6))),[i,h]=v(1);z(()=>{window==null||window.scrollTo({top:100,behavior:"smooth"})},[i]);const O=X(()=>{const o=[{value:JSON.stringify(P("sixMonthsAgo",6)),text:c.pastSixMonths},{value:JSON.stringify(P("oneYearAgo",1)),text:c.currentYear},{value:"viewAll",text:c.viewAll}];if(r){const n=new Date(r).getFullYear();o==null||o.splice(2,0,...sr(n))}return o},[c,r]),A=q(o=>{e(o)},[]),p=q(o=>{const n=o.target.value;d(n),h(1)},[]);return{selectableDateList:O,selectedDate:a,selectedPage:i,handleSelectDate:p,setSelectedPage:h,handleSetFirstOrderDate:A}},ar=({className:c,withHeader:r=!0,minifiedView:e=!1,withThumbnails:a=!0,withFilter:d=!0,ordersInMinifiedView:i=1,pageSize:h=10,routeOrdersList:O,routeOrderDetails:A,routeReturnDetails:p,routeTracking:o,routeOrderProduct:f,slots:n})=>{const S=e?"minifiedView":"fullSizeView",y=I({containerTitle:`Account.${S}.OrdersList.containerTitle`,dateOrderPlaced:`Account.${S}.OrdersList.dateOrderPlaced`}),{selectableDateList:$,selectedDate:_,handleSelectDate:k,selectedPage:w,setSelectedPage:x,handleSetFirstOrderDate:M}=er(),{pageInfo:g,loading:t,orderHistoryListItems:l}=tr({minifiedView:e,pageSize:h,ordersInMinifiedView:i,selectedDate:_,selectedPage:w,handleSetFirstOrderDate:M});return L("div",{children:[r?s(U,{"aria-label":y.containerTitle,role:"region",title:y.containerTitle,divider:!e,className:e?"account-orders-list-header":""}):null,L("div",{className:C(["account-orders-list",c]),children:[!e&&d?L("div",{className:"account-orders-list__date-select",children:[s("span",{children:y.dateOrderPlaced}),s(Q,{value:_,name:"orderDatePicker",options:$,handleSelect:k})]}):null,t?s(N,{children:Array.from(Array(g==null?void 0:g.pageSize).keys()).map(u=>s(j,{testId:"orderSkeletonLoader",withCard:!1},u))}):s(N,{children:l.length?s(N,{children:l.map((u,b)=>s(rr,{routeTracking:o,routeOrderProduct:f,routeReturnDetails:p,minifiedView:e,item:u,withThumbnails:a,slots:n,children:n!=null&&n.OrdersListAction?s(J,{"data-testid":`ordersListActionSlot_${b}`,name:"OrdersListAction",slot:n==null?void 0:n.OrdersListAction,context:{orderHistoryListItem:u}}):s(F,{minifiedView:e,orderNumber:u.number,orderToken:u.token,routeOrderDetails:A})},b))}):s(W,{isEmpty:!l.length,typeList:"orders",minifiedView:e})}),!e&&(g==null?void 0:g.totalPages)>1?s(R,{totalPages:g==null?void 0:g.totalPages,currentPage:w,onChange:x}):null,e?s(F,{minifiedView:e,routeOrdersList:O}):null]})]})},fr=({className:c,withHeader:r,minifiedView:e,withThumbnails:a,withFilter:d,ordersInMinifiedView:i,pageSize:h,routeOrdersList:O,routeOrderDetails:A,routeReturnDetails:p,routeTracking:o,routeOrderProduct:f,slots:n})=>s("div",{className:C(["account-orders-list",c]),"data-testid":"ordersListId",children:s(ar,{className:c,withHeader:r,minifiedView:e,withThumbnails:a,withFilter:d,ordersInMinifiedView:i,pageSize:h,routeOrdersList:O,routeOrderDetails:A,routeReturnDetails:p,routeTracking:o,routeOrderProduct:f,slots:n})});export{fr as OrdersList,fr as default};
