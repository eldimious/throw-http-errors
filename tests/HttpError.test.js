const expect = require('chai').expect;
const sinon = require('sinon');
const errors = require('../src');

const getDataFromDB = function getDataFromDB() {
  throw new errors.NotFound();
};


const getUserFromDB = function getUserFromDB() {
  throw new errors.NotFound('User with id 1 not found', 'USER_NOT_FOUND');
};

const throwCustomError = function throwCustomError() {
  throw new errors.CreateCustomError('Custom Error', 'Custom msg', 'CUSTOM_CODE', 512);
};

describe('test HttpError:', function() {
  it('should throw a default http error', function (done) {
    try {
      getDataFromDB();
    }
    catch(error) {
      expect(error).to.be.an.instanceof(errors.NotFound);
      expect(error).to.be.an.instanceof(Error);
      expect(error.name).to.be.equal('NotFound');
      expect(error.message).to.be.a('string');
      expect(error.message).to.be.equal('The resource was not found');
      expect(error.status).to.be.equal(404);
      expect(error.code).to.be.equal('RESOURCE_NOT_FOUND');
      return done();
    }
  });

  it('should throw a http error with custom msg', function (done) {
    try {
      getUserFromDB();
    }
    catch(error) {
      expect(error).to.be.an.instanceof(errors.NotFound);
      expect(error).to.be.an.instanceof(Error);
      expect(error.name).to.be.equal('NotFound');
      expect(error.message).to.be.a('string');
      expect(error.message).to.be.equal('User with id 1 not found');
      expect(error.status).to.be.equal(404);
      expect(error.code).to.be.equal('USER_NOT_FOUND');
      return done();
    }
  });

  it('should throw a custom error', function (done) {
    try {
      throwCustomError();
    }
    catch(error) {
      expect(error).to.be.an.instanceof(errors.CreateCustomError);
      expect(error.name).to.be.equal('Custom Error');
      expect(error.message).to.be.a('string');
      expect(error.message).to.be.equal('Custom msg');
      expect(error.status).to.be.equal(512);
      expect(error.code).to.be.equal('CUSTOM_CODE');
      expect(error).to.be.an.instanceof(Error);
      return done();
    }
  });
});
