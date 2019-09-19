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

    getShoppingCar(username,callback) {
        let sql = `select product.*,shopping.* from shopping left join product on product.productID=shopping.productID where username='${username}' order by productID`
        
        // console.log(data);
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log(result);
            callback(result);
        });
    }

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