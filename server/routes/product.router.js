/* eslint-disable no-undef */
const router = require("express").Router();
const productController = require("../controllers/product.controller");

router.get("/products", productController.getProducts);

module.exports = router;
