//引入父类
let SqlBase = require('./SqlBase');

class ProductModell extends SqlBase {
    constructor() {
        super();
    }

    //查询全部商品
    selectAllProduct(callback) {
        let sql = "select * from product";
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

    //查询轮播
    selectAllLunbo(callback) {
        let sql = "select * from lunbo";
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    //根据id查询商品
    selectById(id,callback) {
        let sql = `select * from product where productID=${id}`;
        // console.log("model1");
        this.connection.query(sql, function (err, result) {
            if (err) {
                // console.log("model2");
                console.log(err.message);
                return;
            }
            // console.log("model3");
            console.log(result);
            callback(result);
        });
    }


    //插入商品
    insertProduct(data, callback) {
        let sql = `insert into product(productName,productType,productPrice,productIntro,productImg) values('${data.product_name}','${data.product_type}',${data.product_price},'${data.product_intro}','${data.product_img}')`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    // 修改商品
    updateProduct(data,callback) {
        // console.log("model1");
        let sql = `update product set productType='${data.product_type}',productName='${data.product_name}',productPrice=${data.product_price},productImg='${data.product_img}',productIntro='${data.product_intro}' where productID=${data.product_id}`;
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }

    //根据id删除商品
    deleteById(id,callback) {
        let sql = `delete from product where productID=${id}`;
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
}

module.exports = ProductModell;