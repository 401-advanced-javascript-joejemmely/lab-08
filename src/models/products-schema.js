'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: { type: String, required: true },
  // TODO: 'bind' the category using ObjectId
  //category_id: { type: 'ObjectId' },
});

// Prepend SCOTT to the product name
products.pre('save', function(next) {
  this.name = `SCOTT ${this.name}`;
  next();
});

module.exports = mongoose.model('products', products);
