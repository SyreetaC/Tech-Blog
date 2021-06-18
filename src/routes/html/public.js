const { Router } = require("express");

const renderHomePage = require("../../controllers/html/renderHomePage");
const renderLoginPage = require("../../controllers/html/renderLoginPage");
const renderSignupPage = require("../../controllers/html/renderSignupPage");

const router = Router();

router.get("/sign-up", renderSignupPage);
router.get("/login", renderLoginPage);
router.get("/", renderHomePage);

module.exports = router;
