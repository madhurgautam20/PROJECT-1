const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/demo");

  console.log("db connected");
}
const userSchema = new mongoose.Schema({
  name: String,
  age: String,
  email: String,
  phone: String,
});
const User = mongoose.model("User", userSchema);

const server = express();
server.use(cors());
server.use(bodyParser.json());

server.post("/demo", async (req, res) => {
  let user = new User();
  user.name = req.body.name; //req.body is from frontend and name is that particular string from react but we can change name of user.name if we want to save with diff name then we do this in this way
  user.age = req.body.age;
  user.email = req.body.email;
  user.phone = req.body.phone;

  const doc = await user.save();
  console.log(doc); 
  res.json(doc);
});

server.listen(8080, () => {
  console.log("server started");
});
