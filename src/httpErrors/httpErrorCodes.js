const httpErrors = [
  {
    name: 'BadRequest',
    status: 400,
    code: 'BAD_REQUEST',
    message: 'Bad Request',
  },
  {
    name: 'Unauthorized',
    status: 401,
    code: 'UNAUTHORIZED',
    message: 'Unauthorized',
  },
  {
    name: 'PaymentRequired',
    status: 402,
    code: 'PAYMENT_REQUIRED',
    message: 'Payment Required',
  },
  {
    name: 'Forbidden',
    status: 403,
    code: 'FORBIDDEN',
    message: 'Forbidden',
  },
  {
    name: 'NotFound',
    status: 404,
    code: 'RESOURCE_NOT_FOUND',
    message: 'The resource was not found',
  },
  {
    name: 'MethodNotAllowed',
    status: 405,
    code: 'METHOD_NOT_ALLOWED',
    message: 'Method Not Allowed',
  },
  {
    name: 'InternalServerError',
    status: 500,
    code: 'INTERNAL_SERVER_ERROR',
    message: 'Internal Server Error',
  },
  {
    name: 'BadGateway',
    status: 502,
    code: 'BAD_GATEWAY',
    message: 'Bad Gateway',
  },
  {
    name: 'ServiceUnavailable',
    status: 503,
    code: 'SERVICE_UNAVAILABLE',
    message: 'Service Unavailable',
  },
  {
    name: 'GatewayTimeout',
    status: 504,
    code: 'GATEWAY_TIMEOUT',
    message: 'Gateway Timeout',
  },
];

module.exports = httpErrors;
