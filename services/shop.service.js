const Shop = require('../models/Shop.model');

module.exports.create = shop => {
    return Shop.create(shop);
}

module.exports.find = shop => {
    return Shop.find(shop);
}
