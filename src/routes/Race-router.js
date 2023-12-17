const express = require("express");
const router = express.Router();
const raceController = require('../controllers/Race-controller');

//GET all races
router.get("/all", raceController.findAllRaces);

//GET single races
router.get("/:id", raceController.findRaceById);

module.exports = router;
