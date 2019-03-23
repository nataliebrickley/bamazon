const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table')
require('terminal-colors')
//Ask the user what they would like to do...
inquirer.prompt([
    {
        type: "list",
        name: "command",
        message: "What can I help you with?",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add new product"]
    }
]).then(function (user_res) {
    console.log("success!")
    //if they want to view products

    //show products

    //if they want to view low inventory

    //show low inventory

    //if they want to add to inventory

    //add to inventory

    //if they want to add new product

    //add new product
})