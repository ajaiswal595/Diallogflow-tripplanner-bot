var dialogflow = require("dialogflow")
var apiai = require('apiai');



var app = apiai("client tocken");

function chat(inputtext,req, res) {
    
    console.log("-----req-----",req.body);

    var request = app.textRequest(inputtext, {
        sessionId: 'any unique'
    });

    request.on('response', function (response) {
        console.log(response);
        res.send(response) ;
    });

    request.on('error', function (error) {
        console.log(error);
        res.send(error)
    });

    request.end();
}



exports.sendMsg = function (req, res) {

    var msg = req.body.message;
    chat(msg,req,res);

   // res.send("Customer inserted Successfully");
}; //chatSend
