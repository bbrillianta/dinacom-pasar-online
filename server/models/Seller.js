const MongoDriver = require('../config/MongoDriver');
const mongoose = require('mongoose');

class Seller extends MongoDriver {
    constructor() {
        super({
            name: String,
            products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
        });

        this._Model = mongoose.model('Seller', this._schema, 'sellers');
    }
}

module.exports = Seller;