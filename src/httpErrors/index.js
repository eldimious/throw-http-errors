const BadRequest = require('./badRequest');
const NotFound = require('./notFound');
const Unauthorized = require('./unauthorized');
const Forbidden = require('./forbidden');
const PaymentRequired = require('./paymentRequired');
const MethodNotAllowed = require('./methodNotAllowed');
const InternalServerError = require('./internalServerError');
const BadGateway = require('./badGateway');
const GatewayTimeout = require('./gatewayTimeout');
const ServiceUnavailable = require('./serviceUnavailable');

module.exports = {
  BadRequest,
  NotFound,
  Unauthorized,
  Forbidden,
  PaymentRequired,
  MethodNotAllowed,
  InternalServerError,
  BadGateway,
  GatewayTimeout,
  ServiceUnavailable,
};
