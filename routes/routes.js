const express = require("express");
const {
  getAllBootcamp,
  getSingleBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controller/controller.bootcamp");
const route = express.Router();

route
  .route("/")
  .get(getAllBootcamp)
  .post(createBootcamp);

route
  .route("/:id")
  .get(getSingleBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = route;
