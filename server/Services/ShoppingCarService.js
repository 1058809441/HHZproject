//引入Usermodel
let ShoppingCarModel = require('../Models/ShoppingCarModel');
class ShoppingCarServise extends ShoppingCarModel {
    constructor() {
        super();
    }
    add(data, callback) {
        // console.log(data);
        let that = this;
        if (data.ID == "null") {
            that.addToShoppingCar(data, function (ob) {
                callback(ob);
            });
        } else {
            that.updateToShoppingCar1(data, function (ob) {
                callback(ob);
            });
        }
    }

    update(data, callback) {
        let that = this;

        data.tag = parseInt(data.tag);//增减数量的标志，增加是1，减少是-1
        data.count = parseInt(data.count);
        data.ID = parseInt(data.ID);

        // console.log(data);

        that.updateToShoppingCar2(data, function (ob) {
            callback(ob);
        });

    }
}

module.exports = ShoppingCarServise;