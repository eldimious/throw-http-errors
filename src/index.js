const httpErrors = require('./httpErrors');
const CreateCustomError = require('./CreateCustomError');

module.exports = Object.assign({}, httpErrors, { CreateCustomError });