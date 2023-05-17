// This is a middleware function that we will use to restrict access to routes that require a user to be logged in
const withAuth = (req, res, next) => {
  // If the user is not logged in, we redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    // If the user is logged in, we call the next function
    next();
  }
};

module.exports = withAuth;
