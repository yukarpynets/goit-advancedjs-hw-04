import{a as w,S,i as a}from"./assets/vendor-VVWBAj3V.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const h=async(r,s=1)=>{const e={key:"55427334-75cc24dd7c9d859437f7d1aed",q:r.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15};return(await w.get("https://pixabay.com/api/",{params:e})).data},m=document.querySelector(".js-gallery"),f=document.querySelector(".js-loader"),y=document.querySelector(".js-load-more"),b=new S(".gallery a",{captionsData:"alt",captionDelay:250}),g=r=>{const s=r.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
            <div class="info">
              <p class="info-item">
                <span class="info-title">Likes</span>
                <span class="info-value">${e.likes}</span>
              </p>
              <p class="info-item">
                <span class="info-title">Views</span>
                <span class="info-value">${e.views}</span>
              </p>
              <p class="info-item">
                <span class="info-title">Comments</span>
                <span class="info-value">${e.comments}</span>
              </p>
              <p class="info-item">
                <span class="info-title">Downloads</span>
                <span class="info-value">${e.downloads}</span>
              </p>
            </div>
          </a>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",s),b.refresh()},q=()=>{m.innerHTML=""},L=()=>{f.classList.remove("is-hidden")},v=()=>{f.classList.add("is-hidden")},M=()=>{y.classList.remove("is-hidden")},d=()=>{y.classList.add("is-hidden")},c={searchForm:document.querySelector(".js-search-form"),searchInput:document.querySelector(".js-search-input"),loadMoreBtn:document.querySelector(".js-load-more")};let n=1,u="",p=0;const P=async r=>{r.preventDefault();const s=c.searchInput.value.trim();if(s===""){a.error({message:"Please enter a search query!",position:"topRight"});return}u=s,n=1,q(),d(),L();try{const e=await h(u,n);if(p=e.totalHits,e.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits);const i=Math.ceil(p/15);n<i?M():(d(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),c.searchForm.reset()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{v()}},B=async()=>{n+=1,L();try{const r=await h(u,n);g(r.hits);const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"});const e=Math.ceil(p/15);n>=e&&(d(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{v()}};c.searchForm.addEventListener("submit",P);c.loadMoreBtn.addEventListener("click",B);
//# sourceMappingURL=index.js.map
