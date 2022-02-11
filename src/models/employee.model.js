const pool = require('../databases/mysql.db');

class Employee {
    constructor(name, job, salary) {
        this._name = name;
        this._job = job;
        this._salary = salary;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (!name) throw new Error('Invalid name value.');

        name = name.trim();
        if (name === '') throw new Error('Invalid name value.');

        this._name = name;
    }

    get job() {
        return this._job;
    }

    set job(job) {
        if (!job) throw new Error('Invalid job value.');

        job = job.trim();
        if (job === '') throw new Error('Invalid job value.');

        this._job = job;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        if (!salary || salary <= 0) throw new Error('Invalid salary value.');

        this._salary = salary;
    }

    async save() {
        const sql = `CALL add_employee('${this.name}', '${this.job}', ${this.salary})`;
        await pool.execute(sql);
    }

    async update(job, salary) {
        const sql = `CALL update_employee('${this.name}', '${job}', ${salary})`;
        await pool.execute(sql);

        this._job = job;
        this._salary = salary;
    }

    static async findOne(employeeName) {
        const sql = `CALL find_employee('${employeeName}')`;
        const [rows, fields] = await pool.execute(sql);

        if (rows[0].length === 0) return null;

        const { name, job, salary } = rows[0][0];
        const employee = new Employee(name, job, salary);

        return employee;
    }
}

module.exports = Employee;
