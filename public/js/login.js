const $username = document.getElementById("username");
const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $loginBtn = document.getElementById("loginBtn");
const $signupBtn = document.getElementById("signupBtn");

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
      alert("Incorrect username or password");
    }
  } catch (error) {
    alert(error);
  }
});

$signupBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: $username.value,
        email: $email.value,
        password: $password.value.trim(),
      }),
    });
    const data = await response.json();
    location.reload();
  } catch (error) {
    alert(error);
  }
});
