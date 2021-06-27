const { Router } = require("express");
const renderDashboardPage = require("../../controllers/html/renderDashboardPage");
const renderPostPage = require("../../controllers/html/renderPostPage");
const renderCreatePostPage = require("../../controllers/html/renderCreatePostPage");
const renderEditPost = require("../../controllers/html/renderEditPost");

const router = Router();

// add auth middleware here
router.get("/dashboard", renderDashboardPage);
// add auth middleware here
router.get("/posts/:id", renderPostPage);
// add auth middleware here
router.get("/create-post", renderCreatePostPage);
// add auth middleware here
router.get("/posts/:id/edit", renderEditPost);

module.exports = router;
