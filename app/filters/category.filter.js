'use strict';

module.exports = categoryFilter;

function categoryFilter() {
    return function(projects, categories) {
        if (categories !== undefined) {
            return projects.filter(function(project) {

                for (var i in project.categories) {
                    if (categories.indexOf(project.categories[i]) != -1) {
                        return true;
                    }
                }
                return false;

            });
        } else {
            return projects;
        }
    };
}