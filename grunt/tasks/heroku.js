// `grunt heroku:production`
// Deploys on heroku.

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('heroku:', 'Deploy on heroku.', [
    'build',
    'serve:dist'
  ]);
};

module.exports = taskConfig;
