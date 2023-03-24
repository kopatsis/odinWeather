const key = require('./api.json');

// console.log(key.api);

async function fetchWeather(city){
    const data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key.api}&q=${city}`
    );
    const weather = await data.json();
    return weather;
}

async function present(){
    let laweather = await fetchWeather('los-angeles');
    console.log(laweather.current);
    console.log(laweather.location);
}

present();
