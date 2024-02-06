const express = require('express');
const app = express();
const cors = require('cors');

// Import routes for users and products
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3001', // Allow requests from this origin
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
  }));
  
app.use(express.static('public'));
app.disable('etag');


// Mount the usersRouter at /api/users
app.use('/api/users', usersRouter);

// Mount the productsRouter at /api/products
app.use('/api/products', productsRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
