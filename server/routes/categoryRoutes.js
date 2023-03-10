const express = require("express");
const {
  getCategory,
  postCategory,
  getLabels,
} = require("../controller/categoryController");
const categoryRouter = express.Router();

categoryRouter.get("/categories", getCategory);
categoryRouter.post("/categories", postCategory);

module.exports = categoryRouter;
