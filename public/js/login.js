const $loginForm = document.getElementById("loginForm");
const $username = document.getElementById("username");
const $password = document.getElementById("password");
const $loginBtn = document.getElementById("loginBtn");
const $signupLink = document.getElementById("signupLink");

// This is an event listener that listens for a click on the login button
// It has 1 param called 'e'
$loginBtn.addEventListener("click", async (e) => {
  // We prevent the default behavior of the event
  e.preventDefault();
  // We get the values from the form
  const username = $username.value;
  const password = $password.value.trim();
  // We check if the username and password are empty
  if (!username || !password) {
    // If any of them are empty, we display an alert
    return alert("Username and password must be provided");
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
      // create a new element
      const alert = document.createElement("p");
      // add the text to the element
      alert.textContent = "Incorrect Username or Password!";
      // add the color red to the text

      alert.style.color = "red";
      // add the element to the page
      $loginForm.appendChild(alert);
    }
  } catch (error) {
    console.log({ error });
  }
});

$signupLink.addEventListener("click", () => {
  location.href = `/signup`;
});
