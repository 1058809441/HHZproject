let UserService = require('../Services/UserService');
// module.exports.index = function (req, res) {
//         console.log("UsersController.index");
//         res.render('users', {});
// }

module.exports.selectAllUser = function (req, res) {

    let userService = new UserService();
    userService.AllUser(function (ob) {
        res.json(ob);
    });
}

module.exports.Login = function (req, res) {
    var data = req.body;
    let userService = new UserService();
    userService.login(data,function (ob) {
        res.json(ob);
    });
}

module.exports.Register = function (req, res) {
    var data = req.body;
    console.log( req.body);
    let userService = new UserService();
    userService.register(data,function (ob) {
        res.json(ob);
    });
}