/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsxs as F,jsx as d,Fragment as ue}from"@dropins/tools/preact-jsx-runtime.js";import{classes as re,Slot as me}from"@dropins/tools/lib.js";import{F as fe,d as he,g as ge,n as D,C as we}from"../chunks/CustomerInformationCard.js";import*as E from"@dropins/tools/preact-compat.js";import{Card as Q,Header as X,InLineAlert as te,InputPassword as R,Button as H}from"@dropins/tools/components.js";import{useState as m,useEffect as B,useCallback as C,useMemo as G}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/event-bus.js";import{a as Ce,u as Pe,g as pe,c as ee,b as be}from"../chunks/updateCustomer.js";import{useText as x}from"@dropins/tools/i18n.js";import{c as Ve}from"../chunks/removeCustomerAddress.js";import"@dropins/tools/preact.js";import"@dropins/tools/fetch-graphql.js";const Ee=e=>E.createElement("svg",{id:"Icon_Warning_Base",width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},E.createElement("g",{clipPath:"url(#clip0_841_1324)"},E.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.9949 2.30237L0.802734 21.6977H23.1977L11.9949 2.30237Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),E.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M12.4336 10.5504L12.3373 14.4766H11.6632L11.5669 10.5504V9.51273H12.4336V10.5504ZM11.5883 18.2636V17.2687H12.4229V18.2636H11.5883Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),E.createElement("defs",null,E.createElement("clipPath",{id:"clip0_841_1324"},E.createElement("rect",{width:24,height:21,fill:"white",transform:"translate(0 1.5)"})))),ye=e=>E.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},E.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),E.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M6.75 12.762L10.2385 15.75L17.25 9",stroke:"currentColor"})),Ie=e=>E.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},E.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),E.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.75 5.88423V4.75H12.25V5.88423L12.0485 13.0713H11.9515L11.75 5.88423ZM11.7994 18.25V16.9868H12.2253V18.25H11.7994Z",stroke:"currentColor"})),Le=()=>{const[e,t]=m(null);return B(()=>{const a=sessionStorage.getItem("accountStoreConfig"),r=a?JSON.parse(a):null;if(r){const{minLength:n,requiredCharacterClasses:s}=r;t({minLength:n,requiredCharacterClasses:s})}else Ce().then(n=>{if(n){const{minLength:s,requiredCharacterClasses:P}=n;sessionStorage.setItem("accountStoreConfig",JSON.stringify(n)),t({minLength:s,requiredCharacterClasses:P})}})},[]),{passwordConfigs:e}},ve=({currentPassword:e,newPassword:t,confirmPassword:a,translations:r})=>{let n={...K};const s=!e.length&&!t.length&&!a.length,P=e.length&&t!==a;return s?(n={...n,currentPassword:r.requiredFieldError,newPassword:r.requiredFieldError,confirmPassword:r.requiredFieldError},{isValid:!1,errors:n}):e.length?t.length?a.length?P?(n={...n,currentPassword:"",newPassword:"",confirmPassword:r.passwordMismatch},{isValid:!1,errors:n}):{isValid:!0,errors:n}:(n={...n,confirmPassword:r.requiredFieldError},{isValid:!1,errors:n}):(n={...n,newPassword:r.requiredFieldError},{isValid:!1,errors:n}):(n={...n,currentPassword:r.requiredFieldError},{isValid:!1,errors:n})},ne=(e,t)=>{if(t<=1)return!0;const a=/[0-9]/.test(e)?1:0,r=/[a-z]/.test(e)?1:0,n=/[A-Z]/.test(e)?1:0,s=/[^a-zA-Z0-9\s]/.test(e)?1:0;return a+r+n+s>=t},K={currentPassword:"",newPassword:"",confirmPassword:""},Fe=({passwordConfigs:e,handleSetInLineAlert:t,handleHideChangePassword:a})=>{const r=x({requiredFieldError:"Account.FormText.requiredFieldError",passwordMismatch:"Account.minifiedView.CustomerInformation.changePassword.passwordValidationMessage.passwordMismatch",incorrectCurrentPassword:"Account.minifiedView.CustomerInformation.changePassword.passwordValidationMessage.incorrectCurrentPassword",passwordUpdateMessage:"Account.minifiedView.CustomerInformation.changePassword.passwordValidationMessage.passwordUpdateMessage"}),[n,s]=m(!1),[P,l]=m(!1),[c,p]=m(""),[h,u]=m(""),[A,y]=m(""),[I,b]=m({currentPassword:"",newPassword:"",confirmPassword:""}),i=C(()=>{a(()=>{t({}),b(K)})},[a,t]),_=C(f=>{p(f),b(V=>({...V,currentPassword:f?"":r.requiredFieldError}))},[r]),w=C(f=>{u(f),b(V=>({...V,newPassword:f?"":r.requiredFieldError}))},[r]),U=C(f=>{y(f),b(V=>({...V,confirmPassword:f?"":r.requiredFieldError}))},[r]),M=C(f=>{const{name:V,value:Z}=f==null?void 0:f.target;b(L=>({...L,[V]:Z?"":r.requiredFieldError}))},[r]),T=C(()=>{const{isValid:f,errors:V}=ve({currentPassword:c,newPassword:h,confirmPassword:A,translations:r});return b(V),f},[c,h,A,r]),O=C(f=>{f.preventDefault(),l(!0);const V=(e==null?void 0:e.requiredCharacterClasses)??0,Z=(e==null?void 0:e.minLength)??1;if(!T()){s(!0),l(!1);return}if(!ne(h,V)||Z>(h==null?void 0:h.length)){s(!0),l(!1);return}Pe({currentPassword:c,newPassword:h}).then(L=>{if(!(L!=null&&L.length)){l(!1);return}p(""),u(""),y(""),b(K),s(!1),t({type:"success",text:r.passwordUpdateMessage})}).catch(L=>{L.message==="Invalid login or password."&&t({type:"error",text:r.incorrectCurrentPassword}),L.message==="The account is locked."&&t({type:"error",text:L.message})}),l(!1)},[e,T,h,c,t,r]);return{hideChangePassword:i,handleOnBlurPassword:M,handleConfirmPasswordChange:U,handleNewPasswordChange:w,handleCurrentPasswordChange:_,mutationChangePassword:O,currentPassword:c,newPassword:h,confirmPassword:A,passwordErrors:I,submitLoading:P,isClickSubmit:n}},_e=({passwordConfigs:e,isClickSubmit:t,password:a})=>{const r=x({messageLengthPassword:"Account.minifiedView.CustomerInformation.changePassword.passwordValidationMessage.messageLengthPassword"}),[n,s]=m("pending");B(()=>{if(!e)return;const l=ne(a,e.requiredCharacterClasses);t&&a.length>0?s(l?"success":"error"):t&&a.length===0?s("pending"):s(l?"success":"pending")},[t,e,a]);const P=G(()=>{var c;if(!e)return;const l={status:"pending",icon:"pending",message:(c=r.messageLengthPassword)==null?void 0:c.replace("{minLength}",`${e.minLength}`)};return a.length&&a.length>=e.minLength?{...l,icon:"success",status:"success"}:a.length&&a.length<e.minLength?t?{...l,icon:"error",status:"error"}:{...l,icon:"pending",status:"pending"}:l},[e,r.messageLengthPassword,a==null?void 0:a.length,t]);return{isValidUniqueSymbols:n,defaultLengthMessage:P}},Ae=({handleHideChangePassword:e,handleSetInLineAlert:t,inLineAlertProps:a})=>{const{passwordConfigs:r}=Le(),{hideChangePassword:n,handleOnBlurPassword:s,handleConfirmPasswordChange:P,handleNewPasswordChange:l,handleCurrentPasswordChange:c,mutationChangePassword:p,currentPassword:h,newPassword:u,confirmPassword:A,passwordErrors:y,submitLoading:I,isClickSubmit:b}=Fe({passwordConfigs:r,handleSetInLineAlert:t,handleHideChangePassword:e}),{isValidUniqueSymbols:i,defaultLengthMessage:_}=_e({password:u,isClickSubmit:b,passwordConfigs:r}),w=x({containerTitle:"Account.minifiedView.CustomerInformation.changePassword.containerTitle",currentPasswordPlaceholder:"Account.minifiedView.CustomerInformation.changePassword.currentPassword.placeholder",currentPasswordFloatingLabel:"Account.minifiedView.CustomerInformation.changePassword.currentPassword.floatingLabel",newPasswordPlaceholder:"Account.minifiedView.CustomerInformation.changePassword.newPassword.placeholder",newPasswordFloatingLabel:"Account.minifiedView.CustomerInformation.changePassword.newPassword.floatingLabel",confirmPasswordPlaceholder:"Account.minifiedView.CustomerInformation.changePassword.confirmPassword.placeholder",confirmPasswordFloatingLabel:"Account.minifiedView.CustomerInformation.changePassword.confirmPassword.floatingLabel",buttonSecondary:"Account.minifiedView.CustomerInformation.changePassword.buttonSecondary",buttonPrimary:"Account.minifiedView.CustomerInformation.changePassword.buttonPrimary"});return F(Q,{className:"account-change-password",variant:"secondary",children:[d(X,{title:w.containerTitle,divider:!1,className:"account-change-password__title"}),a.text?d(te,{className:"account-change-password__notification",type:a.type,variant:"secondary",heading:a.text,icon:a.icon,"data-testid":"changePasswordInLineAlert"}):null,F("div",{className:"account-change-password__fields",children:[d(R,{className:"account-change-password__fields-item",autoComplete:"currentPassword",name:"currentPassword",placeholder:w.currentPasswordPlaceholder,floatingLabel:w.currentPasswordFloatingLabel,errorMessage:y.currentPassword,defaultValue:h,onValue:c,onBlur:s}),d(R,{className:"account-change-password__fields-item",autoComplete:"newPassword",name:"newPassword",placeholder:w.newPasswordPlaceholder,floatingLabel:w.newPasswordFloatingLabel,minLength:r==null?void 0:r.minLength,validateLengthConfig:_,uniqueSymbolsStatus:i,requiredCharacterClasses:r==null?void 0:r.requiredCharacterClasses,errorMessage:i==="error"||(_==null?void 0:_.status)==="error"||b&&u.length<=0?y.newPassword:void 0,defaultValue:u,onValue:l,onBlur:s}),d(R,{className:"account-change-password__fields-item",autoComplete:"confirmPassword",name:"confirmPassword",placeholder:w.confirmPasswordPlaceholder,floatingLabel:w.confirmPasswordFloatingLabel,errorMessage:y.confirmPassword,defaultValue:A,onValue:P,onBlur:s})]}),F("div",{className:"account-change-password__actions",children:[d(H,{type:"button",disabled:I,onClick:n,variant:"secondary",children:w.buttonSecondary}),d(H,{variant:"primary",type:"button",disabled:I,onClick:p,children:w.buttonPrimary})]})]})},Me=({inLineAlertProps:e,errorPasswordEmpty:t,passwordValue:a,showPasswordOnEmailChange:r,submitLoading:n,formFieldsList:s,handleHideEditForm:P,handleUpdateCustomerInformation:l,handleInputChange:c,handleSetPassword:p,handleOnBlurPassword:h})=>{const u=x({buttonSecondary:"Account.minifiedView.CustomerInformation.editCustomerInformation.buttonSecondary",buttonPrimary:"Account.minifiedView.CustomerInformation.editCustomerInformation.buttonPrimary",placeholder:"Account.minifiedView.CustomerInformation.editCustomerInformation.passwordField.placeholder",floatingLabel:"Account.minifiedView.CustomerInformation.editCustomerInformation.passwordField.floatingLabel",containerTitle:"Account.minifiedView.CustomerInformation.editCustomerInformation.containerTitle",requiredFieldError:"Account.FormText.requiredFieldError"});return F(Q,{variant:"secondary",className:"account-edit-customer-information",children:[d(X,{title:u.containerTitle,divider:!1,className:"account-edit-customer-information__title"}),e.text?d(te,{className:"account-edit-customer-information__notification",type:e.type,variant:"secondary",heading:e.text,icon:e.icon,"data-testid":"editCustomerInLineAlert"}):null,F(fe,{loading:n,fieldsConfig:s||[],name:"editCustomerInformation",className:"account-edit-customer-information-form",onSubmit:l,setInputChange:c,children:[r?d("div",{className:"account-edit-customer-information__password",children:d(R,{autoComplete:"password",name:"password",placeholder:u.placeholder,floatingLabel:u.floatingLabel,errorMessage:t?u.requiredFieldError:void 0,defaultValue:a,onValue:p,onBlur:h})}):null,F("div",{className:"account-edit-customer-information__actions",children:[d(H,{disabled:n,type:"button",variant:"secondary",onClick:()=>P(),children:u.buttonSecondary}),d(H,{disabled:n,type:"submit",variant:"primary",children:u.buttonPrimary})]})]})]})},Se=({createdAt:e,slots:t,orderedCustomerData:a,showEditForm:r,showChangePassword:n,handleShowChangePassword:s,handleShowEditForm:P})=>{const l=x({buttonSecondary:"Account.minifiedView.CustomerInformation.customerInformationCard.buttonSecondary",buttonPrimary:"Account.minifiedView.CustomerInformation.customerInformationCard.buttonPrimary",accountCreation:"Account.minifiedView.CustomerInformation.customerInformationCard.accountCreation"});return d(Q,{variant:"secondary",className:re(["account-customer-information-card",["account-customer-information-card-short",n||r]]),children:F("div",{className:"account-customer-information-card__wrapper",children:[d("div",{className:"account-customer-information-card__content",children:t!=null&&t.CustomerData?d(me,{name:"CustomerData",slot:t==null?void 0:t.CustomerData,context:{customerData:a}}):F(ue,{children:[a==null?void 0:a.map((c,p)=>{const h=c!=null&&c.label?`${c.label}: ${c==null?void 0:c.value}`:c==null?void 0:c.value;return d("p",{"data-testid":`${c.name}_${p}`,children:h},`${c.name}_${p}`)}),F("p",{children:[l.accountCreation,": ",e]})]})}),F("div",{className:"account-customer-information-card__actions",children:[d(H,{type:"button",variant:"tertiary",onClick:s,children:l.buttonSecondary}),d(H,{type:"button",variant:"tertiary",onClick:P,children:l.buttonPrimary})]})]})})},Ne=({handleSetInLineAlert:e})=>{const t=x({accountSuccess:"Account.minifiedView.CustomerInformation.editCustomerInformation.accountSuccess",accountError:"Account.minifiedView.CustomerInformation.editCustomerInformation.accountError",genderMale:"Account.minifiedView.CustomerInformation.genderMale",genderFemale:"Account.minifiedView.CustomerInformation.genderFemale"}),[a,r]=m(!0),[n,s]=m(!1),[P,l]=m(!1),[c,p]=m(!1),[h,u]=m(!1),[A,y]=m(!1),[I,b]=m([]),[i,_]=m(null),[w,U]=m([]),[M,T]=m({}),[O,f]=m(""),[V,Z]=m(""),L=C(o=>{const{value:g}=o==null?void 0:o.target;g.length&&u(!1),g.length||u(!0)},[]),S=C(o=>{f(o)},[]),oe=C(o=>{T(o)},[]),ae=C(()=>{l(!0),p(!1),e(),S("")},[e,S]),se=C(o=>{o==null||o(),l(!1)},[]),ie=C(()=>{p(!0),l(!1),e(),S("")},[e,S]),ce=C(o=>{o==null||o(),p(!1)},[]),N=C((o,g)=>{o==="success"?e({type:"success",text:g??t.accountSuccess}):o==="error"?e({type:"error",text:g??t.accountError}):e(),s(!1)},[e,t]),W=C(()=>{pe().then(o=>{var v;const g=(v=o==null?void 0:o.createdAt)==null?void 0:v.split(" ")[0],z={...o,gender:o.gender===1?t.genderMale:t.genderFemale};_(z),Z(g)})},[t.genderFemale,t.genderMale]);B(()=>{W()},[]),B(()=>{Ve("customer_account_edit").then(o=>{U(o);const g=o.map(({name:z,customUpperCode:v,orderNumber:q,label:j})=>({name:v,orderNumber:q,label:he.includes(z)?null:j}));b(g)})},[]),B(()=>{M.email&&M.email!==(i==null?void 0:i.email)?y(!0):M.email&&M.email===(i==null?void 0:i.email)&&y(!1)},[i==null?void 0:i.email,M]);const $=G(()=>!I||!i?[]:I.filter(({name:g})=>g!==void 0&&i[g]).map(g=>({name:g.name,orderNumber:g.orderNumber,value:i[g.name],label:g.label})),[i,I]);B(()=>{$!=null&&$.length&&r(!1)},[$]);const de=G(()=>w==null?void 0:w.map(o=>({...o,defaultValue:o!=null&&o.customUpperCode&&i?i[o==null?void 0:o.customUpperCode]??"":""})).map(o=>o.customUpperCode==="gender"?{...o,defaultValue:o.defaultValue==="Male"?1:2}:o),[w,i]),le=C(async(o,g)=>{const z=ge(o.target),{email:v,password:q,...j}=z,Y=v!==(i==null?void 0:i.email)&&q.length===0;if(!g){Y&&u(!0);return}if(u(!1),s(!0),v===(i==null?void 0:i.email)){S(""),ee(D(j,"account")).then(k=>{k&&(W(),N("success"))}).catch(k=>{N("error",k.message)});return}if(Y){u(!0),s(!1);return}v!=null&&v.length&&(q!=null&&q.length)&&be({email:v,password:q}).then(k=>{k&&ee(D(j,"account")).then(J=>{J&&(W(),N("success"))}).catch(J=>{N("error",J.message)})}).catch(k=>{N("error",k.message)})},[i==null?void 0:i.email,S,W,N]);return{createdAt:V,errorPasswordEmpty:h,passwordValue:O,showPasswordOnEmailChange:A,orderedCustomerData:$,loading:a,normalizeFieldsConfig:de,submitLoading:n,showEditForm:c,showChangePassword:P,handleShowChangePassword:ae,handleHideChangePassword:se,handleShowEditForm:ie,handleHideEditForm:ce,handleUpdateCustomerInformation:le,handleInputChange:oe,handleSetPassword:S,handleOnBlurPassword:L,renderAlertMessage:N}},qe={success:d(ye,{}),warning:d(Ee,{}),error:d(Ie,{})},ke=()=>{const[e,t]=m({}),a=C(r=>{if(!(r!=null&&r.type)){t({});return}const n=qe[r.type];t({...r,icon:n})},[]);return{inLineAlertProps:e,handleSetInLineAlert:a}},Re=({className:e,withHeader:t=!0,slots:a})=>{const r=x({containerTitle:"Account.minifiedView.CustomerInformation.containerTitle"}),{inLineAlertProps:n,handleSetInLineAlert:s}=ke(),{createdAt:P,errorPasswordEmpty:l,passwordValue:c,showPasswordOnEmailChange:p,orderedCustomerData:h,loading:u,normalizeFieldsConfig:A,submitLoading:y,showEditForm:I,showChangePassword:b,handleShowChangePassword:i,handleHideChangePassword:_,handleShowEditForm:w,handleHideEditForm:U,handleUpdateCustomerInformation:M,handleInputChange:T,handleSetPassword:O,handleOnBlurPassword:f}=Ne({handleSetInLineAlert:s});return u?d("div",{"data-testid":"customerInformationLoader",children:d(we,{withCard:!0})}):F("div",{className:re(["account-customer-information",e]),children:[t?d(X,{title:r.containerTitle,divider:!1,className:"customer-information__title"}):null,d(Se,{createdAt:P,slots:a,orderedCustomerData:h,showEditForm:I,showChangePassword:b,handleShowChangePassword:i,handleShowEditForm:w}),b?d(Ae,{inLineAlertProps:n,handleSetInLineAlert:s,handleHideChangePassword:_}):null,I?d(Me,{inLineAlertProps:n,submitLoading:y,formFieldsList:A,errorPasswordEmpty:l,passwordValue:c,showPasswordOnEmailChange:p,handleSetPassword:O,handleOnBlurPassword:f,handleUpdateCustomerInformation:M,handleHideEditForm:U,handleInputChange:T}):null]})};export{Re as CustomerInformation,Re as default};
