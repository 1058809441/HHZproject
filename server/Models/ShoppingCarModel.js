//引入父类
let SqlBase = require('./SqlBase');

class ShoppingCarModel extends SqlBase {
    constructor() {
        super();
    }

    addToShoppingCar(data, callback) {
        let sql = `insert into shopping(user_name,productName,product_count) values('${data.user_name}','${data.productName}',1)`;
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
        data.product_count = parseInt(data.product_count);
        // console.log(data);
        let sql = `update shopping_car set product_count=${data.product_count} where productName='${data.productName}'`;
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
            data.product_count++ ;
            sql = `update shopping_car set product_count=${data.product_count} where shopping_car_id='${data.shopping_car_id}'`;
        }else if(data.tag == -1){
            data.product_count-- ;
            sql = `update shopping_car set product_count=${data.product_count} where shopping_car_id='${data.shopping_car_id}'`;
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