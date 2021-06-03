const showWeather = (weather) => {

  function calcSunrise() {
    let timeH = weather.sunrise.getHours();
    if (timeH < 9) { timeH = "0" + timeH}
    let timeM = weather.sunrise.getMinutes();
    if (timeM < 9) { timeM = "0" + timeM}
    const time = `${timeH}:${timeM}`;
    return time;
  }

  function calcSunset() {
    let timeH = weather.sunset.getHours();
    if (timeH < 9) { timeH = "0" + timeH}
    let timeM = weather.sunset.getMinutes();
    if (timeM < 9) { timeM = "0" + timeM}
    const time = `${timeH}:${timeM}`;
    return time;
  }

  const sunrise = calcSunrise();
  const sunset = calcSunset();

  const body = document.querySelector("body");

  const oldContainer = document.querySelector("#weatherContainer");
  if (oldContainer !== null) {
    oldContainer.remove();
  }

  const container = document.createElement("div");
  container.setAttribute("id", "weatherContainer");
  body.appendChild(container);

  const main = document.createElement("div");
  main.setAttribute("id", "main");
  main.innerHTML = `<h2>${weather.name}</h2><img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="icon for ${weather.main}"><p>${weather.main}</p>`;
  container.appendChild(main);

  const temp = document.createElement("div");
  temp.setAttribute("id", "temp");
  temp.innerHTML = `<p>Temperature: ${weather.temp}°C</p><p>Feels like: ${weather.feels_like}°C</p>`;
  container.appendChild(temp);

  const humi = document.createElement("div");
  humi.setAttribute("id", "humi");
  humi.innerHTML = `<h3>Humidity:</h3><p>${weather.humidity}%</p>`;
  container.appendChild(humi);

  const wind = document.createElement("div");
  wind.setAttribute("id", "wind");
  wind.innerHTML = `<p>Wind speed: ${weather.speed.toFixed(1)} m/s (${(weather.speed / 3.6).toFixed(1)} km/h) ${weather.deg}°</p><p>Gust speed: ${weather.gust.toFixed(1)} m/s (${(weather.gust / 3.6).toFixed(1)} km/h)</p>`;
  container.appendChild(wind);

  const cloud = document.createElement("div");
  cloud.setAttribute("id", "cloud");
  cloud.innerHTML = `<h3>Cloudiness:</h3><p>${weather.clouds}%</p>`;
  container.appendChild(cloud);

  const sun = document.createElement("div");
  sun.setAttribute("id", "sun");
  sun.innerHTML = `<p>Sunrise: ${sunrise}</p><p>Sunset: ${sunset}</p>`;
  container.appendChild(sun);


};

export { showWeather };
