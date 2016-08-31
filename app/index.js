window.angular = window.angular || require('angular');
window.PhotoSwipe = require('PhotoSwipe');
window.PhotoSwipeUI_Default = require('../node_modules/photoswipe/dist/photoswipe-ui-default.min.js');

angular
    .module('JPApp', [
        require('angular-ui-router'),
        require('angular-cookies'),
        require('angular-animate'),
        require('angular-aria'),
        require('angular-material'),
        require('ng-photoswipe')
    ])
    .config(require('./config'));

require('./filters');
require('./controllers');
require('./services');
require('./directives');