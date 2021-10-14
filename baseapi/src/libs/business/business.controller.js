const BusinessModel = require('./business.model');
const fs = require('fs');


exports.findBusinessByGeneral = (req, res) => {
    BusinessModel.findBusinessByGeneral(req.params.business, req.params.business, req.params.business, req.params.business, req.params.etc, req.params.etc)
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(err.status).send(err.message);
        });
};
