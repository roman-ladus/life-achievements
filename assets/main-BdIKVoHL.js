import{t as e}from"./data-Q2E81Y02.js";var t=e[0].slug;function n(n){n.innerHTML=``,e.forEach(e=>{let r=document.createElement(`button`);r.className=`model-tab ${e.slug===t?`active`:``}`,r.setAttribute(`role`,`tab`),r.setAttribute(`aria-selected`,e.slug===t),r.setAttribute(`id`,`tab-${e.slug}`),r.textContent=e.name,r.addEventListener(`click`,()=>i(e.slug)),n.appendChild(r)})}function r(n){let r=e.find(e=>e.slug===t);r&&(n.innerHTML=``,r.achievements.forEach((e,t)=>{let i=document.createElement(`article`);i.className=`achievement-card animate-fade-in-up stagger-${t+1}`,i.style.opacity=`0`,i.setAttribute(`id`,`achievement-${r.slug}-${e.id}`),i.innerHTML=`
      <span class="achievement-number">${String(e.id).padStart(2,`0`)}</span>
      <h3 class="text-sm font-medium text-text-primary mb-1.5 pr-8 leading-snug">
        ${e.title}
      </h3>
      <p class="text-xs text-text-secondary leading-relaxed">
        ${e.description}
      </p>
    `,n.appendChild(i)}))}function i(e){t=e,n(document.getElementById(`model-tabs`)),r(document.getElementById(`achievement-grid`))}document.addEventListener(`DOMContentLoaded`,()=>{n(document.getElementById(`model-tabs`)),r(document.getElementById(`achievement-grid`))});