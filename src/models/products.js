'use strict';
const schema = require('./products-schema.js');

class Products {
  constructor() {
    this.database = [];
  }

  get(_id) {
    let queryObject = _id ? { _id } : {};
    return schema.find(queryObject);
  }

  post(record) {
    let newRecord = new schema(record);
    return newRecord.save();
  }

  put(_id, entry) {
    return schema.findByIdAndUpdate(_id, entry, { new: true });
  }

  delete(_id) {
    let queryObject = _id ? { _id } : {};
    return schema.deleteOne(queryObject);
  }
}

module.exports = Products;
