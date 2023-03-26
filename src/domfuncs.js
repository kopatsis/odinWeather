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

    // console.log(weatherData.location);
    // console.log(weatherData.current);
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

export {datatoDOM, imperials, monthConv}