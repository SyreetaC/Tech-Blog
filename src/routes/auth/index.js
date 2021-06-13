const { Router } = require("express");

const handleSignUp = require("../../controllers/auth/handleSignUp");
const handleLogin = require("../../controllers/auth/handleLogin");
const handleLogout = require("../../controllers/auth/handleLogout");

const router = Router();

router.post("/sign-up", handleSignUp);
router.post("/login", handleLogin);
router.post("/logout", handleLogout);

module.exports = router;
