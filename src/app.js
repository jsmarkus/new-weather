define(function(require) {
    var angular = require('angular');

    require('weather');
    require('controllers/MainCtrl');

    angular.module('weather')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when('/', {
                templateUrl: require.toUrl('./templates/weather.html'),
                controller: 'MainCtrl'
            });
            $locationProvider.html5Mode(true);
        }]);
});