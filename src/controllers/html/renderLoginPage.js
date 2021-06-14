const renderLoginPage = (req, res) => {
  res.render("login", { loggedIn: req.session.isLoggedIn });
};

module.exports = renderLoginPage;
