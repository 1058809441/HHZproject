//引入Usermodel
let OrderModel = require('../Models/OrderModel');
class OrderService extends OrderModel{
    constructor() {
        super();
    }
    AllOrder(callback) {
        let that = this;
        // console.log("service1");

        that.selectAllOrder(function(ob){
            // console.log("service2");
            callback(ob);
        });

    }

}

module.exports = OrderService;