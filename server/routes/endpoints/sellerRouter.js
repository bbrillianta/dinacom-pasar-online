const express = require('express');
const SellerController = require('../../controllers/SellerController');

const sellerRouter = (SellerModel) => {
    const router = express.Router();

    const sellerController = new SellerController(SellerModel);

    router.get('/', sellerController.getAll);

    router.post('/create', sellerController.create);

    //Mengembalikan module router
    return router;
}

module.exports = sellerRouter;