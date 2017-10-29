var Fetch = require('whatwg-fetch');

let API_KEY = "e36dda7f0d3d383bae6148c950c3387f"
let apiUrl = "http://api.openweathermap.org/data/2.5/"

const fetchWeather = function(city) {
  let weeklyWeatherUrl =
    `${apiUrl}/weather?q=${city}&units=metric&cnt=7&appid=${API_KEY}`

  return fetch(weeklyWeatherUrl).then(function(response) {
    return response.json();
});

}
//`${apiUrl}weather?q=${city}&units=metric&appid=${API_KEY}`
export { fetchWeather }