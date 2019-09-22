let ShoppingCarService = require('../Services/ShoppingCarService');

// ShoppingCarController
module.exports.DeleteFromShoppingCar = function (req, res) {
    var data = req.body;
    let shoppingCarService = new ShoppingCarService();
    shoppingCarService.delete(data, function (ob) {
        res.json(ob);
    });
}

module.exports.UpdateShoppingCar = function (req, res) {
    var data = req.body;
    let shoppingCarService = new ShoppingCarService();
    shoppingCarService.update(data, function (ob) {
        res.json(ob);
    });
}


