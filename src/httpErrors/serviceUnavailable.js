function ServiceUnavailable(msg, code) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.status = 503;
  this.code = code || 'SERVICE_UNAVAILABLE';
  this.message = msg || 'Service Unavailable';
}

ServiceUnavailable.prototype = Object.create(Error.prototype);
ServiceUnavailable.prototype.constructor = ServiceUnavailable;

module.exports = ServiceUnavailable;
