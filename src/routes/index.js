const { Router } = require("express");
const html = require("./html");
const api = require("./api");
const auth = require("./auth");

const router = Router();

router.use("/api", api);
router.use("./auth", auth);
router.use("/", html);

module.exports = router;
