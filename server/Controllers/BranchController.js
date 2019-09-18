let BranchService = require('../Services/BranchService');
// module.exports.index = function (req, res) {
//     console.log("IndexController.index");
//     res.render('index', {});
// }

module.exports.selectAllBranch = function (req, res) {
    let branchService = new BranchService();
    branchService.AllBranch(function (ob) {
        res.json(ob);
    });
}