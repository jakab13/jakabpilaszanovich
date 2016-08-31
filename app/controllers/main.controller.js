'use strict';

module.exports = mainController;

mainController.$inject =  ['$location', 'MainSrv'];

function mainController($location, MainSrv) {
    var self = this;

    self.go = function(url) {
        var path = '/projects/' + url;
        $location.path(path);
    };

    self.projects = MainSrv.projects;

    self.projects.forEach(function(d) {
        d.image = "/img/projects/" + d.name + ".jpg";
    });

}