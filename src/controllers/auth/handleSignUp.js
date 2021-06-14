const { User } = require("../../models");

const handleSignUp = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username && password) {
      await User.create({
        username: username,
        password: password,
      });

      return res.redirect("/login");
    }

    return res.status(400).json({ error: "Failed to create user" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "Failed to create user" });
  }
};

module.exports = handleSignUp;
