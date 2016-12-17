'use strict';

angular.module('iFeed.login', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'login/login.html',
                controller: 'LoginCtrl',
                data: {
                    css: 'TagYourTrouble.css'
                }

            })
    })

.controller('LoginCtrl', [function() {

}]);