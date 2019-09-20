let ProductService = require('../Services/ProductService');

module.exports.selectAllProduct = function (req, res) {
    let productService = new ProductService();
    productService.AllProduct(function (ob) {
        // console.log("controller2");
        res.json(ob);
    });
}

module.exports.selectAllLunbo = function (req, res) {
    let productService = new ProductService();
    productService.AllLunbo(function (ob) {
        res.json(ob);
    });
}


module.exports.selectByID = function (req, res) {
    // console.log(req.body);
    let id = parseInt(req.body.id);
    console.log(id);
    let productService = new ProductService();
    productService.ByID(id,function (ob) {
        res.json(ob);
    });
}

module.exports.updateProduct = function (req, res) {
    let data = req.body;
    let productService = new ProductService();
    productService.update(data,function (ob) {
        res.json(ob);
    });
}


module.exports.deleteById = function (req, res) {
    let id = parseInt(req.body.id);
    console.log(id);
    let productService = new ProductService();
    productService.delete(id,function (ob) {
        res.json(ob);
    });
}

module.exports.insertProduct = function (req, res) {
    let data = req.body;
    // console.log(data)
    let productService = new ProductService();
    productService.insert(data,function (ob) {
        res.json(ob);
    });
}




