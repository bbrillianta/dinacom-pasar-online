const Product = require('../models/Product');
const multer = require('multer');
const fs = require('fs');
const { storage } = require('../config/storage');

class ProductController {
    #ProductModel;
    #SellerModel;
    #upload;

    constructor(ProductModel, SellerModel) {
        this.#ProductModel = ProductModel;
        this.#SellerModel = SellerModel;
        this.#upload = multer({ storage: storage });
    }

    mostSold = async (req, res) => {
        const foundDocs = await this.#ProductModel.find({}).sort({ sold: 'asc' }).limit(5);

        res.json({ success: true, foundDocs });
    }

    getAll = async (req, res) => {
        const foundDocs = await this.#ProductModel.find({}).populate('seller');
        
        res.json({ success: true, foundDocs });
    }

    create = async (req, res) => {
        const { name, price, seller, minPrice, stock} = req.body;
        const { file } = req;
        const sold = 0;

        const doc = new this.#ProductModel({
            name,
            price,
            seller,
            minPrice,
            stock,
            sold,
            img: {
                path: `public/${ file.filename }`,
                contentType: file.mimetype
            }
        });

        //menambah document product
        const savedDoc = await doc.save();

        //menambah ref product ke penjual
        const sellerRef = await this.#SellerModel.findByIdAndUpdate(seller, { $push: { products: savedDoc._id } }, { new: true });

        res.json({ success: true, savedDoc });
    }

    uploadImg = () => this.#upload.single('img');
}

module.exports = ProductController;