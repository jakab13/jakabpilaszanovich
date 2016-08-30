'use strict';

module.exports = mainController;

mainController.$inject =  ['$location', '$stateParams'];

function mainController($location, $stateParams) {
    var self = this;

    self.go = function(url) {
        var path = '/projects/' + url;
        $location.path(path);
    };

    self.projects = [
        {
            "name": "appetit",
            "title": "Appetit",
            "categories": ["interaction", "web"]
        },
        {
            "name": "cronnection",
            "title": "Cronnection",
            "categories": ["web"]
        },
        {
            "name": "moving-forest",
            "title": "Moving Forest",
            "categories": ["visuals"]
        },
        {
            "name": "digital-psychedelia",
            "title": "Digital Psychedelia",
            "categories": ["interaction", "sound"]
        },
        {
            "name": "makar",
            "title": "Makar",
            "categories": ["interaction", "visuals"]
        },
        {
            "name": "dynamic-digits",
            "title": "Dynamic Digits",
            "categories": ["visuals"]
        },
        {
            "name": "pulsing-around",
            "title": "Pulsing Around",
            "categories": ["interaction", "sound"]
        },
        {
            "name": "dinner-teaser",
            "title": "Dinner Teaser",
            "categories": ["video/photo"]
        },
        {
            "name": "talking-herbs",
            "title": "Talking Herbs",
            "categories": ["interaction", "sound"]
        },
        {
            "name": "maluma",
            "title": "Maluma",
            "categories": ["video/photo"]
        },
        {
            "name": "sound-sets",
            "title": "Sound Sets",
            "categories": ["interaction", "sound"]
        },
        {
            "name": "screen-kid",
            "title": "Screen Kid",
            "categories": ["sound"]
        },
        {
            "name": "sound-localisation",
            "title": "Sound Localisation",
            "categories": ["physics", "sound"]
        },
        {
            "name": "wave-power",
            "title": "Wave Power",
            "categories": ["physics"]
        },
        {
            "name": "afium",
            "title": "Afium",
            "categories": ["sound"]
        },
        {
            "name": "morphing",
            "title": "Morphing",
            "categories": ["interaction", "sound"]
        },
        {
            "name": "photography",
            "title": "Photography",
            "categories": ["video/photo"]
        },
        {
            "name": "necrotopia",
            "title": "Necrotopia",
            "categories": ["interaction"]
        }
    ];

    self.projects.forEach(function(d) {
        d.image = "/img/projects/" + d.name + ".jpg";
    });

}