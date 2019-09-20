//引入Usermodel
let ShoppingCarModel = require('../Models/ShoppingCarModel');
class ShoppingCarServise extends ShoppingCarModel {
    constructor() {
        super();
    }

    update(data, callback) {
        let that = this;

        data.tag = parseInt(data.tag);//增减数量的标志，增加是1，减少是-1
        data.productID = parseInt(data.productID);

        that.selectByUsername(data.username, function (ob1) {
            let ifInDataBase = false;
            //forEach的匿名回调函数是同步的方法
            ob1.forEach((item) => {
                if (item.productId == data.productID) {
                    ifInDataBase = true;
                }
            })

            //购物车表里面有这个用户的这个商品，增或减商品数量
            if (ifInDataBase) {
                that.selectProductCount(data, function (ob2) {
                    data.oldCount = parseInt(ob2[0].productCount);
                    that.updateToShoppingCar(data, function (ob3) {
                        callback(ob3)
                    })
                })
            }

            //购物车表没有这个用户的这个商品且是增加数量，添加到数据库
            else if (!ifInDataBase && tag == 1) {
                that.addToShoppingCar(data, function (ob4) {
                    callback(ob4)
                });
            }

        })

        callback(ob);

    }
}

module.exports = ShoppingCarServise;