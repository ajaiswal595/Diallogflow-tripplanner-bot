define(['./stateRouter/stateRouter', './chatController/chatController', './chatServices/chatServices'], function (config, chatController, chatServices) {
    var chatApp = angular.module('chat-app', ['ui.router', 'toaster']);
    chatApp.config(config);
    chatApp.controller('chatController', chatController);
    chatApp.service('chatServices', chatServices);

});
