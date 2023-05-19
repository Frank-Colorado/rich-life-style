const $dropdownBtn = document.getElementById("dropdownBtn");
const $dropdownMenu = document.getElementById("dropdownMenu");
const $logoutBtn = document.getElementById("logoutBtn");

// This is an event listener that listens for a click on the dropdown button
$dropdownBtn.addEventListener("click", () => {
  // We toggle the show class on the dropdown menu
  $dropdownMenu.classList.toggle("show");
});
