(()=>{var e={764:()=>{var e=document.querySelector(".table__list"),t=document.querySelector(".table__search"),r=document.querySelector(".table__headers").querySelectorAll("li"),n=[],o=[];var a=function(t){e.innerHTML="",o=t,t.forEach((function(t){var r,n;e.append((r=t,(n=document.querySelector(".table__template").content.querySelector(".table__item").cloneNode(!0)).querySelector(".table__id").textContent=r.id,n.querySelector(".table__text").textContent=r.body,n.querySelector(".table__title").textContent=r.title,n))}))};t.addEventListener("input",(function(e){var t=e.target.value.replace(/\s/g,"").toLowerCase(),r=n.filter((function(e){return e.title.replace(/\s/g,"").toLowerCase().includes(t)||e.body.replace(/\s/g,"").toLowerCase().includes(t)}));t.length>=3?a(r):a(n)})),r.forEach((function(e){e.addEventListener("click",(function(){var t=e.getAttribute("data-name"),r=e.getAttribute("data-order");e.setAttribute("data-order","increasing"===r?"decreasing":"increasing"),function(e,t){var r=e,n=o.sort((function(e,n){return"increasing"===t?e[r]>n[r]?1:-1:e[r]<n[r]?1:-1}));a(n)}(t,r)}))})),fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){a(n=e)})).catch((function(e){return console.error(e)}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(764)})()})();