//Import dependencies
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');
const db = require('./db/connection');


// Initial Inquirer Prompt 
function startPrompt() {
    inquirer.prompt([
    {
    type: "list",
    message: "What would you like to do?",
    name: "choice",
    choices: [
              "View ALL Deparments",
              "View ALL Roles?",
              "View ALL Employees?", 
              "Add Department?",
              "Add Role?",
              "Add Employee?",
              "Update Employee Role",
             
            ]
    }
]).then(function(val) {
        switch (val.choice) {
            case "View ALL Deparments":
                viewAllDepartments();
              break;

            case "View ALL Roles?":
              viewAllRoles();
            break;

            case "View ALL Employees?":
              viewAllEmployees();
            break;
          
            case "Add Department?":
                addDepartment();
              break;

            case "Add Role?":
                addRole();
              break;

            case "Add Employee?":
                addEmployee();
              break;

            case "Update Employee Role":
                updateEmployee();
              break;
      
    
            }
    })
};

startPrompt();