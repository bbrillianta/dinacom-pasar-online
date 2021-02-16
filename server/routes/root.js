const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/IndexController');

//endpoints dengan awalan '/'
module.exports = () => {
    const indexController = new IndexController();

    router.get('/', indexController.index);

    return router;
}