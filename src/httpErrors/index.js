const httpErrorCodes = require('./httpErrorCodes');

const httpErrors = {};

const createHttpError = function createHttpError(error) {
  class CustomHttpError extends Error {
    constructor(message, code) {
      super(message);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = error.name;
      this.status = error.status;
      this.code = code || error.code;
      this.message = message || error.message;
    }
  }
  return {
    [error.name]: CustomHttpError,
    [error.status]: CustomHttpError,
  };
};

httpErrorCodes.forEach((error) => {
  Object.assign(httpErrors, createHttpError(error));
});

module.exports = httpErrors;
