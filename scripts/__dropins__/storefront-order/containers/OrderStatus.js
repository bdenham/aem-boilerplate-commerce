/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as o,Fragment as S,jsxs as _}from"@dropins/tools/preact-jsx-runtime.js";import{Slot as G,classes as w}from"@dropins/tools/lib.js";import{Button as P,InLineAlert as H,Modal as K,Card as V,Header as B}from"@dropins/tools/components.js";import{useState as g,useEffect as k,useCallback as M}from"@dropins/tools/preact-hooks.js";import"../chunks/ShippingStatusCard.js";import{useMemo as J}from"@dropins/tools/preact-compat.js";import{u as I}from"../chunks/useGetStoreConfig.js";import"@dropins/tools/preact.js";import{events as U}from"@dropins/tools/event-bus.js";import{c as Q,a as X,r as Y}from"../chunks/confirmCancelOrder.js";import{useText as p,Text as L}from"@dropins/tools/i18n.js";import{C as Z}from"../chunks/OrderLoaders.js";import{f as D}from"../chunks/returnOrdersHelper.js";import{f as v}from"../chunks/formatDateToLocale.js";import{c as b}from"../chunks/capitalizeFirst.js";import{r as F}from"../chunks/redirectTo.js";import{O as ee}from"../chunks/OrderCancelForm.js";import"../chunks/getStoreConfig.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/network-error.js";import"../chunks/fragments.js";import"../chunks/getGuestOrder.graphql.js";import"../chunks/transform-customer-orders-returns.js";import"../chunks/convertCase.js";import"../chunks/getFormValues.js";import"../chunks/requestGuestOrderCancel.js";var y=(t=>(t.CANCEL="CANCEL",t.RETURN="RETURN",t.REORDER="REORDER",t))(y||{});const te=({className:t,orderData:e,slots:c,routeCreateReturn:r,routeOnSuccess:u,onError:i})=>{const l=p({cancel:"Order.OrderStatusContent.actions.cancel",createReturn:"Order.OrderStatusContent.actions.createReturn",createAnotherReturn:"Order.OrderStatusContent.actions.createAnotherReturn",reorder:"Order.OrderStatusContent.actions.reorder"}),a=J(()=>{const n=e==null?void 0:e.availableActions,s=!!(n!=null&&n.length),d=!!(e!=null&&e.returnNumber),m=()=>{F(r,{},e)};return o(S,{children:c!=null&&c.OrderActions?o(G,{"data-testid":"OrderActionsSlot",name:"OrderCanceledActions",slot:c==null?void 0:c.OrderActions,context:e}):o("div",{"data-testid":"availableActionsList",className:w(["order-order-actions__wrapper",["order-order-actions__wrapper--empty",!s]]),children:n==null?void 0:n.map(h=>{switch(h){case y.CANCEL:return o(S,{children:d?null:o(se,{orderRef:(e==null?void 0:e.token)??(e==null?void 0:e.id)})});case y.RETURN:return o(P,{variant:"secondary",onClick:m,children:d?l.createAnotherReturn:l.createReturn});case y.REORDER:return o(S,{children:d?null:o(oe,{orderData:e,onError:i,routeOnSuccess:u,children:l.reorder})})}})})})},[i,e,u,r,c,l]);return o("div",{className:w(["order-order-actions",t]),children:a})},re=({orderData:t})=>{const[e,c]=g(t),[r,u]=g(t==null?void 0:t.status);return k(()=>{const i=U.on("order/data",l=>{c(l),u(l.status)},{eager:!0});return()=>{i==null||i.off()}},[]),{orderStatus:r,order:e}},ne=({enableOrderCancellation:t})=>{const e=p({orderCancelled:"Order.OrderStatusContent.orderCanceled.message"}),[c,r]=g(!1),[u,i]=g({text:"",status:void 0});k(()=>{const a=new URLSearchParams(window.location.search),n=a.get("order_id")??"",s=a.get("confirmation_key")??"",d=a.get("action")??"";!n||!s||!d||(t&&d==="cancel"&&Q(n,s).then(()=>{i({text:e.orderCancelled,status:"success"})}).catch(m=>{i({text:m.message,status:"warning"})}),d==="return"&&X(n,s).then(()=>{i({text:e.orderCancelled,status:"success"})}).catch(m=>{i({text:m.message,status:"warning"})}))},[t,e.orderCancelled]);const l=M(()=>{r(!0);const a=new URL(window.location.href),n=a.searchParams.get("order_id"),s=a.searchParams.get("confirmation_key"),d=a.searchParams.get("action")??"";n&&s&&d&&(a.searchParams.delete("order_id"),a.searchParams.delete("confirmation_key"),a.searchParams.delete("action"),window.history.replaceState({},document.title,a.toString()))},[]);return{orderActionStatus:u,isDismissed:c,onDismiss:l}},Me=({slots:t,orderData:e,className:c,statusTitle:r,status:u,routeCreateReturn:i,onError:l,routeOnSuccess:a})=>{const{orderStatus:n,order:s}=re({orderData:e}),d=I(),{orderActionStatus:m,isDismissed:h,onDismiss:C}=ne({enableOrderCancellation:d==null?void 0:d.orderCancellationEnabled}),O=p({cancelOrder:"Order.OrderStatusContent.actions.cancel"});return _("div",{className:w(["order-order-status",c]),children:[!h&&(m==null?void 0:m.status)!==void 0&&o(H,{heading:O.cancelOrder,onDismiss:C,description:m.text,type:m.status}),s?o(ce,{title:r,status:u||n,slots:t,orderData:s,routeCreateReturn:i,onError:l,routeOnSuccess:a}):o(Z,{withCard:!1})]})},se=({orderRef:t})=>{const[e,c]=g(!1),r=()=>{c(!0)},u=()=>{c(!1)},i=I(),l=(i==null?void 0:i.orderCancellationReasons)??[],a=n=>n.map((s,d)=>({text:s==null?void 0:s.description,value:d.toString()}));return U.on("order/data",n=>{const s=String(n.status).toLocaleLowerCase();(s==="guest order cancellation requested"||s==="canceled")&&u()}),_(S,{children:[o(P,{variant:"secondary",onClick:r,"data-testid":"cancel-button",children:o(L,{id:"Order.OrderStatusContent.actions.cancel"})}),e&&o(K,{centered:!0,size:"medium",onClose:u,className:"order-order-cancel__modal",title:o("h2",{className:"order-order-cancel__title",children:o(L,{id:"Order.OrderCancelForm.title"})}),"data-testid":"order-cancellation-reasons-modal",children:o(ee,{orderRef:t,cancelReasons:a(l)})})]})},N={pending:"orderPending",shiping:"orderShipped",complete:"orderComplete",processing:"orderProcessing","on hold":"orderOnHold",canceled:"orderCanceled","suspected fraud":"orderSuspectedFraud","payment Review":"orderPaymentReview","order received":"orderReceived","guest order cancellation requested":"guestOrderCancellationRequested","pending payment":"orderPendingPayment",rejected:"orderRejected",authorized:"orderAuthorized","paypal canceled reversal":"orderPaypalCanceledReversal","pending paypal":"orderPendingPaypal","paypal reversed":"orderPaypalReversed",closed:"orderClosed"},ce=({slots:t,title:e,status:c,orderData:r,routeCreateReturn:u,onError:i,routeOnSuccess:l})=>{var T,x,E;const a=!!(r!=null&&r.returnNumber),n=String(c).toLocaleLowerCase(),s=(T=r==null?void 0:r.returns)==null?void 0:T[0],d=(s==null?void 0:s.returnStatus)??"",m=(s==null?void 0:s.createdReturnAt)??"",h=p({message:"Order.OrderStatusContent.orderPlaceholder.message",messageWithoutDate:"Order.OrderStatusContent.orderPlaceholder.messageWithoutDate"}),C=p(`Order.OrderStatusContent.${N[n]}.title`),O=p(`Order.OrderStatusContent.${N[n]}.message`),f=p(`Order.OrderStatusContent.${N[n]}.messageWithoutDate`),R=p({title:`Order.OrderStatusContent.returnStatus.${D(d)}`,returnMessage:"Order.OrderStatusContent.returnMessage"});if(!c)return o("div",{});const W=C!=null&&C.title?C:{title:b(n)},A=O!=null&&O.message?O:h,j=f!=null&&f.messageWithoutDate?f:h,z=r!=null&&r.orderStatusChangeDate?A==null?void 0:A.message.replace("{DATE}",v(r==null?void 0:r.orderStatusChangeDate)):j.messageWithoutDate,$=((E=(x=R==null?void 0:R.returnMessage)==null?void 0:x.replace("{ORDER_CREATE_DATE}",v(r==null?void 0:r.orderDate)))==null?void 0:E.replace("{RETURN_CREATE_DATE}",v(m)))??"",q=a?e??(R.title||b(d)):e??W.title;return _(V,{className:"order-order-status-content",variant:"secondary",children:[o(B,{title:q}),_("div",{className:"order-order-status-content__wrapper",children:[o("div",{className:w(["order-order-status-content__wrapper-description",["order-order-status-content__wrapper-description--actions-slot",!!(t!=null&&t.OrderActions)]]),children:o("p",{children:a?$:z})}),o(te,{orderData:r,slots:t,routeCreateReturn:u,routeOnSuccess:l,onError:i})]})]})},oe=({onError:t,routeOnSuccess:e,orderData:c,children:r})=>{const[u,i]=g(!1),l=M(()=>{i(!0);const a=c==null?void 0:c.number;Y(a).then(({success:n,userInputErrors:s})=>{n&&F(e,{}),s.length&&(t==null||t(s))}).catch(n=>{t==null||t(n.message)}).finally(()=>{i(!1)})},[c,e,t]);return o(P,{type:"button",disabled:u,variant:"secondary",className:"order-reorder",onClick:l,children:r})};export{Me as OrderStatus,Me as default};
