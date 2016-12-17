/**
 * Created by Ajith Panneerselvam on 12/17/2016.
 */
'use strict';

angular.module('iFeed.main', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'main/main.html',
                controller: 'MainCtrl'

            })
    })

    .controller('MainCtrl', ['userService', '$scope', function (userService, $scope) {
        $(document).ready(function () {
            $(".button-collapse").sideNav();
            $('.collapsible').collapsible();
        })
        $scope.foods = [{
            name: "Idly",
            quantity: "10",
            time: "10 pm",
            place: "Sathyam Cinemas"

        }]
    }]);