'use strict';

angular.module('tsangularfullstackApp', [
  'tsangularfullstackApp.auth',
  'tsangularfullstackApp.admin',
  'tsangularfullstackApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
