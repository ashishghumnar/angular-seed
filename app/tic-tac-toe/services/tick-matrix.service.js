(function () {
    'use strict';

    angular.module('ticTacToe')
        .factory('tickMatrix', ['validateMatrix', function (validateMatrix) {
            var tickMatrix = [];

            function updateTick(tickDetails) {
                tickMatrix = tickDetails.matrix;

                return validateMatrix.validate(tickDetails);
            }

            return {
                updateTick: updateTick
            }
        }]);
})();