module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: {
          "css/responsive-showcaser.css": "less/responsive-showcaser.less",
          "demo/css/responsive-showcaser.css": "less/responsive-showcaser.less",
        }
      }
    },
    watch: {
      files: 'less/**/*.less',
      tasks: 'less'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
}
