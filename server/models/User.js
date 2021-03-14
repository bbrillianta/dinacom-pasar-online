const mongoose = require('mongoose');
const MongoDriver = require('../config/MongoDriver');

//Konfigurasi Model User
class User extends MongoDriver {
    constructor() { 
        super({
            username: String,
            email: String,
            password: String,
            carts: [{ 
                product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
                status: Number,
                quantity: Number,
                discount: Number
            }],
            transactions: [{
                bought: [{ 
                    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
                    quantity: Number,
                    discount: Number
                }],
                address: String,
                name: String,
                phone: String,
                totalPrice: Number,
                paidVia: String,
                boughtDate: String
            }]
        });

        //Membuat model User
        this._Model = mongoose.model('User', this._schema, 'users'); 
    }
}

module.exports = User;