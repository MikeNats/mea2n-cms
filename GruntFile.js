'use strict';
      
module.exports = (grunt) => {
  
  require('load-grunt-tasks')(grunt);

  let appTsFiles = './clientSideJS/**/*.ts',
  bundleFiles = [
    'node_modules/core-js/client/shim.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    appTsFiles
  ],
  npmTask = [
      'grunt-contrib-watch',
      'grunt-contrib-uglify',
      'grunt-html-minify',
      'grunt-contrib-sass',
      'grunt-tslint',
      'grunt-karma'
    ],
    config = {
      pkg: grunt.file.readJSON('package.json'),
      browserify: {
        dist: {
          files: {
            'app/app.min.js': [bundleFiles]
          },
          options: {
            plugin: [
              ['tsify']
            ]
          }
        }
      },
      uglify: {
        'my_target': {
          files: {
            'app/app.min.js': ['app/app.min.js']
          }
        }
      },
      sass: {
        dist: {
          options: {
            cacheLocation: './node_modules/',
            cache: false,
            noCache: false,
            style: 'compressed',
            sourcemap: 'none',
            loadPath: ['node_modules/foundation-sites/assets']
          },
          files: {
            'app/app.min.css': ['./scss/**/*.scss', './scss/*.scss'],
          }
        }
      },
      tslint: {
        options: {
            configuration: "tslint.json",
            force: false
        },
        files: {
            src: [appTsFiles]
        }
      },
      html_minify: {
        all: {
          files: [{
            expand: true,
            cwd: './',
            src: ['index.html'],
            dest: 'app',
            ext: '.html'
            }]
        }
      },
      karma: {
        unit: {
          configFile: 'karma.conf.js',
          singleRun: true,
          autoWatch: false,
          browsers: ['PhantomJS']
        }
      },
      watch: {
        tslint: {
          files: [appTsFiles],
          tasks: ['browserify', 'uglify']
        },        
        sass: {
          files: ['./scss/**/*.scss', './scss/*.scss'],
          tasks: ['sass']
        },
        html_minify: {
          files: ['index.html'],
          tasks: ['html_minify']
        }
      }
    };

  //Set Grunt configuration
  grunt.initConfig(config);
  

  //Load Grunt tasks
  npmTask.forEach((npmTask) => {
    grunt.loadNpmTasks(npmTask);
  });

  
  grunt.registerTask('test', ['karma']);
  grunt.registerTask('deploy', ['karma', 'tslint', 'browserify', 'uglify', 'html_minify', 'sass']);
  //Register Grunt Tasks
  grunt.registerTask('default', [ 'browserify', 'uglify', 'html_minify', 'sass']);
};