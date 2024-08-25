const express = require("express");
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../Controller/product.controller");

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);

productRouter.post("/", addProduct);

productRouter.put("/:id", updateProduct);

productRouter.delete("/:id", deleteProduct);

module.exports = {
  productRouter,
};
