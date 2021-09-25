function showTemperature(response) {
    let temperature = math.round(response.data.main.temp); 
    let heading = document.querySelector("h1");
    heading.innerHTML = '${temperature}';
}

function retrievePosition(coordinates) {
let latitude = coordinates.coords.latitude; 
let longitude = coordinates.coords.longitude; 
let apiKey="9ab632720a8f655a49d407e0a291ff8b"; 
let apiUrl='https://api.openweathermap.org/data/2.5/data?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}&units=metric';

axios.get('${apiUrl}&appid=${apiKey}').then(showTemperature); 

}
function getCurrentPosition() { 

    navigator.geolocation.getCurrentPosition(retrievePosition);
}

let button = document.querySelector("button"); 
button.addEventListener("click", getCurrentPosition);

function search (event) {
event.preventDefault();
let searchInput = document.querySelector("#search-text-input");
console.log(searchInput.value);
let h1 = document.querySelector("h1");
h1.innerHTML ='${searchInput.value}';
}


let form = document.querySelector("#search-form");

form.addEventListener("submit", search);


