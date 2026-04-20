import{a as u,S as f,i as n}from"./assets/vendor-VVWBAj3V.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=e(s);fetch(s.href,t)}})();const m=r=>{const o={key:"55427334-75cc24dd7c9d859437f7d1aed",q:r.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get("https://pixabay.com/api/",{params:o}).then(e=>e.data)},p=document.querySelector(".js-gallery"),d=document.querySelector(".js-loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250}),g=r=>{const o=r.map(e=>`
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
      `).join("");p.insertAdjacentHTML("beforeend",o),h.refresh()},y=()=>{p.innerHTML=""},L=()=>{console.log("show loader"),d.classList.remove("is-hidden")},l=()=>{console.log("hide loader"),d.classList.add("is-hidden")},c=document.querySelector(".js-search-form"),v=document.querySelector(".js-search-input");c.addEventListener("submit",r=>{r.preventDefault();const o=v.value.trim();if(o===""){n.error({message:"Please enter a search query!",position:"topRight"});return}y(),L(),m(o).then(e=>{if(l(),e.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits),c.reset()}).catch(e=>{l(),console.log("ERROR:",e),n.error({message:"Something went wrong. Please try again later.",position:"topRight"})})});
//# sourceMappingURL=index.js.map
