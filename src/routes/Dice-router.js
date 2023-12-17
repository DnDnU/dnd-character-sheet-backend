const express = require("express");
const router = express.Router();
const diceController = require('../controllers/Dice-controller');

router.get("/:die/:amount?/", diceController.roll);

module.exports = router