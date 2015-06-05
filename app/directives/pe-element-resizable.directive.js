(function () {
    'use strict';

    angular
        .module('editor')
        .directive('peElementResizable', peElementResizable);

    function peElementResizable() {
        var directive = {
            restrict: 'A',
            require: 'peElement',
            link: link
        };
        return directive;

        function link(scope, element, attr, ctrl){

            element.resizable({
                containment: '.presCanvas',
                stop: function(event, ui){
                    ctrl.updateSize(ui.size.width, ui.size.height);
                }
            });
        }
    }
})();