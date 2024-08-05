const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

let gumballs = [
  { message: "You've got this! Don't give up!", color: "#fff" },
  { message: "You're doing great! Keep going!", color: "#fff" },
  { message: "You're amazing! Keep it up!", color: "#fff" },
];

app.post("/add-gumball", (req, res) => {
  const { message, color } = req.body;
  gumballs.push({ message, color });
  res.send("Gumball added...");
  console.log("Gumball added:", message, "Color:", color);
});

app.get("/random-gumball", (req, res) => {
  let randomIndex = Math.floor(Math.random() * gumballs.length);
  let randomGumball = gumballs[randomIndex];
  res.send({ message: randomGumball.message, color: randomGumball.color });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
