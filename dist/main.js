(()=>{"use strict";var e={724:e=>{e.exports=JSON.parse('{"api":"6418d38afc9b4cb1bca30950232403"}')}},t={};function o(n){var c=t[n];if(void 0!==c)return c.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}(()=>{const e=["United States of America","Liberia","Myanmar"],t={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},n=o(724);const c=document.querySelector("#city"),r=(document.querySelector(".search"),document.querySelector("form")),l=document.querySelector(".message");r.addEventListener("submit",(async function(o){let r;o.preventDefault(),r=""===c.value?"los-angeles":c.value;try{let o=await async function(e){const t=await fetch(`https://api.weatherapi.com/v1/current.json?key=${n.api}&q=${e}`);return await t.json()}(r);null!=o.error?l.textContent=`Failure for entry ${r}`:(l.textContent=`Success for ${o.location.name}`,function(o){if("United States of America"===o.location.country?document.querySelector(".title").textContent=`Here is the weather for ${o.location.name}, ${o.location.region}: `:document.querySelector(".title").textContent=`Here is the weather for ${o.location.name}, ${o.location.country}: `,e.includes(o.location.country)?(document.querySelector(".temp").textContent=`Temperature: ${o.current.temp_f}°F`,document.querySelector(".wind").textContent=`Wind: ${o.current.wind_mph}mph`):(document.querySelector(".temp").textContent=`Temperature: ${o.current.temp_c}°C`,document.querySelector(".wind").textContent=`Wind: ${o.current.wind_kph}kph`),parseInt(o.location.localtime.slice(11,13))>=13){let e=parseInt(o.location.localtime.slice(11,13))-12;document.querySelector(".time").textContent="Local time: "+e+o.location.localtime.slice(13,16)+"pm"}else 12===parseInt(o.location.localtime.slice(11,13))?document.querySelector(".time").textContent="Local time: "+o.location.localtime.slice(11,16)+"pm":0===parseInt(o.location.localtime.slice(11,13))?document.querySelector(".time").textContent="Local time: 12"+o.location.localtime.slice(12,15)+"am":document.querySelector(".time").textContent="Local time: "+o.location.localtime.slice(11,16)+"am";document.querySelector(".humid").textContent=`Humidity: ${o.current.humidity}%`,document.querySelector(".condition").textContent="Weather Condition: "+o.current.condition.text,document.querySelector(".date").textContent="Local Date: "+t[parseInt(o.location.localtime.slice(5,7))]+" "+o.location.localtime.slice(8,10)+", "+o.location.localtime.slice(0,4),console.log(o.location),console.log(o.current)}(o))}catch(e){console.log(e),l.textContent=`Failure for entry ${r}`}finally{c.value=""}}))})()})();