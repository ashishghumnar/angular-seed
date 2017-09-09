(function () {
    'use strict';
angular.module('ticTacToe')
    .controller('PlayerDialogController', ['$scope', 'players', '$uibModalInstance', '$rootScope', function ($scope, players, $uibModalInstance, $rootScope) {
        $scope.player = {
            playerOne: {
                name: '',
                sign: 'O'
            },

            playerTwo: {
                name: '',
                sign: 'X'
            }
        };

        $scope.startGame = function () {
            players.setPlayers($scope.player);
            $rootScope.$broadcast('playerUpdate');
            $uibModalInstance.dismiss('cancel');
        };
    }]);
})();