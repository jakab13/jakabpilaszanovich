'use strict';

module.exports = photoController;

photoController.$inject = ['MainSrv'];

function photoController(MainSrv) {
    var self = this;

    self.photos = MainSrv.photos;

    self.options = {
        index: 0,
        captionEl: false,
        shareEl: false
    };

    self.showGallery = function(i) {
        if (angular.isDefined(i)) {
            self.options.index = i;
        }
        self.open = true;
    };

    self.closeGallery = function() {
        self.open = false;
    };

}