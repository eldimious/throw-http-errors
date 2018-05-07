const NotFound = require('./notFound');
const Unauthorized = require('./unauthorized');
const Forbidden = require('./forbidden');
const InternalServerError = require('./internalServerError');
const BadGateway = require('./badGateway');
const GatewayTimeout = require('./gatewayTimeout');
const ServiceUnavailable = require('./serviceUnavailable');

module.exports = {
  NotFound,
  Unauthorized,
  Forbidden,
  InternalServerError,
  BadGateway,
  GatewayTimeout,
  ServiceUnavailable,
};
