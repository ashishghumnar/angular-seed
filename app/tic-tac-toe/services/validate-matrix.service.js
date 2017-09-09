(function () {
    'use strict';

    angular.module('ticTacToe')
        .factory('validateMatrix', [function () {
            function validate(tickMatrix) {
                return visitRowsAndColumns(tickMatrix) || visitDiagonals(tickMatrix);
            }

            function visitRowsAndColumns(tickMatrix) {
                var matrix = tickMatrix.matrix,
                    matrixLength = matrix.length,
                    sign = tickMatrix.player.sign,
                    isValidRow = true,
                    isValidColumn = true;

                while (matrixLength--) {
                    var matrixRow = matrix[matrixLength],
                        matrixRowLength = matrixRow.length;

                    isValidRow = true;
                    isValidColumn = true;

                    while (matrixRowLength--) {
                        if (matrixRow[matrixRowLength] !== sign) {
                            isValidRow = false;
                        }

                        if (matrix[matrixRowLength][matrixLength] !== sign) {
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
                    isValidRight = true,
                    isValidLeft = true;

                while (tickLength--) {
                    var row = matrix[tickLength],
                        rowLength = row.length;

                    while (rowLength--) {
                        var currentRowLength = rowLength > tickLength ? rowLength - tickLength : tickLength - rowLength;

                        if (rowLength == tickLength && matrix[rowLength][tickLength] !== sign) {
                            isValidRight = false;
                        }

                        if (matrix[tickLength][currentRowLength] !== sign) {
                            isValidLeft = false;
                        }
                    }
                }

                return isValidRight || isValidLeft;
            }

            return {
                validate: validate
            }
        }]);
})();