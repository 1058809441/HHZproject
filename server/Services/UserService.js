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

}

module.exports = UserService;