define(function(require) {
    var app = require('weather');

    app.service('Geo', [
        function() {
            return {
                getPosition: function () {
                    return {};
                }
            };
        }
    ]);
});