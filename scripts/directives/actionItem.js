angular.module('app').directive('actionItem', function() {
    return {
        replace: true,
        templateUrl: 'scripts/directives/actionItem.html',
        scope: { m: '=message' }
    };
});