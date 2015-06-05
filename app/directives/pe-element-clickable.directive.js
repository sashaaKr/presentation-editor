(function () {
    'use strict';

    angular
        .module('editor')
        .directive('peElementClickable', peElementClickable);

    peElementClickable.$inject = ['canvas'];

    function peElementClickable(canvas) {
        var directive = {
            restrict: 'A',
            require: 'peElement',
            link: link
        };

        return directive;

        function link(scope, element, attr, ctrl) {
            //update current selected item
            element.bind('click', function () {
                scope.$apply(function () {
                    ctrl.setSelected();
                });
            });

            scope.$on('$destroy', function(){
                element.unbind('click');
            });
        }
    }


})();