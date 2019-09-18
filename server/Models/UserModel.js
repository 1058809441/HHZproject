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

}

module.exports = UserModell;