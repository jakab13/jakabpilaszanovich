'use strict';

module.exports = config;

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
            url: '/',
            controller: 'mainCtrl',
            controllerAs: 'main',
            templateUrl: '/views/main.html'
        });

}