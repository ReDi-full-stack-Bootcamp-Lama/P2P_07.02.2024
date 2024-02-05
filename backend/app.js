const express = require('express');
const app = express();

// Import routes for users and products
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the usersRouter at /api/users
app.use('/api/users', usersRouter);

// Mount the productsRouter at /api/products
app.use('/api/products', productsRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
