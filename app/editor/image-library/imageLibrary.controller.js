(function () {
    'use strict';

    angular
        .module('editor')
        .controller('ImageLibrary', ImageLibrary);

    ImageLibrary.$inject = ['data', 'imageLibrary'];

    function ImageLibrary(data, imageLibrary) {
        var vm = this;

        vm.selectedImage = null;
        vm.setImageSelected = setImageSelected;
        vm.isAddEnable = isAddEnable;
        vm.addImageToPresentation = addImageToPresentation;
        vm.isImageSelected = isImageSelected;
        vm.setBackground = setBackground;
        var imgSelectedClass = {
            border: '1px solid green'
        };

        data.getImages().then(function (data) {
            vm.images = data.data;
        });

        function setBackground(){
            imageLibrary.setBackground(vm.selectedImage);
        }

        function isImageSelected(image) {
            return vm.selectedImage == image ? imgSelectedClass : '';
        }

        function setImageSelected(image) {
            vm.selectedImage = image;
        }

        function isAddEnable() {
            return vm.selectedImage == null;
        }

        function addImageToPresentation() {
            imageLibrary.addImageToPresentation(vm.selectedImage);
        }
    }
})();