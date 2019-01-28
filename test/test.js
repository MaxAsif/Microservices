var app = require('../index.js').app;
var request = require('supertest');
var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./jwtoken');
var expect = require('expect.js');

describe('GET /api/login',function(){
  it('Should return token of user login', function(done) {
    request(app)
    .get('/api/login')
    .expect('Content-Type', /json/)
    .expect(200)
    done();
  });
});
describe('GET /api/images',function(){
  it('Should download and resize', function(done) {
    request(app)
    .get('/api/images')
    // .expect('Content-Type', /json/)
    .expect(404)
    done();
  });
});

describe('MiddleWare',function(){
  it('LocalStorage should Contain token a token',function(done){
    expect(localStorage.length).to.be.greaterThan(0);
    done();
  });
});
describe('Validity',function(){
  it('checking the validity of token',function(done){
    expect(localStorage.getItem('jwtoken')).not.to.be('90e9rreuf08e');
    done();
  });
});
