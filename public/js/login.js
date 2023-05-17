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
      alert("Incorrect username or password");
    }
  } catch (error) {
    alert(error);
  }
});

$signupLink.addEventListener("click", () => {
  location.href = `/signup`;
});
