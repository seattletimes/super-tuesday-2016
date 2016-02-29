var exec = require("shelljs").exec;

module.exports = function(grunt) {

  grunt.registerTask("elex", function(date) {

    var cmd = 'elex results "$date" --results-level state -o json > ./data/results.json'

    cmd = cmd.replace("$date", date || "2016-03-01");

    var done = this.async();

    exec(cmd, { silent: true }, done);

  });

}