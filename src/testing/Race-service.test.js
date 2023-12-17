const RaceSerivce = require("../services/Race-service");
const RaceController = require("../controllers/Race-controller");

describe("Races API Calls", () => {
  test("findAll should return an object with all races", () => {
    RaceSerivce.findAll = jest.fn(() => { });
    RaceController.findAllRaces();
    expect(RaceSerivce.findAll).toHaveBeenCalledTimes(1);
  });
});
describe("Races API Calls", () => {
  test("findById should return a particular race", () => {
    RaceSerivce.findById = jest.fn(() => []);
    RaceController.findRaceById(2);
    expect(RaceSerivce.findById).toHaveBeenCalledTimes(1);
  });
});


//My setup would look a little like this
RaceService.findAll.mockImplementationOnce(() => Promise.resolve())
//this mocks the implementation of the serrvice, it may need some tweaking because I'm not completely familiar with your application