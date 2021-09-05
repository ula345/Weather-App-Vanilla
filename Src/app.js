function getForecast(coordinates) {
console.log(response)
let apiKey="9ab632720a8f655a49d407e0a291ff8b"; 
let apiUrl='https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric';
axios.get(apiUrl).then(displayTemperature)
}
