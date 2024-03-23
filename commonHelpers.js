import{S as u,i as a}from"./assets/vendor-5b791d57.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function d(){return fetch(`https://pixabay.com/api/?key=43028681-4db453fe74ec5ab2aaa5007ef&q=${s}&image_type=photo&per_page=15&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits)}function p(e){const n=e.map(o=>(console.log(o),`<li class="gallery-item">
          <a class="gallery-link" href="${o.largeImageURL}">
            <img
               class="gallery-image"
               src="${o.webformatURL}"
               data-source="${o.largeImageURL}"
               alt="${o.tags}"
            />
          </a>
          <ul class="gallery-description">
            <li><h3>Likes</h3><p>${o.likes}</p></li>
            <li><h3>Views</h3><p>${o.views}</p></li>
            <li><h3>Comments</h3><p>${o.comments}</p></li>
            <li><h3>Downloads</h3><p>${o.downloads}</p></li>
          </ul>
        </li>`)).join("");c.insertAdjacentHTML("beforeend",n),y.refresh()}const f=document.querySelector(".input-form"),h=document.querySelector(".btn"),c=document.querySelector(".gallery"),m=document.querySelector(".loader-item");let s="";const y=new u(".gallery a",{captionDelay:250,captionsData:"alt"});h.addEventListener("click",e=>{e.preventDefault(),L(),c.innerHTML="",setTimeout(()=>{s=f.value.trim(),g()},1e3)});function g(){d().then(e=>{s===""?a.show({color:"#EF4040",message:"Please complete the field!",position:"topRight"}):e.length===0?a.show({color:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):p(e)}).catch(e=>console.log(e)).finally(()=>b())}function L(){const e=document.createElement("span");m.appendChild(e),e.classList.add("loader")}function b(){document.querySelector(".loader").remove()}
//# sourceMappingURL=commonHelpers.js.map
