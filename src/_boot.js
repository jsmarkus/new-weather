requirejs.config({
    baseUrl: '/src/',
    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        'highcharts': '../bower_components/highcharts/highcharts-all',
        'highcharts-ng': '../bower_components/highcharts-ng/dist/highcharts-ng',

        'angularAMD': '../bower_components/angularAMD/angularAMD',
        'ngLoad': '../bower_components/angularAMD/ngLoad',

        'MainCtrl': 'controllers/MainCtrl'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'highcharts': {
            exports: 'Highcharts'
        },
        'highcharts-ng': {
            deps: ['angular', 'highcharts']
        },
        'angularAMD': {
            deps: ['angular']
        }
    },
    deps:['app']
});

// window.name = "NG_DEFER_BOOTSTRAP!";

// define(['angular', 'app'], function(angular) {
    // angular.element(document)
    //     .ready(function() {
    //         angular.resumeBootstrap();
    //     });

// });