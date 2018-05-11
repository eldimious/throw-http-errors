# throw-http-errors

> Custom errors for HTTP status codes.


## Usage

First, install `throw-http-errors` as a dependency:

```shell
npm install --save throw-http-errors
```

## HTTP Errors

```javascript
  const errors = require('throw-http-errors');
```
### 400 BadRequest

```javascript
  new errors.BadRequest(msg, code);
```

### 401 Unauthorized

```javascript
  new errors.Unauthorized(msg, code);
```

### 402 PaymentRequired

```javascript
  new errors.PaymentRequired(msg, code);
```

### 403 Forbidden

```javascript
  new errors.Forbidden(msg, code);
```

### 404 NotFound

```javascript
  new errors.NotFound(msg, code);
```

### 405 MethodNotAllowed

```javascript
  new errors.MethodNotAllowed(msg, code);
```

### 500 InternalServerError

```javascript
  new errors.InternalServerError(msg, code);
```

### 502 BadGateway

```javascript
  new errors.BadGateway(msg, code);
```

### 503 ServiceUnavailable

```javascript
  new errors.ServiceUnavailable(msg, code);
```

### 504 GatewayTimeout

```javascript
  new errors.GatewayTimeout(msg, code);
```


Parameters:

- message[optional]: A detailed message for this error.

- code[optional]: Code for this error


## Custom Errors

```javascript
  new errors.CreateCustomError(name, message, code, status);
```

Parameters:

- name[optional]: A unique identifier of this error.

- message[optional]: Message of this error.

- code[optional]: A unique code of this error.

- status[optional]: The HTTP Status number of this error.


## Example

In order to use it you need to require the module and then just throw a custom error:

```javascript
const express = require('express');
const app = express();
const errors = require('throw-http-errors');

app.get('/user/:id', (req, res, next) => {
  next(new errors.NotFound('User not found', 'USER_NOT_FOUND'));
});
```
