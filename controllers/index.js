const router = require("express").Router();

const userDetailsController = require("./userDetailsController");

router.use("/userDetails", userDetailsController);

module.exports = router;