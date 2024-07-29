const { Pool } = require('pg');
require('dotenv').config();

module.exports = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB,
    password: process.env.PASS,
    port: process.env.DBPORT
})