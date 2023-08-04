/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Product = require("../models/product.model");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send({ data: products });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: `Internal Server Error` });
  }
};
