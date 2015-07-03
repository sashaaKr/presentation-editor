(function(){
    'use strict';

    angular
        .module('editor')
        .directive('peTextWrapper', peTextWrapper);

    function peTextWrapper(){
        var directive = {
            restrict: 'A',
            scope:{
                'element': '='
            },
            link: link
        };

        return directive;
    }


    function link(scope, element, attr, ctrl){
        debugger;
        scope.$watch(function(){
            return scope.element.value
        }, function(newValue, oldValue){
            if(newValue !== oldValue){
                var content = newValue.replace(/\n/g, '<br>');
                var hiddenElement = angular.element('.hidden.text-size')[0];

                hiddenElement.style.width = element.width() + 'px';

                hiddenElement.innerHTML = content + '<br class="lbr">';
                element[0].innerHTML = content + '<br class="lbr">';

                if(scope.element.height < hiddenElement.clientHeight){
                    scope.element.height = hiddenElement.clientHeight;
                }
            }

        });
    }
})();