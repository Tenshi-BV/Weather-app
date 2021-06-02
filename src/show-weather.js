const showWeather = (weather) => {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.setAttribute("id", "weatherContainer");

  container.textContent = "Hello World!";

  body.appendChild(container);
};

export { showWeather };
