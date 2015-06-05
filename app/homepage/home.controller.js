(function () {
    'use strict';

    angular
        .module('editor')
        .controller('Home', Home);

    Home.$inject = ['$location'];

    function Home($location) {
        var vm = this;
        vm.createNewPresentation = createNewPresentation;


        function createNewPresentation() {
            $location.path('/editor')
        }
    }
})();