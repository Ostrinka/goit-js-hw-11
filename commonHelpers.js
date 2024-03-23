import{S as u,i as a}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function d(){return fetch(`https://pixabay.com/api/?key=43028681-4db453fe74ec5ab2aaa5007ef&q=${i}&image_type=photo&per_page=15&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits)}function p(e){const s=e.map(o=>(console.log(o),`<li class="gallery-item">
          <a class="gallery-link" href="${o.largeImageURL}">
            <img
               class="gallery-image"
               src="${o.webformatURL}"
               data-source="${o.largeImageURL}"
               alt="${o.tags}"
            />
          </a>
          <ul class="gallery-description">
            <li><h3 class="image-title">Likes</h3><p class="image-description">${o.likes}</p></li>
            <li><h3 class="image-title">Views</h3><p class="image-description">${o.views}</p></li>
            <li><h3 class="image-title">Comments</h3><p class="image-description">${o.comments}</p></li>
            <li><h3 class="image-title">Downloads</h3><p class="image-description">${o.downloads}</p></li>
          </ul>
        </li>`)).join("");c.insertAdjacentHTML("beforeend",s),g.refresh()}const m=document.querySelector(".input-form"),f=document.querySelector(".btn"),c=document.querySelector(".gallery"),h=document.querySelector(".loader-item");let i="";const g=new u(".gallery a",{captionDelay:250,captionsData:"alt"});f.addEventListener("click",e=>{e.preventDefault(),L(),c.innerHTML="",setTimeout(()=>{i=m.value.trim(),y()},1e3)});function y(){d().then(e=>{i===""?a.show({color:"#EF4040",message:"Please complete the field!",position:"topRight"}):e.length===0?a.error({color:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):p(e)}).catch(e=>console.log(e)).finally(()=>b())}function L(){const e=document.createElement("span");h.appendChild(e),e.classList.add("loader")}function b(){document.querySelector(".loader").remove()}
//# sourceMappingURL=commonHelpers.js.map
