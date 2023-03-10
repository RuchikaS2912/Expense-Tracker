const express = require("express");
const router = express();
const categoryRoutes = require("./categoryRoutes");
const transactionRoutes = require("./transactionRoutes");

router.use("/", categoryRoutes);
router.use("/", transactionRoutes);

module.exports = router;
