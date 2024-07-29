const { Router } = require('express');

const homePageRouter = Router();

homePageRouter.get('/', (req, res) => res.render('index', {title: 'Homepage'}));

module.exports = homePageRouter;
