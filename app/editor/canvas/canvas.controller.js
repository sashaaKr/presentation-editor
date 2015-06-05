(function () {
    'use strict';

    angular
        .module('editor')
        .controller('Canvas', Canvas);

    Canvas.$inject = ['$sce', 'presentation', 'canvas'];

    function Canvas($sce, presentation, canvas) {
        var vm = this;

        //TODO: remove using of presentation service, all functional only via canvas service

        vm.currentSelectedSlide = presentation.getCurrentSlide();
        vm.slides = presentation.getSlides();
        vm.currSlideIndex = presentation.getCurrentSlideIndex();
        vm.elementTemplatePath = elementTemplatePath;
        vm.getElementStyle = getElementStyle;
        vm.getCanvasStyle = getCanvasStyle;
        vm.trustSrc = trustSrc;


        function trustSrc(src){
            debugger;
            return $sce.trustAsResourceUrl(src);
        }

        function getCanvasStyle(){
            return canvas.getCanvasStyle();
        }

        function elementTemplatePath(element) {
            return 'app/editor/canvas/templates/elements/' + element.type + '/canvas.html';
        }

        function getElementStyle(element) {
            return presentation.getElementStyle(element);
        }
    }
})();