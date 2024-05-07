const getItaly = async () => {
    const response = await fetch('https://restcountries.com/v3.1/name/italy?fullText=true');
    const data = await response.json();
    return data;
}

const weatherData = {
    temp: 19,
    humidity: 60,
    precipitation: 100,
    wind: 4.12,
    conditions: "Clouds",
}

const calculateWindChill = (wind, temp) => {

    let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
    return windChill;
}

const buildData = (data) => {

    let ul = document.getElementById("placeData");
    let info = {
        area: data[0].area,
        capital: data[0].capital[0],
        population: data[0].population,
        fifa: data[0].fifa,
        flag: data[0].flag,
        languages: data[0].languages.ita,
        region: data[0].region,
        timezone: data[0].timezones[0],
        currencies: `${data[0].currencies.EUR.name} - ${data[0].currencies.EUR.symbol}`
    }

    for (const [key, value] of Object.entries(info)) {
        let li = document.createElement("li");
        li.innerText = `${key}: ${value}`;
        ul.appendChild(li);
    }

}

const buildWeather = (data) => {

    let ul = document.getElementById("placeWeatherData");
    for (const [key, value] of Object.entries(data)) {
        let li = document.createElement("li");
        li.innerText = `${key}: ${value}`;
        ul.appendChild(li); 
    }

}


document.addEventListener('DOMContentLoaded', async function() {
    let date = new Date();
    let currentyear = date.getFullYear();

    let data = await getItaly();
    buildData(data);
    buildWeather(weatherData);


    let currentyearSpan = document.getElementById("currentyear");
    currentyearSpan.innerText = currentyear;
    let oLastModif = new Date(document.lastModified);

    let lastModified = document.getElementById("lastModified");
    lastModified.innerText = oLastModif.toLocaleDateString("en-UK");

    if (weatherData.temp <= 10) {
        const ul = document.getElementById("placeWeatherData");
        let windChill = calculateWindChill(weatherData.wind, weatherData.temp);
        let li = document.createElement("li");
        li.innerText = `Wind Chill: ${windChill}`;
        ul.appendChild(li);
    } else if (weatherData.wind >= 4.12) {
        const ul = document.getElementById("placeWeatherData");
        let li = document.createElement("li");
        li.innerText = `Wind Speed: ${weatherData.wind}`;
        ul.appendChild(li); 
    } 
    


})