const bcrypt = require('bcrypt');

//Controller untuk user logic
class UserController {
    #UserModel;

    constructor(UserModel) {
        this.#UserModel = UserModel;
    }

    index = async (req, res) => {
        let userSession = req.session.user;

        if(!userSession) return res.json({ auth: false });

        userSession = await this.#UserModel.findById(userSession._id).populate('carts.product');

        if(!userSession) return res.json({ auth: false });

        res.json({ auth: true, userSession });
    }

    //** Register logic */
    register = async (req, res) => {
        const { username, email, password } = req.body;

        //Mencari email atau username yang sama
        const user = await this.#UserModel.findOne({ $or: [{ username }, { email }] });
        if(user?.email == email) return res.status(409).json({ message: "Email telah terdaftar sebelumnya", success: false });
        if(user?.username == username) return res.status(409).json({ message: "Username telah terdaftar sebelumnya", success: false });

        //encrypt password
        const hash = await bcrypt.hash(password, 10);

        const doc = new this.#UserModel({
            username,
            email,
            password: hash,
            carts: [],
            transactions: []
        });

        //Simpan doc, lalu mengembalikan document yg tersimpan ke savedDoc
        const savedDoc = await doc.save();
        if(savedDoc != doc) return res.status(500).json({ message: "Terjadi kesalahan pada server", success: false });

        //menyimpan session autentikasi
        let userSession = { 
            id: savedDoc._id, 
            username: savedDoc.username, 
            email: savedDoc.email,
            carts: savedDoc.carts,
            transactions: savedDoc.transactions   
        };
        
        req.session.user = userSession;

        userSession = await this.#UserModel.populate(savedDoc, { path: 'carts.product' });

        res.json({ success: true, userSession });
    }

    //** Login logic */
    login = async (req, res) => {
        const { email, password } = req.body;

        //Response saat login gagal
        const failedLogin = () => res.status(401).json({ message: "Email atau password anda salah", success: false });

        //Mencari user dengan inputan email
        const user = await this.#UserModel.findOne({ email }).populate('carts.product');
        if(!user) return failedLogin();

        //Menyocokkan password yang terenkripsi dengan inputan password
        const match = await bcrypt.compare(password, user.password);
        if(!match) return failedLogin();

        //Menyimpan session dari user
        const userSession = { 
            _id: user._id, 
            username: user.username, 
            email: user.email,
            carts: user.carts,
            transactions: user.transactions   
        };

        req.session.user = userSession;
        res.json({ success: true,  userSession:  user});
    }

    //**Logout logic */
    logout = async (req, res) => {
        //Hapus user session
        const loggedOut = await req.session.destroy();
        if(!loggedOut) return res.status(500).json({ message: "Terjadi kesalahan pada server", success: false });

        //Hapus cookie
        res.clearCookie('session-id');
         
        res.json({ success: true });
    }

    addCart = async (req, res) => {
        const { userID, quantity, status, productID } = req.body;
        console.log(userID, quantity, status, productID);
        //Mencari user lalu push data keranjang ke field carts
        const updatedUser = await this.#UserModel.findByIdAndUpdate(userID, {
            $push: {
                carts: {
                    quantity,
                    status,
                    product: productID
                }
            }
        }, { new: true });
        
        res.json({ success: true, userSession: updatedUser });
    }

    removeItemFromCart = async (req, res) => {
        const { itemID } = req.body;

        //mencari item di keranjang
        const item = await this.#UserModel.findOne({ 'carts._id': itemID });

        if(!item) return res.status(404).json({ success: false, message: "Barang yang dicari tidak ditemukan" });
        //menghapus item di keranjang user lalu simpan usernya
        await item.carts.id(itemID).remove();
        const updatedUser = await item.save();

        res.json({ success: true, userSession: updatedUser });
    }
}

module.exports = UserController;