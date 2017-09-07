(function () {
    'use strict';
// Declare app level module which depends on views, and components
    angular.module('myApp', [
        'ngRoute',
        'ticTacToe',
        'ui.bootstrap',
        'myApp.view1'
    ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider, $modalProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
})();