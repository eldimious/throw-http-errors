const NotFoundError = require('./notFoundError');
const Unauthorized = require('./unauthorized');
const Forbidden = require('./forbidden');
const InternalServerError = require('./internalServerError');
const BadGateway = require('./badGateway');
const GatewayTimeout = require('./gatewayTimeout');
const ServiceUnavailable = require('./serviceUnavailable');

module.exports = {
  NotFoundError,
  Unauthorized,
  Forbidden,
  InternalServerError,
  BadGateway,
  GatewayTimeout,
  ServiceUnavailable,
};
