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

        let time = year + '/' + month + '/' + day + '-' + hour + ':' + minute + ':' + second;

        data.orderTime = time;

        data.orderMoney = parseInt(data.orderMoney);

        //计算要添加的订单的数据
        that.selectMyShoppingCar(data, (ob) => {
            data.productID = '';
            data.productCount = '';
            data.orderMoney = 0;
            ob.forEach((element,index) => {
                if(index == 0){
                    data.productID += element.productId;
                    data.productCount += element.productCount;
                }else{
                    data.productID += "/" + element.productId;
                    data.productCount += "/" + element.productCount;
                }
                data.orderMoney += element.productPrice * element.productCount;
            });

            //添加数据到订单表
            that.addOrders(data, (ob1) => {
                //删除该用户对应的购物车表数据
                that.deleteShoppingCar(data, (ob2) => {
                    //查询该用户信息
                    that.selectUser(data, (ob3) => {
                        var info = {
                            orderCount: ++ob3[0].orderCount,
                            orderSpent: data.orderMoney+ob3[0].orderSpent,
                            username: data.username
                        }
                        //修改该用户信息
                        that.updateUserInfo(info, (ob4) => {
                            callback(info);
                        });
                    });
                });
            })

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