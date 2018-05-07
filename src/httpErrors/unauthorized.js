function Unauthorized(msg, code) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.status = 401;
  this.code = code || 'UNAUTHORIZED';
  this.message = msg || 'Unauthorized';
}

Unauthorized.prototype = Object.create(Error.prototype);
Unauthorized.prototype.constructor = Unauthorized;

module.exports = Unauthorized;
