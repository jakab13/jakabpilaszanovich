'use strict';

module.exports = mainController;

mainController.$inject = ['$rootScope', '$scope', '$stateParams', '$location', '$timeout', '$mdSidenav', 'MainSrv'];

function mainController($rootScope, $scope, $stateParams, $location, $timeout, $mdSidenav, MainSrv) {
    var self = this;

    self.go = function(url) {
        var path = '/projects/' + url;
        $location.path(path);
    };

    self.redirect = function(url) {
        $location.path(url);
    };

    self.filter = function(url) {
        $mdSidenav('left').toggle();
        var path = '/' + url;
        $location.path(path);
    };

    var category = $stateParams.category;

    self.categoryFilter = category;
    $rootScope.categoryFilter = category

    self.projects = MainSrv.projects;

    self.projects.forEach(function(d) {
        d.image = "/img/projects/" + d.name + ".jpg";
    });

    self.toggleLeft = buildDelayedToggler('left');

    function debounce(func, wait, context) {
        var timer;
        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function() {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    function buildDelayedToggler(navID) {
        return debounce(function() {
            $mdSidenav(navID).toggle();
        }, 200);
    }
}