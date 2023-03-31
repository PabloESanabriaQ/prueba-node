const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/fizzbuzz", controller.getResult);

module.exports = router;
