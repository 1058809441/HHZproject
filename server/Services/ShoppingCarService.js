//引入Usermodel
let ShoppingCarModel = require('../Models/ShoppingCarModel');
class ShoppingCarServise extends ShoppingCarModel {
    constructor() {
        super();
    }
    add(data, callback) {
        // console.log(data);
        let that = this;
        if (data.shopping_car_id == "null") {
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

        data.tag = parseInt(data.tag);
        data.product_count = parseInt(data.product_count);
        data.shopping_car_id = parseInt(data.shopping_car_id);

        // console.log(data);

        that.updateToShoppingCar2(data, function (ob) {
            callback(ob);
        });

    }
}

module.exports = ShoppingCarServise;