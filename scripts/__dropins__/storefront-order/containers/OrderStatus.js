/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as o,Fragment as S,jsxs as _}from"@dropins/tools/preact-jsx-runtime.js";import{Slot as z,classes as w}from"@dropins/tools/lib.js";import{Button as P,InLineAlert as $,Modal as B,Card as K,Header as V}from"@dropins/tools/components.js";import{useState as O,useEffect as M,useCallback as k}from"@dropins/tools/preact-hooks.js";import"../chunks/ShippingStatusCard.js";import{useMemo as J}from"@dropins/tools/preact-compat.js";import{u as H}from"../chunks/useGetStoreConfig.js";import"@dropins/tools/preact.js";import{events as q}from"@dropins/tools/event-bus.js";import{c as Q,a as X,r as Y}from"../chunks/confirmCancelOrder.js";import{useText as p,Text as L}from"@dropins/tools/i18n.js";import{C as Z}from"../chunks/OrderLoaders.js";import{f as D}from"../chunks/returnOrdersHelper.js";import{f as v}from"../chunks/formatDateToLocale.js";import{c as b}from"../chunks/capitalizeFirst.js";import{r as G}from"../chunks/redirectTo.js";import{O as ee}from"../chunks/OrderCancelForm.js";import"../chunks/getStoreConfig.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/network-error.js";import"../chunks/getGuestOrder.graphql.js";import"../chunks/transform-customer-orders-returns.js";import"../chunks/convertCase.js";import"../chunks/fragments.js";import"../chunks/getFormValues.js";import"../chunks/requestGuestOrderCancel.js";var y=(t=>(t.CANCEL="CANCEL",t.RETURN="RETURN",t.REORDER="REORDER",t))(y||{});const te=({className:t,orderData:e,slots:c,routeCreateReturn:r,routeOnSuccess:u,onError:a})=>{const l=p({cancel:"Order.OrderStatusContent.actions.cancel",createReturn:"Order.OrderStatusContent.actions.createReturn",createAnotherReturn:"Order.OrderStatusContent.actions.createAnotherReturn",reorder:"Order.OrderStatusContent.actions.reorder"}),i=J(()=>{const n=e==null?void 0:e.availableActions,s=!!(n!=null&&n.length),d=!!(e!=null&&e.returnNumber),m=()=>{G(r,{},e)};return o(S,{children:c!=null&&c.OrderActions?o(z,{"data-testid":"OrderActionsSlot",name:"OrderCanceledActions",slot:c==null?void 0:c.OrderActions,context:e}):o("div",{"data-testid":"availableActionsList",className:w(["order-order-actions__wrapper",["order-order-actions__wrapper--empty",!s]]),children:n==null?void 0:n.map(g=>{switch(g){case y.CANCEL:return o(S,{children:d?null:o(se,{orderRef:(e==null?void 0:e.token)??(e==null?void 0:e.id)})});case y.RETURN:return o(P,{variant:"secondary",onClick:m,children:d?l.createAnotherReturn:l.createReturn});case y.REORDER:return o(S,{children:d?null:o(oe,{orderData:e,onError:a,routeOnSuccess:u,children:l.reorder})})}})})})},[a,e,u,r,c,l]);return o("div",{className:w(["order-order-actions",t]),children:i})},re=({orderData:t})=>{const[e,c]=O(t),[r,u]=O(t==null?void 0:t.status);return M(()=>{const a=q.on("order/data",l=>{c(l),u(l.status)},{eager:!0});return()=>{a==null||a.off()}},[]),{orderStatus:r,order:e}},ne=({enableOrderCancellation:t})=>{const e=p({cancelOrderHeading:"Order.OrderStatusContent.actions.cancel",confirmGuestReturnHeading:"Order.OrderStatusContent.actions.confirmGuestReturn",orderCancelled:"Order.OrderStatusContent.orderCanceled.message",guestRequestReturnMessage:"Order.OrderStatusContent.guestOrderCancellationRequested.messageWithoutDate"}),[c,r]=O(!1),[u,a]=O({heading:"",text:"",status:void 0});M(()=>{const i=new URLSearchParams(window.location.search),n=i.get("order_id")??"",s=i.get("confirmation_key")??"",d=i.get("action")??"";!n||!s||!d||(console.log("enableOrderCancellation",t),t&&d==="cancel"&&Q(n,s).then(()=>{a({heading:e.cancelOrderHeading,text:e.orderCancelled,status:"success"})}).catch(m=>{a({heading:e.cancelOrderHeading,text:m.message,status:"warning"})}),d==="return"&&X(n,s).then(()=>{a({heading:e.confirmGuestReturnHeading,text:e.guestRequestReturnMessage,status:"success"})}).catch(m=>{a({heading:e.confirmGuestReturnHeading,text:m.message,status:"warning"})}))},[]);const l=k(()=>{r(!0);const i=new URL(window.location.href),n=i.searchParams.get("order_id"),s=i.searchParams.get("confirmation_key"),d=i.searchParams.get("action")??"";n&&s&&d&&(i.searchParams.delete("order_id"),i.searchParams.delete("confirmation_key"),i.searchParams.delete("action"),window.history.replaceState({},document.title,i.toString()))},[]);return{orderActionStatus:u,isDismissed:c,onDismiss:l}},ke=({slots:t,orderData:e,className:c,statusTitle:r,status:u,routeCreateReturn:a,onError:l,routeOnSuccess:i})=>{const{orderStatus:n,order:s}=re({orderData:e}),d=H(),{orderActionStatus:m,isDismissed:g,onDismiss:h}=ne({enableOrderCancellation:d==null?void 0:d.orderCancellationEnabled});return _("div",{className:w(["order-order-status",c]),children:[!g&&(m==null?void 0:m.status)!==void 0&&o($,{style:{marginBottom:"1rem"},heading:m.heading,onDismiss:h,description:m.text,type:m.status}),s?o(ce,{title:r,status:u||n,slots:t,orderData:s,routeCreateReturn:a,onError:l,routeOnSuccess:i}):o(Z,{withCard:!1})]})},se=({orderRef:t})=>{const[e,c]=O(!1),r=()=>{c(!0)},u=()=>{c(!1)},a=H(),l=(a==null?void 0:a.orderCancellationReasons)??[],i=n=>n.map((s,d)=>({text:s==null?void 0:s.description,value:d.toString()}));return q.on("order/data",n=>{const s=String(n.status).toLocaleLowerCase();(s==="guest order cancellation requested"||s==="canceled")&&u()}),_(S,{children:[o(P,{variant:"secondary",onClick:r,"data-testid":"cancel-button",children:o(L,{id:"Order.OrderStatusContent.actions.cancel"})}),e&&o(B,{centered:!0,size:"medium",onClose:u,className:"order-order-cancel__modal",title:o("h2",{className:"order-order-cancel__title",children:o(L,{id:"Order.OrderCancelForm.title"})}),"data-testid":"order-cancellation-reasons-modal",children:o(ee,{orderRef:t,cancelReasons:i(l)})})]})},N={pending:"orderPending",shiping:"orderShipped",complete:"orderComplete",processing:"orderProcessing","on hold":"orderOnHold",canceled:"orderCanceled","suspected fraud":"orderSuspectedFraud","payment Review":"orderPaymentReview","order received":"orderReceived","guest order cancellation requested":"guestOrderCancellationRequested","pending payment":"orderPendingPayment",rejected:"orderRejected",authorized:"orderAuthorized","paypal canceled reversal":"orderPaypalCanceledReversal","pending paypal":"orderPendingPaypal","paypal reversed":"orderPaypalReversed",closed:"orderClosed"},ce=({slots:t,title:e,status:c,orderData:r,routeCreateReturn:u,onError:a,routeOnSuccess:l})=>{var T,x,E;const i=!!(r!=null&&r.returnNumber),n=String(c).toLocaleLowerCase(),s=(T=r==null?void 0:r.returns)==null?void 0:T[0],d=(s==null?void 0:s.returnStatus)??"",m=(s==null?void 0:s.createdReturnAt)??"",g=p({message:"Order.OrderStatusContent.orderPlaceholder.message",messageWithoutDate:"Order.OrderStatusContent.orderPlaceholder.messageWithoutDate"}),h=p(`Order.OrderStatusContent.${N[n]}.title`),C=p(`Order.OrderStatusContent.${N[n]}.message`),R=p(`Order.OrderStatusContent.${N[n]}.messageWithoutDate`),f=p({title:`Order.OrderStatusContent.returnStatus.${D(d)}`,returnMessage:"Order.OrderStatusContent.returnMessage"});if(!c)return o("div",{});const I=h!=null&&h.title?h:{title:b(n)},A=C!=null&&C.message?C:g,U=R!=null&&R.messageWithoutDate?R:g,W=r!=null&&r.orderStatusChangeDate?A==null?void 0:A.message.replace("{DATE}",v(r==null?void 0:r.orderStatusChangeDate)):U.messageWithoutDate,F=((E=(x=f==null?void 0:f.returnMessage)==null?void 0:x.replace("{ORDER_CREATE_DATE}",v(r==null?void 0:r.orderDate)))==null?void 0:E.replace("{RETURN_CREATE_DATE}",v(m)))??"",j=i?e??(f.title||b(d)):e??I.title;return _(K,{className:"order-order-status-content",variant:"secondary",children:[o(V,{title:j}),_("div",{className:"order-order-status-content__wrapper",children:[o("div",{className:w(["order-order-status-content__wrapper-description",["order-order-status-content__wrapper-description--actions-slot",!!(t!=null&&t.OrderActions)]]),children:o("p",{children:i?F:W})}),o(te,{orderData:r,slots:t,routeCreateReturn:u,routeOnSuccess:l,onError:a})]})]})},oe=({onError:t,routeOnSuccess:e,orderData:c,children:r})=>{const[u,a]=O(!1),l=k(()=>{a(!0);const i=c==null?void 0:c.number;Y(i).then(({success:n,userInputErrors:s})=>{n&&G(e,{}),s.length&&(t==null||t(s))}).catch(n=>{t==null||t(n.message)}).finally(()=>{a(!1)})},[c,e,t]);return o(P,{type:"button",disabled:u,variant:"secondary",className:"order-reorder",onClick:l,children:r})};export{ke as OrderStatus,ke as default};
