// `grunt heroku`
// deploys on heroku.

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('build', 'Build a production ready version of your site.', [
    'build'
    'serve:dist'
  ]);
};

module.exports = taskConfig;
