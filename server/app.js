const express = require('express');
let app = express();

// const bodyParser = require('body-parser');

//7,引入body-parser模块
let bodyParser = require('body-parser');

//8,创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//body-parser是一个HTTP请求体解析中间件
//使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体
//Express框架中就是使用这个模块做为请求体解析中间件
//bodyParser变量是对中间件的引用。请求体解析后，解析值都会被放到req.body属性，内容为空时是一个{}空对象。
//extended - 当设置为false时，会使用querystring库解析URL编码的数据
//extended - 当设置为true时，会使用qs库解析URL编码的数据。后没有指定编码时，使用此编码。默认为true


app.listen(8888,()=>{
    console.log("服务器已启动：8888")
})

app.use(express.static(__dirname+'/resouce'));


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
app.post('/login', UserController.Login);
app.post('/register', UserController.Register);



let OrderController = require('./Controllers/OrderController');
//管理平台的接口：查询订单信息
app.post('/orders', OrderController.selectAllOrder);
//客户端的接口：用户下单后增加订单信息、个人中心获取用户订单信息
app.post('/AddOrder', OrderController.AddOrder);
app.post('/UserOrder', OrderController.UserOrder);




let ProductController = require('./Controllers/ProductController');
//管理平台的接口：查询商品信息，对商品进行增、删、改、查
app.get('/products', ProductController.selectAllProduct);
app.post('/insertProduct.html' , ProductController.insertProduct);
app.post('/deleteProduct.html' , ProductController.deleteById);
app.post('/updateProduct.html' , ProductController.updateProduct);
app.post('/IdProduct.html' , ProductController.selectByID);
//客户端的接口：客户端的获取商品和管理平台一样
//客户端获取轮播图：
app.get('/lunbo', ProductController.selectAllLunbo);


let ShoppingCarController = require('./Controllers/ShoppingCarController');
//客户端的接口：首次将商品添加到购物车(原来购物车里面没有的)、在购物车页面增减商品个数或其他页面添加到购物车
app.post('/AddToShoppingCar', ShoppingCarController.AddToShoppingCar);
app.post('/UpdateShoppingCar', ShoppingCarController.UpdateShoppingCar);


