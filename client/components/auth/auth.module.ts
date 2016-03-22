'use strict';

angular.module('tsangularfullstackApp.auth', [
  'tsangularfullstackApp.constants',
  'tsangularfullstackApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
