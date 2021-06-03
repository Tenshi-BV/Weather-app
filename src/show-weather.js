const showWeather = (weather) => {
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
  wind.innerHTML = `<p>Windspeed: ${weather.speed} m/s ${weather.deg}°</p><p>Gust speed: ${weather.gust} m/s</p>`;
  container.appendChild(wind);

  const cloud = document.createElement("div");
  cloud.setAttribute("id", "cloud");
  cloud.innerHTML = `<h3>Cloudiness:</h3><p>${weather.clouds}%</p>`;
  container.appendChild(cloud);

  const sun = document.createElement("div");
  sun.setAttribute("id", "sun");
  console.log(weather.sunrise);
  sun.innerHTML = `<p>Sunrise: ${weather.sunrise}</p><p>Sunset: ${weather.sunset}</p>`;
  container.appendChild(sun);

  /*

      this.main = data.weather[0].main; // Clouds, Clear
      this.icon = data.weather[0].icon;
      this.temp = data.main.temp;
      this.feels_like = data.main.feels_like;
      this.humidity = data.main.humidity;
      this.speed = data.wind.speed;
      this.deg = data.wind.deg;
      this.gust = data.wind.gust;
      this.clouds = data.clouds.all; // %
      this.sunrise = new Date(data.sys.sunrise * 1000);
      this.sunset = new Date(data.sys.sunset * 1000);
      this.name = data.name;

  */
};

export { showWeather };
