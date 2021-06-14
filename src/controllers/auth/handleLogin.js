const { User } = require("../../models");

const handleLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });

    if (!user) {
      console.log("User does not exist");
      return res.status(401).json({ error: "Failed to login" });
    }

    // const validPassword = await user.isPasswordValid(password);

    if (user.password !== password) {
      console.log("Invalid password");
      return res.status(404).json({ error: "Failed to login" });
    }

    req.session.save(() => {
      req.session.isLoggedIn = true;
      req.session.username = user.username;
      req.session.userId = user.id;

      return res.status(200).json({ data: "Login successful" });
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Failed to login" });
  }
};

module.exports = handleLogin;
