const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

let gumballs = [
  "You've got this! Don't give up!",
  "You're doing great! Keep going!",
  "You're amazing! Keep it up!",
];

app.post("/add-gumball", (req, res) => {
  gumballs.push(req.body.message);
  res.send("Gumball added...");
});

app.get("/random-gumball", (req, res) => {
  let randomIndex = Math.floor(Math.random() * gumballs.length);
  res.send({ gumball: gumballs[randomIndex] });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
