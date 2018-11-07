const isErrorStatus = status => status >= 400 && status < 600;

const CreateCustomError = function CreateCustomError(status, name = 'CustomError', message = 'Custom Error without message', code = 'CUSTOM_ERROR') {
  if (!status || typeof status !== 'number' || !isErrorStatus(status)) {
    throw new TypeError('status is not of valid type');
  }
  Error.call(this);
  Error.captureStackTrace(this, this.constructor);
  this.status = status;
  this.name = name;
  this.message = message;
  this.code = code;
};

CreateCustomError.prototype = Object.create(Error.prototype);
CreateCustomError.prototype.constructor = CreateCustomError;

module.exports = CreateCustomError;
