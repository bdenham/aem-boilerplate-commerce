const l=["REJECTED","PARTIALLY_REJECTED","DENIED","UNCONFIRMED","CLOSED"],o=n=>{const u=n==null?void 0:n.returns.filter(t=>!l.includes(t.returnStatus));return((n==null?void 0:n.itemsEligibleForReturn)??[]).flatMap(t=>{let e=t.quantityShipped,s={...t,returnableQuantity:e};return t.quantityShipped===0&&(s={...s,eligibleForReturn:!1,returnableQuantity:0}),u.forEach(c=>{c.items.forEach(i=>{if((i==null?void 0:i.id)===(t==null?void 0:t.id)){const f=e-i.requestQuantity;e=Math.max(f,0),s={...s,eligibleForReturn:e!==0,returnableQuantity:e}}})}),s}).sort((t,e)=>Number(e.eligibleForReturn)-Number(t.eligibleForReturn))},E=n=>{var a;let u=[];return((a=n==null?void 0:n.returns)==null?void 0:a.filter(t=>!l.includes(t.returnStatus)).map(t=>{let e={};return t.items.forEach(s=>{e={...s}}),e})).forEach(t=>{if(!u.length)u.push({...t,totalQuantity:t.requestQuantity});else{const e=u.findIndex(s=>s.id===t.id);e!==-1?u[e].totalQuantity+=t.requestQuantity:u.push({...t,totalQuantity:t.requestQuantity})}}),u};export{o as a,E as d};
