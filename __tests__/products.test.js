'use strict';

const Product = require('../src/models/products.js');
const product = new Product();

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Product Model', () => {
  it('can post() a new product', () => {
    let obj = { name: 'Genius 700 Tuned' };
    let tranformedObject = { name: 'SCOTT Genius 700 Tuned' };
    return product.post(obj).then(record => {
      Object.keys(obj).forEach(key => {
        expect(record[key]).toEqual(tranformedObject[key]);
      });
    });
  });

  it('can get() a product', () => {
    let obj = { name: 'Genius 700 Tuned' };
    let tranformedObject = { name: 'SCOTT Genius 700 Tuned' };
    return product.post(obj).then(record => {
      return product.get(record._id).then(product => {
        Object.keys(obj).forEach(key => {
          expect(product[0][key]).toEqual(tranformedObject[key]);
        });
      });
    });
  });

  it('can put() a product', () => {
    let obj = { name: 'Genius 700 Tuned' };
    let modifiedObj = { name: 'Genius 710' };
    return product.post(obj).then(record => {
      return product.put(record._id, modifiedObj).then(() => {
        return product.get(record._id).then(product => {
          Object.keys(obj).forEach(key => {
            expect(product[0][key]).toEqual(modifiedObj[key]);
          });
        });
      });
    });
  });

  it('can delete() a product', () => {
    let obj = { name: 'Genius 700 Tuned' };
    return product.post(obj).then(record => {
      return product.delete(record._id).then(() => {
        expect(Object.values(obj).includes(record._id)).toBeFalsy();
      });
    });
  });
});
