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

    //查询全部动态信息
    selectAllMessage(callback) {
        let sql = "select * from message";
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    //根据用户名查询用户信息
    selectByUserName(data, callback) {
        let sql = `select * from user where username='${data.username}'`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    //根据用户名查询用户的动态信息
    myMessage(checkName, callback) {
        let sql = `select * from message where username='${checkName}'`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    Login(data, callback) {
        let sql = `select password from user where username='${data.checkName}'`;
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

    getShoppingCar(username, callback) {
        let sql = `select product.*,shopping.* from shopping left join product on product.productID=shopping.productId where username='${username}'`

        // console.log(data);
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            // console.log(result);
            callback(result);
        });
    }

    Register(data, callback) {
        let sql = `insert into user(username,password,messageCount,orderCount,orderSpent) values('${data.checkName}','${data.pass}',0,0,0)`;
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