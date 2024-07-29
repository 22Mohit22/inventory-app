require('dotenv').config();
const express = require('express');
const path = require('path');

const homePageRouter = require('./routes/homePageRouter');
const productRouter = require('./routes/productRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', homePageRouter);
app.use('/products', productRouter);
app.use('/categories', categoriesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log('Running'));

module.exports = app;