//Controller untuk homepage 
class HomeController {
    //**Cek autentikasi user */
    index = async (req, res) => {
        const userSession = req.session.user;

        if(!userSession) return res.json({ auth: false });

        res.json({ auth: true, userSession });
    }

    image = async (req, res) => {
        const { file } = req.params;

        res.sendFile(file, { root: './public/' });
    }
}

module.exports = HomeController;