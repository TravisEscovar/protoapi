const BusinessController = require('./business.controller');
const BusinessModel = require('./business.model');


exports.businessRoutes = function(app) {

    app.get('/business/', [
        BusinessController.findBusinessByGeneral
    ]);

};