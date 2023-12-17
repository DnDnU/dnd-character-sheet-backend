const fetch = require('node-fetch');

const DND5E_API_URL = process.env.DND5E_API_URL || "http://dnd5eapi.co/api/";
const dnd5eApiClassesUrl = `${DND5E_API_URL}classes/`;

module.exports = {
    async findAll() {
      try {
        const options = { method: "GET", headers: {"Accept": "application/json"}}
        const url = dnd5eApiClassesUrl;
        const rawResponse = await fetch(url, options);
        const dndClasses = await rawResponse.json();
        console.log(dndClasses)
        return dndClasses;

      } catch (err) {
        return err
    }
  },
  
    async findById(id) {
      const url = `${dnd5eApiClassesUrl}${id}`;
      const rawResponse = await fetch(url);
      const dndClass = await rawResponse.json();
      return dndClass;
    }
};