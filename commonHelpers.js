import{S,i as g,a as q}from"./assets/vendor-e6ae6a6a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const w=new S(".gallery a",{captionsData:"alt",captionDelay:250}),x=document.querySelector(".js-search-form"),m=document.querySelector(".list-photo"),n=document.querySelector('[data-action="load-more"]'),u=document.querySelector(".loader"),f=document.querySelector(".loader-load-more"),a="is-hidden";let c=1,p=0,d="";const E="https://pixabay.com/api",P="41849458-2d98265cf06659a45ba73a30c";x.addEventListener("submit",$);async function $(r){r.preventDefault(),m.innerHTML="",u.classList.remove(a),c=1;const t=r.currentTarget;if(d=t.elements.query.value.trim(),!d){u.classList.add(a),g.show({title:"Error",color:"yellow",message:"Please search for something"});return}try{const{hits:s,totalHits:l}=await h(d);p=Math.ceil(l/40),L(s,m),s.length>0&&s.length!==l?(n.classList.remove(a),n.addEventListener("click",y)):s.length?n.classList.add(a):g.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(s){console.log(s)}finally{u.classList.add(a),t.reset()}}function h(r,t=1){return q.get(`${E}/`,{params:{key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:t}}).then(({data:s})=>s)}async function y(){c+=1,f.classList.remove(a),n.classList.add(a);const r=document.querySelector(".gallery-item").getBoundingClientRect();console.log(r);try{const{hits:t}=await h(d,c);L(t,m)}catch(t){console.log(t)}finally{window.scrollBy({top:r.height*2,left:0,behavior:"smooth"}),f.classList.add(a),n.classList.remove(a),c===p&&(n.classList.add(a),n.removeEventListener("click",y))}}function L(r){const t=r.map(({webformatURL:s,largeImageURL:l,tags:e,likes:o,views:i,comments:b,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${l}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
              width="360"
            />
          </a>
          <ul class="img-list">
  <li class="img-info">
   <p class="img-text">Likes: <br><span>${o}</span></p>
   <p class="img-text">Views: <br><span>${i}</span></p>
   <p class="img-text">Comment: <br><span>${b}</span></p>
   <p class="img-text">Downloads: <br><span>${v}</span></p>
   </li>
   </ul>
        </li>`).join("");m.insertAdjacentHTML("beforeend",t),w.refresh()}
//# sourceMappingURL=commonHelpers.js.map
