var exec = require("shelljs").exec;

module.exports = function(grunt) {

  grunt.registerTask("elex", function() {

    var done = this.async();

    exec('elex results "2016-03-01" --results-level state -o json > ./data/results.json', { silent: true }, done);

  });

}