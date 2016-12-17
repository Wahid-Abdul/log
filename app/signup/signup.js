'use strict';

angular.module('iFeed.signup', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $stateProvider
            .state('signup', {
                url: '/signup',
                templateUrl: 'signup/signup.html',
                controller: 'SignupCtrl',
                data: {
                    css: 'TagYourTrouble.css'
                }

            })
    })

    .controller('SignupCtrl', [function() {

    }]);