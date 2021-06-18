const { Router } = require("express");

const auth = require("../../middleware/auth");
const publicRoute = require("./public");
const privateRoute = require("./private");

const router = Router();

router.use(publicRoute);
router.use(auth, privateRoute);

//REFACTOR ROUTERS TO PUBLIC AND PRIVATE!

module.exports = router;
