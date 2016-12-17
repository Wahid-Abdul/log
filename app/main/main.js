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

    .controller('MainCtrl', ['userService', '$rootScope', '$scope','$http', function (userService, $rootScope, $scope,$http) {
        $(document).ready(function () {
            $(".button-collapse").sideNav();
            $('.collapsible').collapsible();
            $('select').material_select();
        });
        $scope.foods = [];
        $scope.collect = function(){
          
        }
        $scope.sortOpts = ['title', 'web_address', 'tag'];
        $scope.fetch = function(){
          console.log("frek it!!!")
          function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
              x.innerHTML = "Geolocation is not supported by this browser.";
            }
          }
          function showPosition(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log(position.coords.latitude);
            // var latitude = 13.0564801;
            // var longitude = 80.2592885;
            var radius = parseFloat($scope.locate);
            $http.post("http://localhost:3000/fetchFeed", {latitude:latitude,longitude:longitude,radius:radius}).success(function (data) {
              console.log(data);
              $scope.foods = data;
            });
          }
          getLocation();
        }
        $rootScope.nav = true;
    }]);
