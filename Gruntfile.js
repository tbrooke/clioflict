var path = require('path');

module.exports = function(grunt) {
  var angularPath = path.join(__dirname, 'bower_components/angular-1.1.6');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      'ng-deps': {
        cwd: angularPath,
        command: 'npm install'
      },
      'ng-build': {
        cwd: angularPath,
        command: 'grunt package'
      }
    },
    clean: {
      preBuild: ['public/css/app.css','public/js/app.js'],
      postBuild: []
    },
    copy: {
      bootstrapFonts: {
        src: '',
        dest: ''
      }
    },
    concat: {
      options: {
        separator: '\n\n',
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      js: {
        src: [
          'bower_components/jquery/jquery.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'bower_components/angular-1.1.6/build/angular.js',
          'bower_components/angular-1.1.6/build/angular-resource.js',
          'bower_components/angular-1.1.6/build/angular-cookies.js'
        ],
        dest: 'public/js/app.js'
      },
      css: {
        src: [
          'bower_components/bootstrap/dist/css/bootstrap.min.css',
          'public/stylesheets/style.css'
        ],
        dest: 'public/css/app.css'
      }
    },
    watch: {
      templates: {
        files: [],
        tasks: ['build']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('build', 
    [
      'clean:preBuild',
      'concat',
      'clean:postBuild'
    ]);
  grunt.registerTask('fullBuild', ['buildAngular', 'build']);

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('buildAngular', ['exec', 'exec:ng-deps', 'exec:ng-build'])

};
