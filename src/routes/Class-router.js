const express = require("express");
const router = express.Router();
const classController = require('../controllers/Class-controller');

//GET all classes
router.get("/all", classController.findAllClasses);

//GET single class
router.get("/:id", classController.findClassById);

module.exports = router;