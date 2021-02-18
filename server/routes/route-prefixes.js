const Root = require('./endpoints/Root');

//Awalan dari endpoints
module.exports = (app) => {
    app.use(new Root().getRouter());
}