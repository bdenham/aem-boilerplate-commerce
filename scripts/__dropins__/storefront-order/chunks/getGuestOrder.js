/*! Copyright 2024 Adobe
All Rights Reserved. */
import{h}from"./network-error.js";import{f,h as i}from"./fetch-graphql.js";import{a as O}from"./getGuestOrder.graphql.js";import{b as l}from"./transform-customer-orders-returns.js";const T=t=>{var a,r,u,c,m,d;return{email:((r=(a=t==null?void 0:t.data)==null?void 0:a.customer)==null?void 0:r.email)||"",firstname:((c=(u=t==null?void 0:t.data)==null?void 0:u.customer)==null?void 0:c.firstname)||"",lastname:((d=(m=t==null?void 0:t.data)==null?void 0:m.customer)==null?void 0:d.lastname)||""}},g=(t,a)=>{var u,c;if(!((u=t==null?void 0:t.data)!=null&&u.guestOrder))return null;const r=(c=t==null?void 0:t.data)==null?void 0:c.guestOrder;return l(r,a)},k=(t,a)=>{var u,c;if(!((u=t==null?void 0:t.data)!=null&&u.guestOrderByToken))return null;const r=(c=t==null?void 0:t.data)==null?void 0:c.guestOrderByToken;return l(r,a)},E=`
  query GET_CUSTOMER {
    customer {
     firstname
     lastname
     email
    }
  }
`,B=async()=>await f(E,{method:"GET",cache:"force-cache"}).then(t=>{var a;return(a=t.errors)!=null&&a.length?i(t.errors):T(t)}).catch(h),C=async t=>await f(O,{method:"GET",cache:"no-cache",variables:{input:t}}).then(a=>{var r;return(r=a.errors)!=null&&r.length?i(a.errors):g(a)}).catch(h);export{C as a,B as g,k as t};