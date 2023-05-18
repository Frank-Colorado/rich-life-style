const $signupForm = document.getElementById("signupForm");
const $signupBtn = document.getElementById("signupBtn");
const $username = document.getElementById("username");
const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $alert = document.getElementById("alert");

// This is a function called alertDisplay
// It has 1 param called 'message'
// It's purpose is to display the message in the alert element
const alertDisplay = (message) => {
  $alert.textContent = message;
};

// This is a function called isValidUsername
// It has 1 param called 'username'
// It's purpose is to check if the username is valid using RegEx
const isValidUsername = (username) => {
  // Regex for alphanumeric characters
  const re = new RegExp(/^[a-zA-Z0-9]+$/);
  // We return the result of testing the username against the regex
  return re.test(username);
};

// This is an event listener that listens for a click on the signup button
// It has 1 param called 'e'
$signupBtn.addEventListener("click", async (e) => {
  // We prevent the default behavior of the event
  e.preventDefault();
  // We set any previous alert text to an empty string
  $alert.textContent = "";
  // We get the values from the form
  const username = $username.value;
  const email = $email.value;
  const password = $password.value.trim();
  // We check if the username, email, and password are empty
  if (!username || !email || !password) {
    // If any of them are empty, we display an alert
    return alertDisplay("Username, email, and password must be provided!");
  }
  // We check if the username is valid
  const validUsername = isValidUsername(username);
  // If the username is not valid, we display an alert
  if (!validUsername) {
    return alertDisplay("Username must contain only letters and numbers!");
  }
  try {
    // We send a POST request to the server with the username, email, and password
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    // If the response is ok, we redirect the user to the home page
    if (response.ok) {
      location.href = `/`;
    } else {
      // If the response is not ok, we display an alert
      return alertDisplay("Username or email already exists!");
    }
  } catch (error) {
    // If anything goes wrong, we log the error
    console.log({ error });
  }
});
