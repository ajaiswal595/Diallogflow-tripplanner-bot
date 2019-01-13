define([], function () {
    "use strict";

    function chatServices($http, $q, $location, toaster) {
        return {
            send: send
        }

        var headers = {
				'Access-Control-Allow-Origin' : '*',
				'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			};

        function send(msg,clientid) {
            
            var resultDefer = $q.defer();
            $http({
                method:'post',
                url:'/chat',
                headers:headers,
                data:{
                message:msg,
                clientToken:clientid
            }}).then(function(response){
                resultDefer.resolve(response);
                toaster.pop("Success","MsgSent")
            },function(error){
                resultDefer.reject(error);
                toaster.pop("error",error)
            })
            
           return resultDefer.promise;;
            
        }
    } 
    chatServices.$inject = ["$http", "$q", "$location", "toaster"];

    return chatServices;

});
