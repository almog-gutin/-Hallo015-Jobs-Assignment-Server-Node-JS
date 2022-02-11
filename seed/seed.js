require('dotenv').config();
const path = require('path');
const mysql = require('mysql2/promise');
const config = require('config');

const generalUtils = require('../src/utils/general.utils');

const seedDataIntoDB = async () => {
    const DB_HOST = config.get('DB_HOST');
    const DB_PORT = config.get('DB_PORT');
    const DB_NAME = config.get('DB_NAME');
    const DB_USERNAME = config.get('DB_USERNAME');
    const DB_USERNAME_PASSWORD = config.get('DB_USERNAME_PASSWORD');

    const connectionOptions = {
        host: DB_HOST,
        port: DB_PORT,
        database: DB_NAME,
        user: DB_USERNAME,
        password: DB_USERNAME_PASSWORD,
    };

    try {
        const connection = await mysql.createConnection(connectionOptions);
        console.log('MySQL database connected!');

        const filePath = path.join(__dirname, '../data/data.json');
        const data = await generalUtils.convertJSONToObj(filePath);

        const values = generalUtils.formatDataForBulkInsert(data);

        await connection.query('INSERT INTO employees (name, job, salary) VALUES ?', [values]);

        console.log('Successfully seeded data to the database.');

        await connection.end();
        console.log('MySQL database connection terminated!');
    } catch (err) {
        console.log('Seeding data to the database failed.');
        console.log(err);
    }
};

seedDataIntoDB().then();
