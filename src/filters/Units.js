define(function(require) {
    var angular = require('angular');
    var app = require('weather');

    var systems = {
        'us': {
            'speed': 'mph',
            'distance': 'miles',
            'temperature': '°F',
            'pressure':'mbar'
        },
        'si': {
            'speed': 'm/s',
            'distance': 'km',
            'temperature': '°C',
            'pressure':'hpa'
        }
    };

    app
        .filter('temperature', function() {
            return function(value, units) {
                if (!angular.isNumber(value)) {
                    return null;
                }
                return value + ' ' + systems[units].temperature;
            };
        })
        .filter('pressure', function() {
            return function(value, units) {
                if (!angular.isNumber(value)) {
                    return null;
                }
                return value + ' ' + systems[units].pressure;
            };
        })
        .filter('distance', function() {
            return function(value, units) {
                if (!angular.isNumber(value)) {
                    return null;
                }
                return value + ' ' + systems[units].distance;
            };
        })
        .filter('speed', function() {
            return function(value, units) {
                if (!angular.isNumber(value)) {
                    return null;
                }
                return value + ' ' + systems[units].speed;
            };
        });
});