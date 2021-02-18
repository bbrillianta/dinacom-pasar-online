const mongoose = require('mongoose');
const MongoDriver = require('../config/MongoDriver');

//Model User
class User extends MongoDriver {
    constructor() { 
        //Mengirim argumen schema mongodb
        super({
            username: String,
            email: String,
            password: String
        });

        //Membuat model User
        this._Model = mongoose.model('User', this._schema, 'users'); 
    }
}

module.exports = User;