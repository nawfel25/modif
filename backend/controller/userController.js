const userRegister = (req, res) => {
  res.send("registration route");
};

const userLogin = (req, res) => {
  res.send("login route");
};

module.exports = {
  userRegister,
  userLogin,
};
