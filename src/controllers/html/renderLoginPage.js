const renderLoginPage = (req, res) => {
  console.log("Is logged in?", req.session.loggedIn);
  res.render("login", { loggedIn: req.session.loggedIn });
};

module.exports = renderLoginPage;
