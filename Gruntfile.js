module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8080,
          base: './app'
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: false,
          sourcemap: false
        },
        files: {
          './app/css/pushmenu.css': [
              './assets/scss/pushmenu.scss'
          ]
        }
      }
    },
    watch: {
      html: {
        files: 'app/**/*.html',
        options: {
          livereload: true
        }
      },
      styles:{
        options:{
          livereload: true,
          spawn: false,
          event: ['added','deleted','changed']
        },
        files:['./assets/scss/pushmenu.scss'],
        tasks:['sass']
      },
    },
    // open: {
    //   all: {
    //       path: 'http://localhost:8080'
    //   }
    // }
  });
  
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect:server', 'watch']);
};
