//Konfigurasi environment
const IS_PROD = process.env.NODE_ENV == "production" ? true : false;
const SESSION_SECRET = process.env.SESSION_SECRET;
const MONGO_URL = process.env.MONGO_URL;
const PORT  = process.env.PORT || 3001;

module.exports = { IS_PROD, SESSION_SECRET, MONGO_URL, PORT };