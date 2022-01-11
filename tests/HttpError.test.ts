import { expect } from 'chai';
import errors from '../src';

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
    } catch (error: any) {
      expect(error).to.be.an.instanceof(errors.NotFound);
      expect(error).to.be.an.instanceof(Error);
      expect(typeof error.name).to.be.equal('string');
      expect(error.name).to.be.equal('NotFound');
      expect(typeof error.message).to.be.equal('string');
      expect(error.message).to.be.equal('The resource was not found');
      expect(typeof error.status).to.be.equal('number');
      expect(error.status).to.be.equal(404);
      expect(error.code).to.be.equal('RESOURCE_NOT_FOUND');
      expect(typeof error.code).to.be.equal('string');
      return done();
    }
  });
  // eslint-disable-next-line no-undef
  it('should throw a http error with custom msg', (done) => {
    try {
      getUserFromDB();
    } catch (error: any) {
      expect(error).to.be.an.instanceof(errors.NotFound);
      expect(error).to.be.an.instanceof(Error);
      expect(typeof error.name).to.be.equal('string');
      expect(error.name).to.be.equal('NotFound');
      expect(typeof error.message).to.be.equal('string');
      expect(error.message).to.be.equal('User with id 1 not found');
      expect(typeof error.status).to.be.equal('number');
      expect(error.status).to.be.equal(404);
      expect(typeof error.code).to.be.equal('string');
      expect(error.code).to.be.equal('USER_NOT_FOUND');
      return done();
    }
  });
  // eslint-disable-next-line no-undef
  it('should throw a custom error', (done) => {
    try {
      throwCustomErrorWithCustomMsg();
    } catch (error: any) {
      expect(error).to.be.an.instanceof(errors.CreateCustomError);
      expect(error).to.be.an.instanceof(Error);
      expect(typeof error.name).to.be.equal('string');
      expect(error.name).to.be.equal('Custom Error');
      expect(typeof error.message).to.be.equal('string');
      expect(error.message).to.be.equal('Custom msg');
      expect(typeof error.status).to.be.equal('number');
      expect(error.status).to.be.equal(512);
      expect(typeof error.code).to.be.equal('string');
      expect(error.code).to.be.equal('CUSTOM_CODE');
      return done();
    }
  });
  // eslint-disable-next-line no-undef
  it('should throw a custom error with custom message', (done) => {
    try {
      throwCustomError();
    } catch (error: any) {
      expect(error).to.be.an.instanceof(errors.CreateCustomError);
      expect(error).to.be.an.instanceof(Error);
      expect(typeof error.name).to.be.equal('string');
      expect(error.name).to.be.equal('CustomError');
      expect(typeof error.message).to.be.equal('string');
      expect(error.message).to.be.equal('Custom Error without message');
      expect(typeof error.status).to.be.equal('number');
      expect(error.status).to.be.equal(400);
      expect(typeof error.code).to.be.equal('string');
      expect(error.code).to.be.equal('CUSTOM_ERROR');
      return done();
    }
  });
  // eslint-disable-next-line no-undef
  it('should throw a TypeError as we do not provide a status', (done) => {
    try {
      throw new errors.CreateCustomError(1000);
    } catch (error) {
      expect(error).to.be.an.instanceof(TypeError);
      expect(error).to.be.an.instanceof(Error);
      //expect(error.message).to.be.equal('status is not of valid type');
      return done();
    }
  });
});
