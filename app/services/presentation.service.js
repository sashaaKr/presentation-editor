(function () {
    'use strict';

    angular
        .module('editor')
        .factory('presentation', presentation);

    presentation.$inject = ['presentationElement'];

    function presentation(presentationElement) {
        var
            currSlideIndex = {
                index: 0
            },

            presentationObj = {
                name: '',
                slides: []
            };

        _addSlide();//add first slide

        var currSelectedSlide = {
            slide: presentationObj.slides[0]
        };


        var service = {
            addText: addText,
            addIframe: addIframe,
            addImage: addImage,
            addSlide: addSlide,
            nextSlide: nextSlide,
            prevSlide: prevSlide,
            deleteSlide: deleteSlide,
            getCurrentSlide: getCurrentSlide,
            getCurrentSlideIndex: getCurrentSlideIndex,
            getSlides: getSlides,
            getElementStyle: getElementStyle,
            setTextAlign: setTextAlign,
            removeSlide: removeSlide,
            removeElement: removeElement,
            setBackground: setBackground,
            getCanvasStyle: getCanvasStyle
        };

        return service;

        /*public*/
        function addIframe(){
            presentationObj
                .slides[currSlideIndex.index]
                .elements
                .push(presentationElement.createElement('iframe'));
        }

        function getCanvasStyle() {
            return {
                'background': 'url(' + currSelectedSlide.slide.settings.background +') no-repeat',
                'background-size': '100% 100%'
            }
        }

        function setBackground(image) {
            currSelectedSlide.slide.settings.background = image;
        }

        function removeElement(selectedElement) {
            var elementIndex = currSelectedSlide.slide.elements.indexOf(selectedElement.element);
            currSelectedSlide.slide.elements.splice(elementIndex, 1);
        }

        function removeSlide() {
            presentationObj.slides.splice(currSlideIndex.index, 1);
            currSlideIndex.index--;
            _setCurrSelectedSlide();
        }

        function addText() {
            presentationObj
                .slides[currSlideIndex.index]
                .elements
                .push(presentationElement.createElement('text'));
        }

        function addImage(imageSrc) {
            var image = presentationElement.createElement('image');
            image.src = imageSrc;

            presentationObj
                .slides[currSlideIndex.index]
                .elements
                .push(image);
        }

        function addSlide() {
            _addSlide();
            currSlideIndex.index = presentationObj.slides.length - 1;
            currSelectedSlide.slide = presentationObj.slides[currSlideIndex.index];
        }

        function nextSlide() {
            if (currSlideIndex.index < presentationObj.slides.length) {
                currSlideIndex.index++;
                _setCurrSelectedSlide();
            }
        }

        function prevSlide() {
            if (currSlideIndex.index > 0) {
                currSlideIndex.index--;
                _setCurrSelectedSlide();
            }
        }

        function deleteSlide(slideIndex) {
            presentationObj
                .slides
                .splice(slideIndex, 1);
        }

        function getCurrentSlideIndex() {
            return currSlideIndex;
        }

        function getSlides() {
            return presentationObj.slides;
        }

        function getCurrentSlide() {
            return currSelectedSlide;
        }

        function getElementStyle(element) {
            return presentationElement.getElementStyle(element);
        }

        function setTextAlign(align, selectedElement) {
            presentationElement.setTextAlign(align, selectedElement);
        }


        /*private*/
        function _setCurrSelectedSlide() {
            currSelectedSlide.slide = presentationObj.slides[currSlideIndex.index];
        }

        function _addSlide() {
            presentationObj
                .slides
                .push({
                    elements: [],
                    settings: {
                        background: ''
                    }
                });
        }
    }
})();