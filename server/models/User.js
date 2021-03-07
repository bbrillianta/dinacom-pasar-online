const mongoose = require('mongoose');
const MongoDriver = require('../config/MongoDriver');

//Konfigurasi Model User
class User extends MongoDriver {
    constructor() { 
        super({
            username: String,
            email: String,
            password: String,
            carts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
        });

        //Membuat model User
        this._Model = mongoose.model('User', this._schema, 'users'); 
    }
}

module.exports = User;