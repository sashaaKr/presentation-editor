(function () {
    'use strict';

    angular
        .module('editor')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/homepage/homepage.html',
                controller: 'Home',
                controllerAs: 'vm'
            })
            .when('/editor', {
                templateUrl: 'app/editor/editor.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();