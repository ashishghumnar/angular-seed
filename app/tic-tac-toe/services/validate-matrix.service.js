(function () {
    'use strict';

    angular.module('ticTacToe')
        .factory('validateMatrix', [function () {
            function validate(tickMatrix) {
                return visitColumn(tickMatrix) || visitRows(tickMatrix) || visitDiagonals(tickMatrix);
            }

            function visitColumn(tickMatrix) {
                var colNumber = [];

                angular.forEach(tickMatrix, function (item, index) {
                    if (item.col === index) {
                        colNumber.push(1)
                    }
                });

                return colNumber.length === 3;
            }

            function visitRows(tickMatrix) {
                var rowNumber = [];

                angular.forEach(tickMatrix, function (item, index) {
                    if (item.row === index) {
                        rowNumber.push(1)
                    }
                });

                return rowNumber.length === 3;
            }

            function visitDiagonals(tickMatrix) {
                var diagonalsNumber = [];

                angular.forEach(tickMatrix, function (item) {
                    if (item.row === item.col) {
                        diagonalsNumber.push(1)
                    }
                });

                return diagonalsNumber.length === 3;
            }

            return {
                validate: validate
            }
        }]);
})();