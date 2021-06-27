const { Router } = require("express");

const renderHomePage = require("../../controllers/html/renderHomePage");
const renderLoginPage = require("../../controllers/html/renderLoginPage");
const renderSignUpPage = require("../../controllers/html/renderSignUpPage");

const router = Router();

router.get("/sign-up", renderSignUpPage);
router.get("/login", renderLoginPage);
router.get("/", renderHomePage);

module.exports = router;
