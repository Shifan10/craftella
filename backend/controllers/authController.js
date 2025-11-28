const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.signup = async (req, res) => {
  let check = await User.findOne({ email: req.body.email });
  if (check) return res.status(400).json({ success: false, errors: "User already exists" });

  const cart = {};
  for (let i = 0; i < 300; i++) cart[i] = 0;

  const user = new User({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const token = jwt.sign({ user: { id: user.id } }, 'secret_ecom');
  res.json({ success: true, token });
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || req.body.password !== user.password)
    return res.status(400).json({ success: false, errors: "Invalid credentials" });

  const token = jwt.sign({ user: { id: user.id } }, 'secret_ecom');
  res.json({ success: true, token });
};