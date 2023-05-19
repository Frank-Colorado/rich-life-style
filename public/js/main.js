const $dropdownBtn = document.getElementById("dropdownBtn");
const $dropdownMenu = document.getElementById("dropdownMenu");
const $logoutBtn = document.getElementById("logoutBtn");

// This is an event listener that listens for a click on the dropdown button
$dropdownBtn.addEventListener("click", () => {
  // We toggle the show class on the dropdown menu
  $dropdownMenu.classList.toggle("show");
});

// This is an event listener that listens for a click on the logout button
$logoutBtn.addEventListener("click", async () => {
  try {
    // We send a GET request to the server to logout the user
    const response = await fetch("/api/users/logout", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    // If the response is ok, we redirect the user to the login page
    if (response.ok) {
      location.href = `/login`;
    }
  } catch (error) {
    console.log({ error });
  }
});
