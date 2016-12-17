'use strict';

// Declare app level module which depends on views, and components
angular.module('iFeed', [
  'ui.router',
  'iFeed.login',
  'iFeed.signup',
  'myApp.version'
])
.config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/login");
});
