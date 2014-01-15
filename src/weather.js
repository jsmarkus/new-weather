define(function(require) {
    var angular = require('angular');
    require('angular-route');
    require('highcharts-ng');

    return angular.module('weather', ['ngRoute', 'highcharts-ng']);
});
