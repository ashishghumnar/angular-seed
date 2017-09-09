(function () {
    'use strict';

    angular.module('ticTacToe')
        .factory('validateMatrix', [function () {
            function validate(tickMatrix) {
                return visitRows(tickMatrix) || visitColumn(tickMatrix) || visitDiagonals(tickMatrix);
            }

            function visitColumn(tickMatrix) {
                var matrix = tickMatrix.matrix,
                    tickLength = matrix.length,
                    sign = tickMatrix.player.sign,
                    isValid = true;

                while (tickLength--) {
                    var row = matrix[tickLength];
                    isValid = true;

                    for (var i = 0; i < row.length; i++) {
                        if (matrix[i][tickLength] !== sign) {
                            isValid = false;
                            break;
                        }
                    }

                    if (isValid) {
                        break;
                    }
                }

                return isValid;
            }

            function visitRows(tickMatrix) {
                var matrix = tickMatrix.matrix,
                    tickLength = matrix.length,
                    sign = tickMatrix.player.sign,
                    isValid = true;

                while (tickLength--) {
                    var row = matrix[tickLength];
                    isValid = true;

                    for (var i = 0; i < row.length; i++) {
                        if (row[i] !== sign) {
                            isValid = false;
                            break;
                        }
                    }

                    if (isValid) {
                        break;
                    }
                }

                return isValid;
            }

            //a[2][2] a[2][1] a[2][0]
            //a[1][2] a[1][1] a[1][0]
            //a[0][2] a[0][1] a[0][0]

            function visitDiagonals(tickMatrix) {
                var matrix = tickMatrix.matrix,
                    tickLength = matrix.length,
                    sign = tickMatrix.player.sign,
                    isValid = true;

                while (tickLength--) {
                    var row = matrix[tickLength],
                        rowLength = row.length,
                        isValidRight = true,
                        isValidLeft = true,
                        current = 2;

                    while (rowLength--) {
                        if (rowLength == tickLength && matrix[rowLength][tickLength] !== sign) {
                            isValidRight = false;
                        }

                        if (matrix[tickLength][rowLength - tickLength] !== sign) {
                            isValidLeft = false
                        }

                        if (!isValidRight && !isValidLeft) {
                            isValid = false;
                            break;
                        }
                    }

                    if (!isValid) {
                        break;
                    }
                }

                return isValid;
            }

            return {
                validate: validate
            }
        }]);
})();