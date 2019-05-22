'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('./middleware/error.js');
const notFound = require('./middleware/404.js');

// Routes
const categoriesRoutes = require('./routes/categories.js');
const productsRoutes = require('./routes/products.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/categories', categoriesRoutes);
app.use('/products', productsRoutes);

// Catchalls
app.use(notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port =>
    app.listen(port, () => console.log(`Server up on port ${port}`)),
};
