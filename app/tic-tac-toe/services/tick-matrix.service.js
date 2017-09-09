(function () {
    'use strict';

    angular.module('ticTacToe')
        .factory('tickMatrix', ['validateMatrix', function (validateMatrix) {
            var tickMatrix = [];

            function updateTick(tickDetails) {
                /*if (!tickMatrix[tickDetails.user]) {
                    tickMatrix[tickDetails.user] = [];
                    tickMatrix[tickDetails.user].push(tickDetails.tick);
                } else {*/

                    tickMatrix = tickDetails.matrix;
                //}

                return validateMatrix.validate(tickDetails);
            }

            return {
                updateTick: updateTick
            }
        }]);
})();