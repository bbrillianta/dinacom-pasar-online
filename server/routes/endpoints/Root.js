const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserController');
const HomeController = require('../../controllers/HomeController');

//Routes dengan awalan '/'
class Root {
    #homeController;
    #userController;

    constructor() {
        //Object-object controllers
        this.#homeController = new HomeController();
        this.#userController = new UserController();
    }

    //Endpoint-endpoint dari routes '/'
    getRouter = () => {
        router.get('/', this.#homeController.index);

        router.post('/register', this.#userController.register);

        router.post('/login', this.#userController.login);

        router.delete('/logout', this.#userController.logout);

        //Mengembalikan module router
        return router;
    }
}

module.exports = Root;
