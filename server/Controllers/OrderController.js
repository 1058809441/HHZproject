let OrderService = require('../Services/OrderService');
// module.exports.index = function (req, res) {
//     console.log("IndexController.index");
//     res.render('index', {});
// }

module.exports.selectAllOrder = function (req, res) {
    let orderService = new OrderService();
    orderService.AllOrder(function (ob) {
        res.json(ob);
    });
}

module.exports.AddOrder = function (req, res) {
    var data = req.body;
    console.log(data);
    let orderService = new OrderService();
    orderService.addOrders(data,function (ob) {
        res.json(ob);
    });
}