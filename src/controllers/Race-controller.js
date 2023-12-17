const raceService = require("../services/Race-service");

class RaceController {
  static async findAllRaces(req, res) {
    try {
      const allRaces = await raceService.findAll();
      const { results } = allRaces;
      const raceResponse = []
      results.forEach(raceItem => {
        let {name, url} = raceItem;
        let raceId = url.match(/[0-9]+$/i)[0];
        raceResponse.push({name, raceId});
      })
        res.json({raceResponse});
    } catch (error) {
        res.json({error: error.message})
    }
  }
  
  static async findRaceById(req, res) {
    const id = req.params.id;
    const foundRace = await raceService.findById(id);
    const { index, name, speed, ability_bonuses, alignment, age } = foundRace
      res.json({index, name, speed, ability_bonuses, alignment, age})
  }
}

module.exports = RaceController;
