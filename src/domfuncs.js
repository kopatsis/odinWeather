function datatoDOM(weatherData){
    if (weatherData.location.country === "United States of America"){
        document.querySelector('.title').textContent = `Here is the weather for ${weatherData.location.name}, ${weatherData.location.region}: `;
    } else{
        document.querySelector('.title').textContent = `Here is the weather for ${weatherData.location.name}, ${weatherData.location.country}: `;
    }
    
    if (imperials.includes(weatherData.location.country)){
        document.querySelector('.temp').textContent = `Temperature: ${weatherData.current.temp_f}°F`;
        document.querySelector('.wind').textContent = `Wind: ${weatherData.current.wind_mph}mph`;
    } else{
        document.querySelector('.temp').textContent = `Temperature: ${weatherData.current.temp_c}°C`;
        document.querySelector('.wind').textContent = `Wind: ${weatherData.current.wind_kph}kph`;
    }
    if (parseInt(weatherData.location.localtime.slice(11,13)) >= 13){
        let convertPM = parseInt(weatherData.location.localtime.slice(11,13)) - 12;
        document.querySelector('.time').textContent = "Local time: " + convertPM + weatherData.location.localtime.slice(13,16) + "pm";
    } else {
        document.querySelector('.time').textContent = "Local time: " + weatherData.location.localtime.slice(11,16) + "am";
    }
    document.querySelector('.humid').textContent = `Humidity: ${weatherData.current.humidity}%`;
    document.querySelector('.condition').textContent = "Weather Condition: " + weatherData.current.condition.text;

    console.log(weatherData.location);
    console.log(weatherData.current);
}

const imperials = ["United States of America", "Liberia", "Myanmar"]

export {datatoDOM, imperials}