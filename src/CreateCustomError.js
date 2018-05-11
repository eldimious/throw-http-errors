function CreateCustomError(name, message, code, status) {
  Error.call(this);
  Error.captureStackTrace(this, this.constructor);
  this.name = name || 'CustomError';
  this.message = message || 'Custom Error without message';
  this.status = status || 400;
  this.code = code || 'CUSTOM_ERROR';
}

module.exports = CreateCustomError;
