const handleLogout = (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.destroy(() => {
      return res.status(200).json({ data: "Logout successful" });
    });
  } else {
    return res.status(500).json({ error: "Failed to logout" });
  }
};

module.exports = handleLogout;
