const key = require('./api.json');

async function fetchWeather(city){
    const data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key.api}&q=${city}`
    );
    const weather = await data.json();
    return weather;
}

fetchWeather('sdajfajsdfas')
    .then(result => console.log(result))
    .catch(error => console.log(error));