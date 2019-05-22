'use strict';

const Categories = require('../src/models/categories.js');
const category = new Categories();

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('categories Model', () => {
  it('can post() a new category', () => {
    let obj = { name: 'Bikes' };
    return category.post(obj).then(record => {
      Object.keys(obj).forEach(key => {
        expect(record[key]).toEqual(obj[key]);
      });
    });
  });

  it('can get() a category', () => {
    let obj = { name: 'Bikes' };
    return category.post(obj).then(record => {
      return category.get(record._id).then(category => {
        Object.keys(obj).forEach(key => {
          expect(category[0][key]).toEqual(obj[key]);
        });
      });
    });
  });

  it('can put() a category', () => {
    let obj = { name: 'Bikes' };
    let modifiedObj = { name: 'eBikes' };
    return category.post(obj).then(record => {
      return category.put(record._id, modifiedObj).then(() => {
        return category.get(record._id).then(category => {
          Object.keys(obj).forEach(key => {
            expect(category[0][key]).toEqual(modifiedObj[key]);
          });
        });
      });
    });
  });

  it('can delete() a category', () => {
    let obj = { name: 'Bikes' };
    return category.post(obj).then(record => {
      return category.delete(record._id).then(() => {
        expect(Object.values(obj).includes(record._id)).toBeFalsy();
      });
    });
  });
});
