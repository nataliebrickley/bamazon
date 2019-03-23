const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table')

//connect to database:
const connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "password",
    database: "bamazon"
});

connection.connect(err => {
    if (err) throw err;
    afterConnection()
});

function afterConnection() {
    //display the table
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        console.table(res);
        connection.end();
    })
}
