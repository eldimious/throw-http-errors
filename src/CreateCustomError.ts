const isErrorStatus = (status: number) => status >= 400 && status < 600;

// eslint-disable-next-line import/prefer-default-export
export class CreateCustomError extends Error {
  readonly code: string | number;

  readonly status: number;

  constructor(
    status: number,
    name?: string,
    message?: string,
    code?: string | number,
  ) {
    super(message);
    if (!isErrorStatus(status)) {
      throw new TypeError('status is not of valid http status number');
    }
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = name || 'CustomError';
    this.status = status;
    this.message = message || 'Custom Error without message';
    this.code = code || 'CUSTOM_ERROR';
  }
}
