const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

//Settingan umum mongoose
class MongoDriver {
    constructor(schema) { 
        //Membuat schema mongoDB
        this._schema = mongoose.Schema(schema); 
    }
}

module.exports = MongoDriver;