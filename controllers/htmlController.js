const { User, Post, Comment } = require("../models");

// This is a function that displays the home page if the user is logged in, otherwise it redirects the user to the login page.
const displayDash = async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findOne({
      // We specify that we don't want the user's password to be returned
      attributes: { exclude: ["password"] },
      where: { id: req.session.user_id },
    });
    // We modify the userData so it can be used by handlebars
    const user = userData.get({ plain: true });
    // We render the user_profile with the user's data
    res.render("Dashboard", {
      user,
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

const displaySignUp = (req, res) => {
  res.render("Signup", {
    title: "Signup",
    heading: "Signup Page",
  });
};

const displayHome = async (req, res) => {
  try {
    // Grab all posts from the Post model
    const postData = await Post.findAll();
    // Serialize the data so it can be used by handlebars
    const posts = postData.map((post) => post.get({ plain: true }));
    // Render the homepage with the posts data
    res.render("home", {
      posts,
      title: "Home",
      heading: "Home Page",
    });
  } catch (err) {
    res.status(500).json({ err });
    console.error({ err });
    console.log("Problem with displayDashboard in htmlController.js");
  }
};

const displayForum = async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ["id", "content", "user_id", "post_id", "created_at"],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("forum", {
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
