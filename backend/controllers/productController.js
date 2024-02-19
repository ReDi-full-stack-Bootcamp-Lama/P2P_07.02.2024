import Product from "../models/Product.js";

const ProductController = {
  // GET ALL
  getAllProducts: async (req, res) => {
    try {
      const productList = await Product.find({});
      res.status(200).json(productList); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failure`});
    }
  },

  // GET:ID
  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found." });
      }
      res.status(200).json(product); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - product request failure`});
    }
  },

  // POST
  createProduct: async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);  
      res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - product registration failure` });  
    }
  },

  // PUT
  updateProduct: async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found." });
      }
      res.status(200).json({ message: "Product updated successfully", product: updatedProduct }); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - product update failure`});
    }
  },

  // DELETE
  deleteProduct: async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found." });
      }
      res.status(200).json({ message: "Product deleted successfully" }); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - product delete failure`});
    }
  },

};

export default ProductController;


/* const fs = require('fs');
const path = require('path');

const productsDataPath = path.join(__dirname, '../data/products.json');


// Controller methods
exports.getAllProducts = (req, res) => {
    fs.readFile(productsDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading products data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        const products = JSON.parse(data).products;
        return res.json(products);
    });
};

exports.getProductById = (req, res) => {
    const productId = parseInt(req.params.id);

    fs.readFile(productsDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading products data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        const products = JSON.parse(data).products;
        const product = products.find(product => product.id === productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    });
};

exports.createProduct = (req, res) => {
    fs.readFile(productsDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading products data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        const products = JSON.parse(data).products;
        const newProduct = req.body;

        // Generate a unique ID for the new product
        const productId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
        newProduct.id = productId;

        // Add the new product to the products array
        products.push(newProduct);

        // Write the updated products array back to the file
        fs.writeFile(productsDataPath, JSON.stringify({ products }), 'utf8', (err) => {
            if (err) {
                console.error('Error writing products data:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            res.status(201).json(newProduct); // Return the newly created product
        });
    });
};

exports.updateProduct = (req, res) => {
    const productId = parseInt(req.params.id);
    const updatedProduct = req.body;

    fs.readFile(productsDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading products data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        let products = JSON.parse(data).products;
        const index = products.findIndex(product => product.id === productId);

        if (index === -1) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Update the product with the new data
        products[index] = { ...products[index], ...updatedProduct };

        // Write the updated products array back to the file
        fs.writeFile(productsDataPath, JSON.stringify({ products }), 'utf8', (err) => {
            if (err) {
                console.error('Error writing products data:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            res.json(products[index]); // Return the updated product
        });
    });
};

exports.deleteProduct = (req, res) => {
    const productId = parseInt(req.params.id);

    fs.readFile(productsDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading products data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        let products = JSON.parse(data).products;
        const index = products.findIndex(product => product.id === productId);

        if (index === -1) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Remove the product from the products array
        const deletedProduct = products.splice(index, 1)[0];

        // Write the updated products array back to the file
        fs.writeFile(productsDataPath, JSON.stringify({ products }), 'utf8', (err) => {
            if (err) {
                console.error('Error writing products data:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            res.json(deletedProduct); // Return the deleted product
        });
    });
};
 */