/** importing the mysql package */
const mysql = require("mysql");
/** loading the environment variables */
require('dotenv').config({ path: '../.env'})

/** creating a mysql connection */
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

connection.connect(err => {
    if (err) {
        console.log('Error in connecting to the database.')
        console.log(err)
    } else {
        console.log('Successfully connected to the database.')
    }
});

/** exporting the mysql connection */
module.exports = connection;