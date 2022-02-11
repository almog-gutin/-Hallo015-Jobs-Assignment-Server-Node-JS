const express = require('express');

const employeesController = require('../controllers/employees.controller');

const router = express.Router();

// Endpoint for creating a new employee and if he exists then update his information
router.post('/new', employeesController.addEmployee);

module.exports = router;
