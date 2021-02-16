const mongoose = require('mongoose');
const MongoDriver = require('../MongoDriver');
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

//Model User
class Users extends MongoDriver {
    #Model;

    constructor() { 
        //Mengirim argumen schema mongodb
        super({
            nama: String,
            email: String,
            password: String
        });

        //Membuat model User
        this.#Model = mongoose.model('User', this._schema, 'users'); 
    }

    //getter property Model
    getModel = () => this.#Model;
}

module.exports = Users;