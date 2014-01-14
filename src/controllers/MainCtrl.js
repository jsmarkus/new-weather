define(function(require) {
    var app = require('weather');
    require('services/Geo');

    app.controller('MainCtrl', ['$scope', 'Geo',
        function($scope, Geo) {
        }
    ]);
});