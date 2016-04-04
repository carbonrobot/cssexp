angular.module('app').directive('timelineItem', function(){
    return {
        replace: true,
        require: '^timeline',
        templateUrl: 'scripts/directives/timelineItem.html',
        scope: { i: '=item' }
    };
});