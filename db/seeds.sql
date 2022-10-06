USE employee_tracker_db;

-- DEPARTMENT SEEDS --
INSERT INTO department (name)
VALUES ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');


-- ROLE SEEDS --
INSERT INTO roles (title, salary, department_id)
VALUES 
        ('Lead Engineer', '150000', 2),
        ('Legal Team Lead', '250000', 4),
        ('Accountant', '125000', 3),
        ('Sales Lead', '100000', 1),
        ('Salesperson', '80000', 1),
        ('Software Engineer', '120000', 2),
        ('Lawyer', '190000', 4);


-- EMPLOYEE SEEDS --
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES 
    ('John', 'Doe', null, 1),
    ('Mike', 'Chan', null, 2),
    ('Ashley', 'Rodriguez', null, 3),
    ('Kevin', 'Tupik', null, 4),
    ('Malia', 'Brown', null, 5),
    ('Sarah', 'Lourd', null, 2),
    ('Tom', 'Allen', null, 4),
    ('Christian', 'Eckenrode', 2, 1);
