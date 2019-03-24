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
            connection.query("SELECT * FROM products", (err, res) => {
                if (err) throw err;
                console.table(res)
                done()
            })
        }
        //if they want to view low inventory
        if (user_res.command === "View Low Inventory") {
            //access the inventory
            connection.query("SELECT * FROM products", (err, res) => {
                if (err) throw err;
                //if an item's stock quantity <= 10...
                for(let i=0; i<res.length; i++) {
                    if(res[i].stock_quantity <= 5) {
                        //display the item's name and quantity
                        console.table(`${res[i].product_name}: ${res[i].stock_quantity}`)
                    }
                }
                done();
            })
        }
        //if they want to add to inventory
        if(user_res.command === "Add to Inventory") {
            //show the table of items
            connection.query("SELECT item_id, product_name FROM products", (err, res) => {
                console.log("\n")
                console.table(res);
            })
        //ask the user what, and how much they want to add
            inquirer.prompt([
                {
                    name: "item_id",
                    message: "Select the id of the item that you would like to add to".yellow,
                    validate: function (input) {
                        if (parseInt(input) <= 10) {
                            return true
                        }
                        else {
                            return "Please enter a valid id".red
                        }
                    }
                },
                {
                    name: "amount",
                    message: "How many units would you like to add?",
                    validate: function (input) {
                        if (Number.isInteger(parseFloat(input))) {
                            return true
                        }
                        else {
                            return "Your response must be an integer".red
                        }
                    }
                }
            ]).then(function(user_response) {
                //get the row of info with the id the user chose
                connection.query("SELECT * FROM products WHERE item_id = " + user_response.item_id, (err, row_res)=> {
                    if (err) throw err;
                     //update this item's stock quantity
                    connection.query("UPDATE products SET ? WHERE ?", [
                        {
                            stock_quantity: parseInt(user_response.amount) + row_res[0].stock_quantity
                        }, 
                        {
                            item_id: user_response.item_id
                        }
                    ], (err, res) => {
                        console.log("Item successfully updated!".yellow)
                        done()
                    });
                 })
            })
        }
        //if they want to add new product

        //add new product
    })
    
}

function done() {
    //Ask the user if they are done managing
    console.log("\n")
    inquirer.prompt([
        {
            type: "confirm",
            name: "done",
            message: "Anything else I can help you with?"
        }
    ]).then(function(user_res){
        if(user_res.done) {
            manage()
        }
        else{
            console.log("Okay. Bye!".yellow)
            connection.end();
        }
    })
}
