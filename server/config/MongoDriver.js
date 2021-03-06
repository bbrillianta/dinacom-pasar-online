const mongoose = require('mongoose');
const { MONGO_URL } = require('./basic');

//Konfigurasi mongoose
class MongoDriver {
    _Model;
    _schema;
    
    constructor(schema) {
        //Connect db
        mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

        //Membuat schema mongoDB dari parameter schema yang dikirim
        this._schema = mongoose.Schema(schema); 
    }

    //getter property Model
    getModel = () => this._Model;
}

module.exports = MongoDriver;