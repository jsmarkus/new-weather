define(function(require) {
    var app = require('weather');

    app.controller('MainCtrl', ['$scope', '$log', 'Geo', 'Weather',
        function($scope, $log, Geo, Weather) {
            $scope.units = 'us';

            $scope.chart = {
                options: {
                    chart: {
                        type: 'line',
                        height: 240
                    },
                    xAxis: {
                        type: 'datetime'
                    },
                    yAxis: [{
                        title: {
                            text: 'Temperature'
                        }
                    }, {
                        title: {
                            text: 'Pressure'
                        }
                    }]
                },
                series: [],
                title: {
                    text: ''
                },

                loading: false
            };


            Geo.here()
                .then(Weather.today)
                .then(function(forecast) {
                    console.log(forecast);
                    $scope.units = forecast.flags.units;
                    $scope.currently = forecast.currently;
                    $scope.chart.series = makeSeries(forecast.daily.data);
                });

            function makeSeries(data) {
                var tempData = [];
                var maxTempData = [];
                var minTempData = [];
                var pressureData = [];

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var time = row.time * 1000;
                    tempData.push({
                        'x': time,
                        'y': row.temperature
                    });
                    if ('temperatureMin' in row) {
                        minTempData.push({
                            'x': time,
                            'y': row.temperatureMin
                        });
                        maxTempData.push({
                            'x': time,
                            'y': row.temperatureMax
                        });
                    }
                    pressureData.push({
                        'x': time,
                        'y': row.pressure
                    });
                }

                return [{
                    name: 'Temperature',
                    yAxis: 0,
                    data: tempData
                }, {
                    name: 'Temperature min',
                    yAxis: 0,
                    data: minTempData
                }, {
                    name: 'Temperature max',
                    yAxis: 0,
                    data: maxTempData
                }, {
                    name: 'Pressure',
                    yAxis: 1,
                    data: pressureData
                }];
            }
        }
    ]);
});