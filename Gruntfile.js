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
      preBuild: ['public/css/app.css','public/js/app.js','public/stylesheets/style.css'],
      postBuild: []
    },
    copy: {
      bootstrapFonts: {
        expand: true,
        cwd: 'bower_components/bootstrap-theme-cirrus/dist/fonts',
        src: '*',
        dest: 'public/fonts/'
      }
    },
    concat: {
      options: {
        separator: '\n\n',
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      client: {
        src: [
          'client/clio_client_search.js',
          'client/services/**.js',
          'client/controllers/**.js',
          'client/directives/**.js'
        ],
        dest: 'tmp/client.js' 
      },
      js: {
        src: [
          'bower_components/jquery/jquery.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'bower_components/socket.io-client/dist/socket.io.js',
          'bower_components/streamable/client.js',
          'bower_components/angular-1.1.6/build/angular.js',
          'bower_components/angular-1.1.6/build/angular-resource.js',
          'tmp/client.js',
          'tmp/templates.js'
        ],
        dest: 'public/js/app.js'
      },
      css: {
        src: [
          'bower_components/bootstrap-theme-cirrus/dist/css/bootstrap.min.css',
          'public/stylesheets/spinner.css',
          'public/stylesheets/style.css'
        ],
        dest: 'public/css/app.css'
      }
    },
    stylus: {
      compile: {
        options: {
          use: [require('nib')]
        },
        files: {
          'public/stylesheets/style.css': 'public/stylesheets/style.styl'
        }
      }
    },
    watch: {
      client: {
        files: [
          'client/templates/**.html',
          'client/**/*.js',
          'public/stylesheets/*.styl'
        ],
        tasks: ['build']
      }
    },
    ngtemplates: {
      clioClientSearch: {
        options: {
          base: 'client/templates'
        },
        src: 'client/templates/**.html',
        dest: 'tmp/templates.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('build', 
    [
      'clean:preBuild',
      'copy',
      'stylus',
      'ngtemplates',
      'concat:client',
      'concat',
      'clean:postBuild'
    ]);
  grunt.registerTask('fullBuild', ['buildAngular', 'build']);

  grunt.registerTask('default', ['watch:client']);
  grunt.registerTask('buildAngular', ['exec:ng-deps', 'exec:ng-build'])

};
