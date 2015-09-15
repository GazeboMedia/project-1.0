module.exports = function(grunt) {

  // Project configuration.
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 
   
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
        //options: {
         //   sourceMap: true
        //},
        dist: {
            files: {
                'public/styles/sassy-start.css': 'public/styles/sass/sassy-start.scss'
            }
        }
    },
    watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass']
        }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "public/scripts",
          name: "main",
          mainConfigFile: "public/scripts/build.js",
          include: ['build'],
          out: "public/scripts/main.min.js"
        }
      }
    },
    handlebars: {
      all: {
        src: 'templates',
        dest: 'js/templates.js'
      }
    }
  });
  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-handlebars');
   
  grunt.registerTask('default', ['watch', 'requirejs', 'handlebars']);
};