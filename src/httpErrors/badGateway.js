function BadGateway(msg, code) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.status = 502;
  this.code = code || 'BAD_GATEWAY';
  this.message = msg || 'Bad Gateway';
}

BadGateway.prototype = Object.create(Error.prototype);
BadGateway.prototype.constructor = BadGateway;

module.exports = BadGateway;
