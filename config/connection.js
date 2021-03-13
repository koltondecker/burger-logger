const mysql = require('mysql');
const util = require('util');
require('dotenv').config();

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        port: process.env.PORT || 3306,
        password: process.env.password,
        database: process.env.database
    })
}

connection.query = util.promisify(connection.query);

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
});

module.exports = connection;