(function () {
    'use strict';

    angular
        .module('editor')
        .factory('menu', menu);

    menu.$inject = ['canvas', 'presentation'];

    function menu(canvas, presentation) {

        var service = {
            addText: addText,
            addIframe: addIframe,
            addSlide: addSlide,
            getSlides: getSlides,
            getSelectedElement: getSelectedElement,
            setTextAlign: setTextAlign,
            removeSlide: removeSlide,
            removeElement: removeElement
        };

        return service;


        function removeElement(){
            presentation.removeElement(canvas.getSelectedElement());
            canvas.removeSelectedElement();
        }

        function addIframe(){
            presentation.addIframe();
        }

        function addText() {
            presentation.addText();

        }

        function getSelectedElement() {
            return canvas.getSelectedElement();
        }

        function getSlides(){
            return presentation.getSlides();
        }

        function addSlide(){
            presentation.addSlide();
        }

        function removeSlide(){
            presentation.removeSlide();
        }

        function setTextAlign(align, selectedElement){
            presentation.setTextAlign(align, selectedElement);
        }
    }
})();