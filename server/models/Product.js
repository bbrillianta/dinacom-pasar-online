const MongoDriver = require('../config/MongoDriver');
const mongoose = require('mongoose');

//Konfigurasi Model Product
class Product extends MongoDriver {
    constructor() {
        super({
            name: String,
            price: Number,
            seller: String,
            category: String,
            stock: Number,
            perUnit: String
        });

        //Membuat model products
        this._Model = mongoose.model('Product', this._schema, 'products');
    }
}