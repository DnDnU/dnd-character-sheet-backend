const fetch = require('node-fetch');

const DND5E_API_URL = process.env.DND5E_API_URL || "http://dnd5eapi.co/api/";
const dnd5eApiRacesUrl = `${DND5E_API_URL}races/`;

module.exports = {
    async findAll() {
        try {
            const options = { method: "GET", headers: {"Accept": "application/json"}}
            const url = dnd5eApiRacesUrl;
            const rawResponse = await fetch(url, options);
            const races = await rawResponse.json();
            return races;

        } catch (err) {
            return err
        }
    },
    
    async findById(id) {
        const url = `${dnd5eApiRacesUrl}${id}`
        const rawResponse = await fetch(url); 
        const race = await rawResponse.json();
        return race;
    }
}
