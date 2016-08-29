'use strict';

module.exports = config;

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
            url: '/',
            controller: 'mainCtrl',
            controllerAs: 'main',
            templateUrl: '/views/main.html'
        });

    var JPBgPalette = $mdThemingProvider.extendPalette('grey', {
        '50': '#fff',
        '100': '#fff',
        '200': '#fff',
        '300': '#fff',
        '400': '#fff',
        '500': '#fff',
        '600': '#fff',
        '700': '#fff',
        '800': '#fff',
        '900': '#fff',
        'A100': '#fff',
        'A200': '#fff',
        'A400': '#fff',
        'A700': '#fff'
    });

    $mdThemingProvider.definePalette('JPBgPalette', JPBgPalette);

    $mdThemingProvider.definePalette('JPPalette', {
        '50': 'fff',
        '100': 'c2dce0',
        '200': 'c2dce0',
        '300': 'c2dce0',
        '400': 'c2dce0',
        '500': 'c2dce0',
        '600': 'c2dce0',
        '700': 'c2dce0',
        '800': 'c2dce0',
        '900': 'c2dce0',
        'A100': 'c2dce0',
        'A200': 'c2dce0',
        'A400': 'c2dce0',
        'A700': 'c2dce0',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50', '100',
            '200', '300', '400', 'A100'
        ],
        'contrastLightColors': undefined
    });

    $mdThemingProvider.theme('default')
        .primaryPalette('JPPalette')
        .backgroundPalette('JPBgPalette');

}