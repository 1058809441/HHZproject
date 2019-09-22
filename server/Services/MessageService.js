let MessageModel = require('../Models/MessageModel');

class MessageService extends MessageModel{
    constructor() {
        super();
    }
    myMessage(username,callback) {
        let that = this;
        that.selectMyMessage(username,function(ob){
            callback(ob);
        });
    }

    allMessage(callback) {
        let that = this;
        that.selectAllMessage(function(ob){
            callback(ob);
        });
    }

    addMessage(data, callback) {
        let that = this;

        let date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        let time = year + '/' + month + '/' + day + '-' + hour + ':' + minute + ':' + second;
        data.time = time;

        that.AddMessage(data, function (ob1) {

            that.selectMyMessage( data.username,(ob2)=>{

                that.selectAllMessage((ob3)=>{
                    let result = {
                        myMessage:ob2,
                        allMessage:ob3
                    }
                    callback(result);
                });

            });

        });
    }
}

module.exports = MessageService;