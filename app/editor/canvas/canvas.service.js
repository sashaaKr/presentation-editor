(function () {
    'use strict';

    angular
        .module('editor')
        .factory('canvas', canvas);

    canvas.$inject = ['presentation'];

    function canvas(presentation) {
        var service = {
            getSelectedElement: getSelectedElement,
            setSelectedElement: setSelectedElement,
            removeSelectedElement: removeSelectedElement,
            getCanvasStyle: getCanvasStyle
        };

        var selectedElement = {
            element: {}
        };

        return service;

        function getCanvasStyle(){
            return presentation.getCanvasStyle();
        }

        function removeSelectedElement() {
            selectedElement.element = {};
        }

        function getSelectedElement() {
            return selectedElement;
        }

        function setSelectedElement(newElement) {
            selectedElement.element = newElement;
        }
    }
})();