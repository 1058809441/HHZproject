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