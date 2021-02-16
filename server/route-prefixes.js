const root = require('./routes/root')();
//Awalan dari endpoints
module.exports = (app) => {
    app.use(root);
}