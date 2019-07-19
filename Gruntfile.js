module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: 'dist',

    sass: {
      dist: {
        options: {
          sourcemap: 'auto',
          style: 'nested'
        },
        files: {
          'dist/acl.css': 'sass/app/acl.scss'
        }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, src: 'assets/super-tight-icon-set/**', dest: 'dist/'},
          {expand: true, src: 'fonts/*', dest: 'dist/assets'}
        ],
      },
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: 'acl.css',
          dest: 'dist',
          ext: '.min.css'
        }]
      }
    },

    svgstore: {
      options: {},
      default: {
        files: {
          'assets/super-tight-icon-set/dist/stis-master.svg': ['assets/super-tight-icon-set/svgs/*.svg'],
        },
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['sass'])
  grunt.registerTask('icon', ['svgstore'])
  grunt.registerTask('release', ['svgstore', 'clean', 'sass', 'cssmin', 'copy']);

};
