(function () {
    'use strict';

    angular.module('ticTacToe')
        .factory('validateMatrix', [function () {
            function validate(tickMatrix) {
                return visitRowsAndColumns(tickMatrix) || visitDiagonals(tickMatrix);
            }

            function visitRowsAndColumns(tickMatrix) {
                var matrix = tickMatrix.matrix,
                    tickLength = matrix.length,
                    sign = tickMatrix.player.sign,
                    isValidRow = true,
                    isValidColumn = true;

                while (tickLength--) {
                    var row = matrix[tickLength],
                        isValidRow = true,
                        isValidColumn = true;

                    for (var i = 0; i < row.length; i++) {
                        if (row[i] !== sign) {
                            isValidRow = false;
                        }

                        if (matrix[i][tickLength] !== sign) {
                            isValidColumn = false;
                        }
                    }

                    if (isValidRow || isValidColumn) {
                        break;
                    }
                }

                return isValidRow || isValidColumn;
            }

            function visitDiagonals(tickMatrix) {
                var matrix = tickMatrix.matrix,
                    tickLength = matrix.length,
                    sign = tickMatrix.player.sign,
                    isValid = true;

                while (tickLength--) {
                    var row = matrix[tickLength],
                        rowLength = row.length,
                        isValidRight = true,
                        isValidLeft = true;

                    while (rowLength--) {
                        if (rowLength == tickLength && matrix[rowLength][tickLength] !== sign) {
                            isValidRight = false;
                        }

                        if (matrix[tickLength][rowLength - tickLength] !== sign) {
                            isValidLeft = false;
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