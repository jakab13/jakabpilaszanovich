'use strict';

module.exports = projectController;

projectController.$inject = ['$stateParams', 'MainSrv'];

function projectController($stateParams, MainSrv) {
    var self = this;
    var projectName = $stateParams.name;

    self.projectUrl = '/views/projects/' + projectName + '.html';

    self.projectData = getProject(projectName);

    function getProject(projectName) {
        var l = MainSrv.projects.length;
        for (var i = 0; i < l; i++) {
            if (MainSrv.projects[i].name === projectName) {
                return MainSrv.projects[i];
            }
        }
    }

}