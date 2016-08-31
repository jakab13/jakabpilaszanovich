'use strict';

module.exports = mainController;

mainController.$inject =  ['$rootScope', '$stateParams', '$location', 'MainSrv'];

function mainController($rootScope, $stateParams, $location, MainSrv) {
    var self = this;

    self.go = function(url) {
        var path = '/projects/' + url;
        $location.path(path);
    };

    self.redirect = function(url) {
        $location.path(url);
    };

    self.filter = function(url) {
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

}