/*! Copyright 2024 Adobe
All Rights Reserved. */
(function(n,e){try{if(typeof document<"u"){const r=document.createElement("style"),a=e.styleId;for(const t in e.attributes)r.setAttribute(t,e.attributes[t]);r.setAttribute("data-dropin",a),r.appendChild(document.createTextNode(n));const o=document.querySelector('style[data-dropin="sdk"]');if(o)o.after(r);else{const t=document.querySelector('link[rel="stylesheet"], style');t?t.before(r):document.head.append(r)}}}catch(r){console.error("dropin-styles (injectCodeFunction)",r)}})(`.dropin-button,.dropin-iconButton{border:0 none;cursor:pointer;white-space:normal}.dropin-button{border-radius:var(--shape-border-radius-3);font-size:var(--type-button-1-font);font-weight:var(--type-button-1-font);padding:var(--spacing-xsmall) var(--spacing-medium);display:flex;justify-content:center;align-items:center;text-align:left;word-wrap:break-word}.dropin-iconButton{height:var(--spacing-xbig);width:var(--spacing-xbig);padding:var(--spacing-xsmall)}.dropin-button:disabled,.dropin-iconButton:disabled{pointer-events:none;-webkit-user-select:none;user-select:none}.dropin-button:not(:disabled),.dropin-iconButton:not(:disabled){cursor:pointer}.dropin-button:focus,.dropin-iconButton:focus{outline:none}.dropin-button:focus-visible,.dropin-iconButton:focus-visible{outline:var(--spacing-xxsmall) solid var(--color-button-focus)}.dropin-button--primary,a.dropin-button--primary,.dropin-iconButton--primary{border:none;background:var(--color-brand-500) 0 0% no-repeat padding-box;color:var(--color-neutral-50);text-align:left;margin-right:0}.dropin-iconButton--primary{border-radius:var(--spacing-xbig);min-height:var(--spacing-xbig);min-width:var(--spacing-xbig);padding:var(--spacing-xsmall)}.dropin-button--primary--disabled,a.dropin-button--primary--disabled,.dropin-iconButton--primary--disabled{background:var(--color-neutral-300) 0 0% no-repeat padding-box;color:var(--color-neutral-500);fill:var(--color-neutral-300);pointer-events:none;-webkit-user-select:none;user-select:none}.dropin-button--primary:hover,a.dropin-button--primary:hover,.dropin-iconButton--primary:hover,.dropin-button--primary:focus:hover,.dropin-iconButton--primary:focus:hover{background-color:var(--color-button-hover);text-decoration:none}.dropin-button--primary:focus,.dropin-iconButton--primary:focus{background-color:var(--color-brand-500)}.dropin-button--primary:hover:active,.dropin-iconButton--primary:hover:active{background-color:var(--color-button-active)}.dropin-button--secondary,a.dropin-button--secondary,.dropin-iconButton--secondary{border:var(--shape-border-width-2) solid var(--color-brand-500);background:none 0 0% no-repeat padding-box;color:var(--color-brand-500);padding-top:calc(var(--spacing-xsmall) - var(--shape-border-width-2));padding-left:calc(var(--spacing-medium) - var(--shape-border-width-2))}.dropin-iconButton--secondary{border-radius:var(--spacing-xbig);min-height:var(--spacing-xbig);min-width:var(--spacing-xbig);padding:var(--spacing-xsmall);padding-top:calc(var(--spacing-xsmall) - var(--shape-border-width-2));padding-left:calc(var(--spacing-xsmall) - var(--shape-border-width-2))}.dropin-button--secondary--disabled,a.dropin-button--secondary--disabled,.dropin-iconButton--secondary--disabled{border:var(--shape-border-width-2) solid var(--color-neutral-300);background:none 0 0% no-repeat padding-box;color:var(--color-neutral-500);fill:var(--color-neutral-300);pointer-events:none;-webkit-user-select:none;user-select:none}.dropin-button--secondary:hover,a.dropin-button--secondary:hover,.dropin-iconButton--secondary:hover{border:var(--shape-border-width-2) solid var(--color-button-hover);color:var(--color-button-hover);text-decoration:none}.dropin-button--secondary:active,.dropin-iconButton--secondary:active{border:var(--shape-border-width-2) solid var(--color-button-active);color:var(--color-button-active)}.dropin-button--tertiary,a.dropin-button--tertiary,.dropin-iconButton--tertiary{border:none;background:none 0 0% no-repeat padding-box;color:var(--color-brand-500)}.dropin-iconButton--tertiary{border:none;border-radius:var(--spacing-xbig);min-height:var(--spacing-xbig);min-width:var(--spacing-xbig);padding:var(--spacing-xsmall)}.dropin-button--tertiary--disabled,a.dropin-button--tertiary--disabled,.dropin-iconButton--tertiary--disabled{border:none;color:var(--color-neutral-500);pointer-events:none;-webkit-user-select:none;user-select:none}.dropin-button--tertiary:hover,a.dropin-button--tertiary:hover,.dropin-iconButton--tertiary:hover{color:var(--color-button-hover);text-decoration:none}.dropin-button--tertiary:active,.dropin-iconButton--tertiary:active{color:var(--color-button-active)}.dropin-button--tertiary:focus-visible,.dropin-iconButton--tertiary:focus-visible{-webkit-box-shadow:inset 0 0 0 2px var(--color-neutral-800);-moz-box-shadow:inset 0 0 0 2px var(--color-neutral-800);box-shadow:inset 0 0 0 2px var(--color-neutral-800)}.dropin-button--large{font:var(--type-button-1-font);letter-spacing:var(--type-button-1-letter-spacing)}.dropin-button--medium{font:var(--type-button-2-font);letter-spacing:var(--type-button-2-letter-spacing)}.dropin-button-icon{height:24px}.dropin-button--with-icon{column-gap:var(--spacing-xsmall);row-gap:var(--spacing-xsmall)}
.order-customer-details-content .dropin-card__content{gap:0}.order-customer-details-content__container{display:block;flex-direction:column}.order-customer-details-content__container-shipping_address,.order-customer-details-content__container-billing_address{margin:var(--spacing-medium) 0}@media (min-width: 768px){.order-customer-details-content__container{display:grid;grid-template-columns:auto;grid-template-rows:auto auto auto;grid-auto-flow:row}.order-customer-details-content__container-email{grid-area:1 / 1 / 2 / 2}.order-customer-details-content__container--no-margin p{margin-bottom:0}.order-customer-details-content__container-shipping_address{grid-area:2 / 1 / 3 / 2;margin:var(--spacing-medium) 0}.order-customer-details-content__container-billing_address,.order-customer-details-content__container-return-information{grid-area:2 / 2 / 3 / 3;margin:var(--spacing-medium) 0}.order-customer-details-content__container-billing_address--fullwidth{grid-area:2 / 1 / 3 / 3}.order-customer-details-content__container-shipping_methods{grid-area:3 / 1 / 4 / 2}.order-customer-details-content__container-payment_methods{grid-area:3 / 2 / 4 / 3}.order-customer-details-content__container-payment_methods--fullwidth{grid-area:3 / 1 / 4 / 3}}.order-customer-details-content__container-title{font:var(--type-body-1-strong-font);letter-spacing:var(--type-body-1-strong-letter-spacing);margin:0 0 var(--spacing-xsmall) 0}.order-customer-details-content__container p{color:var(--color-neutral-800);font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);margin-top:0}.order-customer-details-content__container-payment_methods p{display:grid;gap:0;grid-template-columns:auto 1fr}.order-customer-details-content__container-payment_methods p.order-customer-details-content__container-payment_methods--icon{gap:0 var(--spacing-xsmall)}.order-customer-details-content__container-description p{margin:0 var(--spacing-xsmall) 0 0;line-height:var(--spacing-big);padding:0}.order-customer-details-content__container-description p:nth-child(1),.order-customer-details-content__container-description p:nth-child(3),.order-customer-details-content__container-description p:nth-child(4),.order-customer-details-content__container-description p:nth-child(6){float:left}.order-customer-details-content__container-return-information .order-customer-details-content__container-description p{float:none;display:block}.order-empty-list{margin-bottom:var(--spacing-small)}.order-empty-list.order-empty-list--minified,.order-empty-list .dropin-card{border:none}.order-empty-list .dropin-card__content{gap:0;padding:var(--spacing-xxbig)}.order-empty-list.order-empty-list--minified .dropin-card__content{flex-direction:row;align-items:center;padding:var(--spacing-big) var(--spacing-small)}.order-empty-list .dropin-card__content svg{width:64px;height:64px;margin-bottom:var(--spacing-medium)}.order-empty-list.order-empty-list--minified .dropin-card__content svg{margin:0 var(--spacing-small) 0 0;width:32px;height:32px}.order-empty-list .dropin-card__content svg path{fill:var(--color-neutral-800)}.order-empty-list.order-empty-list--minified .dropin-card__content svg path{fill:var(--color-neutral-500)}.order-empty-list--empty-box .dropin-card__content svg path{fill:var(--color-neutral-500)}.order-empty-list .dropin-card__content p{font:var(--type-headline-1-font);letter-spacing:var(--type-headline-1-letter-spacing);color:var(--color-neutral-800)}.order-empty-list.order-empty-list--minified .dropin-card__content p{font:var(--type-body-1-strong-font);color:var(--color-neutral-800)}.order-order-actions__wrapper{display:flex;justify-content:space-between;gap:0 var(--spacing-small);margin-bottom:var(--spacing-small);margin-top:var(--spacing-medium)}.order-order-actions__wrapper button{width:100%;font:var(--type-body-1-strong-font);letter-spacing:var(--type-body-1-default-letter-spacing);cursor:pointer}.order-order-actions__wrapper--empty{display:none}.order-order-cancel-reasons-form__text{text-align:left;color:var(--color-neutral-800);font:var(--type-details-caption-1-font);letter-spacing:var(--type-details-caption-1-letter-spacing);padding-bottom:var(--spacing-xsmall)}.order-order-cancel-reasons-form__button-container{display:grid;margin-top:var(--spacing-xbig);justify-content:end}.order-order-cancel__modal{margin:auto}.order-order-cancel__modal .dropin-modal__header{display:grid;grid-template-columns:1fr auto}.order-order-cancel__title{color:var(--color-neutral-900);font:var(--type-headline-2-strong-font);letter-spacing:var(--type-headline-2-strong-letter-spacing)}.order-order-cancel__text{color:var(--color-neutral-800);font:var(--type-details-caption-1-font);letter-spacing:var(--type-details-caption-1-letter-spacing);padding-bottom:var(--spacing-xsmall)}.order-order-cancel__modal .dropin-modal__header-close-button{align-self:center}.order-order-cancel__button-container{display:grid;margin-top:var(--spacing-xbig);justify-content:end}@media only screen and (min-width: 768px){.dropin-modal__body--medium.order-order-cancel__modal>.dropin-modal__header-title{margin:0 var(--spacing-xxbig) var(--spacing-medium)}}.order-order-loaders--card-loader{margin-bottom:var(--spacing-small)}.order-cost-summary-content .dropin-card__content{gap:0}.order-cost-summary-content__description{margin-bottom:var(--spacing-xsmall)}.order-cost-summary-content__description .order-cost-summary-content__description--header,.order-cost-summary-content__description .order-cost-summary-content__description--subheader{display:flex;justify-content:space-between;align-items:center}.order-cost-summary-content__description .order-cost-summary-content__description--header span{color:var(--color-neutral-800);font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing)}.order-cost-summary-content__description--subheader{margin-top:var(--spacing-xxsmall)}.order-cost-summary-content__description--subheader span{font:var(--type-details-caption-2-font);letter-spacing:var(--type-details-caption-2-letter-spacing);color:var(--color-brand-700)}.order-cost-summary-content__description--subtotal .order-cost-summary-content__description--subheader,.order-cost-summary-content__description--shipping .order-cost-summary-content__description--subheader{display:flex;justify-content:flex-start;align-items:center;gap:0 var(--spacing-xxsmall)}.order-cost-summary-content__description--subtotal .order-cost-summary-content__description--subheader .dropin-price,.order-cost-summary-content__description--shipping .order-cost-summary-content__description--subheader .dropin-price{font:var(--type-details-overline-font)}.order-cost-summary-content__description--discount .order-cost-summary-content__description--header span:last-child{color:var(--color-alert-800)}.order-cost-summary-content__description--discount .order-cost-summary-content__description--subheader span:first-child{display:flex;justify-content:flex-start;align-items:flex-end;gap:0 var(--spacing-xsmall)}.order-cost-summary-content__description--discount .order-cost-summary-content__description--subheader span:first-child span{font:var(--type-details-caption-1-font);letter-spacing:var(--type-details-caption-1-letter-spacing);color:var(--color-neutral-700)}.order-cost-summary-content__description--discount .order-cost-summary-content__description--subheader .dropin-price{font:var(--type-details-caption-1-font);letter-spacing:var(--type-details-caption-1-letter-spacing);color:var(--color-alert-800)}.order-cost-summary-content__description--total{margin-top:var(--spacing-medium)}.order-cost-summary-content__description--total .order-cost-summary-content__description--header span{font:var(--type-body-1-emphasized-font);letter-spacing:var(--type-body-1-emphasized-letter-spacing)}.order-cost-summary-content__accordion .dropin-accordion-section .dropin-accordion-section__content-container{gap:var(--spacing-small);margin:var(--spacing-small) 0}.order-cost-summary-content__accordion-row{display:flex;justify-content:space-between;align-items:center}.order-cost-summary-content__accordion-row p{font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing)}.order-cost-summary-content__accordion-row p:first-child{color:var(--color-neutral-700)}.order-cost-summary-content__accordion .order-cost-summary-content__accordion-row.order-cost-summary-content__accordion-total p:first-child{font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing)}.order-header{text-align:center;padding:var(--spacing-xxbig)}.order-header__icon{margin-bottom:var(--spacing-small)}.order-header__title{color:var(--color-neutral-800);font:var(--type-headline-1-font);letter-spacing:var(--type-headline-1-letter-spacing);justify-content:center;margin:0}.order-header__title:first-letter{text-transform:uppercase}.order-header__order{color:var(--color-neutral-700);font:var(--type-details-overline-font);letter-spacing:var(--type-details-overline-letter-spacing);margin:var(--spacing-xxsmall) 0 0 0}.order-header .success-icon{color:var(--color-positive-500)}.order-header-create-account{display:grid;gap:var(--spacing-small);margin-top:var(--spacing-large)}.order-header-create-account__message{font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);margin:0}.order-header-create-account__button{display:flex;margin:0 auto;text-align:center}.order-order-product-list-content__items{display:grid;gap:var(--spacing-medium);list-style:none;margin:0 0 var(--spacing-medium) 0;padding:0}.order-order-product-list-content .dropin-card__content{gap:0}.order-order-product-list-content__items .dropin-card__content{gap:var(--spacing-xsmall)}.order-order-product-list-content .dropin-cart-item__alert{margin-top:var(--spacing-xsmall)}.order-order-product-list-content .cart-summary-item__title--strikethrough{text-decoration:line-through;color:var(--color-neutral-500);font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing)}@media only screen and (min-width: 320px) and (max-width: 768px){.order-confirmation-cart-summary-item{margin-bottom:var(--spacing-medium)}}.order-order-search-form{gap:var(--spacing-small);border-color:transparent}.order-order-search-form .dropin-card__content{padding:var(--spacing-big) var(--spacing-xxbig) var(--spacing-xxbig) var(--spacing-xxbig)}.order-order-search-form p{color:var(--color-neutral-700);font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);margin:0}.order-order-search-form__title{color:var(--color-neutral-800);font:var(--type-headline-2-strong-font);letter-spacing:var(--type-headline-2-strong-letter-spacing);margin:0}.order-order-search-form__wrapper{display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-template-areas:"email" "lastname" "number" "button";gap:var(--spacing-medium)}.order-order-search-form__wrapper__item--email{grid-area:email}.order-order-search-form__wrapper__item--lastname{grid-area:lastname}.order-order-search-form__wrapper__item--number{grid-area:number}.order-order-search-form__button-container{display:flex;justify-content:flex-end;grid-area:button}.order-order-search-form form button{align-self:flex-end;justify-self:flex-end;margin-top:var(--spacing-small)}@media (min-width: 768px){.order-order-search-form__wrapper{grid-template-columns:1fr 1fr;grid-template-rows:auto auto auto;grid-template-areas:"email lastname" "number number" "button button"}}.order-order-status-content .dropin-card__content{gap:0}.order-order-status-content__wrapper .order-order-status-content__wrapper-description p{padding:0;margin:0;box-sizing:border-box;font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing)}.order-order-status-content__wrapper-description{margin-bottom:var(--spacing-medium)}.order-order-status-content__wrapper-description--actions-slot{margin-bottom:0}.order-return-order-message p{margin:0;padding:0}.order-return-order-message a{max-width:162px;padding:var(--spacing-xsmall)}.order-return-order-message .order-return-order-message__title{font:var(--type-headline-1-font);letter-spacing:var(--type-headline-1-letter-spacing);color:var(--color-neutral-800);margin-bottom:var(--spacing-small)}.order-return-order-message .order-return-order-message__subtitle{font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);margin-bottom:var(--spacing-xlarge)}.order-create-return .order-create-return_notification{margin-bottom:var(--spacing-medium)}.order-return-order-product-list{list-style:none;margin:0;padding:0}.order-return-order-product-list .order-return-order-product-list__item{display:grid;grid-template-columns:auto 1fr;align-items:start;margin-bottom:var(--spacing-medium);position:relative}.order-return-order-product-list__item--blur:before{content:"";position:absolute;width:100%;height:100%;background-color:var(--color-opacity-24);z-index:1}.order-return-order-product-list>.order-return-order-product-list__item:last-child{display:flex;justify-content:flex-end}.order-return-order-product-list>.order-return-order-product-list__item .dropin-cart-item__alert{margin-top:var(--spacing-xsmall)}.order-return-order-product-list>.order-return-order-product-list__item .cart-summary-item__title--strikethrough{text-decoration:line-through;color:var(--color-neutral-500);font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing)}.order-create-return .dropin-cart-item__footer .dropin-incrementer.dropin-incrementer--medium{max-width:160px}.order-return-order-product-list .dropin-incrementer__button-container{margin:0}@media only screen and (min-width: 320px) and (max-width: 768px){.order-return-order-product-list>.order-return-order-product-list__item{margin-bottom:var(--spacing-medium)}}.order-return-reason-form .dropin-cart-item,.order-return-reason-form form .dropin-field{margin-bottom:var(--spacing-medium)}.order-return-reason-form .order-return-reason-form__actions{display:flex;gap:0 var(--spacing-medium);justify-content:flex-end;margin-bottom:0}.order-returns-list-content .order-returns__header--minified{margin-bottom:var(--spacing-small)}.order-returns-list-content .order-returns__header--full-size{margin-bottom:0}.order-returns-list-content__cards-list{margin-bottom:var(--spacing-small)}.order-returns-list-content__cards-list .dropin-card__content{gap:0}.order-returns-list-content__cards-grid{display:grid;grid-template-columns:1fr 1fr auto;gap:0px 0px;grid-template-areas:"descriptions descriptions actions" "images images actions"}.order-returns-list-content__descriptions{grid-area:descriptions}.order-returns-list-content__descriptions p{margin:0 0 var(--spacing-small) 0;padding:0;box-sizing:border-box;font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing);color:var(--color-neutral-800)}.order-returns-list-content__descriptions p a{display:inline-block;font:var(--type-button-2-font);letter-spacing:var(--type-button-2-letter-spacing);color:var(--color-brand-800)}.order-returns-list-content__descriptions p a:hover{color:var(--color-brand-800)}.order-returns-list-content__descriptions .order-returns-list-content__return-status{font:var(--type-button-2-font);font-weight:500;color:var(--color-neutral-800)}.order-returns-list-content .order-returns-list-content__actions{margin:0;padding:0;border:none;background-color:transparent;cursor:pointer;text-decoration:none}.order-returns-list-content .order-returns-list-content__actions:hover{text-decoration:none;color:var(--color-brand-500)}.order-returns-list-content__card .dropin-card__content{padding:var(--spacing-small) var(--spacing-medium)}.order-returns-list-content__card .order-returns-list-content__card-wrapper{display:flex;justify-content:space-between;align-items:center;color:var(--color-neutral-800);height:calc(88px - var(--spacing-small) * 2)}.order-returns-list-content__card-wrapper>p{font:var(--type-button-2-font);letter-spacing:var(--type-button-2-letter-spacing)}.order-returns-list-content__card-wrapper svg{color:var(--color-neutral-800)}.order-returns-list-content__images{margin-top:var(--spacing-small);grid-area:images}.order-returns-list-content__actions{grid-area:actions;align-self:center}.order-returns-list-content .order-returns-list-content__images{overflow:auto}.order-returns-list-content .order-returns-list-content__images .dropin-content-grid__content{grid-template-columns:repeat(6,max-content)!important}.order-returns-list-content .order-returns-list-content__images-3 .dropin-content-grid__content{grid-template-columns:repeat(3,max-content)!important}.order-returns-list-content .order-returns-list-content__images img{object-fit:contain;width:85px;height:114px}.order-shipping-status-card .dropin-card__content{gap:0}.order-shipping-status-card--count-steper{font:var(--type-headline-2-strong-font);letter-spacing:var(--type-headline-2-strong-letter-spacing)}.order-shipping-status-card__header{display:grid;grid-template-columns:1fr auto;justify-items:self-start;align-items:center;margin-bottom:var(--spacing-xsmall)}.order-shipping-status-card__header button{max-height:40px}.order-shipping-status-card__header--content p,.order-shipping-status-card--return-order p{padding:0;margin:0;box-sizing:border-box;font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing);margin-bottom:var(--spacing-xsmall)}.order-shipping-status-card--return-order p a{display:inline-block;font:var(--type-button-2-font);letter-spacing:var(--type-button-2-letter-spacing);color:var(--color-brand-800)}.order-shipping-status-card--return-order p a:hover{text-decoration:none;color:var(--color-brand-800)}.order-shipping-status-card .order-shipping-status-card__images .dropin-content-grid__content{grid-template-columns:repeat(6,max-content)!important}.order-shipping-status-card.order-shipping-status-card--return-order .dropin-content-grid.order-shipping-status-card__images{overflow:auto!important}.order-shipping-status-card .order-shipping-status-card__images img{object-fit:contain;width:85px;height:114px}`,{styleId:"order"});
import{jsx as r}from"@dropins/tools/preact-jsx-runtime.js";import{Render as n}from"@dropins/tools/lib.js";import{useState as s,useEffect as d}from"@dropins/tools/preact-hooks.js";import{UIProvider as l}from"@dropins/tools/components.js";import{events as u}from"@dropins/tools/event-bus.js";const c={CreateReturn:{headerText:"Return items",downloadableCount:"Files",returnedItems:"Returned items:",configurationsList:{quantity:"Quantity"},stockStatus:{inStock:"In stock",outOfStock:"Out of stock"},giftCard:{sender:"Sender",recipient:"Recipient",message:"Note"},success:{title:"Return submitted",message:"Your return request has been successfully submitted."},buttons:{nextStep:"Continue",backStep:"Back",submit:"Submit return",backStore:"Back to order"}},OrderCostSummary:{headerText:"Order summary",headerReturnText:"Return summary",subtotal:{title:"Subtotal"},shipping:{title:"Shipping",freeShipping:"Free shipping"},tax:{accordionTitle:"Taxes",accordionTotalTax:"Tax Total",totalExcludingTaxes:"Total excluding taxes",title:"Tax",incl:"Including taxes",excl:"Excluding taxes"},discount:{title:"Discount",subtitle:"discounted"},total:{title:"Total"}},Returns:{minifiedView:{returnsList:{viewAllOrdersButton:"View all returns",ariaLabelLink:"Redirect to full order information",emptyOrdersListMessage:"No returns",minifiedViewTitle:"Recent returns",orderNumber:"Order number:",returnNumber:"Return number:",carrier:"Carrier:",itemText:{none:"",one:"item",many:"items"},returnStatus:{pending:"Pending",authorized:"Authorized",partiallyAuthorized:"Partially authorized",received:"Received",partiallyReceived:"Partially received",approved:"Approved",partiallyApproved:"Partially approved",rejected:"Rejected",partiallyRejected:"Partially rejected",denied:"Denied",processedAndClosed:"Processed and closed",closed:"Closed"}}},fullSizeView:{returnsList:{viewAllOrdersButton:"View all orders",ariaLabelLink:"Redirect to full order information",emptyOrdersListMessage:"No returns",minifiedViewTitle:"Returns",orderNumber:"Order number:",returnNumber:"Return number:",carrier:"Carrier:",itemText:{none:"",one:"item",many:"items"},returnStatus:{pending:"Pending",authorized:"Authorized",partiallyAuthorized:"Partially authorized",received:"Received",partiallyReceived:"Partially received",approved:"Approved",partiallyApproved:"Partially approved",rejected:"Rejected",partiallyRejected:"Partially rejected",denied:"Denied",processedAndClosed:"Processed and closed",closed:"Closed"}}}},OrderProductListContent:{cancelledTitle:"Cancelled",allOrdersTitle:"Your order",returnedTitle:"Returned",refundedTitle:"Your refunded",downloadableCount:"Files",stockStatus:{inStock:"In stock",outOfStock:"Out of stock"},GiftCard:{sender:"Sender",recipient:"Recipient",message:"Note"}},OrderSearchForm:{title:"Enter your information to view order details",description:"You can find your order number in the receipt you received via email.",button:"View Order",email:"Email",lastname:"Last Name",orderNumber:"Order Number"},Form:{notifications:{requiredFieldError:"This is a required field."}},ShippingStatusCard:{orderNumber:"Order number:",returnNumber:"Return number:",itemText:{none:"",one:"Package contents ({{count}} item)",many:"Package contents ({{count}} items)"},trackButton:"Track package",carrier:"Carrier:",prepositionOf:"of",returnOrderCardTitle:"Package details",shippingCardTitle:"Package details",shippingInfoTitle:"Shipping information",notYetShippedTitle:"Not yet shipped",notYetShippedImagesTitle:{singular:"Package contents ({{count}} item)",plural:"Package contents ({{count}} items)"}},OrderStatusContent:{noInfoTitle:"Check back later for more details.",returnMessage:"The order was placed on {ORDER_CREATE_DATE} and your return process started on {RETURN_CREATE_DATE}",returnStatus:{pending:"Pending",authorized:"Authorized",partiallyAuthorized:"Partially authorized",received:"Received",partiallyReceived:"Partially received",approved:"Approved",partiallyApproved:"Partially approved",rejected:"Rejected",partiallyRejected:"Partially rejected",denied:"Denied",processedAndClosed:"Processed and closed",closed:"Closed"},actions:{cancel:"Cancel order",createReturn:"Return or replace",createAnotherReturn:"Start another return",reorder:"Reorder"},orderPending:{title:"Pending",message:"The order was successfully placed on {DATE} and your order is processing. Check back for more details when your order ships.",messageWithoutDate:"Your order is processing. Check back for more details when your order ships."},orderProcessing:{title:"Processing",message:"The order was successfully placed on {DATE} and your order is processing. Check back for more details when your order ships.",messageWithoutDate:"Your order is processing. Check back for more details when your order ships."},orderOnHold:{title:"On hold",message:"We’ve run into an issue while processing your order on {DATE}. Please check back later or contact us at support@adobe.com for more information.",messageWithoutDate:"We’ve run into an issue while processing your order. Please check back later or contact us at support@adobe.com for more information."},orderReceived:{title:"Order received",message:"The order was successfully placed on {DATE} and your order is processing. Check back for more details when your order ships.",messageWithoutDate:"Your order is processing. Check back for more details when your order ships."},orderComplete:{title:"Complete",message:"Your order is complete. Need help with your order? Contact us at support@adobe.com"},orderCanceled:{title:"Canceled",message:"This order was cancelled by you. You should see a refund to your original payment method with 5-7 business days.",messageWithoutDate:"This order was cancelled by you. You should see a refund to your original payment method with 5-7 business days."},orderSuspectedFraud:{title:"Suspected fraud",message:"We’ve run into an issue while processing your order on {DATE}. Please check back later or contact us at support@adobe.com for more information.",messageWithoutDate:"We’ve run into an issue while processing your order. Please check back later or contact us at support@adobe.com for more information."},orderPaymentReview:{title:"Payment Review",message:"The order was successfully placed on {DATE} and your order is processing. Check back for more details when your order ships.",messageWithoutDate:"Your order is processing. Check back for more details when your order ships."},guestOrderCancellationRequested:{title:"cancellation requested",message:"The cancellation has been requested on {DATE}. Check your email for further instructions.",messageWithoutDate:"The cancellation has been requested. Check your email for further instructions."}},CustomerDetails:{headerText:"Customer information",freeShipping:"Free shipping",orderReturnLabels:{createdReturnAt:"Return requested on: ",returnStatusLabel:"Return status: ",orderNumberLabel:"Order number: "},returnStatus:{pending:"Pending",authorized:"Authorized",partiallyAuthorized:"Partially authorized",received:"Received",partiallyReceived:"Partially received",approved:"Approved",partiallyApproved:"Partially approved",rejected:"Rejected",partiallyRejected:"Partially rejected",denied:"Denied",processedAndClosed:"Processed and closed",closed:"Closed"},email:{title:"Contact details"},shippingAddress:{title:"Shipping address"},shippingMethods:{title:"Shipping method"},billingAddress:{title:"Billing address"},paymentMethods:{title:"Payment method"},returnInformation:{title:"Return details"}},Errors:{invalidOrder:"Invalid order. Please try again.",invalidSearch:"No order found with these order details."},OrderCancel:{buttonText:"Cancel Order"},OrderCancelForm:{title:"Cancel order",description:"Select a reason for canceling the order",label:"Reason for cancel",button:"Submit Cancellation",errorHeading:"Error",errorDescription:"There was an error processing your order cancellation."},OrderHeader:{title:"{{name}}, thank you for your order!",defaultTitle:"Thank you for your order!",order:"ORDER #{{order}}",CreateAccount:{message:"Save your information for faster checkout next time.",button:"Create an account"}}},p={Order:c},m={default:p},h=({children:t})=>{const[o,i]=s("en_US");return d(()=>{const e=u.on("locale",a=>{i(a)},{eager:!0});return()=>{e==null||e.off()}},[]),r(l,{lang:o,langDefinitions:m,children:t})},R=new n(r(h,{}));export{R as render};
