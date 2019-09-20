//引入Usermodel
let OrderModel = require('../Models/OrderModel');
class OrderService extends OrderModel {
    constructor() {
        super();
    }
    AllOrder(callback) {
        let that = this;
        // console.log("service1");
        that.selectAllOrder(function (ob) {
            // console.log("service2");
            callback(ob);
        });
    }

    addOrders(data, callback) {
        let that = this;
        // console.log("service1");
        let date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        let time = year + '/' + month + '/' + day + '-' + hour+':' + minute + ':' + second;

        data.orderTime = time;

        data.orderMoney = parseInt(data.orderMoney);
        that.addOrder(data, (ob1) => {
            // console.log("service2");
            that.deleteShoppingCar(data, (ob2) => {
                that.selectUser(data, (ob3) => {
                    // console.log(ob3);
                    var info = {
                        oldMoney: ob3[0].orderSpent,
                        count: ob3[0].orderCount,
                        money: data.orderTime,
                        username: data.username
                    }
                    that.updateUserInfo(info, (ob4) => {
                        callback(data);
                    });
                });
            });
        });
    }

    getUserOrder(username, callback) {
        let that = this;
        // console.log("service1");
        that.selectOrderByUsername(username, function (ob) {
            console.log(ob);
            callback(ob);
        });
    }


}

module.exports = OrderService;