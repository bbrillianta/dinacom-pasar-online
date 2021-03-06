const Seller = require('../models/Seller');

class SellerController {
    #SellerModel;

    constructor(SellerModel) {
        this.#SellerModel = SellerModel;   
    }

    getAll = async (req, res) => {
        const foundDocs = await this.#SellerModel.find({});

        res.json({ success: true, foundDocs });
    }

    create = async (req, res) => {
        const { name } = req.body;
        const products = [];

        const doc = new this.#SellerModel({ name, products });

        const savedDoc = await doc.save();

        res.json({ success: true, savedDoc });
    }
}

module.exports = SellerController;