angular.module('app').directive('messagePanel', function(){
   return {
        replace: true,
        templateUrl: 'scripts/directives/messagePanel.html',
        scope: { m: '=message' }
   };
});