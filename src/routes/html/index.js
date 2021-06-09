const { Router } = require("express");

const router = Router();

const renderHomePage = require("../../controllers/html/renderHomePage");

router.get("/", renderHomePage);

module.exports = router;
