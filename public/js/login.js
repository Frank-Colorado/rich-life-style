const $username = document.getElementById("username");
const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $loginBtn = document.getElementById("loginBtn");
const $signupBtn = document.getElementById("signupBtn");

$loginBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const username = $username.value;
  const password = $password.value.trim();

  if (!username || !password) {
    return alert("Username and password must be provided");
  }

  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    location.href = `/`;
  } catch (error) {
    alert(error);
  }
});

$logoutBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("/api/users/logout", {
      method: "POST",
    });
    const data = await response.json();
    location.reload();
  } catch (error) {
    alert(error);
  }
});
