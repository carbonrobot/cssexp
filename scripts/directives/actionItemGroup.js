angular.module('app').directive('actionItemGroup', function(){
   return {
        replace: true,
        templateUrl: 'scripts/directives/actionItemGroup.html',
        scope: { list: '=' }
   };
});


