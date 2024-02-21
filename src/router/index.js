const router = require("express").Router();

router.use("/api", require("./proxy"));

module.exports = router;
