/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as o,Fragment as S,jsxs as _}from"@dropins/tools/preact-jsx-runtime.js";import{Slot as z,classes as w}from"@dropins/tools/lib.js";import{Button as P,InLineAlert as $,Modal as B,Card as K,Header as V}from"@dropins/tools/components.js";import{useState as O,useEffect as M,useCallback as k}from"@dropins/tools/preact-hooks.js";import"../chunks/ShippingStatusCard.js";import{useMemo as J}from"@dropins/tools/preact-compat.js";import{u as H}from"../chunks/useGetStoreConfig.js";import"@dropins/tools/preact.js";import{events as q}from"@dropins/tools/event-bus.js";import{c as Q,a as X,r as Y}from"../chunks/confirmCancelOrder.js";import{useText as p,Text as L}from"@dropins/tools/i18n.js";import{C as Z}from"../chunks/OrderLoaders.js";import{f as D}from"../chunks/returnOrdersHelper.js";import{f as v}from"../chunks/formatDateToLocale.js";import{c as b}from"../chunks/capitalizeFirst.js";import{r as G}from"../chunks/redirectTo.js";import{O as ee}from"../chunks/OrderCancelForm.js";import"../chunks/getStoreConfig.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/network-error.js";import"../chunks/fragments.js";import"../chunks/getGuestOrder.graphql.js";import"../chunks/transform-customer-orders-returns.js";import"../chunks/convertCase.js";import"../chunks/getFormValues.js";import"../chunks/requestGuestOrderCancel.js";var y=(t=>(t.CANCEL="CANCEL",t.RETURN="RETURN",t.REORDER="REORDER",t))(y||{});const te=({className:t,orderData:e,slots:c,routeCreateReturn:r,routeOnSuccess:u,onError:i})=>{const d=p({cancel:"Order.OrderStatusContent.actions.cancel",createReturn:"Order.OrderStatusContent.actions.createReturn",createAnotherReturn:"Order.OrderStatusContent.actions.createAnotherReturn",reorder:"Order.OrderStatusContent.actions.reorder"}),a=J(()=>{const n=e==null?void 0:e.availableActions,s=!!(n!=null&&n.length),l=!!(e!=null&&e.returnNumber),m=()=>{G(r,{},e)};return o(S,{children:c!=null&&c.OrderActions?o(z,{"data-testid":"OrderActionsSlot",name:"OrderCanceledActions",slot:c==null?void 0:c.OrderActions,context:e}):o("div",{"data-testid":"availableActionsList",className:w(["order-order-actions__wrapper",["order-order-actions__wrapper--empty",!s]]),children:n==null?void 0:n.map(g=>{switch(g){case y.CANCEL:return o(S,{children:l?null:o(se,{orderRef:(e==null?void 0:e.token)??(e==null?void 0:e.id)})});case y.RETURN:return o(P,{variant:"secondary",onClick:m,children:l?d.createAnotherReturn:d.createReturn});case y.REORDER:return o(S,{children:l?null:o(oe,{orderData:e,onError:i,routeOnSuccess:u,children:d.reorder})})}})})})},[i,e,u,r,c,d]);return o("div",{className:w(["order-order-actions",t]),children:a})},re=({orderData:t})=>{const[e,c]=O(t),[r,u]=O(t==null?void 0:t.status);return M(()=>{const i=q.on("order/data",d=>{c(d),u(d.status)},{eager:!0});return()=>{i==null||i.off()}},[]),{orderStatus:r,order:e}},ne=({enableOrderCancellation:t})=>{const e=p({cancelOrderHeading:"Order.OrderStatusContent.actions.cancel",confirmGuestReturnHeading:"Order.OrderStatusContent.actions.confirmGuestReturn",orderCancelled:"Order.OrderStatusContent.orderCanceled.message",guestRequestReturnMessage:"Order.OrderStatusContent.guestOrderCancellationRequested.messageWithoutDate"}),[c,r]=O(!1),[u,i]=O({heading:"",text:"",status:void 0}),d=k(()=>{r(!0);const a=new URL(window.location.href),n=a.searchParams.get("order_id"),s=a.searchParams.get("confirmation_key"),l=a.searchParams.get("action")??"";n&&s&&l&&(a.searchParams.delete("order_id"),a.searchParams.delete("confirmation_key"),a.searchParams.delete("action"),window.history.replaceState({},document.title,a.toString()))},[]);return M(()=>{const a=new URLSearchParams(window.location.search),n=a.get("order_id")??"",s=a.get("confirmation_key")??"",l=a.get("action")??"";!n||!s||!l||(console.log("enableOrderCancellation",t),t&&l==="cancel"&&Q(n,s).then(()=>{i({heading:e.cancelOrderHeading,text:e.orderCancelled,status:"success"})}).catch(m=>{i({heading:e.cancelOrderHeading,text:m.message,status:"warning"})}),l==="return"&&X(n,s).then(()=>{i({heading:e.confirmGuestReturnHeading,text:e.guestRequestReturnMessage,status:"success"})}).catch(m=>{i({heading:e.confirmGuestReturnHeading,text:m.message,status:"warning"})}))},[t,e,d]),{orderActionStatus:u,isDismissed:c,onDismiss:d}},ke=({slots:t,orderData:e,className:c,statusTitle:r,status:u,routeCreateReturn:i,onError:d,routeOnSuccess:a})=>{const{orderStatus:n,order:s}=re({orderData:e}),l=H(),{orderActionStatus:m,isDismissed:g,onDismiss:h}=ne({enableOrderCancellation:l==null?void 0:l.orderCancellationEnabled});return _("div",{className:w(["order-order-status",c]),children:[!g&&(m==null?void 0:m.status)!==void 0&&o($,{style:{marginBottom:"1rem"},heading:m.heading,onDismiss:h,description:m.text,type:m.status}),s?o(ce,{title:r,status:u||n,slots:t,orderData:s,routeCreateReturn:i,onError:d,routeOnSuccess:a}):o(Z,{withCard:!1})]})},se=({orderRef:t})=>{const[e,c]=O(!1),r=()=>{c(!0)},u=()=>{c(!1)},i=H(),d=(i==null?void 0:i.orderCancellationReasons)??[],a=n=>n.map((s,l)=>({text:s==null?void 0:s.description,value:l.toString()}));return q.on("order/data",n=>{const s=String(n.status).toLocaleLowerCase();(s==="guest order cancellation requested"||s==="canceled")&&u()}),_(S,{children:[o(P,{variant:"secondary",onClick:r,"data-testid":"cancel-button",children:o(L,{id:"Order.OrderStatusContent.actions.cancel"})}),e&&o(B,{centered:!0,size:"medium",onClose:u,className:"order-order-cancel__modal",title:o("h2",{className:"order-order-cancel__title",children:o(L,{id:"Order.OrderCancelForm.title"})}),"data-testid":"order-cancellation-reasons-modal",children:o(ee,{orderRef:t,cancelReasons:a(d)})})]})},N={pending:"orderPending",shiping:"orderShipped",complete:"orderComplete",processing:"orderProcessing","on hold":"orderOnHold",canceled:"orderCanceled","suspected fraud":"orderSuspectedFraud","payment Review":"orderPaymentReview","order received":"orderReceived","guest order cancellation requested":"guestOrderCancellationRequested","pending payment":"orderPendingPayment",rejected:"orderRejected",authorized:"orderAuthorized","paypal canceled reversal":"orderPaypalCanceledReversal","pending paypal":"orderPendingPaypal","paypal reversed":"orderPaypalReversed",closed:"orderClosed"},ce=({slots:t,title:e,status:c,orderData:r,routeCreateReturn:u,onError:i,routeOnSuccess:d})=>{var T,x,E;const a=!!(r!=null&&r.returnNumber),n=String(c).toLocaleLowerCase(),s=(T=r==null?void 0:r.returns)==null?void 0:T[0],l=(s==null?void 0:s.returnStatus)??"",m=(s==null?void 0:s.createdReturnAt)??"",g=p({message:"Order.OrderStatusContent.orderPlaceholder.message",messageWithoutDate:"Order.OrderStatusContent.orderPlaceholder.messageWithoutDate"}),h=p(`Order.OrderStatusContent.${N[n]}.title`),C=p(`Order.OrderStatusContent.${N[n]}.message`),R=p(`Order.OrderStatusContent.${N[n]}.messageWithoutDate`),f=p({title:`Order.OrderStatusContent.returnStatus.${D(l)}`,returnMessage:"Order.OrderStatusContent.returnMessage"});if(!c)return o("div",{});const I=h!=null&&h.title?h:{title:b(n)},A=C!=null&&C.message?C:g,U=R!=null&&R.messageWithoutDate?R:g,W=r!=null&&r.orderStatusChangeDate?A==null?void 0:A.message.replace("{DATE}",v(r==null?void 0:r.orderStatusChangeDate)):U.messageWithoutDate,F=((E=(x=f==null?void 0:f.returnMessage)==null?void 0:x.replace("{ORDER_CREATE_DATE}",v(r==null?void 0:r.orderDate)))==null?void 0:E.replace("{RETURN_CREATE_DATE}",v(m)))??"",j=a?e??(f.title||b(l)):e??I.title;return _(K,{className:"order-order-status-content",variant:"secondary",children:[o(V,{title:j}),_("div",{className:"order-order-status-content__wrapper",children:[o("div",{className:w(["order-order-status-content__wrapper-description",["order-order-status-content__wrapper-description--actions-slot",!!(t!=null&&t.OrderActions)]]),children:o("p",{children:a?F:W})}),o(te,{orderData:r,slots:t,routeCreateReturn:u,routeOnSuccess:d,onError:i})]})]})},oe=({onError:t,routeOnSuccess:e,orderData:c,children:r})=>{const[u,i]=O(!1),d=k(()=>{i(!0);const a=c==null?void 0:c.number;Y(a).then(({success:n,userInputErrors:s})=>{n&&G(e,{}),s.length&&(t==null||t(s))}).catch(n=>{t==null||t(n.message)}).finally(()=>{i(!1)})},[c,e,t]);return o(P,{type:"button",disabled:u,variant:"secondary",className:"order-reorder",onClick:d,children:r})};export{ke as OrderStatus,ke as default};
