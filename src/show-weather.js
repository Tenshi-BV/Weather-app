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
  container.appendChild(main);

  const temp = document.createElement("div");
  temp.setAttribute("id", "temp");
  container.appendChild(temp);

  const humi = document.createElement("div");
  humi.setAttribute("id", "humi");
  container.appendChild(humi);

  const wind = document.createElement("div");
  wind.setAttribute("id", "wind");
  container.appendChild(wind);

  const cloud = document.createElement("div");
  cloud.setAttribute("id", "cloud");
  container.appendChild(cloud);

  const sun = document.createElement("div");
  sun.setAttribute("id", "sun");
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
