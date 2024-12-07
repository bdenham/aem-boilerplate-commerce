/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as s,Fragment as S,jsxs as A}from"@dropins/tools/preact-jsx-runtime.js";import{Slot as $,classes as _}from"@dropins/tools/lib.js";import{Button as P,InLineAlert as B,Modal as V,Card as K,Header as Q}from"@dropins/tools/components.js";import{useState as C,useEffect as k,useCallback as T}from"@dropins/tools/preact-hooks.js";import"../chunks/ShippingStatusCard.js";import{useMemo as J}from"@dropins/tools/preact-compat.js";import{u as G}from"../chunks/useGetStoreConfig.js";import"@dropins/tools/preact.js";import{events as I}from"@dropins/tools/event-bus.js";import{a as X,c as Y,r as Z}from"../chunks/confirmCancelOrder.js";import{useText as O,Text as M}from"@dropins/tools/i18n.js";import{C as D}from"../chunks/OrderLoaders.js";import{f as ee}from"../chunks/returnOrdersHelper.js";import{f as w}from"../chunks/formatDateToLocale.js";import{c as b}from"../chunks/capitalizeFirst.js";import{r as U}from"../chunks/redirectTo.js";import{O as te}from"../chunks/OrderCancelForm.js";import"../chunks/getStoreConfig.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/network-error.js";import"../chunks/RequestReturnOrderFragment.graphql.js";import"../chunks/GurestOrderFragment.graphql.js";import"../chunks/initialize.js";import"../chunks/getFormValues.js";import"../chunks/requestGuestOrderCancel.js";var y=(t=>(t.CANCEL="CANCEL",t.RETURN="RETURN",t.REORDER="REORDER",t))(y||{});const re=({className:t,orderData:e,slots:n,routeCreateReturn:r,routeOnSuccess:u,onError:i})=>{const d=O({cancel:"Order.OrderStatusContent.actions.cancel",createReturn:"Order.OrderStatusContent.actions.createReturn",createAnotherReturn:"Order.OrderStatusContent.actions.createAnotherReturn",reorder:"Order.OrderStatusContent.actions.reorder"}),l=J(()=>{const c=e==null?void 0:e.availableActions,o=!!(c!=null&&c.length),a=!!(e!=null&&e.returnNumber),m=()=>{U(r,{},e)};return s(S,{children:n!=null&&n.OrderActions?s($,{"data-testid":"OrderActionsSlot",name:"OrderCanceledActions",slot:n==null?void 0:n.OrderActions,context:e}):s("div",{"data-testid":"availableActionsList",className:_(["order-order-actions__wrapper",["order-order-actions__wrapper--empty",!o]]),children:c==null?void 0:c.map(p=>{switch(p){case y.CANCEL:return s(S,{children:a?null:s(ce,{orderRef:(e==null?void 0:e.token)??(e==null?void 0:e.id)})});case y.RETURN:return s(P,{variant:"secondary",onClick:m,children:a?d.createAnotherReturn:d.createReturn});case y.REORDER:return s(S,{children:a?null:s(ie,{orderData:e,onError:i,routeOnSuccess:u,children:d.reorder})})}})})})},[i,e,u,r,n,d]);return s("div",{className:_(["order-order-actions",t]),children:l})},ne=({orderData:t})=>{const[e,n]=C(t),[r,u]=C(t==null?void 0:t.status);return k(()=>{const i=I.on("order/data",d=>{n(d),u(d.status)},{eager:!0});return()=>{i==null||i.off()}},[]),{orderStatus:r,order:e}},H=t=>{const e=new URL(window.location.href);t.forEach(n=>{e.searchParams.has(n)&&e.searchParams.delete(n)}),window.history.replaceState({},document.title,e.toString())},se=({enableOrderCancellation:t})=>{const e=O({cancelOrderHeading:"Order.OrderStatusContent.actions.cancel",confirmGuestReturnHeading:"Order.OrderStatusContent.actions.confirmGuestReturn",orderCancelled:"Order.OrderStatusContent.orderCanceled.message",guestRequestReturnMessage:"Order.OrderStatusContent.actions.confirmGuestReturnMessage"}),[n,r]=C(!1),[u,i]=C(!1),[d,l]=C({heading:"",text:"",status:void 0}),c=T(()=>{r(!0),H(["order_id","confirmation_key","action"])},[]),o=T((a,m,p)=>{l({heading:a,text:m,status:p}),H(["action"])},[]);return k(()=>{const a=new URLSearchParams(window.location.search),m=a.get("order_id")??"",p=a.get("confirmation_key")??"",g=a.get("action")??"";u||!m||!p||!g||(t&&g==="cancel"&&(i(!0),X(m,p).then(()=>{l({heading:e.cancelOrderHeading,text:e.orderCancelled,status:"success"})}).catch(h=>{l({heading:e.cancelOrderHeading,text:h.message,status:"warning"})})),g==="return"&&(i(!0),Y(m,p).then(()=>{l({heading:e.confirmGuestReturnHeading,text:e.guestRequestReturnMessage,status:"success"})}).catch(h=>{l({heading:e.confirmGuestReturnHeading,text:h.message,status:"warning"})})))},[t,e,o,u]),{orderActionStatus:d,isDismissed:n,onDismiss:c}},He=({slots:t,orderData:e,className:n,statusTitle:r,status:u,routeCreateReturn:i,onError:d,routeOnSuccess:l})=>{const{orderStatus:c,order:o}=ne({orderData:e}),a=G(),{orderActionStatus:m,isDismissed:p,onDismiss:g}=se({enableOrderCancellation:a==null?void 0:a.orderCancellationEnabled});return A("div",{className:_(["order-order-status",n]),children:[!p&&(m==null?void 0:m.status)!==void 0?s(B,{style:{marginBottom:"1rem"},heading:m.heading,onDismiss:g,description:m.text,type:m.status}):null,o?s(oe,{title:r,status:u||c,slots:t,orderData:o,routeCreateReturn:i,onError:d,routeOnSuccess:l}):s(D,{withCard:!1})]})},ce=({orderRef:t})=>{const[e,n]=C(!1),r=()=>{n(!0)},u=()=>{n(!1)},i=G(),d=(i==null?void 0:i.orderCancellationReasons)??[],l=c=>c.map((o,a)=>({text:o==null?void 0:o.description,value:a.toString()}));return I.on("order/data",c=>{const o=String(c.status).toLocaleLowerCase();(o==="guest order cancellation requested"||o==="canceled")&&u()}),A(S,{children:[s(P,{variant:"secondary",onClick:r,"data-testid":"cancel-button",children:s(M,{id:"Order.OrderStatusContent.actions.cancel"})}),e&&s(V,{centered:!0,size:"medium",onClose:u,className:"order-order-cancel__modal",title:s("h2",{className:"order-order-cancel__title",children:s(M,{id:"Order.OrderCancelForm.title"})}),"data-testid":"order-cancellation-reasons-modal",children:s(te,{orderRef:t,cancelReasons:l(d)})})]})},N={pending:"orderPending",shiping:"orderShipped",complete:"orderComplete",processing:"orderProcessing","on hold":"orderOnHold",canceled:"orderCanceled","suspected fraud":"orderSuspectedFraud","payment Review":"orderPaymentReview","order received":"orderReceived","guest order cancellation requested":"guestOrderCancellationRequested","pending payment":"orderPendingPayment",rejected:"orderRejected",authorized:"orderAuthorized","paypal canceled reversal":"orderPaypalCanceledReversal","pending paypal":"orderPendingPaypal","paypal reversed":"orderPaypalReversed",closed:"orderClosed"},oe=({slots:t,title:e,status:n,orderData:r,routeCreateReturn:u,onError:i,routeOnSuccess:d})=>{var x,E,L;const l=!!(r!=null&&r.returnNumber),c=String(n).toLocaleLowerCase(),o=(x=r==null?void 0:r.returns)==null?void 0:x[0],a=(o==null?void 0:o.returnStatus)??"",m=(o==null?void 0:o.createdReturnAt)??"",p=O({message:"Order.OrderStatusContent.orderPlaceholder.message",messageWithoutDate:"Order.OrderStatusContent.orderPlaceholder.messageWithoutDate"}),g=O(`Order.OrderStatusContent.${N[c]}.title`),h=O(`Order.OrderStatusContent.${N[c]}.message`),R=O(`Order.OrderStatusContent.${N[c]}.messageWithoutDate`),f=O({title:`Order.OrderStatusContent.returnStatus.${ee(a)}`,returnMessage:"Order.OrderStatusContent.returnMessage"});if(!n)return s("div",{});const q=g!=null&&g.title?g:{title:b(c)},v=h!=null&&h.message?h:p,F=R!=null&&R.messageWithoutDate?R:p,W=r!=null&&r.orderStatusChangeDate?v==null?void 0:v.message.replace("{DATE}",w(r==null?void 0:r.orderStatusChangeDate)):F.messageWithoutDate,j=((L=(E=f==null?void 0:f.returnMessage)==null?void 0:E.replace("{ORDER_CREATE_DATE}",w(r==null?void 0:r.orderDate)))==null?void 0:L.replace("{RETURN_CREATE_DATE}",w(m)))??"",z=l?e??(f.title||b(a)):e??q.title;return A(K,{className:"order-order-status-content",variant:"secondary",children:[s(Q,{title:z}),A("div",{className:"order-order-status-content__wrapper",children:[s("div",{className:_(["order-order-status-content__wrapper-description",["order-order-status-content__wrapper-description--actions-slot",!!(t!=null&&t.OrderActions)]]),children:s("p",{children:l?j:W})}),s(re,{orderData:r,slots:t,routeCreateReturn:u,routeOnSuccess:d,onError:i})]})]})},ie=({onError:t,routeOnSuccess:e,orderData:n,children:r})=>{const[u,i]=C(!1),d=T(()=>{i(!0);const l=n==null?void 0:n.number;Z(l).then(({success:c,userInputErrors:o})=>{c&&U(e,{}),o.length&&(t==null||t(o))}).catch(c=>{t==null||t(c.message)}).finally(()=>{i(!1)})},[n,e,t]);return s(P,{type:"button",disabled:u,variant:"secondary",className:"order-reorder",onClick:d,children:r})};export{He as OrderStatus,He as default};
