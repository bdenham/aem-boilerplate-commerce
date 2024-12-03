/*! Copyright 2024 Adobe
All Rights Reserved. */
import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import{g as C,a as u}from"./getStoreConfig.js";const m=e=>({personalEmail:{address:(e==null?void 0:e.email)||""},userAccount:{login:!0},commerce:{commerceScope:{storeCode:(e==null?void 0:e.store_code)||""}}}),d=e=>({userAccount:{logout:!0},commerce:{commerceScope:{storeCode:(e==null?void 0:e.store_code)||""}}}),f=e=>({personalEmail:{address:(e==null?void 0:e.email)||""},userAccount:{updateProfile:e==null?void 0:e.updateProfile},commerce:{commerceScope:{storeCode:(e==null?void 0:e.store_code)||""}}}),h=e=>{document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`},A=async()=>{try{const e=sessionStorage.getItem("storeConfig");let o=(e?JSON.parse(e):{}).customerAccessTokenLifetime;if(!o){const n=await C();sessionStorage.setItem("storeConfig",JSON.stringify(n)),o=(n==null?void 0:n.customerAccessTokenLifetime)||u}return`Max-Age=${o}`}catch(e){return console.error("getCookiesLifetime() Error:",e),`Max-Age=${u}`}};var p=(e=>(e.CREATE_ACCOUNT_EVENT="create-account",e.SIGN_IN="sign-in",e.SIGN_OUT="sign-out",e))(p||{});const a="authContext",g="shopperContext",i={CREATE_ACCOUNT:"create-account",SIGN_IN:"sign-in",SIGN_OUT:"sign-out"};function s(e,t){const o=window.adobeDataLayer||[];o.push({[e]:null}),o.push({[e]:t})}function c(e){(window.adobeDataLayer||[]).push(o=>{const n=o.getState?o.getState():{};o.push({event:e,eventInfo:{...n}})})}function E(e){const t=f(e);s(a,t),c(i.CREATE_ACCOUNT)}function l(e){const t=m(e);s(a,t),s(g,{shopperId:"logged-in"}),c(i.SIGN_IN)}function S(e){const t=d(e);s(a,t),s(g,{shopperId:"guest"}),c(i.SIGN_OUT)}const _=(e,t)=>{const o=sessionStorage.getItem("storeConfig"),r={...o?JSON.parse(o):{},...t};switch(e){case"create-account":E(r);break;case"sign-in":l(r);break;case"sign-out":S(r);break;default:return null}};export{p as E,h as d,A as g,_ as p};