//Import dependencies
const express = require('express');
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');
const db = require('./db/connection');



const PORT = process.env.PORT || 3001;
const app = express();

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

// Call start application funtion if no error
db.connect((err) => {
  if (err) throw err;
  startPrompt();
});


// Initial Inquirer Prompt 
startPrompt = () => {
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
]).then((response) => {
        switch (response.choice) {
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

// View ALL departments function
viewAllDepartments = () => {
  db.query(`SELECT * FROM department ORDER BY id ASC;`, (err, res) => {
      if (err) {
        throw err;
      } else {
      console.table(res);
      }
        startPrompt();
  });
};

// View ALL roles functioin
viewAllRoles = () => {
  db.query(`SELECT roles.id, roles.title, roles.salary, department.name, department.id FROM roles JOIN department ON roles.department_id = department.id ORDER BY roles.id ASC;`, (err, res) => {
      if (err) throw err; 
      console.table(res);
      startPrompt();
  })
};





