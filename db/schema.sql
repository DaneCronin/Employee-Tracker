DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;


CREATE TABLE department (
   id INTEGER AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL, 
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
);


 CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT PRIMARY KEY ,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INTEGER,
  FOREIGN KEY (manager_id) REFERENCES employee(id),
  role_id INTEGER NOT NULL ,
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id)
);