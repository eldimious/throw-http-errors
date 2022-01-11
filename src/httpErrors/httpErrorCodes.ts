/* eslint-disable import/prefer-default-export */
import { IHttpErrorCode } from './HttpErrorCodeInterface';

export const httpErrorCodes: IHttpErrorCode[] = [{
  name: 'BadRequest',
  status: 400,
  code: 'BAD_REQUEST',
  message: 'Bad Request',
}, {
  name: 'Unauthorized',
  status: 401,
  code: 'UNAUTHORIZED',
  message: 'Unauthorized',
}, {
  name: 'PaymentRequired',
  status: 402,
  code: 'PAYMENT_REQUIRED',
  message: 'Payment Required',
}, {
  name: 'Forbidden',
  status: 403,
  code: 'FORBIDDEN',
  message: 'Forbidden',
}, {
  name: 'NotFound',
  status: 404,
  code: 'RESOURCE_NOT_FOUND',
  message: 'The resource was not found',
}, {
  name: 'MethodNotAllowed',
  status: 405,
  code: 'METHOD_NOT_ALLOWED',
  message: 'Method Not Allowed',
}, {
  name: 'NotAcceptable',
  status: 406,
  code: 'NOT_ACCEPTABLE',
  message: 'Not Acceptable',
}, {
  name: 'ProxyAuthenticationRequired',
  status: 407,
  code: 'PROXY_AUTHENTICATION_REQUIRED',
  message: 'Proxy Authentication Required',
}, {
  name: 'RequestTimeout',
  status: 408,
  code: 'REQUEST_TIMEOUT',
  message: 'Request Timeout',
}, {
  name: 'Conflict',
  status: 409,
  code: 'CONFLICT',
  message: 'Conflict',
}, {
  name: 'Gone',
  status: 410,
  code: 'GONE',
  message: 'Gone',
}, {
  name: 'LengthRequired',
  status: 411,
  code: 'LENGTH_REQUIRED',
  message: 'Length Required',
}, {
  name: 'PreconditionFailed',
  status: 412,
  code: 'PRECONDITION_FAILED',
  message: 'Precondition Failed',
}, {
  name: 'PayloadTooLarge',
  status: 413,
  code: 'PAYLOAD_TOO_LARGE',
  message: 'Payload Too Large',
}, {
  name: 'URITooLong',
  status: 414,
  code: 'URI_TOO_LONG',
  message: 'URI Too Long',
}, {
  name: 'UnsupportedMediaType',
  status: 415,
  code: 'UNSUPPORTED_MEDIA_TYPE',
  message: 'Unsupported Media Type',
}, {
  name: 'RangeNotSatisfiable',
  status: 416,
  code: 'RANGE_NOT_SATISFIABLE',
  message: 'Range Not Satisfiable',
}, {
  name: 'ExpectationFailed',
  status: 417,
  code: 'EXPECTATION_FAILED',
  message: 'Expectation Failed',
}, {
  name: 'MisdirectedRequest',
  status: 421,
  code: 'MISDIRECTED_REQUEST',
  message: 'Misdirected Request',
}, {
  name: 'UnprocessableEntity',
  status: 422,
  code: 'UNPROCESSABLE_ENTITY',
  message: 'Unprocessable Entity',
}, {
  name: 'Locked',
  status: 423,
  code: 'LOCKED',
  message: 'Locked',
}, {
  name: 'FailedDependency',
  status: 424,
  code: 'FAILED_DEPENDENCY',
  message: 'Failed Dependency',
}, {
  name: 'UnorderedCollection',
  status: 425,
  code: 'UNORDERED_COLLECTION',
  message: 'Unordered Collection',
}, {
  name: 'UpgradeRequired',
  status: 426,
  code: 'UPGRADE_REQUIRED',
  message: 'Upgrade Required',
}, {
  name: 'PreconditionRequired',
  status: 428,
  code: 'PRECONDITION_REQUIRED',
  message: 'Precondition Required',
}, {
  name: 'TooManyRequests',
  status: 429,
  code: 'TOO_MANY_REQUESTS',
  message: 'Too Many Requests',
}, {
  name: 'UnavailableForLegalReasons',
  status: 431,
  code: 'UNAVIALABLE_FOR_LEGAL_REASONS',
  message: 'Unavailable For Legal Reasons',
}, {
  name: 'RequestHeaderFieldsTooLarge',
  status: 451,
  code: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
  message: 'Request Header Fields Too Large',
}, {
  name: 'InternalServerError',
  status: 500,
  code: 'INTERNAL_SERVER_ERROR',
  message: 'Internal Server Error',
}, {
  name: 'NotImplemented',
  status: 501,
  code: 'NOT_IMPLEMENTED',
  message: 'Not Implemented',
}, {
  name: 'BadGateway',
  status: 502,
  code: 'BAD_GATEWAY',
  message: 'Bad Gateway',
}, {
  name: 'ServiceUnavailable',
  status: 503,
  code: 'SERVICE_UNAVAILABLE',
  message: 'Service Unavailable',
}, {
  name: 'GatewayTimeout',
  status: 504,
  code: 'GATEWAY_TIMEOUT',
  message: 'Gateway Timeout',
}, {
  name: 'HTTPVersionNotSupported',
  status: 505,
  code: 'HTTP_VERSION_NOT_SUPPORTED',
  message: 'HTTP Version Not Supported',
}, {
  name: 'VariantAlsoNegotiates',
  status: 506,
  code: 'VARIANT_ALSO_NEGOTIATES',
  message: 'Variant Also Negotiates',
}, {
  name: 'InsufficientStorage',
  status: 507,
  code: 'INSUFFICIENT_STORAGE',
  message: 'Insufficient Storage',
}, {
  name: 'LoopDetected',
  status: 508,
  code: 'LOOP_DETECTED',
  message: 'Loop Detected',
}, {
  name: 'NotExtended',
  status: 510,
  code: 'NOT_EXTENDED',
  message: 'Not Extended',
}, {
  name: 'NetworkAuthenticationRequired',
  status: 511,
  code: 'NETWORK_AUTHENTICATION_REQUIRED',
  message: 'Network Authentication Required',
}];
