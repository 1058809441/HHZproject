//引入父类
let SqlBase = require('./SqlBase');

class ShoppingCarModel extends SqlBase {
    constructor() {
        super();
    }

    addToShoppingCar(data, callback) {
        let sql = `insert into shopping(username,productId,productName,productCount,productImg) values('${data.username}',${data.productID},'${data.productName}',1,${data.productImg})`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            // console.log(result);
            callback(result);
        });
    }

    //根据用户名获取购物车信息的商品ID
    selectByUsername(username, callback) {
        let sql = ` select productId from shopping where username='${username}'`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            // console.log(result);
            callback(result);
        });
    }

    //根据用户名和商品ID搜索商品数量
    selectProductCount(data, callback) {
        let sql = ` select productCount from shopping where username='${data.username}' and where productId=${data.productID}`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            // console.log(result);
            callback(result);
        });
    }



    //修改指定购物车信息的商品数量
    updateToShoppingCar(data, callback) {
        var sql = "";
        if (data.tag == 1) {
            data.oldCount++;
            sql = `update shopping set count=${data.productCount} where productId=${data.productID}`;
        } else if (data.oldCount <= 1) {
            callback("数量为1，不能再减少了，选择删除操作才能减为1");
            return
        }
        else if (data.tag == -1 && data.oldCount > 1) {
            data.oldCount--;
            sql = `update shopping set count=${data.productCount} where productId=${data.productID}`;
        }
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log("将数量修改为了" + data.oldCount);
            callback(result);
        });
    }


}

module.exports = ShoppingCarModel;