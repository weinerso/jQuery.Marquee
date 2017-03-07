module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        jshint: {
            files: ['jquery.marquee.js'],
            options: {
                reporterOutput: ""
            }
        },
        uglify: {
            options: { banner: "/* jQuery.marquee - scrolling text like old marquee element */\n/* @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin */\n" },
            target: {
                files: {
                    'jquery.marquee.min.js': 'jquery.marquee.js'
                }
            }
        },
        watch: {
          scripts: {
            files: ['jquery.marquee.js'],
            tasks: ['jshint', 'uglify']
          },
        }
    });

    grunt.registerTask('default', ['jshint', 'uglify'])
};