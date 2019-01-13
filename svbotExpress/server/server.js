        var express = require('express');
        var app = express();
        var path = require('path');
        var bodyParser = require('body-parser');
        //var mongoose = require('mongoose');
        //mongoose.connect('mongodb://localhost:27017/posist_crm_db');


        //console.log(mongoose);


        var chatController = require('./controller/chatController.js');
       
        //added comment in develop branch to check merge        
        app.use(bodyParser.json()); // support json encoded bodies
        app.use(bodyParser.urlencoded({
            extended: true
        })); // support encoded bodies



        /*app.use('/static', express.static('/views'));*/
        console.log(__dirname);
        app.use(express.static(__dirname + '/client'));
        console.log(__dirname);
        app.get('/', function (req, res) {
            res.sendFile(path.join(__dirname + '/client/index.html'));
            /*res.redirect('index.html');*/
        });




        app.post('/chat',function (req,res) {
            chatController.sendMsg(req,res);// body...
        })






        app.listen(2233, function () {
            console.log("server is running on port 2233");
        });
