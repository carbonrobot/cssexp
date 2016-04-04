angular.module('app').directive('actionItem', function() {
    return {
        replace: true,
        templateUrl: 'scripts/directives/actionItem.html',
        scope: { m: '=message' },
        link: function(scope, element){
            element.on('click', function(){
                element.remove();
            });
            
            scope.$on('$destroy', function(){
               element.off('click'); 
            });
        }
    };
});