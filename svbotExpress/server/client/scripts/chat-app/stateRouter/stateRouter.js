define([], function () {
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('select', {
            url: '/select',
            templateUrl: 'scripts/chat-app/chat-curd/select.html'
        })
        .state('create', {
            url: '/create',
            templateUrl: 'scripts/chat-app/chat-curd/create.html'
        }).state('update', {
            url: '/update',
            templateUrl: 'scripts/chat-app/chat-curd/update.html'
        }).state('delete', {
            url: '/delete',
            templateUrl: 'scripts/chat-app/chat-curd/delete.html'
        });
    }
    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    return config;
});

