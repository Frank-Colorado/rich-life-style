const displayHome = (req, res) => {
  res.render("login", {
    title: "Home",
    heading: "Home Page",
  });
};

module.exports = {
  displayHome,
};
