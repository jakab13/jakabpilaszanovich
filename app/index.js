window.angular = window.angular || require('angular');
window.d3 = require('d3');

angular
    .module('JPApp', [
        require('angular-ui-router'),
        require('angular-cookies'),
        require('angular-animate'),
        require('angular-aria')
    ])
    .config(require('./config'));

require('./filters');
require('./controllers');
require('./services');
require('./directives');