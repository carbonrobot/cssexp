angular.module('app').controller('NotificationsController', function($scope) {
    $scope.notifications = [
        { type: 'comment', message: 'New Comment' },
        { type: 'twitter', message: '3 New Followers' },
        { type: 'envelope', message: 'Message Sent' },
        { type: 'tasks', message: 'New Task' }  
    ];
});