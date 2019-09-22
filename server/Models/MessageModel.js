//引入父类
let SqlBase = require('./SqlBase');

class UserModell extends SqlBase {
    constructor() {
        super();
    }

    //查询全部动态信息
    selectAllMessage(callback) {
        let sql = "select * from message";
        // console.log("model");
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    //根据用户名查询用户的动态信息
    selectMyMessage(checkName, callback) {
        let sql = `select * from message where username='${checkName}'`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }


    AddMessage(data, callback) {
        let sql = `insert into message(username,time,content) values('${data.username}','${data.time}','${data.content}')`;
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