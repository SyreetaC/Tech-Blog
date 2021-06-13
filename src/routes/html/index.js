const { Router } = require("express");

const renderHomePage = require("../../controllers/html/renderHomePage");
const renderLoginPage = require("../../controllers/view/renderLoginPage");
const renderSignupPage = require("../../controllers/view/renderSignupPage");
const renderDashboardPage = require("../../controllers/view/renderDashboardPage");
const renderPostPage = require("../../controllers/view/renderPostPage");
const renderCreatePostPage = require("../../controllers/view/renderCreatePostPage");

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
