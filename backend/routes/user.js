const express = require("express");
const router = new express.Router();
const User = require("../model/userModel");
// create user
router.post("/users/add", async (req, res) => {
  const user = new User(req.body);
  console.log(user);
  try {
    await user.save();
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = User;
