angular.module('app').controller('DepositsController', function($scope) {
    $scope.deposits = [
        { id: 12, date: new Date(2012, 11, 10, 14, 31, 12), cost: 32.45 },
        { id: 12, date: new Date(2012, 11, 10, 14, 31, 12), cost: 32.45 },
        { id: 12, date: new Date(2012, 11, 10, 14, 31, 12), cost: 32.45 },
        { id: 12, date: new Date(2012, 11, 10, 14, 31, 12), cost: 32.45 },
        { id: 12, date: new Date(2012, 11, 10, 14, 31, 12), cost: 32.45 },
        { id: 12, date: new Date(2012, 11, 10, 14, 31, 12), cost: 32.45 } 
    ];
});