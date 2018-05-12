const httpErrorCodes = require('./httpErrorCodes');

const httpErrors = {};

const createHttpError = function createHttpError(error) {
  function HttpError(message, code) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);
    this.name = error.name;
    this.status = error.status;
    this.code = code || error.code;
    this.message = message || error.message;
  }

  HttpError.prototype = Object.create(Error.prototype);
  HttpError.prototype.constructor = HttpError;

  return {
    [error.name]: HttpError,
  };
};

httpErrorCodes.forEach((error) => {
  Object.assign(httpErrors, createHttpError(error));
});

module.exports = httpErrors;
