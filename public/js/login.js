const $loginForm = document.getElementById("loginForm");
const $username = document.getElementById("username");
const $password = document.getElementById("password");
const $loginBtn = document.getElementById("loginBtn");
const $signupLink = document.getElementById("signupLink");

$loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const username = $username.value;
  const password = $password.value.trim();
  if (!username || !password) {
    return alert("Username and password must be provided");
  }

  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
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
    alert(error);
  }
});

$signupLink.addEventListener("click", () => {
  location.href = `/signup`;
});
