define(function(require) {
    var angular = require('angular');
    var angularAMD = require('angularAMD');
    require('angular-route');

    var app = angular.module('weather', ['ngRoute']);

    app.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider.when('/', angularAMD.route({
                templateUrl: require.toUrl('./templates/main.html')
            }));
            $routeProvider.when('/w', angularAMD.route({
                templateUrl: require.toUrl('./templates/weather.html'),
                controller: 'MainCtrl'
            }));
            $locationProvider.html5Mode(true);
        }
    ]);

    angularAMD.bootstrap(app);

    return app;

});