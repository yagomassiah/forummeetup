var db = process.env.DATABASE;
var host = process.env.HOSTDB;
var user = process.env.USERDB;
var password = process.env.PWDB


var db = require('knex')({
    client: 'mysql',
    connection: {
        host: host,
        user: user,
    // password: password,
        database: db
    }
});

module.exports =db;