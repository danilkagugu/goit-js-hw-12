import{S as v,i as m,a as w}from"./assets/vendor-e6ae6a6a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const q=new v(".gallery a",{captionsData:"alt",captionDelay:250}),z=document.querySelector(".js-search-form"),u=document.querySelector(".list-photo"),i=document.querySelector('[data-action="load-more"]'),g=document.querySelector(".loader"),h=document.querySelector(".loader-load-more"),o="is-hidden";let c=1,p=0,d="";const E="https://pixabay.com/api",x="41849458-2d98265cf06659a45ba73a30c";z.addEventListener("submit",k);async function k(a){a.preventDefault(),u.innerHTML="",g.classList.remove(o),c=1;const t=a.currentTarget;if(d=t.elements.query.value.trim(),!d){g.classList.add(o),m.show({title:"Error",titleSize:"30",messageSize:"25",color:"yellow",message:"Please search for something"});return}try{const{hits:r,totalHits:l}=await f(d);p=Math.ceil(l/40),L(r,u),r.length>0&&r.length!==l?(i.classList.remove(o),i.addEventListener("click",y)):r.length?i.classList.add(o):(i.classList.add(o),m.error({title:"Error",titleSize:"30",messageSize:"25",message:"Sorry, there are no images matching your search query. Please try again!"}))}catch(r){console.log(r)}finally{g.classList.add(o),t.reset()}}async function f(a,t=1){try{return(await w.get(`${E}/`,{params:{key:x,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:t}})).data}catch{m.error({title:"Error",titleSize:"30",messageSize:"25",message:"Sorry! Try later! Server not working"}),console.error(error.message)}}async function y(){c+=1,h.classList.remove(o),i.classList.add(o);const a=document.querySelector(".gallery-item").getBoundingClientRect();try{const{hits:t}=await f(d,c);L(t,u)}catch(t){console.log(t)}finally{window.scrollBy({top:a.height*2,left:0,behavior:"smooth"}),h.classList.add(o),i.classList.remove(o),c===p&&(i.classList.add(o),i.removeEventListener("click",y),m.show({title:"Hey",titleSize:"30",messageSize:"25",color:"blue",position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}}function L(a){const t=a.map(({webformatURL:r,largeImageURL:l,tags:e,likes:s,views:n,comments:S,downloads:b})=>`<li class="gallery-item">
          <a class="gallery-link" href="${l}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${e}"
              width="360"
            />
          </a>
          <ul class="img-list">
  <li class="img-info">
   <p class="img-text">Likes: <br><span>${s}</span></p>
   <p class="img-text">Views: <br><span>${n}</span></p>
   <p class="img-text">Comment: <br><span>${S}</span></p>
   <p class="img-text">Downloads: <br><span>${b}</span></p>
   </li>
   </ul>
        </li>`).join("");u.insertAdjacentHTML("beforeend",t),q.refresh()}
//# sourceMappingURL=commonHelpers.js.map
