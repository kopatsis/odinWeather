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
    try{
        let laweather = await fetchWeather('sdajofds');
        console.log(laweather.current);
        console.log(laweather.location);
    } catch(e){
        console.error(e);
    } finally{
        console.log('done');
    }
}

present();
