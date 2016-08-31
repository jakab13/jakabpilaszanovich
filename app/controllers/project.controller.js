'use strict';

module.exports = projectController;

projectController.$inject = ['$stateParams', 'MainSrv'];

function projectController($stateParams, MainSrv) {
    var self = this;
    var projectName = $stateParams.name;

    self.projectUrl = '/views/projects/' + projectName + '.html';

}