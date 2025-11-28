const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const fetchuser = require("../middleware/authMiddleware");

router.get("/allproducts", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

router.get("/newcollections", async (req, res) => {
  const products = await Product.find({});
  res.send(products.slice(-8));
});

router.get("/popularinwomen", async (req, res) => {
  const products = await Product.find({ category: "Home & Living" });
  res.send(products.slice(0, 4));
});

router.post("/relatedproducts", async (req, res) => {
  const products = await Product.find({ category: req.body.category });
  res.send(products.slice(0, 4));
});

router.post("/addproduct", async (req, res) => {
  const products = await Product.find({});
  const id = products.length ? products[products.length - 1].id + 1 : 1;

  const product = new Product({ id, ...req.body });
  await product.save();
  res.json({ success: true, name: req.body.name });
});

router.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({ success: true });
});

module.exports = router;