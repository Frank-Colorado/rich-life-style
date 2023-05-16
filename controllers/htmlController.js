const displayHome = (req, res) => {
  res.render("login", {
    title: "Home",
    heading: "Home Page",
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
  displayDash,
  displayForum,
};

