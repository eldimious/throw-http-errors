function PaymentRequired(msg, code) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.status = 402;
  this.code = code || 'PAYMENT_REQUIRED';
  this.message = msg || 'Payment Required';
}

PaymentRequired.prototype = Object.create(Error.prototype);
PaymentRequired.prototype.constructor = PaymentRequired;

module.exports = PaymentRequired;
