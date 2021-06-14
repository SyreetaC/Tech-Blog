const renderLoginPage = (req, res) => {
  console.log("Is logged in?", req.session.isLoggedIn);
  res.render("login", { loggedIn: req.session.isLoggedIn });
};

module.exports = renderLoginPage;
