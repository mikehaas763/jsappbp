var gulp = require('gulp');
var BuildTasksRegistry = require('./gulp/BuildTasksRegistry.js');

var buildTasks = new BuildTasksRegistry();
gulp.registry(buildTasks);