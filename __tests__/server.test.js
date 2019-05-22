'use strict';

const request = require('supertest');
const { server } = require('../src/app.js');

describe('Routes', () => {
  describe('Categories', () => {
    xit('returns 200 http code', done => {
      request(server)
        .get('localhost:8080/categories')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });
});
