//引入Usermodel
let ProductModel = require('../Models/ProductModel');
class ProductService extends ProductModel{
    constructor() {
        super();
    }
    AllProduct(callback) {
        let that = this;
        that.selectAllProduct(function(ob){
            callback(ob);
        });
    }

    AllLunbo(callback) {
        let that = this;
        that.selectAllLunbo(function(ob){
            callback(ob);
        });
    }

    ByID(id,callback) {
        let that = this;
        that.selectById(id,function(ob){
            callback(ob);
        });
    }

    update(data,callback) {
        let that = this;
        console.log(data);
        that.updateProduct(data,function(ob){
            callback(ob);
        });
    }

    delete(id,callback) {
        let that = this;
        // console.log("service1");
        that.deleteById(id,function(ob){
            // console.log("service2");
            callback(ob);
        });
    }

    insert(data,callback) {
        let that = this;
        data.product_price = parseInt(data.product_price);
        that.insertProduct(data,function(ob){
            callback(ob);
        });
    }

}

module.exports = ProductService;