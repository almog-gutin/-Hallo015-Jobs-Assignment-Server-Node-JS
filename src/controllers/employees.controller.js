const Employee = require('../models/employee.model');

const addEmployee = async (req, res) => {
    const { name, job, salary } = req.body;
    if (!name || !name.trim() || !job || !job.trim() || !salary)
        res.status(400).send({ statusCode: 400, statusMessage: 'Bad Request', message: null, data: null });

    try {
        const employee = await Employee.findOne(name);
        if (!employee) {
            const newEmployee = new Employee(name, job, salary);
            await newEmployee.save();

            return res
                .status(201)
                .send({
                    statusCode: 201,
                    statusMessage: 'Created',
                    message: 'Successfully created an employee.',
                    data: null,
                });
        }

        await employee.update(job, salary);

        res.send({ statusCode: 200, statusMessage: 'Ok', message: 'Successfully updated an employee.', data: null });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
    }
};

module.exports = {
    addEmployee,
};
