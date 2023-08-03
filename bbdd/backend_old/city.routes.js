const express = require("express");
const router = express.Router();
const cityController = require("./city.controller");
// Retrieve all citys
router.get("/", cityController.findAll);
// Create a new city
router.post("/", cityController.create);
// Retrieve a single city with id
router.get("/:id", cityController.findById);
// Update a city with id
router.put("/:id", cityController.update);
// Delete a city with id
router.delete("/:id", cityController.delete);

module.exports = router;
