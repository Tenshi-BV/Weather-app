const getWeather = (location) => {
  class Weather {
    constructor(data) {
      this.main = data.weather[0].main; // Clouds, Clear
      this.temp = data.main.temp;
      this.feels_like = data.main.feels_like;
      this.humidity = data.main.humidity;
      this.speed = data.wind.speed;
      this.deg = data.wind.deg;
      this.gust = data.wind.gust;
      this.clouds = data.clouds.all;
      this.sunrise = new Date(data.sys.sunrise * 1000);
      this.sunset = new Date(data.sys.sunset * 1000);
      this.name = data.name;
    }
  }

  async function getWeather(name) {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=33eaa4fb488a76dcd98c62d852f4131f`,
      {
        mode: "cors",
      }
    );
    const weatherData = await response.json();
    const weather = new Weather(weatherData);
    return weather;
  }

  return getWeather(location);
};

export { getWeather };
