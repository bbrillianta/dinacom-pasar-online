const MongoDriver = require('../config/MongoDriver');
const mongoose = require('mongoose');

<<<<<<< HEAD
//Konfigurasi Model Product
=======
>>>>>>> origin/dev_bintang
class Product extends MongoDriver {
    constructor() {
        super({
            name: String,
            price: Number,
<<<<<<< HEAD
            seller: String,
            category: String,
            stock: Number,
            perUnit: String
        });

        //Membuat model products
        this._Model = mongoose.model('Product', this._schema, 'products');
    }
}
=======
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
>>>>>>> origin/dev_bintang
