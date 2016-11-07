
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
                src: ['js/src/script1.js', 'js/src/script2.js'],
                dest: 'js/dist/script.main.js'
            },
            css: {
                src: ['css/src/style1.css', 'css/src/style2.css'],
                dest: 'css/dist/style.main.css'
            }
        },
        // мініфікація файлів
        uglify: {
            js_min: {
                src: 'js/dist/script.main.js',
                dest: 'js/dist/main.min.js'
            }
        },
        cssmin: {
            css_min:{
                src: 'css/dist/style.main.css',
                dest: 'css/dist/main.min.css'
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