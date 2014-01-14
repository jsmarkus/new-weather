requirejs.config({
    baseUrl: '/src/',
    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    }
});

window.name = "NG_DEFER_BOOTSTRAP!";

define(['angular', 'app'], function(angular) {
    angular.element(document)
        .ready(function() {
            angular.resumeBootstrap();
        });

});