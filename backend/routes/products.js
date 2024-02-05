/* const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Path to the JSON file containing product data
const productDataPath = path.join(__dirname, '../data/products.json');

// Get all products
router.get('/', (req, res) => {
    fs.readFile(productDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading product data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        const products = JSON.parse(data).products;
        res.json(products);
    });
});

// Get a single product by ID
router.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id);

    fs.readFile(productDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading product data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        const products = JSON.parse(data).products;
        const product = products.find(product => product.id === productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    });
});

// Other routes for creating, updating, and deleting products...
// Create a new product
router.post('/', (req, res) => {
    const { img, name, desc, price, year } = req.body;

    if (!img || !name || !desc || !price || !year) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    fs.readFile(productDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading product data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        const products = JSON.parse(data).products;
        const newProduct = { id: products.length + 1, img, name, desc, price, year };
        products.push(newProduct);

        fs.writeFile(productDataPath, JSON.stringify({ products }, null, 2), (err) => {
            if (err) {
                console.error('Error writing product data:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            res.status(201).json(newProduct);
        });
    });
});

// Update a product by ID
router.put('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { img, name, desc, price, year } = req.body;

    fs.readFile(productDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading product data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        let products = JSON.parse(data).products;
        const productIndex = products.findIndex(product => product.id === productId);

        if (productIndex === -1) {
            return res.status(404).json({ message: 'Product not found' });
        }

        products[productIndex] = { id: productId, img, name, desc, price, year };

        fs.writeFile(productDataPath, JSON.stringify({ products }, null, 2), (err) => {
            if (err) {
                console.error('Error writing product data:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            res.json(products[productIndex]);
        });
    });
});

// Delete a product by ID
router.delete('/:id', (req, res) => {
    const productId = parseInt(req.params.id);

    fs.readFile(productDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading product data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        let products = JSON.parse(data).products;
        const productIndex = products.findIndex(product => product.id === productId);

        if (productIndex === -1) {
            return res.status(404).json({ message: 'Product not found' });
        }

        products.splice(productIndex, 1);

        fs.writeFile(productDataPath, JSON.stringify({ products }, null, 2), (err) => {
            if (err) {
                console.error('Error writing product data:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            res.json({ message: 'Product deleted successfully' });
        });
    });
});


module.exports = router;
 */
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
