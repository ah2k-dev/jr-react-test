const express = require("express");
const router = express.Router();
const proxy = require("../controllers/proxy");
const restrictAccess = require("../middleware/restrictAccess");

router.get("/", proxy);

module.exports = router;
