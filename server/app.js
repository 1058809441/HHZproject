const express = require('express');
let app = express();
//引入body-parser模块
let bodyParser = require('body-parser');
//创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//静态文件
app.use(express.static('public'));


//引入模块,帮助图片上传
var multer = require('multer');



app.listen(8888,()=>{
    console.log("服务器已启动：8888")
})


app.use( (req,res,next)=>{
    console.log("req.url:",req.url);
    console.log("-------");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    res.setHeader("Access-Control-Allow-Methods","*");
	next();
})



let UserController = require('./Controllers/UserController');
//管理平台的接口：查询用户信息
app.get('/users.html', UserController.selectAllUser);
//客户端的接口：用户登录和注册
app.post('/login', UserController.Login);
app.post('/register', UserController.Register);



let MessageController = require('./Controllers/MessageController');
//客户端的接口：用户自己的动态，所以用户的动态，用户发表动态
app.post('/MyMessage', MessageController.MyMessage);
app.get('/AllMessage', MessageController.AllMessage);
app.post('/AddMessage', MessageController.AddMessage);



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
app.post('/DeleteFromShoppingCar', ShoppingCarController.DeleteFromShoppingCar);
app.post('/UpdateShoppingCar', ShoppingCarController.UpdateShoppingCar);



//图片上传
let fileController = require('./Controllers/FileController');
app.post("/upload", multer({
    dest: __dirname + '/public/upload/imgs/'
}).array('file'), fileController.upload);


