(function () {
    'use strict';
    angular.module('myApp.view1', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/view1', {
                templateUrl: 'view1/view1.html',
                controller: function ($scope, players) {
                    $scope.$on('playerUpdate', function () {
                        $scope.players = players.getPlayers();
                    });
                }
            });
        }]);
})();