const MongoDriver = require('../config/MongoDriver');
const mongoose = require('mongoose');

class Product extends MongoDriver {
    constructor() {
        super({
            name: String,
            price: Number,
            category: String,
            img: {
                path: String,
                contentType: String
            },
            seller: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller' },
            minPrice: Number,
            sold: Number,
            stock: Number
        });

        this._Model = mongoose.model('Product', this._schema, 'products');
    }
}

module.exports = Product;