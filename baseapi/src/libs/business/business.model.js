const Sequelize = require('sequelize');
const multer = require('multer');

const sequelize = require('../../configs/connection');
const Business = require('../../models/business')(sequelize, Sequelize);

Business.sync();


exports.findBusinessByGeneral = (address, city, state, zip, etc, etc) => {
    return new Promise((resolve, reject) => {
        Business.findAll({ attributes: [''] }).then(business => {
            if (business == null) {
                reject({ status: 404, message: "Business not found" });
            }
            resolve(business);
        }, err => {
            reject({ error: err });
        })
    });
};
