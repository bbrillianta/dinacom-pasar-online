const Seller = require('../models/Seller');
const multer = require('multer');
const { storage } = require('../config/storage');

class SellerController {
    #SellerModel;
    #upload;
    
    constructor(SellerModel) {
        this.#SellerModel = SellerModel;
        this.#upload = multer({ storage: storage });   
    }

    getAll = async (req, res) => {
        const foundDocs = await this.#SellerModel.find({});

        res.json({ success: true, foundDocs });
    }

    create = async (req, res) => {
        const { name } = req.body;
        const { file } = req;
        const products = [];

        const doc = new this.#SellerModel({ 
            name, 
            products, 
            picture: {
                path: `public/${ file.filename }`,
                contentType: file.mimetype
            } 
        });

        const savedDoc = await doc.save();

        res.json({ success: true, savedDoc });
    }

    uploadImg = () => this.#upload.single('img');
}

module.exports = SellerController;