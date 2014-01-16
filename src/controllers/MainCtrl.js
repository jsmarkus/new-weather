define(function(require) {
    var app = require('app');

    require('filters/Units');
    require('services/Geo');
    require('services/Weather');

    app.register.controller('MainCtrl', ['$scope', '$log', 'Geo', 'Weather',
        function($scope, $log, Geo, Weather) {
            $scope.units = 'us';

            $scope.dailyChart = {
                options: {
                    chart: {
                        type: 'line',
                        width: 480,
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

            $scope.hourlyChart = {
                options: {
                    chart: {
                        type: 'line',
                        width: 480,
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
                    $log.debug(forecast);
                    $scope.units = forecast.flags.units;
                    $scope.currently = forecast.currently;
                    $scope.hourlyChart.series = makeSeries(forecast.hourly.data);
                    $scope.dailyChart.series = makeSeries(forecast.daily.data);
                });

            function makeSeries(data) {
                var tempData = [];
                var pressureData = [];
                var isRange = false;

                for (var i = 0; i < data.length; i++) {
                    var row = data[i];
                    var time = row.time * 1000;
                    if ('temperatureMin' in row) {
                        isRange = true;
                        tempData.push([time, row.temperatureMin, row.temperatureMax]);
                    } else {
                        tempData.push([time, row.temperature]);
                    }
                    pressureData.push({
                        'x': time,
                        'y': row.pressure
                    });
                }

                return [{
                    name: 'Temperature',
                    type: isRange ? 'arearange':'line',
                    yAxis: 0,
                    data: tempData
                }, {
                    name: 'Pressure',
                    yAxis: 1,
                    data: pressureData
                }];
            }
        }
    ]);
});