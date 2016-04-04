angular.module('app').directive('chat', function(){
    return {
        replace: true,
        templateUrl: 'scripts/directives/chat.html' 
    };
});