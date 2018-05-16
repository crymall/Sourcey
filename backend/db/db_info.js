var pgp = require('pg-promise')({});
var connectionString = 'postgres://localhost/sourcey';
var db = pgp(connectionString);

module.exports = db;
