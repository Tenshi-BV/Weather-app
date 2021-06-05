const locationForm = () => {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.setAttribute("id", "formContainer");
  container.innerHTML =
    '<form onsubmit="return false"><label for="location">Location: </label><input type="text" id="location" name="name" required/><button>Look up</button></form>';
  body.appendChild(container);
};

export { locationForm };
