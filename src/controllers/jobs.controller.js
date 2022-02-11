const sqlUtils = require('../utils/sql.utils');

const getMaxSalaryByJob = async (req, res) => {
    const job = req.params.job;

    try {
        const data = await sqlUtils.getMaxSalaryByJob(job);
        if (!data)
            return res.send({
                statusCode: 200,
                statusMessage: 'Ok',
                message: `No data was found for job: ${job}.`,
                data: null,
            });

        res.send({ statusCode: 200, statusMessage: 'Ok', message: null, data });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
    }
};

const getAvgSalaryOfJobs = async (req, res) => {
    try {
        const data = await sqlUtils.getAvgSalaryOfJobs();

        res.send({ statusCode: 200, statusMessage: 'Ok', message: null, data });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
    }
};

const getPopularityOfJobs = async (req, res) => {
    try {
        const data = await sqlUtils.getPopularityOfJobs();

        res.send({ statusCode: 200, statusMessage: 'Ok', message: null, data });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
    }
};

module.exports = {
    getMaxSalaryByJob,
    getAvgSalaryOfJobs,
    getPopularityOfJobs,
};
