$signupBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const username = $username.value;
  const email = $email.value;
  const password = $password.value.trim();
  if (!username || !email || !password) {
    return alert("Username, email and password must be provided");
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
      alert("Username or email already exists");
    }
  } catch (error) {
    alert(error);
  }
});
