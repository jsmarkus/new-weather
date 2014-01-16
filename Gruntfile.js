module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    //   },
    //   dist: {
    //     files: {
    //       'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
    //     }
    //   }
    // },
    // watch: {
    //   files: ['<%= jshint.files %>'],
    //   tasks: ['jshint', 'qunit']
    // }
    connect: {
      options: {
        keepalive: true
      },
      prod: {
        options: {
          port: 9000,
          open: true,
          base: './build/'
        }
      },
      dev: {
        options: {
          port: 9001,
          open: true,
          base: '.'
        }
      }
    },
    requirejs: {
      compile: {
        options: {

          baseUrl: 'src/',
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
          name: '_boot',

          optimize: 'none',
          deps: ['MainCtrl'],

          out: "build/app.js"
        }
      }
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['requirejs:compile']);
  grunt.registerTask('serve', ['connect:prod']);

};