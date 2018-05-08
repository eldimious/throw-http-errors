function MethodNotAllowed(msg, code) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.status = 405;
  this.code = code || 'METHOD_NOT_ALLOWED';
  this.message = msg || 'Method Not Allowed';
}

MethodNotAllowed.prototype = Object.create(Error.prototype);
MethodNotAllowed.prototype.constructor = MethodNotAllowed;

module.exports = MethodNotAllowed;
