
let SqlBase = require('./SqlBase');

class OrderModell extends SqlBase {
    constructor() {
        super();
    }

    //查询全部订单
    selectAllOrder(callback) {
        let sql = "select * from orders";
        // console.log("model1");
        this.connection.query(sql, function (err, result) {
            if (err) {
                // console.log("model2");
                console.log(err.message);
                return;
            }
            // console.log("model3");
            callback(result);
        });
    }

}

module.exports = OrderModell;