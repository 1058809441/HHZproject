const express = require('express');
// const bodyParser = require('body-parser');

//7,引入body-parser模块
var bodyParser = require('body-parser');
//8,创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
//body-parser是一个HTTP请求体解析中间件
//使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体
//Express框架中就是使用这个模块做为请求体解析中间件
//bodyParser变量是对中间件的引用。请求体解析后，解析值都会被放到req.body属性，内容为空时是一个{}空对象。
//extended - 当设置为false时，会使用querystring库解析URL编码的数据
//extended - 当设置为true时，会使用qs库解析URL编码的数据。后没有指定编码时，使用此编码。默认为true


var app = express();
app.listen(8092,()=>{
    console.log("服务器已启动：")
})

// app.use(express.static(__dirname+'/build'));


app.use( (req,res,next)=>{
    console.log("req.url:",req.url);
    console.log("-------");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
	next();
})



let UserController = require('./Controllers/UserController');
//管理平台的接口：查询用户信息
app.get('/users.html', UserController.selectAllUser);
//客户端的接口：用户登录和注册
app.post('/Login.html',urlencodedParser, UserController.Login);
app.post('/Register.html',urlencodedParser, UserController.Register);



let OrderController = require('./Controllers/OrderController');
//管理平台的接口：查询订单信息
app.get('/orders.html', OrderController.selectAllOrder);
//客户端的接口：用户下单后增加订单信息
app.post('/AddOrder.html',urlencodedParser, OrderController.AddOrder);



let ProductController = require('./Controllers/ProductController');
//管理平台的接口：查询商品信息，对商品进行增、删、改、查
app.get('/products.html', ProductController.selectAllProduct);
app.post('/insertProduct.html' , urlencodedParser, ProductController.insertProduct);
app.post('/deleteProduct.html' , urlencodedParser, ProductController.deleteById);
app.post('/updateProduct.html' , urlencodedParser, ProductController.updateProduct);
app.post('/IdProduct.html' , urlencodedParser, ProductController.selectByID);
//客户端的接口：客户端的获取商品和管理平台一样



let ShoppingCarController = require('./Controllers/ShoppingCarController');
//客户端的接口：首次将商品添加到购物车、在购物车页面增减商品个数
app.post('/AddToShoppingCar.html',urlencodedParser, ShoppingCarController.AddToShoppingCar);
app.post('/UpdateShoppingCar.html',urlencodedParser, ShoppingCarController.UpdateShoppingCar);

