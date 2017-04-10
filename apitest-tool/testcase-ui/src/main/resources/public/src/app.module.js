

/*var myapp = angular.module("myapp", ['ui.router','app.tapi','ngStorage','app.pronetwork']);*/
var myapp = angular.module("myapp", ['ui.router','ngStorage','app.tapi']);
angular.module('app.tapi', []);

myapp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/createTestSuite');
    $stateProvider

        .state('login', {
            //  Posts state. This state will contain nested views
            url: '/createTestSuite',
            templateUrl: 'src/modules/views/createTestSuite.html'
        })
        .state('createTestSuite', {
            //  Posts state. This state will contain nested views
            url: '/createForm',
            templateUrl: 'src/modules/views/createTestSuite.html'
        });


});


