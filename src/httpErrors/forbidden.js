function Forbidden(msg, code) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.status = 403;
  this.code = code || 'FORBIDDEN';
  this.message = msg || 'Forbidden';
}

Forbidden.prototype = Object.create(Error.prototype);
Forbidden.prototype.constructor = Forbidden;

module.exports = Forbidden;
