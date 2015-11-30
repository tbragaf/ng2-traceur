module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('jsconfig.json'),

    copy: {
      files: {
        cwd: 'src',
        src: ['**/*.html'],
        dest: 'dist',
        expand: true
      }
    },

    sass: {
      dist: {
        files: {
          'dist/style.css': 'src/style.scss'
        }
      }
    },

    watch: {
      configFiles: {
        files: ['Gruntfile.js'],
        options: {
          reload: true
        }
      },
      css: {
        files: 'src/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['src/**/*.html'],
        tasks: ['copy'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['src/**/*.js'],
        tasks: ['traceur'],
        options: {
          livereload: true
        }
      }
    },

    traceur: {
      options: {
        experimental: true,
        annotations: true,
        memberVariables: true,
        typeAssertions: true,
        typeAssertionModule: 'rtts_assert/rtts_assert',
        types: true
      },
      custom: {
        files: [{
          cwd: 'src',
          src: ['**/*.js'],
          dest: 'dist',
          expand: true
        }]
      },
    }

  });

  grunt.loadNpmTasks('grunt-traceur');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['copy', 'sass', 'traceur']);
}