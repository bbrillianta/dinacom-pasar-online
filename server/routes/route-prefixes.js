const Routes = require('./Routes');

//Awalan dari endpoints
module.exports = (app) => {
    const routes = new Routes();

    app.use(routes.root());
    
    app.use('/seller', routes.seller());
    
    app.use('/product', routes.product());
}