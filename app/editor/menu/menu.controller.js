(function () {
    'use strict';

    angular
        .module('editor')
        .controller('Menu', Menu);

    Menu.$inject = ['menu', '$mdDialog'];

    function Menu(menu, $mdDialog) {
        var vm = this;

        vm.selectedElement = menu.getSelectedElement();
        vm.slides = menu.getSlides();
        vm.addText = addText;
        vm.addImage = addImage;
        vm.addSlide = addSlide;
        vm.getSettingsPath = getSettingsPath;
        vm.setTextAlign = setTextAlign;
        vm.showImagePopUpLib = showImagePopUpLib;
        vm.removeSlide = removeSlide;
        vm.isDeleteSlideDisable = isDeleteSlideDisable;
        vm.removeElement = removeElement;
        vm.addIframe = addIframe;

        function addIframe(){
            menu.addIframe();
        }

        function removeSlide() {
            menu.removeSlide();
        }

        function isDeleteSlideDisable() {
            return vm.slides.length == 1;
        }

        function removeElement(){
            menu.removeElement();
        }

        function addText() {
            menu.addText();
        }

        function addImage() {

        }

        function getSettingsPath() {
            return 'app/editor/menu/templates/elements/' + vm.selectedElement.element.type + '/settings.html';
        }

        function setTextAlign(align) {
            menu.setTextAlign(align, vm.selectedElement);
        }

        function showImagePopUpLib() {
            $mdDialog.show({
                templateUrl: 'app/editor/image-library/image-library.html'
            });
        }

        function addSlide() {
            menu.addSlide();
        }
    }
})();