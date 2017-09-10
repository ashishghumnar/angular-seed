angular.module('ticTacToe')
    .directive('ticTacToe', ['tickMatrix', function (tickMatrix) {
        return {
            restrict: 'E',
            templateUrl: 'tic-tac-toe/components/tic-tac-toe/tic-toe.directive.html',
            scope: {
                players: "=",
                size: "="
            },
            link: function ($scope, el) {
                var lastPlayer = tickMatrix.getLastPlayed() || players.playerOne;
                $scope.matrix = {
                    rows: tickMatrix.getMatrix(),
                    turn: tickMatrix.getLastPlayed() === $scope.players.playerOne.name ? $scope.players.playerTwo.name : $scope.players.playerOne.name
                };


                $scope.cellClick = function (row, col) {
                    var players = $scope.players;


                    if (!$scope.won) {
                        var tr = el.find('tr')[row],
                            td = angular.element(tr).find('td')[col];

                        $scope.matrix.rows[row][col] = lastPlayer.sign;

                        player = lastPlayer.name === players.playerOne.name ?
                            players.playerTwo : players.playerOne;

                        $scope.matrix.turn = player.name;

                        var isOver = tickMatrix.updateTick({
                            player: player,
                            matrix: $scope.matrix.rows
                        });

                        if (isOver) {
                            $scope.won = lastPlayer.name;
                        }
                    } else {
                        alert("Gave Over, Please Restart");
                    }
                };

                $scope.restart = function () {
                    $scope.matrix.rows = tickMatrix.resetTick();
                    $scope.matrix.turn = $scope.players.playerOne.name;
                    $scope.won = null;
                };
            }
        }
    }]);