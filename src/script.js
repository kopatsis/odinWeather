import { datatoDOM } from './domfuncs';

const key = require('./api.json');

const input = document.querySelector('#city');
const search = document.querySelector('.search');
const message = document.querySelector('.message');

async function fetchWeather(city){
    const data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key.api}&q=${city}`
    );
    const weather = await data.json();
    return weather;
}

search.addEventListener('click', mainWeather);

async function mainWeather(){
    try{
        let cityname = input.value;
        let cityweather = await fetchWeather(cityname);
        if (cityweather.error != null){
            message.textContent = "Failure"
        } else{
            message.textContent = `Success for ${cityweather.location.name}`
            console.log(cityweather.current);
            datatoDOM(cityweather);
        }    
    } catch(error){
        console.log(error);
        message.textContent = "Failure"
    }  
}

