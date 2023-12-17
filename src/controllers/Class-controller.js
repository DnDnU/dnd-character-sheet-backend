const classService = require("../services/Class-service");

class ClassController {
  static async findAllClasses(req, res) {
    try {
      const allClasses = await classService.findAll();
      const { results } = allClasses;
      const classResponse = []
      results.forEach(classItem => {
        let {name, url} = classItem;
        let classId = url.match(/[0-9]?$/i)[0];
        classResponse.push({name, classId});
      })
      res.json({ classResponse });
    } catch (error) {
      res.json({error: error.message})   
    }
  }

  static async findClassById(req, res) {
    const id = req.params.id;
    const foundClass = await classService.findById(id);
    const { index, name, hit_die } = foundClass
    res.json({ index, name, hit_die });
  }
}

module.exports = ClassController;