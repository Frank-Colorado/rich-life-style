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

module.exports = {
  displayHome,
};
