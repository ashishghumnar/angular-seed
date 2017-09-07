(function () {
    'use strict';

    angular.module('ticTacToe', [])
        .run(['$uibModal', function ($uibModal) {
            var modalInstace = $uibModal.open({
                backdrop: 'static',
                templateUrl: 'tic-tac-toe/components/user-dialog/user-dialog.html',
                controller: 'UserDialogController',
                resolve: {},
                windowClass: 'tic-tac-toe',
                keyboard: false
            });
        }]);
})();