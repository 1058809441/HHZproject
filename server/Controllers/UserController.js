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