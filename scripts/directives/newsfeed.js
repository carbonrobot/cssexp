angular.module('app').directive('newsfeed', function(){
    return {
        replace: true,
        templateUrl: 'scripts/directives/newsfeed.html' 
    };
});