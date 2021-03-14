//Controller untuk homepage 
class HomeController {
    //**Cek autentikasi user */
    
    image = async (req, res) => {
        const { file } = req.params;

        res.sendFile(file, { root: './public/' });
    }
}

module.exports = HomeController;