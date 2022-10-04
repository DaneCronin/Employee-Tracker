const mysql = require('mysql2');

//Connect to SQL database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //MySQL Username,
        user: 'root',
        //SQL Password
        password: 'pedro3890',
        database: 'employee_tracker_db'
    },
    console.log('Connected to the employee tracker database.')
);

module.exports = db;