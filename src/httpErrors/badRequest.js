function BadRequest(msg, code) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.status = 400;
  this.code = code || 'BAD_REQUEST';
  this.message = msg || 'Bad Request';
}

BadRequest.prototype = Object.create(Error.prototype);
BadRequest.prototype.constructor = BadRequest;

module.exports = BadRequest;
