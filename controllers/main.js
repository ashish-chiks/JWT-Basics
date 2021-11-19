const customAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new customAPIError("Please Provide username and email address", 400);
  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.json({ msg: "success", token: token });
};

const dashboard = async (req, res) => {
  const info = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `Secret Info is ${info}`,
  });
};

module.exports = {
  login,
  dashboard,
};
