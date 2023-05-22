const $postForm = document.getElementById("postForm");
const $postTitle = document.getElementById("title");
const $postContent = document.getElementById("content");
const $postBtn = document.getElementById("postBtn");
const $alert = document.getElementById("alert");

// This is a function called allowPost
// It has no params
// It's purpose is to enable the post button if the title and content are not empty
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

  // We check to see if the title or content are empty
  if (title.length === 0 || content.length === 0) {
    // If either are empty, we display an alert
    return alertDisplay("Title and content must not be empty");
  }
  // We check the title length
  if (title.length > 50) {
    // If the title is too long, we display an alert
    return alertDisplay("Title must be less than 50 characters");
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
      alertDisplay("Post created!");
      // We reset the values of the form
      $postTitle.value = "";
      $postContent.value = "";
    } else {
      // If the response is not ok, we display an alert
      alertDisplay("Something went wrong. Please try again!");
    }
  } catch (error) {
    console.log({ error });
  }
});
