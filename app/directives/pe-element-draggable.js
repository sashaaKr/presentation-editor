(function () {
    'use strict';

    angular
        .module('editor')
        .directive('peElementDraggable', peElementDraggable);

    function peElementDraggable() {
        var directive = {
            restrict: 'A',
            require: 'peElement',
            link: link
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

            //set element as draggable
            element.draggable({
                containment: "parent",
                stop: function (event, ui) {
                    //update element position on stop
                    ctrl.updatePosition(ui.position.top, ui.position.left);
                }
            });
        }
    }
})();