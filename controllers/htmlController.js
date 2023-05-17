const { User } = require("../models");

// This is a function that displays the home page if the user is logged in, otherwise it redirects the user to the login page.
const displayHome = async (req, res) => {
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
    res.render("home", {
      user,
      title: "Home",
      heading: "Home Page",
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

const displayDash = (req, res) => {
  res.render("dashboard", {
    title: "Dashboard",
    heading: "Dashboard Page",
  });
};

const displayForum = (req, res) => {
  res.render("forum", {
    title: "Forum",
    heading: "Forum Page",
  });
};


module.exports = {
  displayHome,
  displayLogin,
  displayDash,
  displayForum,
  displaySignUp
};
