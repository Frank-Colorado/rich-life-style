const $commentBtn = document.getElementById("commentBtn");
const $commentInput = document.getElementById("commentInput");
const $alert = document.getElementById("alert");

// This is a function called allowPost
// It has 1 param called 'message'
// It's purpose is to display the message in the alert element
const alertDisplay = (message) => {
  $alert.textContent = message;
};

// This is an event listener that listens for a click on the create comment button
// It has 1 param called 'e'
$commentBtn.addEventListener("click", async (e) => {
  // We prevent the default behavior of the event
  e.preventDefault();
  // We set any previous alert text to an empty string
  $alert.textContent = "";
  // We set the comment input to an empty string
  $commentInput.value = "";
  // We get the value from the comment input
  const content = $commentInput.value;
  // We get the data-id from the comment button
  const post_id = $commentBtn.getAttribute("data-id");
  // We check if the comment is empty
  if (!comment) {
    // If it is empty, we display an alert
    return alertDisplay("Comment must be provided!");
  }
  try {
    // We send a POST request to the server with the comment and post_id
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content,
        post_id,
      }),
    });
    // If the response is ok, we display an alert telling them the comment was created
    if (response.ok) {
      // The page is reloaded to display the new comment
      location.reload();
    } else {
      // If the response is not ok, we display an alert
      alertDisplay("Something went wrong. Please try again!");
    }
  } catch (err) {
    console.error({ err });
    alertDisplay("Something went wrong. Please try again!");
  }
});
