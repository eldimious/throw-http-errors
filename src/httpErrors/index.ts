import { httpErrorCodes } from './httpErrorCodes';
import { IHttpErrorCode } from './HttpErrorCodeInterface';

interface HttpError {
  [key: string | number]: any
}

function createHttpError(error: IHttpErrorCode) {
  class CustomHttpError extends Error {
    readonly code: string | number;

    readonly status: number;

    constructor(message?: string, code?: string) {
      super(message);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = error.name;
      this.status = error.status;
      this.code = code || error.code;
      this.message = message || error.message;
    }
  }
  return {
    [error.name]: CustomHttpError,
    [error.status]: CustomHttpError,
  };
}

const httpErrors: HttpError = httpErrorCodes.reduce((result, error: IHttpErrorCode) => Object.assign(result, createHttpError(error)), {} as HttpError);

export { httpErrors, HttpError };
