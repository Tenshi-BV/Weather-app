const locationForm = () => {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.setAttribute("id", "formContainer");
  container.innerHTML =
    '<form onsubmit="return false"><label for="location">Location:</label><input type="text" id="location" name="name" required/><button>Search</button></form>';

  /* 
  
  <form action="/my-handling-form-page" method="post" novalidate>
        <label for="mail">E-mail:</label>
        <input type="email" id="mail" name="user_email" required/>
        <span class="error" aria-live="polite"></span>
        
        <button type="submit">Submit form</button>

   </form>
  */

  body.appendChild(container);
};

export { locationForm };
