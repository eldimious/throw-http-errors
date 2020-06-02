const expect = require('chai').expect;
const errors = require('../src');

const getDataFromDB = function getDataFromDB() {
  throw new errors.NotFound();
};


const getUserFromDB = function getUserFromDB() {
  throw new errors.NotFound('User with id 1 not found', 'USER_NOT_FOUND');
};

const throwCustomErrorWithCustomMsg = function throwCustomErrorWithCustomMsg() {
  throw new errors.CreateCustomError(512, 'Custom Error', 'Custom msg', 'CUSTOM_CODE');
};

const throwCustomError = function throwCustomError() {
  throw new errors.CreateCustomError(400);
};

// eslint-disable-next-line no-undef
describe('test HttpError:', () => {
  // eslint-disable-next-line no-undef
  it('should throw a default http error', (done) => {
    try {
      getDataFromDB();
    } catch (error) {
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
  // eslint-disable-next-line no-undef
  it('should throw a http error with custom msg', (done) => {
    try {
      getUserFromDB();
    } catch (error) {
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
  // eslint-disable-next-line no-undef
  it('should throw a custom error', (done) => {
    try {
      throwCustomErrorWithCustomMsg();
    } catch (error) {
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
  // eslint-disable-next-line no-undef
  it('should throw a custom error with custom message', (done) => {
    try {
      throwCustomError();
    } catch (error) {
      expect(error).to.be.an.instanceof(errors.CreateCustomError);
      expect(error.name).to.be.equal('CustomError');
      expect(error.message).to.be.a('string');
      expect(error.message).to.be.equal('Custom Error without message');
      expect(error.status).to.be.equal(400);
      expect(error.code).to.be.equal('CUSTOM_ERROR');
      expect(error).to.be.an.instanceof(Error);
      return done();
    }
  });
  // eslint-disable-next-line no-undef
  it('should throw a TypeError as we do not provide a status', (done) => {
    try {
      throw new errors.CreateCustomError();
    } catch (error) {
      expect(error).to.be.an.instanceof(TypeError);
      expect(error).to.be.an.instanceof(Error);
      expect(error.message).to.be.equal('status is not of valid type');
      return done();
    }
  });
});
