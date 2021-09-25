function formatDate(timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
let minutes =date.getMinutes();
let days =  ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",];
let day = days[date.getDay()];
return `${day} ${hours}:${minutes}`;

}

function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let descriptionElement =document.querySelector ("#description");
let dateElement = documen.querySelector("date");
temperatureElement.innerHTML= Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML= Math.round(response.data.wind.speed);
dateElement.innerHTML= formatDate(response.cdata.dt*1000);
}

let apiKey = "33584fd56cf782d965dc41af18326ed8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New york&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);