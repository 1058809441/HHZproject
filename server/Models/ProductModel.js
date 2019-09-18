//引入父类
let SqlBase = require('./SqlBase');

class ProductModell extends SqlBase {
    constructor() {
        super();
    }

    //查询全部商品
    selectAllProduct(callback) {
        let sql = "select * from products";
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

    //根据id查询商品
    selectById(id,callback) {
        let sql = `select * from products where product_id=${id}`;
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

    //按销售量降序查询商品
    // selectOrderBySales(callback) {
    //     let sql = "select * from product order by sales DESC";
    //     this.connection.query(sql, function (err, result) {
    //         if (err) {
    //             console.log(err.message);
    //             return;
    //         }
    //         callback(result);
    //     });
    // }

    //插入商品
    insertProduct(data, callback) {
        let sql = `insert into products(product_type,product_name,product_price,product_img1,product_img2,product_img3,product_intro,product_keywords) values('${data.product_type}','${data.product_name}',${data.product_price},'${data.product_img1}','${data.product_img2}','${data.product_img3}','${data.product_intro}','${data.product_keywords}')`;
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
        let sql = `update products set product_type='${data.product_type}',product_name='${data.product_name}',product_price=${data.product_price},product_keywords='${data.product_keywords}',product_intro='${data.product_intro}',product_img1='${data.product_img1}',product_img2='${data.product_img2}',product_img3='${data.product_img3}' where product_id=${data.product_id}`;
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
        let sql = `delete from products where product_id=${id}`;
        console.log("model1");
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log("model2");
                console.log(err.message);
                return;
            }
            console.log("model3");
            console.log(result);
            callback(result);
        });
    }

}

module.exports = ProductModell;