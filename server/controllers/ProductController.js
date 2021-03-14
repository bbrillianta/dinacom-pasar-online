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

    getPopular = async (req, res) => {
        //Memilih data yang diurutkan dari jumlah pembelian terbesar dan dipilih sebanyak 5
        const foundDocs = await this.#ProductModel.find({})
        .populate('seller')
        .sort({ sold: 'desc' });

        res.json({ success: true, foundDocs });
    }

    getRecommended = async (req, res) => {
        let docCnt = await  this.#ProductModel.countDocuments();
        //Memilih data secara acak sebanyak 5
        let foundDocs = await this.#ProductModel.aggregate([{ $sample: { size: docCnt } }])
        .exec();

        //Populate field seller
        foundDocs = await this.#ProductModel.populate(foundDocs, { path: 'seller' });

        res.json({ success: true, foundDocs });
    }

    getAll = async (req, res) => {
        const foundDocs = await this.#ProductModel.find({}).populate('seller');
        
        res.json({ success: true, foundDocs });
    }

    getProduct = async (req, res) => {
        const { p } = req.query || 0;

        //Mencari produk yang ID nya query url p
        const foundDoc = await this.#ProductModel.findById(p).populate('seller');

        res.json({ success: true, foundDoc });
    }

    getCategory = async (req, res) => {
        const { q } = req.query || "";

        //Mencari produk berdasarkan kategorinya
        const foundDocs = await this.#ProductModel.find({ category: q }).populate('seller');

        res.json({ success: true, foundDocs });
    }

    getProductByName = async (req, res) => {
        let { s } = req.query || 0;

        s = decodeURI(s);

        console.log(s);

        //Mencari produk yang ID nya query url p
        const foundDocs = await this.#ProductModel.find({'name': s}).populate('seller');

        res.json({ success: true, foundDocs });
    }
    
    create = async (req, res) => {
        const { name, price, seller, minPrice, stock, category} = req.body;
        const { file } = req;
        const sold = 0;

        const doc = new this.#ProductModel({
            name,
            price,
            seller,
            minPrice,
            stock,
            sold,
            category,
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