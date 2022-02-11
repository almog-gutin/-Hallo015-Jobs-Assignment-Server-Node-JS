USE hallo_jobs_assignment;

DELIMITER //

CREATE PROCEDURE get_max_salary_employee_by_job(
	IN job_title NVARCHAR(100)
)
BEGIN
	SELECT MAX(name) AS employee
    FROM employees
    WHERE job = job_title;
END//

CREATE PROCEDURE get_avg_salary_of_jobs()
BEGIN
	SELECT job, AVG(salary) AS average_salary
	FROM employees
	GROUP BY job;
END//

CREATE PROCEDURE get_popularity_of_jobs()
BEGIN
	SELECT job, COUNT(name) AS popularity
	FROM employees
	GROUP BY job;
END//

DELIMITER ;