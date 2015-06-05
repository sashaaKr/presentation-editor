(function () {
    'use strict';

    angular
        .module('editor')
        .factory('data', data);

    data.$inject = ['$http'];

    function data($http) {
        var service = {
            getImages: getImages
        };

        return service;

        function getImages() {
            return $http.get('data/images.json');
        }
    }
})();