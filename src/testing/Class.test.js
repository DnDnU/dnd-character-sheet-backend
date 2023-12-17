//class service test

const dndClass = require("../services/Class-service");
const dndClassController = require("../controllers/Class-controller");

describe("dndClass API gets called", () => {
    test("findBYID should return object with all dnd classes", () => {
        dndClass.findAll = jest.fn(() => []);
        dndClassController.findAllClasses();
        expect(dndClass.findAll).toHaveBeenCalled();

    })
});


