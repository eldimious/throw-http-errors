const test = require('./httpErrors');
console.log('1111', test)
console.log('test', new test.NotFoundError(`FB Page with id: not found`, 'PAGE_NOT_FOUND'))