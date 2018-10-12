module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                style: 'compressed',
            
                sourcemap: 'none'
                },
                files: {
                'css/grid-system.min.css': [
                    'sass/grid-system.scss']
                }
            }
        },
        watch: {
        options: {
            livereload: true
        },
        sass: {
            files: ['sass/**/*.scss'],
            tasks: ['sass']
        },
        html: {
            files: ['*.html']
        }
        },
        clean: {
            dist: ['assets/build/app.min.css']
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Register tasks
    grunt.registerTask('default', ['clean','sass']);
};