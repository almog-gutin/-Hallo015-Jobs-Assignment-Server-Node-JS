const express = require('express');
const cors = require('cors');

const jobsRouter = require('./routers/jobs.router');
const employeesRouter = require('./routers/employees.router');

require('./databases/mysql.db');

const app = express();

app.use(express.json());

const NODE_ENV = process.env.NODE_ENV || 'development';
const whitelist = [];
const corsOptions = {
    origin: function (origin = '', callback) {
        if (whitelist.indexOf(origin) !== -1) callback(null, true);
        else callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET, POST'],
    allowedHeaders: ['Content-Type'],
};
app.use(NODE_ENV === 'development' ? cors() : cors(corsOptions));

app.get('/', (req, res) => res.send(200));

app.use('/jobs', jobsRouter);
app.use('/employees', employeesRouter);

module.exports = app;
