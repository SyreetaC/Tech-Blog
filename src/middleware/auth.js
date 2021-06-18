const auth = (req, res, next) => {
  if (req.session.isLoggedIn) {
    console.log(
      `${req.session.username} is logged in with ID ${req.session.userId}`
    );
    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = auth;
