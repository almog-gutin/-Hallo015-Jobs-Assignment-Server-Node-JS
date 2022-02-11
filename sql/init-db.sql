CREATE DATABASE hallo_jobs_assignment;

USE hallo_jobs_assignment;

CREATE TABLE employees (
	name NVARCHAR(100) NOT NULL,
    job NVARCHAR(100) NOT NULL,
    salary int NOT NULL
);