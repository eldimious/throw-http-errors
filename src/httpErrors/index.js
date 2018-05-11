const httpErrorCodes = require('./httpErrorCodes');

const httpErrors = {};

httpErrorCodes.forEach((error) => {
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
  httpErrors[error.name] = HttpError;
});

module.exports = httpErrors;
