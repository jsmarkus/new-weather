define(function(require) {
    var app = require('weather');

    app.controller('MainCtrl', ['$scope','$log', 'Geo', 'Weather',
        function($scope, $log, Geo, Weather) {
            $scope.units =  'us';

            Geo.here()
                .then(Weather.today)
                .then(function (forecast) {
                    console.log(forecast);
                    $scope.units = forecast.flags.units;
                    $scope.currently = forecast.currently;
                });
        }
    ]);
});