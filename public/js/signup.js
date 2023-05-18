const $signupForm = document.getElementById("signupForm");
const $signupBtn = document.getElementById("signupBtn");
const $username = document.getElementById("username");
const $email = document.getElementById("email");
const $password = document.getElementById("password");

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
      // create a new element
      const alert = document.createElement("p");
      // add the text to the element
      alert.textContent = "Username or email already exists!";
      // add the color red to the text

      alert.style.color = "red";
      // add the element to the page
      $signupForm.appendChild(alert);
    }
  } catch (error) {
    alert(error);
  }
});
