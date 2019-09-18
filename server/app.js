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
app.listen(8091,()=>{
    console.log("服务器已启动：")
})

app.use(express.static(__dirname+'/build'));


app.use( (req,res,next)=>{
    console.log("req.url:",req.url);
    console.log("-------");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
	next();
})


let UserController = require('./Controllers/UserController');
app.get('/user.html', UserController.selectAllUser);//平台端，获取用户数据
app.post('/idProduct.html' , urlencodedParser, ProductController.selectByID);
app.post('/updateProduct.html' , urlencodedParser, ProductController.updateProduct);
app.post('/deleteProduct.html' , urlencodedParser, ProductController.deleteById);
app.post('/insertProduct.html' , urlencodedParser, ProductController.insertProduct);

app.post('/Login.html',urlencodedParser, UserController.Login);//客户端，登录
app.post('/Register.html',urlencodedParser, UserController.Register);//客户端，注册




let OrderController = require('./Controllers/OrderController');
app.get('/order.html', OrderController.selectAllOrder);//平台端，查看订单信息

app.post('/AddOrder.html',urlencodedParser, OrderController.addOrder);//客户端下单，即清空购物车


let ProductController = require('./Controllers/ProductController');
app.get('/product.html', ProductController.selectAllProduct);//获取商品信息


let ShoppingCarController = require('./Controllers/ShoppingCarController');
app.post('/AddToShoppingCar.html',urlencodedParser, ShoppingCarController.addToShoppingCar);//客户端，添加到购物车
app.post('/UpdateShoppingCar.html',urlencodedParser, ShoppingCarController.updateShoppingCar);//客户端，增减购物车内商品的数量








