angular.module('app').directive('timeline', function(){
    return {
        replace: true,
        templateUrl: 'scripts/directives/timeline.html',
        scope: { items: '=' }
    };
});