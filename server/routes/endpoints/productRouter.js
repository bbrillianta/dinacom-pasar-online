const express = require('express');
const ProductController = require('../../controllers/ProductController');

const productRouter = (ProductModel, SellerModel) => {
    const router = express.Router();

    const productController = new ProductController(ProductModel, SellerModel);

    router.get('/', productController.getAll);

    router.get('/query', productController.getProduct);

    router.get('/category', productController.getCategory);

    router.get('/popular', productController.getPopular);

    router.get('/search', productController.getProductByName);

    router.get('/recommended', productController.getRecommended);

    router.post('/create', productController.uploadImg(), productController.create);

    //mengembalikan module router
    return router;
}

module.exports = productRouter;