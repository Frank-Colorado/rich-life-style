const { User, Post, Comment } = require("../models");

// This is a function that displays the home page if the user is logged in, otherwise it redirects the user to the login page.
const displayDash = async (req, res) => {
  try {
    // We render the user_profile with the user's data from the session
    res.render("Dashboard", {
      username: req.session.username,
      loggedIn: req.session.logged_in,
      title: "Dashboard",
      heading: "User Dashboard",
    });
  } catch (err) {
    // Any server error will be handled by this catch
    res.status(500).json({ err });
    console.error({ err });
    console.log("Problem with displayHome in htmlController.js");
  }
};

// This is a function that displays the login page if the user is logged in, otherwise it redirects the user to the home page.
const displayLogin = (req, res) => {
  if (req.session.logged_in) {
    // We render the login page
    res.redirect("/");
    return;
  }
  res.render("login", {
    title: "Login",
    heading: "Login Page",
  });
};

// This is a function that displays the signup page
const displaySignUp = (req, res) => {
  res.render("Signup", {
    title: "Signup",
    heading: "Signup Page",
  });
};

// This is a function that displays the home page if the user is logged in, otherwise it redirects the user to the login page.
const displayHome = async (req, res) => {
  try {
    // Grab all posts from the Post model
    const postData = await Post.findAll();
    // Serialize the data so it can be used by handlebars
    const posts = postData.map((post) => post.get({ plain: true }));
    // Render the homepage with the posts data
    res.render("home", {
      posts,
      loggedIn: req.session.logged_in,
      title: "Home",
      heading: "Home Page",
    });
  } catch (err) {
    res.status(500).json({ err });
    console.error({ err });
    console.log("Problem with displayDashboard in htmlController.js");
  }
};

// This is a function that displays the forum page for a specific post
const displayForum = async (req, res) => {
  try {
    // Grab the post with the id from the url
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          // Include all the comments for the post if there are any
          model: Comment,
          attributes: [
            "id",
            "content",
            ["author", "commentAuthor"],
            "user_id",
            "post_id",
            "createdAt",
          ],
        },
      ],
    });
    // Serialize the data so it can be used by handlebars
    const post = postData.get({ plain: true });
    // Render the forum page with the post data
    res.render("forum", {
      loggedIn: req.session.logged_in,
      username: req.session.username,
      post,
      title: "Forum",
      heading: "Forum Page",
    });
  } catch (err) {
    res.status(500).json({ err });
    console.error({ err });
    console.log("Problem with displayForum in htmlController.js");
  }
};

module.exports = {
  displayHome,
  displayLogin,
  displayDash,
  displayForum,
  displaySignUp,
};
