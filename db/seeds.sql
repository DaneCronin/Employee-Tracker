-- DEPARTMENT SEEDS --
INSERT INTO department (name)
VALUE ('Sales');
INSERT INTO department (name)
VALUE ('Engineering');
INSERT INTO department (name)
VALUE ('Finance');
INSERT INTO department (name)
VALUE ('Legal');

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