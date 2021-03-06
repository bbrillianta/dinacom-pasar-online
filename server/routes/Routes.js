const Product = require('../models/Product');
const Seller = require('../models/Seller');
const User = require('../models/User');
const rootRouter = require('./endpoints/rootRouter');
const sellerRouter = require('./endpoints/sellerRouter');
const productRouter = require('./endpoints/productRouter');

class Routes {
    constructor() {
        this.ProductModel = new Product().getModel();
        this.SellerModel = new Seller().getModel();
        this.UserModel = new User().getModel();
    }

    root = () => rootRouter(this.UserModel);

    seller = () => sellerRouter(this.SellerModel);

    product = () => productRouter(this.ProductModel, this.SellerModel);
}

module.exports = Routes;