const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
// @desc    Register new user
// @route   /api/users
// @access  Public
const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("fields are required");
  }

  //find if user exists
  const userExsits = await User.findOne({ email });
  if (userExsits) {
    res.status(400);
    throw new Error("user already exist!");
  }

  //hash pass
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    name,
    email,
    password: hashedPass,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("cannot create user");
  }
});

// @desc    Login a user
// @route   /api/users/login
// @access  Public
const userLogin = asyncHandler(async (req, res) => {
  res.send("login route");
});

module.exports = {
  userRegister,
  userLogin,
};
