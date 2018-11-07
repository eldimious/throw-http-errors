const isErrorCode = code => code >= 400 && code < 600;

const CreateCustomError = function CreateCustomError(code, name = 'CustomError', message = 'Custom Error without message', status = 'CUSTOM_ERROR') {
  if (!code || typeof code !== 'number' || !isErrorCode(code)) {
    throw new TypeError('code is not of valid type');
  }
  Error.call(this);
  Error.captureStackTrace(this, this.constructor);
  this.name = name;
  this.message = message;
  this.status = status;
  this.code = code;
};

CreateCustomError.prototype = Object.create(Error.prototype);
CreateCustomError.prototype.constructor = CreateCustomError;

module.exports = CreateCustomError;
