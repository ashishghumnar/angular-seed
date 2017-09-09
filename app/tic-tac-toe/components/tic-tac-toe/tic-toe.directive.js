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
                var current = 1;

                $scope.matrix = {
                    rows: _getMatrix($scope.size[0], $scope.size[1])
                };

                $scope.cellClick = function (row, col) {
                    var players = $scope.players;

                    if (!$scope.won) {
                        var tr = el.find('tr')[row],
                            td = angular.element(tr).find('td')[col],
                            player = current % 2 ? players.playerOne : players.playerTwo;

                        if (player.name === players.playerOne.name) {
                            $scope.turn = players.playerTwo.name;
                            angular.element(td).append('<span>' + players.playerOne.sign + '</span>');
                        } else {
                            $scope.turn = players.playerOne.name;
                            angular.element(td).append('<span>' + players.playerTwo.sign + '</span>');
                        }

                        $scope.matrix.rows[row][col] = player.sign;

                        current++;

                        var isOver = tickMatrix.updateTick({
                            player: player,
                            matrix: $scope.matrix.rows
                        });

                        if (isOver) {
                            $scope.won = player.name;
                        }
                    } else {
                        alert("Gave Over, Please Restart");
                    }
                };

                function _getMatrix(rowSize, colSize) {
                    var matrix = [];

                    while (rowSize--) {
                        var matrixCol = [];
                        for (var j = 0; j < colSize; j++) {
                            matrixCol.push(0);
                        }

                        matrix.push(matrixCol);
                    }

                    return matrix;
                }
            }
        }
    }]);