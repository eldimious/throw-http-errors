function InternalServerError(msg, code) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.status = 500;
  this.code = code || 'INTERNAL_SERVER_ERROR';
  this.message = msg || 'Internal Server Error';
}

InternalServerError.prototype = Object.create(Error.prototype);
InternalServerError.prototype.constructor = InternalServerError;

module.exports = InternalServerError;
