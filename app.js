var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
var d20 = require("d20");

const classRouter = require("./src/routes/Class-router");
const raceRouter = require("./src/routes/Race-router");
const diceRouter = require("./src/routes/Dice-router");

const app = express();
app.use(cors());
app.use("/classes", classRouter);
app.use("/races", raceRouter);
app.use("/roll", diceRouter);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// fetch("http://dnd5eapi.co/api/ability-scores/2", {
//      method: "GET"
// }).then(response => response.json()).then(json => {
//     console.log(json)
// })

app.listen(4000, () => {
  console.log("aye we here");
});
