
module.exports = function(grunt) {

    // Робимо настройки grunt
    grunt.initConfig({
// обєднання js i css файлів
        concat: {
            options: {
                // Task-specific options go here. 
                separator: ''
            },
            js: {
                src: ['src/js/script1.js', 'src/js/script2.js'],
                dest: 'dist/js/src/main.js'
            },
            css: {
                src: ['src/css/style1.css', 'src/css/style2.css'],
                dest: 'dist/css/src/main.css'
            }
        },
        // мініфікація файлів
        uglify: {
            js_min: {
                src: 'dist/js/src/main.js',
                dest: 'dist/js/dist/main.min.js'
            }
        },
        cssmin: {
            css_min:{
                src: 'dist/css/src/main.css',
                dest: 'dist/css/dist/main.min.css'
            }
        }

    });

    // плагіни для використання
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');

    // консоль grunt, що виконується
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};