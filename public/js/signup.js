const $signupForm = document.getElementById("signupForm");
const $signupBtn = document.getElementById("signupBtn");
const $username = document.getElementById("username");
const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $alert = document.getElementById("alert");

const alertDisplay = (message) => {
  // add the text to the element
  $alert.textContent = message;
};

const isValidUsername = (username) => {
  const re = new RegExp(/^[a-zA-Z0-9]+$/);
  return re.test(username);
};

$signupBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  $alert.textContent = "";
  const username = $username.value;
  const email = $email.value;
  const password = $password.value.trim();
  if (!username || !email || !password) {
    return alertDisplay("Username, email, and password must be provided!");
  }
  const validUsername = isValidUsername(username);
  if (!validUsername) {
    return alertDisplay("Username must contain only letters and numbers!");
  }

  try {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    if (response.ok) {
      location.href = `/`;
    } else {
      return alertDisplay("Username or email already exists!");
    }
  } catch (error) {
    alert(error);
  }
});
