USE hallo_jobs_assignment;

DELIMITER //

CREATE PROCEDURE add_employee(
	IN employee_name NVARCHAR(100),
    IN employee_job NVARCHAR(100),
	IN employee_salary INT
)
BEGIN
	INSERT INTO employees (name, job, salary)
    VALUES (employee_name, employee_job, employee_salary);
END//

CREATE PROCEDURE update_employee(
	IN employee_name NVARCHAR(100),
    IN employee_job NVARCHAR(100),
	IN employee_salary INT
)
BEGIN
	UPDATE employees
    SET job = employee_job, salary = employee_salary
    WHERE name = employee_name;
END//

CREATE PROCEDURE find_employee(
	IN employee_name NVARCHAR(100)
)
BEGIN
	SELECT * FROM employees 
    WHERE name = employee_name 
    LIMIT 1;
END//

DELIMITER ;
