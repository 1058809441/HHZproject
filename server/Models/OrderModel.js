//引入父类
let SqlBase = require('./SqlBase');

class OrderModell extends SqlBase {
    constructor() {
        super();
    }

    //添加订单
    addOrder(data, callback) {
        console.log("addOrder里面的model")
        console.log(data);
        let sql = `insert into orders(order_user_name,order_money) values('${data.username}',${data.money})`;
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
        let sql = `delete from shopping_car where user_name='${data.username}'`;
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
    selectUser(data,callback) {
        let sql = `select * from users where user_name='${data.username}'`;
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
    updateUserInfo(data,callback) {
        // console.log("model1");
        data.count++;
        data.money = data.money + data.oldMoney;
        let sql = `update users set user_order_count=${data.count},user_order_money=${data.money} where user_name='${data.username}'`;
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