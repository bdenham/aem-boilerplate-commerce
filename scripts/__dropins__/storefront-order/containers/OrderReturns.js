/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as a}from"@dropins/tools/preact-jsx-runtime.js";import{classes as c}from"@dropins/tools/lib.js";import"@dropins/tools/components.js";import{useState as d,useEffect as R}from"@dropins/tools/preact-hooks.js";import"../chunks/ShippingStatusCard.js";import"@dropins/tools/preact-compat.js";import"@dropins/tools/preact.js";import{events as L}from"@dropins/tools/event-bus.js";import{u as O}from"../chunks/useIsMobile.js";import{R as b}from"../chunks/ReturnsListContent.js";import{useText as g}from"@dropins/tools/i18n.js";import"../chunks/returnOrdersHelper.js";import"../chunks/getFormValues.js";import"../chunks/OrderLoaders.js";const w=({orderData:s})=>{const[i,n]=d(s),[u,o]=d([]);return R(()=>{const t=L.on("order/data",e=>{n(e),o(e==null?void 0:e.returns)},{eager:!0});return()=>{t==null||t.off()}},[]),{order:i,orderReturns:u}},v=({slots:s,className:i,orderData:n,withHeader:u,withThumbnails:o,routeReturnDetails:t,routeProductDetails:e,routeTracking:f})=>{const{orderReturns:m}=w({orderData:n}),l=O(),r="fullSizeView",p=g({minifiedViewTitle:`Order.Returns.${r}.returnsList.minifiedViewTitle`,ariaLabelLink:`Order.Returns.${r}.returnsList.ariaLabelLink`,emptyOrdersListMessage:`Order.Returns.${r}.returnsList.emptyOrdersListMessage`,orderNumber:`Order.Returns.${r}.returnsList.orderNumber`,returnNumber:`Order.Returns.${r}.returnsList.returnNumber`,carrier:`Order.Returns.${r}.returnsList.carrier`});return a("div",{className:c(["order-order-returns",i]),children:m.length?a(b,{pageInfo:{pageSize:1,totalPages:1,currentPage:1},minifiedViewKey:r,slots:s,isMobile:l,withOrderNumber:!1,withReturnNumber:!0,orderReturns:m,translations:p,withHeader:u,withThumbnails:o,minifiedView:!1,routeReturnDetails:t,routeProductDetails:e,routeTracking:f,loading:!1}):null})};export{v as OrderReturns,v as default};
