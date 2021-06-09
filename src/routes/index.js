const { Router } = require("express");
const html = require("./html");
const router = Router();

// router.use("/api", apiRoutes);
// router.use("./auth", authRoutes);
router.use("/", html);

module.exports = router;
