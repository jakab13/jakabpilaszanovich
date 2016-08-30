'use strict';

module.exports = projectController;

projectController.$inject =  ['$stateParams'];

function projectController($stateParams) {
    var self = this;
    var projectName = $stateParams.name;

    self.projectUrl = '/views/projects/' + projectName + '.html';

}