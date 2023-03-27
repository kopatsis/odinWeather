import { datatoDOM } from './domfuncs';
import { resetDOM } from './domfuncs';

const key = require('./api.json');
let def = "los-angeles";

const input = document.querySelector('#city');
const search = document.querySelector('.search');
const form = document.querySelector('form');
const message = document.querySelector('.message');

async function fetchWeather(city){
    const data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key.api}&q=${city}`
    );
    const weather = await data.json();
    return weather;
}

form.addEventListener('submit', mainWeather);

async function mainWeather(e){
    e.preventDefault();

    let cityname;
    if (input.value === ''){
        cityname = def;
    } else {
        cityname = input.value;
    }

    try{   
        let cityweather = await fetchWeather(cityname);
        if (cityweather.error != null){
            message.textContent = `Failure for entry ${cityname}`;
            resetDOM();
        } else{
            message.textContent = '';
            datatoDOM(cityweather);
        }    
    } catch(error){
        console.log(error);
        message.textContent = `Failure for entry ${cityname}`;
        resetDOM();
    } finally{
        input.value = '';
    }
}