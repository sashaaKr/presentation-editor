(function () {
    'use strict';

    angular
        .module('editor')
        .factory('presentationElement', presentationElement);

    function presentationElement() {
        var elementId = 0;
        var elements = {
            'text': {
                value: 'Text',
                id: elementId,
                type: 'text',
                textAlign: 'center',
                fontSize: 16,
                left: 0,
                top: 0,
                width: 150,
                height: 85,
                backgroundColor : '',
                color: 'black'
            },
            'image': {
                type: 'image',
                left: 0,
                top: 0,
                src: ''
            },
            'iframe': {
                type: 'iframe',
                left: 0,
                top: 0,
                width: 300,
                height: 300,
                src: 'http://www.bbc.com',
                clickable: false
            }
        };

        var service = {
            createElement: createElement,
            getElementStyle: getElementStyle,
            setTextAlign: setTextAlign
        };

        return service;


        function createElement(elementAlias) {
            var newElement = angular.copy(elements[elementAlias]);

            newElement.id = ++elementId;
            return newElement;
        }

        function getElementStyle(element) {
            if (element.type == 'text') {
                return {
                    'font-size': element.fontSize,
                    'text-align': element.textAlign,
                    'width': element.width + 'px',
                    'height': element.height + 'px',
                    'left': element.left,
                    'top': element.top,
                    'background-color': element.backgroundColor,
                    'color': element.color
                };
            } else if (element.type == 'image') {
                return {
                    'left': element.left,
                    'top': element.top
                };
            }
        }

        function setTextAlign(align, selectedElement) {
            selectedElement.element.textAlign = align;
        }
    }
})();