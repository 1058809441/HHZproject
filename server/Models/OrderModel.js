
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

    //根据用户名查询订单
    selectOrderByUsername(username,callback) {
       let sql = `select orderID,username,productName,productCount,orderMoney,orderTime from orders where username='${username}'`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    //根据商品ID查询商品
    selectProductByID(id,callback) {
        let sql = `select productName from product where productID=${id}`;
         this.connection.query(sql, function (err, result) {
             if (err) {
                 console.log(err.message);
                 return;
             }
             callback(result);
         });
     }


    //添加订单
    addOrder(data, callback) {
        console.log("addOrder里面的model")
        console.log(data);
        let sql = `insert into orders(username,productID,productCount,orderTime,orderMoney) values('${data.username}','${data.productID}','${data.productCount}','${data.orderTime}',${data.orderMoney})`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            // console.log(result);
            callback(result);
        });
    }

    //删除购物车的内容
    deleteShoppingCar(data, callback) {
        let sql = `delete from shopping where username='${data.username}'`;
        // console.log("model1");
        this.connection.query(sql, function (err, result) {
            if (err) {
                // console.log("model2");
                console.log(err.message);
                return;
            }
            // console.log("model3");
            // console.log(result);
            callback(result);
        });
    }

    //获取用户数据
    selectUser(data, callback) {
        let sql = `select * from user where username='${data.username}'`;
        // console.log("model1");
        this.connection.query(sql, function (err, result) {
            if (err) {
                // console.log("model2");
                console.log(err.message);
                return;
            }
            console.log("用户信息：");
            console.log(result);
            callback(result);
        });
    }

    //修改用户的消费情况
    updateUserInfo(data, callback) {
        // console.log("model1");
        data.count++;
        data.money = data.money + data.oldMoney;
        let sql = `update user set orderCount=${data.count},orderSpent=${data.money} where username='${data.username}'`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

}

module.exports = OrderModell;