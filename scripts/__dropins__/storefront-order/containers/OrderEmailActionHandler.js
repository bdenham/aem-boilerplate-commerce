/*! Copyright 2024 Adobe
All Rights Reserved. */
import{u as i}from"../chunks/useConfirmCancelOrder.js";import"@dropins/tools/preact-hooks.js";import"@dropins/tools/preact.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/preact-jsx-runtime.js";import"@dropins/tools/components.js";import"@dropins/tools/lib.js";import{u as n}from"../chunks/useGetStoreConfig.js";import"../chunks/getGuestOrder.graphql.js";import"../chunks/transform-customer-orders-returns.js";import"../chunks/convertCase.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"@dropins/tools/i18n.js";import"../chunks/getStoreConfig.js";const x=({routeRedirect:o})=>{const r=n(),{confirmOrderCancellation:t}=i({enableOrderCancellation:r==null?void 0:r.orderCancellationEnabled}),{confirmReturnRequest:e}=useConfirmReturnRequest({});return o({confirmOrderCancellation:t,confirmReturnRequest:e}),null};export{x as OrderEmailActionHandler,x as default};
