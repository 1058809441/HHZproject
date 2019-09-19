//引入父类
let SqlBase = require('./SqlBase');

class ShoppingCarModel extends SqlBase {
    constructor() {
        super();
    }

    addToShoppingCar(data, callback) {
        let sql = `insert into shopping(username,productID,count) values('${data.username}',${data.productID},1)`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            // console.log(result);
            callback(result);
        });
    }

    //首页界面的修改购物车  使用的这个接口
    updateToShoppingCar1(data, callback) {
        data.count = parseInt(data.count);
        // console.log(data);
        let sql = `update shopping set count=${data.count} where productID=${data.productID}`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            // console.log(result);
            callback(result);
        });
    }

    //购物车界面的修改购物车  使用的这个接口
    updateToShoppingCar2(data, callback) {
        var sql = "";
        if(data.tag == 1){
            data.count++ ;
            sql = `update shopping set count=${data.count} where ID='${data.ID}'`;
        }else if(data.tag == -1){
            data.count-- ;
            sql = `update shopping set count=${data.count} where ID='${data.ID}'`;
        }
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            // console.log(result);
            callback(result);
        });
    }


}

module.exports = ShoppingCarModel;