let MessageService = require('../Services/MessageService');

module.exports.MyMessage = function (req, res) {
    var username = req.body.username;
    let messageService = new MessageService();
    messageService.myMessage(username,function (ob) {
        res.json(ob);
    });
}

module.exports.AllMessage = function (req, res) {
    let messageService = new MessageService();
    messageService.allMessage(function (ob) {
        res.json(ob);
    });
}

module.exports.AddMessage = function (req, res) {
    var data = req.body;
    let messageService = new MessageService();
    messageService.addMessage(data,function (ob) {
        res.json(ob);
    });
}