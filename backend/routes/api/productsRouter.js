//const express = require('express');
import express from 'express';
const router = express.Router();
//const productController = require('../../controllers/productController');
import ProductController from "../../controllers/productController.js";

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.post('/', ProductController.createProduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

//module.exports = router;
export default router;
