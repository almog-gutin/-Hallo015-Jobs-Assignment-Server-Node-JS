const pool = require('../databases/mysql.db');

const getMaxSalaryByJob = async (job) => {
    if (!job) throw new Error('Invalid job value.');

    const sql = `CALL get_max_salary_employee_by_job('${job}')`;
    const [rows, fields] = await pool.execute(sql);

    if (rows[0].length === 0) return null;
    const result = rows[0][0];

    return result;
};

const getAvgSalaryOfJobs = async () => {
    const sql = `CALL get_avg_salary_of_jobs()`;
    const [rows, fields] = await pool.execute(sql);

    const result = rows[0];

    return result;
};

const getPopularityOfJobs = async () => {
    const sql = `CALL get_popularity_of_jobs()`;
    const [rows, fields] = await pool.execute(sql);

    const result = rows[0];

    return result;
};

module.exports = {
    getMaxSalaryByJob,
    getAvgSalaryOfJobs,
    getPopularityOfJobs,
};
