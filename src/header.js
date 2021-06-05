const header = () => {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.setAttribute("id", "header");
  container.innerHTML =
    '<h1>Weather app</h1><p id="inst">Enter a location to see its current weather.';
  body.appendChild(container);
};

export { header };
