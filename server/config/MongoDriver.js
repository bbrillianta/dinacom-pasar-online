const mongoose = require('mongoose');
const { MONGO_URL } = require('./basic');

//Konfigurasi mongoose
class MongoDriver {
    constructor(schema) {
        //Connect db
        mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

        //Membuat schema mongoDB
        this._schema = mongoose.Schema(schema); 
    }

    //getter property Model
    getModel = () => this._Model;
}

module.exports = MongoDriver;