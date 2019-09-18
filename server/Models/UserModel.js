//引入父类
let SqlBase = require('./SqlBase');

class UserModell extends SqlBase {
    constructor() {
        super();
    }

    //查询全部用户
    selectAllUser(callback) {
        let sql = "select * from user";
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    selectByUserName(data,callback) {
        let sql = `select * from user where username='${data.username}'`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    Login(data,callback) {
        let sql = `select password from user where username='${data.username}'`;
        // console.log(data);
        // callback("yes")
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    // getShoppingCar(user_name,callback) {
    //     // let sql = `(select * from products where product_name in (select product_name from shopping_car where user_name='${user_name}')) inner join (select product_name,product_count from shopping_car where user_name='${user_name}') on   order by product_id`
    //     let sql = `select products.*,shopping_car.* from shopping_car left join products on products.product_name=shopping_car.productName where user_name='${user_name}' order by product_id`
    //     // console.log(data);
    //     this.connection.query(sql, function (err, result) {
    //         if (err) {
    //             console.log(err.message);
    //             return;
    //         }
    //         console.log(result);
    //         callback(result);
    //     });
    // }

    Register(data,callback) {
        let sql = `insert into user(username,password,messageCount,orderCount,orderSpent) values('${data.username}','${data.password}',0,0,0)`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

}

module.exports = UserModell;