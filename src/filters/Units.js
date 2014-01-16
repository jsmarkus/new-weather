define(function(require) {
    var angular = require('angular');
    var app = require('app');

    var systems = {
        'us': {
            'speed': 'mph',
            'distance': 'miles',
            'temperature': '°F',
            'pressure': 'mbar'
        },
        'si': {
            'speed': 'm/s',
            'distance': 'km',
            'temperature': '°C',
            'pressure': 'hpa'
        }
    };

    app.register.filter('temperature', function() {
        return function(value, units) {
            if (!angular.isNumber(value)) {
                return null;
            }
            return value + ' ' + systems[units].temperature;
        };
    });
    app.register.filter('pressure', function() {
        return function(value, units) {
            if (!angular.isNumber(value)) {
                return null;
            }
            return value + ' ' + systems[units].pressure;
        };
    });
    app.register.filter('distance', function() {
        return function(value, units) {
            if (!angular.isNumber(value)) {
                return null;
            }
            return value + ' ' + systems[units].distance;
        };
    });
    app.register.filter('speed', function() {
        return function(value, units) {
            if (!angular.isNumber(value)) {
                return null;
            }
            return value + ' ' + systems[units].speed;
        };
    });
});