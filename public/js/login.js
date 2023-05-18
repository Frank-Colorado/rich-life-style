const $loginForm = document.getElementById("loginForm");
const $username = document.getElementById("username");
const $password = document.getElementById("password");
const $loginBtn = document.getElementById("loginBtn");
const $signupLink = document.getElementById("signupLink");
const $alert = document.getElementById("alert");

// This is a function called alertDisplay
// It has 1 param called 'message'
// It's purpose is to display the message in the alert element
const alertDisplay = (message) => {
  $alert.textContent = message;
};

// This is an event listener that listens for a click on the login button
// It has 1 param called 'e'
$loginBtn.addEventListener("click", async (e) => {
  // We prevent the default behavior of the event
  e.preventDefault();
  // We set any previous alert text to an empty string
  $alert.textContent = "";
  // We get the values from the form
  const username = $username.value;
  const password = $password.value.trim();
  // We check if the username and password are empty
  if (!username || !password) {
    // If any of them are empty, we display an alert
    return alertDisplay("Username and password must be provided!");
  }

  try {
    // We send a POST request to the server with the username and password
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    // If the response is ok, we redirect the user to the home page
    if (response.ok) {
      location.href = `/`;
    } else {
      // If the response is not ok, we display an alert
      return alertDisplay("Incorrect username or password. Please try again!");
    }
  } catch (error) {
    console.log({ error });
  }
});
