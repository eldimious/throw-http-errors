function NotFoundError(msg, code) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.status = 404;
  this.code = code || 'RESOURCE_NOT_FOUND';
  this.message = msg || 'The resource was not found';
}

NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;

module.exports = NotFoundError;
