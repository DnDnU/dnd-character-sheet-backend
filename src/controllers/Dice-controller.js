const diceService = require("../services/Dice-service");

class diceController {
  static roll(req, res) {
    try {
      const { die } = req.params;
      const amount = req.params.amount || "1";
      const rollValueArray = diceService.rollDice(die, amount);
      res.json({ roll: rollValueArray });
    } catch (error) {
      res.json({ error });
    }
  }
}

module.exports = diceController;
