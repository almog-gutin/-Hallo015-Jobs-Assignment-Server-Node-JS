const express = require('express');

const jobsController = require('../controllers/jobs.controller');

const router = express.Router();

// Endpoint for getting the maximum salary of a certain job
router.get('/:job/max-salary', jobsController.getMaxSalaryByJob);

// Endpoint for getting the average salary of all the jobs
router.get('/avg-salary', jobsController.getAvgSalaryOfJobs);

// Endpoint for getting the popularity of all the jobs
router.get('/popularity', jobsController.getPopularityOfJobs);

module.exports = router;
