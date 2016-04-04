angular.module('app').directive('panel', function(){
    return {
        replace: true,
        transclude: {
            header: 'header'
        },
        templateUrl: 'scripts/directives/panel.html'     
    };
});