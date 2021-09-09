const express = require("express");
const { createNewProduct, getProductById, getProductByPrice , updateProductById } = require("../controllers/product")
const productRouter = express.Router();
productRouter.post("/", createNewProduct);
productRouter.get("/byprice", getProductByPrice)
productRouter.get("/:id", getProductById)
productRouter.put("/:id", updateProductById )
productRouter.delete("",  )

module.exports = productRouter;