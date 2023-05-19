const $postForm = document.getElementById("postForm");
const $postTitle = document.getElementById("postTitle");
const $postContent = document.getElementById("postContent");
const $postBtn = document.getElementById("postBtn");
const $alert = document.getElementById("alert");

// create a function that will check the length of the title and content
// if the length is greater than 0, enable the button
// if the length is 0, disable the button
const allowPost = () => {
  if ($postTitle.value.length > 0 && $postContent.value.length > 0) {
    $postBtn.disabled = false;
  } else {
    $postBtn.disabled = true;
  }
};

document.addEventListener("input", allowPost);

// This is a function called alertDisplay
// It has 1 param called 'message'
// It's purpose is to display the message in the alert element
const alertDisplay = (message) => {
  $alert.textContent = message;
};

// This is an event listener that listens for a click on the create post button
// It has 1 param called 'e'
$postBtn.addEventListener("click", async (e) => {
  // We prevent the default behavior of the event
  e.preventDefault();
  // We set any previous alert text to an empty string
  $alert.textContent = "";
  // We get the values from the form
  const title = $postTitle.value;
  const content = $postContent.value;
  // We check if the title and content are empty
  if (!title || !content) {
    // If any of them are empty, we display an alert
    return alertDisplay("Title and content must be provided!");
  }

  try {
    // We send a POST request to the server with the title and content
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    // If the response is ok, we display an alert telling them the post was created
    if (response.ok) {
      return alertDisplay("Post created!");
    } else {
      // If the response is not ok, we display an alert
      return alertDisplay("Something went wrong. Please try again!");
    }
  } catch (error) {
    console.log({ error });
  }
});
