define(function(require) {
    var app = require('weather');

    app.service('Weather', [
        '$http',
        function($http) {

            var key = '56b081004c018cbe4579747726d3f640';

            function serializePosition(position) {
                return [position.coords.latitude, position.coords.longitude].join(',');
            }

            return {
                today: function(position) {
                    var url = 'https://api.forecast.io/forecast/' + key + '/' + serializePosition(position) + '?callback=JSON_CALLBACK';
                    return $http.jsonp(url, {
                        params: {
                            units: 'auto'
                        }
                    }).then(function (response) {
                        var res = response.data;
                        return res;
                    });
                }
            };
        }
    ]);
});