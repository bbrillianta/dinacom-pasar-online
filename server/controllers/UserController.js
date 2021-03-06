const bcrypt = require('bcrypt');

//Controller untuk user logic
class UserController {
    #UserModel;

    constructor(UserModel) {
        this.#UserModel = UserModel;
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
            password: hash
        });

        //Simpan doc, lalu mengembalikan document yg tersimpan ke savedDoc
        const savedDoc = await doc.save();
        if(savedDoc != doc) return res.status(500).json({ message: "Terjadi kesalahan pada server", success: false });

        res.json({ success: true });
    }

    //** Login logic */
    login = async (req, res) => {
        const { email, password } = req.body;

        //Response saat login gagal
        const failedLogin = () => res.status(401).json({ message: "Email atau password anda salah", success: false });

        //Mencari user dengan inputan email
        const user = await this.#UserModel.findOne({ email });
        if(!user) return failedLogin();

        //Menyocokkan password yang terenkripsi dengan inputan password
        const match = await bcrypt.compare(password, user.password);
        if(!match) return failedLogin();

        //Menyimpan session dari user
        const userSession = { id: user._id, username: user.username, email: user.email };
        req.session.user = userSession;

        res.json({ success: true,  userSession });
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
}

module.exports = UserController;