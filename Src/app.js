function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let humidtyElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");

temperatureElement.innerHTML= Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidtyElement.innerHTML = response.data.main.humidty;
windElement.innerHTML= Math.round(response.data.wind.speed);
}

let apiKey = "33584fd56cf782d965dc41af18326ed8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);