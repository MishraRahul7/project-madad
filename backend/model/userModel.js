const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    trim: true,
  },
  lname: {
    type: String,
    trim: true,
  },
  ftrname: {
    type: String,
    trim: true,
  },
  mtrname: {
    type: String,
    trim: true,
  },
  dob: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
    lowercase: true,
  },
  occupation: {
    type: String,
    trim: true,
  },
  bloodgroup: {
    type: String,
    trim: true,
  },
  add1: {
    type: String,
    trim: true,
  },
  add2: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  dist: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  zipcode: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
