var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', 
    ['copy:watch',
    
    'nunjucks:watch',
    'sprite:svg:watch',
    'sprite:png:watch',
    'webpack:watch',
    'sass:watch'
]);
