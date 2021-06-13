const { Router } = require("express");

const renderHomePage = require("../../controllers/html/renderHomePage");
const renderLoginPage = require("../../controllers/html/renderLoginPage");
const renderSignupPage = require("../../controllers/html/renderSignupPage");
const renderDashboardPage = require("../../controllers/html/renderDashboardPage");
const renderPostPage = require("../../controllers/html/renderPostPage");
const renderCreatePostPage = require("../../controllers/html/renderCreatePostPage");

const router = Router();

router.get("/sign-up", renderSignupPage);
router.get("/login", renderLoginPage);
// add auth middleware here
router.get("/dashboard", renderDashboardPage);
// add auth middleware here
router.get("/posts/:id", renderPostPage);
// add auth middleware here
router.get("/create-post", renderCreatePostPage);

router.get("/", renderHomePage);

module.exports = router;
