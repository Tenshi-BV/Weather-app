import "./style.css";
import { getWeather } from "./fetch-weather";
import { locationForm } from "./location-form";

// CALL BY CITY NAME
// api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={API key}
// API KEY
// 33eaa4fb488a76dcd98c62d852f4131f
// TRY THIS: http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=33eaa4fb488a76dcd98c62d852f4131f
// npm run build

(function () {
  let location;
  let currentWeather;

  async function getCurrentWeather(location) {
    currentWeather = await getWeather(location);
    console.log(currentWeather);
  }

  locationForm();

  const btn = document.querySelector("button");
  btn.addEventListener("click", () => {
    location = document.getElementById("location").value;
    console.log(location);
  });

  getCurrentWeather("radenci");
})();
