(()=>{"use strict";const e=e=>{localStorage.setItem("to-do-list",JSON.stringify(e))},t=()=>localStorage.getItem("to-do-list")?JSON.parse(localStorage.getItem("to-do-list")):[],n=(t,n,l)=>{const d=n[l.index-1];return d.description=t.textContent,e(n),d},l=n=>{const l=t(),d=l.filter((e=>l.indexOf(e)!==n));for(let e=0;e<d.length;e+=1)d[e].index=d.indexOf(d[e])+1;e(d)},d=()=>{const o=document.querySelector(".to-do-list");for(;o.lastChild;)o.removeChild(o.lastChild);const c=t();if(null!=c)for(let t=0;t<c.length;t+=1){const i=document.createElement("li");i.classList.add("list"),i.id=c[t].index,i.draggable=!0;const s=document.createElement("div");s.classList.add("div");const a=document.createElement("input");a.classList.add("check"),a.type="checkbox",a.name="check1",c[t].completed&&(a.checked=!0);const r=document.createElement("label");r.contentEditable=!0,r.classList.add("label"),r.innerHTML=c[t].description,r.style.textDecoration=!0===c[t].completed?"line-through":"none",r.style.color="#000";const u=document.createElement("span");u.classList.add("bin"),u.innerHTML="<i class='fas fa-trash-alt'></i>",u.style.display="flex",u.style.cursor="pointer",u.id=c.indexOf(c[t]),i.appendChild(s),s.appendChild(a),s.appendChild(r),s.appendChild(u),o.appendChild(i),r.addEventListener("focus",(()=>{u.style.display="none",u.style.color="#fff",u.style.cursor="pointer",r.style.outline="none"})),r.addEventListener("blur",(e=>{n(e.target,c,c[t]),d()})),a.addEventListener("change",(n=>{var l,d;l=n.target,d=c[t],l.checked?(l.nextElementSibling.style.textDecoration="line-through",d.completed=!0):(l.nextElementSibling.style.textDecoration="none",d.completed=!1),e(c)})),u.addEventListener("mousedown",(e=>{e.preventDefault(),l(JSON.parse(u.id)),d()}))}},o=d,c=document.querySelector("#text"),i=document.querySelector(".addbtn"),s=document.querySelector(".delete-btn");i.addEventListener("click",(n=>{n.preventDefault(),(n=>{const l=t(),d={index:l.length+1,completed:!1,description:n.value};""===n.value&&n.preventDefault(),l.push(d),e(l),n.value="",o(l)})(c)})),s.addEventListener("click",(n=>{n.preventDefault(),(()=>{const n=t().filter((e=>!1===e.completed));e(n)})(),o()})),document.addEventListener("DOMContentLoaded",(e=>{e.preventDefault(),o()}))})();