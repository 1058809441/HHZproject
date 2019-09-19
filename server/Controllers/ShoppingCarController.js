let ShoppingCarService = require('../Services/ShoppingCarService');

// ShoppingCarController
module.exports.AddToShoppingCar = function (req, res) {
    var data = req.body;
    console.log("addToShoppingCar的controller里面");
    // console.log(data);
    // res.json(data);
    let shoppingCarService = new ShoppingCarService();
    shoppingCarService.add(data, function (ob) {
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


