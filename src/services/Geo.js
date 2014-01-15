define(function(require) {
    var app = require('weather');

    app.service('Geo', [
        '$rootScope', '$q',
        function($rootScope, $q) {
            return {
                here: function() {
                    var def = $q.defer();
                    navigator.geolocation.getCurrentPosition(function(pos) {
                        $rootScope.$apply(function() {
                            def.resolve(pos);
                        });
                    });
                    return def.promise;
                }
            };
        }
    ]);
});