(function(){
    'use strict';

    angular
        .module('editor')
        .factory('imageLibrary', imageLibrary);

    imageLibrary.$inject = ['presentation'];

    function imageLibrary(presentation){
        var service = {
            addImageToPresentation: addImageToPresentation,
            setBackground: setBackground
        };

        return service;

        function setBackground(image){
            presentation.setBackground(image);
        }

        function addImageToPresentation(imageSrc){
            presentation.addImage(imageSrc);
        }
    }
})();