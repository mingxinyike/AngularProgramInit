var app = angular.module('myApp',['ngRoute','myApp.services','myApp.directives']);

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
        when('/', {
            redirectTo: '/login'
        })
        .when('/path1', {
            templateUrl: 'views/path1.html',
            controller: 'loginCtrl'
        })
        .when('/path2', {
            templateUrl: 'views/path2.html',
            controller: 'findPswCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
