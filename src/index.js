import "./style.css";
import { getWeather } from "./fetch-weather";

// CALL BY CITY NAME
// api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={API key}
// API KEY
// 33eaa4fb488a76dcd98c62d852f4131f
// TRY THIS: http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=33eaa4fb488a76dcd98c62d852f4131f
// npm run build

(function () {
  async function getCurrentWeather(location) {
    const currentWeather = await getWeather(location);
    console.log(currentWeather);
  }

  const currentWeather = getCurrentWeather("Radenci");
})();
