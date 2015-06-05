(function () {
    'use strict';

    angular
        .module('editor')
        .directive('peElement', peElement);

    function peElement() {
        var directive = {
            restrict: 'A',
            scope: {
                element: '='
            },
            link: link,
            controller: 'ElementDirective'
        };

        return directive;

        function link(scope, element, attr) {
        }
    }


    angular
        .module('editor')
        .controller('ElementDirective', ElementDirective);

    ElementDirective.$inject = ['$scope', 'canvas'];

    function ElementDirective($scope, canvas) {
        var vm = this;

        vm.updatePosition = updatePosition;
        vm.updateSize = updateSize;
        vm.setSelected = setSelected;

        function updateSize(width, height) {
            $scope.element.width = width;
            $scope.element.height = height;
        }

        function updatePosition(top, left) {
            $scope.element.top = top;
            $scope.element.left = left;
        }

        function setSelected() {
            canvas.setSelectedElement($scope.element);
        }
    }
})();