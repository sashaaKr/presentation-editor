(function () {
    'use strict';

    angular
        .module('editor')
        .directive('pePresentationPagination', pePresentationPagination)

    pePresentationPagination.$inject = ['presentation'];

    function pePresentationPagination(presentation) {
        var directive = {
            restrict: 'E',
            scope: {
                presentationSlides: '=',
                currSlideIndex: '='
            },
            templateUrl: 'app/templates/pe-presentation-pagination.html',
            link: link
        };
        return directive;

        function link(scope, element, attr) {

            scope.isPrevAvailable = function () {
                return scope.currSlideIndex.index > 0 && scope.currSlideIndex.index <= scope.presentationSlides.length;
            };

            scope.isNextAvailable = function () {
                return scope.currSlideIndex.index + 1 == scope.presentationSlides.length;
            };

            scope.nextSlide = function () {
                presentation.nextSlide();
            };

            scope.prevSlide = function () {
                presentation.prevSlide();
            };
        }
    }
})();