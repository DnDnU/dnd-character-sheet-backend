// github.com/michaelenger/d20.js
const d20 = require('d20');

module.exports = {
    rollDice(die, amount) {
        try {
            const roll = d20.verboseRoll(`${amount}${die}`)
            return roll;

        } catch (error) {
            return error.message;
        }
    }
}
