const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table')
require('terminal-colors')

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
    manage()
});

function manage() {
    //Ask the user what they would like to do...
    inquirer.prompt([
        {
            type: "list",
            name: "command",
            message: "What can I help you with?".yellow,
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add new product"]
        }
    ]).then(function (user_res) {
        //if the user wants to view products
        if (user_res.command === "View Products for Sale") {
            //get the products list
            connection.query("SELECT product_name FROM products", (err, res) => {
                if (err) throw err;
                console.table(res)
            })
        }
        //if they want to view low inventory
        if (user_res.command === "View Low Inventory") {
            //access the inventory
            connection.query("SELECT * FROM products", (err, res) => {
                if (err) throw err;
                //if an item's stock quantity <= 10...
                for(let i=0; i<res.length; i++) {
                    if(res[i].stock_quantity <= 50) {
                        //display the item's name and quantity
                        console.table(`${res[i].product_name}: ${res[i].stock_quantity}`)
                    }
                }
            })

        }

        //if they want to add to inventory

        //add to inventory

        //if they want to add new product

        //add new product
    })
    connection.query("SELECT * FROM products", (err, res) => {
        return true
    })
}
