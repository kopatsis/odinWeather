function datatoDOM(weatherData){

    if (weatherData.location.country === "United States of America"){
        document.querySelector('.title').textContent = `Here is the Weather for ${weatherData.location.name}, ${weatherData.location.region}: `;
    } else{
        document.querySelector('.title').textContent = `Here is the Weather for ${weatherData.location.name}, ${weatherData.location.country}: `;
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
    } else if(parseInt(weatherData.location.localtime.slice(11,13)) === 12){
        document.querySelector('.time').textContent = "Local time: " + weatherData.location.localtime.slice(11,16) + "pm";
    } else if(parseInt(weatherData.location.localtime.slice(11,13)) === 0){
        document.querySelector('.time').textContent = "Local time: " + "12" + weatherData.location.localtime.slice(12,15) + "am";
    } else {
        document.querySelector('.time').textContent = "Local time: " + weatherData.location.localtime.slice(11,16) + "am";
    }

    document.querySelector('.humid').textContent = `Humidity: ${weatherData.current.humidity}%`;
    document.querySelector('.condition').textContent = "Weather Condition: " + weatherData.current.condition.text;
    document.querySelector('.date').textContent =   "Local Date: " +
                                                    monthConv[parseInt(weatherData.location.localtime.slice(5,7))] +
                                                    " " +
                                                    weatherData.location.localtime.slice(8,10) +
                                                    ", " +
                                                    weatherData.location.localtime.slice(0,4);

    backgroundEditor(weatherData.current.condition.text);
}


function backgroundEditor(condition){
    if (condition.includes("Sunny")){
        document.body.style.background = "url(sunny.jpg)";
        document.body.style.backgroundSize = "cover";
    } else if (condition.includes("Clear")){
        document.body.style.background = "url(clear.jpg)";
        document.body.style.backgroundSize = "cover";
    } else if (condition.includes("cloud") || condition.includes("Overcast")){
        document.body.style.background = "url(over.jpg)";
        document.body.style.backgroundSize = "cover";
    } else if (condition.includes("rain") || condition.includes("drizzle")){
        document.body.style.background = "url(rain.jpg)";
        document.body.style.backgroundSize = "cover";
    } else if (condition.includes("snow")){
        document.body.style.background = "url(snow.jpg)";
        document.body.style.backgroundSize = "cover";
    } else if (condition.includes("Fog") || condition.includes("Mist")){
        document.body.style.background = "url(fog.jpg)";
        document.body.style.backgroundSize = "cover";
    } else{
        document.body.style.background = "url(default.jpg)";
        document.body.style.backgroundSize = "cover";
    }
}

const imperials = ["United States of America", "Liberia", "Myanmar"]
const monthConv = { 1: "January", 
                    2: "February", 
                    3: "March", 
                    4: "April", 
                    5: "May", 
                    6: "June", 
                    7: "July", 
                    8: "August", 
                    9: "September",
                    10: "October",
                    11: "November",
                    12: "December"
                }

export {datatoDOM, backgroundEditor, imperials, monthConv}