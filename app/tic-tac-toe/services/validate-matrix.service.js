(function () {
    'use strict';

    angular.module('ticTacToe')
        .factory('validateMatrix', [function () {
            function validate(tickMatrix) {
                if (tickMatrix.length < 3 ) {
                    return false;
                }

                return visitColumn(tickMatrix) || visitRows(tickMatrix) || visitDiagonals(tickMatrix);
            }

            function visitColumn(tickMatrix) {
                var firstCellPos = tickMatrix[0].col,
                    isValid = true;

                angular.forEach(tickMatrix, function (item, index) {
                    if (item.col !== firstCellPos) {
                        isValid = false;
                    }
                });

                return isValid;
            }

            function visitRows(tickMatrix) {
                var firstCellPos = tickMatrix[0].row,
                    isValid = true;

                angular.forEach(tickMatrix, function (item, index) {
                    if (item.row !== firstCellPos) {
                        isValid = false;
                    }
                });

                return isValid;
            }

            function visitDiagonals(tickMatrix) {
                var isValid = true;

                angular.forEach(tickMatrix, function (item) {
                    if (item.row !== item.col) {
                        isValid = false;
                    }
                });

                return isValid;
            }

            return {
                validate: validate
            }
        }]);
})();