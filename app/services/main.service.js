'use strict';

module.exports = mainService;

mainService.$inject =  ['$http', '$q'];

function mainService($http, $q) {

    var service = {
        projects: [],
        photos: [],
        getProjects: getProjects,
        getPhotos: getPhotos,
        init: init
    };

    return service;

    function getProjects() {
        return $http({
            method: 'GET',
            url: 'data/projects.json',
            cache: true
        }).then(function(response) {
            service.projects = response.data;
            return service.projects;
        });
    }

    function getPhotos() {
        return $http({
            method: 'GET',
            url: 'data/photos.json',
            cache: true
        }).then(function(response) {
            service.photos = response.data;
            return service.photos;
        });
    }

    function init() {
        return getProjects().then(function() {
            return getPhotos();
        });
    }
}