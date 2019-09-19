//引入Usermodel
let UserModel = require('../Models/UserModel');
class UserService extends UserModel{
    constructor() {
        super();
    }
    AllUser(callback) {
        let that = this;

        that.selectAllUser(function(ob){
            callback(ob);
        });
    }

    
    login(data, callback) {
        let that = this;
        that.Login(data, function (ob1) {
            // console.log(ob);
            // console.log(ob[0]);
            let result = {
                username: data.checkName,
                ifLogin: false,
                shoppingCar: []
            }
            if (ob1[0] && ob1[0].password == data.pass) {
                result.ifLogin = true;
                that.getShoppingCar(data.checkName, function (ob2) {
                    result.shoppingCar = ob2;
                    callback(result);
                })
            } else {
                callback(result);
            }
        });
    }

    register(data, callback) {

        let that = this;
        that.selectByUserName(data, function (ob1) {
            let result = {
                username: "",
                ifLogin: false,
                shoppingCar: []
            }
            // console.log(ob1);
            // console.log(ob1[0]);
            if (ob1[0]) {
                callback(result)

            } else {
                result.ifLogin = true;
                that.Register(data, function (ob2) {
                    result.username = data.checkName;
                    result.ifLogin = true;
                    callback(result);

                });
            }



        });
    }



}

module.exports = UserService;