//import dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const db = require('./db/connection');
const express = require('express');



// Initial Prompt for Inquirer to display list of options
function startPrompt() {
    inquirer.prompt([
    {
    type: "list",
    message: "What would you like to do?",
    name: "choice",
    choices: [
              "View all Deparments",
              "View All Roles?",
              "View All Employees?",
              "Add Department?",
              "Add Role?",
              "Add Employee?",
              "Update Employee"
            ]
    }
]).then(function(val) {
        switch (val.choice) {
            case "View all Deparments":
                viewAllDepartments();
              break;
    
          case "View All Roles?":
              viewAllRoles();
            break;

            case "View All Employees?":
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

          case "Update Employee":
                updateEmployee();
              break;
            }
    })
};



startPrompt();