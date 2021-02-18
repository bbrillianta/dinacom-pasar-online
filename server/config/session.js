const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const { IS_PROD, SESSION_SECRET } = require('./basic');

//Konfigurasi express-session
module.exports = (app) => {
    app.use(session({
        secret: SESSION_SECRET,
        saveUninitialized: false,
        resave: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
        cookie: { secure: IS_PROD }
    }));
}