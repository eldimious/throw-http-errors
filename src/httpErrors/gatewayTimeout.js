function GatewayTimeout(msg, code) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.status = 504;
  this.code = code || 'GATEWAY_TIMEOUT';
  this.message = msg || 'Gateway Timeout';
}

GatewayTimeout.prototype = Object.create(Error.prototype);
GatewayTimeout.prototype.constructor = GatewayTimeout;

module.exports = GatewayTimeout;
