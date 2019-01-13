    define([], function () {

        function chatController($scope, $http, toaster, chatServices) {

            $scope.send=function(){
                
               var promise = chatServices.send($scope.msg,$scope.clienttoken);
                promise.then(function(data){
                    console.log(data);
                    $scope.result=data;
                },function(error){
                    console.log(data);
                })
            }
            

          /*  $scope.addCustomer = chatServices.addCustomer;
            $scope.deleteCustomer = chatServices.deleteCustomer;
            $scope.updateCustomer = chatServices.updateCustomer;
           
            $scope.getAllCustomer =

                $scope.getAllCustomer = function () {
                    var promise = chatServices.getAllCustomer();
                    
                
                    promise.then(function (data) {
                        console.log(data);
                        $scope.customers=data;
                    }, function (error) {
                        console.error(data);
                    })
                    console.log($scope.customers);
                }

            $scope.customer = {};
            $scope.customer.addresses = [{
                flat: "",
                street: "",
                state: "",
                pinCode: ""
                }];


            $scope.addNewAddress = function () {
                $scope.customer.addresses.push({
                    flat: "",
                    street: "",
                    state: "",
                    pinCode: ""
                });
         */   }
        chatController.$inject = ['$scope', '$http', 'toaster', 'chatServices'];
        return chatController;
    });
