angular.module('app').directive('actionPanel', function(){
   return {
        replace: true,
        templateUrl: 'scripts/directives/actionPanel.html',
        scope: { m: '=message' }
   };
});