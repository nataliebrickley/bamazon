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
    shop()
});

function shop() {
    //display the table
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        console.log("\n")
        console.table(res);
    })
    //ask user what they want to buy, and how many units
    inquirer.prompt([
        {
            name: "item_id",
            message: "What is the id of the product that you would like to buy?".underline.cyan,
            validate: function (input) {
                if (parseInt(input) <= 10) {
                    return true
                }
                else {
                    return "Please enter a valid id".red
                }
            }
        }, {
            name: "amount",
            message: "How many units of that product would you like to buy?",
            validate: function (input) {
                if (Number.isInteger(parseFloat(input))) {
                    return true
                }
                else {
                    return "Your response must be an integer".red
                }
            }
        }
    ]).then(function (user_response) {
        //select the item the user chose from the table
        connection.query("SELECT * FROM products WHERE item_id = " + user_response.item_id, (err, row_res) => {
            //console.log(row_res);
            if (err) throw err;
            //check to see if there is enough of the item to be purchased:
            //if there is NOT enough of the item...
            
            else if (row_res[0].stock_quantity < user_response.amount) {
                console.log("Insufficienct Quantity!".red)
                connection.end()
            }
            //if there is enough of the item, update the table
            else {
                connection.query("UPDATE products SET ? WHERE ?", [
                    {
                        stock_quantity: row_res[0].stock_quantity - user_response.amount
                    },
                    {
                        item_id: user_response.item_id
                    }
                ],
                    (err, res) => {
                        if (err) throw err;
                        //notify the user of the price of their purchase
                        let cost = row_res[0].price * parseInt(user_response.amount)
                        console.log(`Your order has been placed. The cost of your purchase is ${cost} dollars`.yellow)
                        inquirer.prompt([
                            {
                                type: "confirm",
                                name: "shop",
                                message: "Would you like to make another purchase?"
                            }
                        ]).then(function(response) {
                            if(response.shop) {
                                shop();
                            }
                            else{
                                console.log("Okay. Bye!".yellow)
                                connection.end()
                            }
                        })
                    })
                }
        })
    })
}
