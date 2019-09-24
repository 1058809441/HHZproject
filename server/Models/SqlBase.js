class SqlBase {
    constructor() {
        let mysql = require('mysql'); //调用MySQL模块

        //1，创建一个connection
        // this.connection = mysql.createConnection({
        //     host: 'cdb-a9y1iffo.cd.tencentcdb.com', //主机 ip
        //     user: 'root', //MySQL认证用户名
        //     password: 'cdhq1234', //MySQL认证用户密码
        //     port: '10055', //端口号
        //     database: 'HHZF' //数据库里面的数据
        // });
        this.connection = mysql.createConnection({
            host: 'localhost', //主机 ip
            user: 'root', //MySQL认证用户名
            password: 'root', //MySQL认证用户密码
            port: '3306', //端口号
            database: 'hhzf' //数据库里面的数据
        });
        //2,连接
        this.connection.connect();
    }


    end() {
        this.connection.end();
    }


}

module.exports = SqlBase;