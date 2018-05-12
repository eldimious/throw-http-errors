function CreateCustomError(name, message, code, status) {
  Error.call(this);
  Error.captureStackTrace(this, this.constructor);
  this.name = name || 'CustomError';
  this.message = message || 'Custom Error without message';
  this.status = status || 400;
  this.code = code || 'CUSTOM_ERROR';
}

CreateCustomError.prototype = Object.create(Error.prototype);
CreateCustomError.prototype.constructor = CreateCustomError;

module.exports = CreateCustomError;
