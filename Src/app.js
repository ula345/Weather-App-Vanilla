function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
temperatureElement.innerHTML= math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
}

let apiKey = "33584fd56cf782d965dc41af18326ed8";
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=${apiKey}&units=metric';

axios.get(apiUrl).then(displayTemperature);