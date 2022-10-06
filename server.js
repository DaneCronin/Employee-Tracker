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
              "Exit"
             
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

            case 'Exit':
                db.end();
                console.log('Good bye!');
                return;
            default:
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


// View ALL roles function
viewAllRoles = () => {
  db.query(`SELECT roles.id, roles.title, roles.salary, department.name, department.id FROM roles JOIN department ON roles.department_id = department.id ORDER BY roles.id ASC;`, (err, res) => {
      if (err) throw err; 
      console.table(res);
      startPrompt();
  })
};


// View ALL Employees function

viewAllEmployees = () => {
  db.query(`SELECT * FROM employee`, 
  function(err, res) {
    if (err) throw err
    console.table(res)
    startPrompt()
})
};



// ADD DEPARTMENT FUNCTION
 addDepartment = () => {

  inquirer.prompt([{
    type: "input",
    message: "What would you like to call the new department?",
    name: "new_department"
  }])
  .then((input) => {
    db.query('INSERT INTO department SET ?', {name: input.new_department}, (err,res) => {
      if (err) throw err;
      startPrompt();
    });
  });
};


// // ADD ROLES FUNCTION
addRole = () => {
  db.query(`SELECT * FROM department;`, (err, res)=> {
    if (err) throw err;
    let departments = res.map(department => ({name: department.name, value: department.id}));

  inquirer.prompt([
    {
    type: "input",
    message: "What would you like to call the new role?",
    name: "new_role"
  },
  {
    type: "input",
    name: "add_Salary",
    message: "What is the salary of the new role?"
  },
  {
    type: "list",
    name: "dept_Name",
    message: "Which department should this role be added to?",
    choices: departments
  },
])
  .then((input) => {
    db.query('INSERT INTO roles SET ?', {name: input.new_role, name: input.add_salary, name: input.dept_name}, (err,res) => {
      if (err) throw err;
      console.log(`${input.new_role} added to the database!`);
      startPrompt();
    });
  });
});
};
