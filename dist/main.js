(()=>{"use strict";var e={724:e=>{e.exports=JSON.parse('{"api":"6418d38afc9b4cb1bca30950232403"}')}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}(()=>{const e=r(724),t=document.querySelector("#city"),o=(document.querySelector(".search"),document.querySelector("form")),n=document.querySelector(".message");o.addEventListener("submit",(async function(r){let o;r.preventDefault(),o=""===t.value?"los-angeles":t.value;try{let t=await async function(t){const r=await fetch(`https://api.weatherapi.com/v1/current.json?key=${e.api}&q=${t}`);return await r.json()}(o);null!=t.error?n.textContent=`Failure for entry ${o}`:(n.textContent=`Success for ${t.location.name}`,a=t,console.log(a.location),console.log(a.current))}catch(e){console.log(e),n.textContent=`Failure for entry ${o}`}finally{t.value=""}var a}))})()})();