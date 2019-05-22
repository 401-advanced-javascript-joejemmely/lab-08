'use strict';

const request = require('supertest');
const supergoose = require('./supergoose.js');
const { server } = require('../src/app.js');
const mockServer = supergoose.server(server);

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Routes', () => {
  describe('Categories', () => {
    it('returns 200 http code on GET', done => {
      return request(server)
        .get('/categories')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it('returns 200 http code on POST', done => {
      return request(server)
        .post('/categories')
        .send({ name: 'Gambler 710' })
        .expect(200)
        .expect('Body', 'asd')
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });
});
