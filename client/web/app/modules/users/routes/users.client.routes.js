(function () {
  'use strict';

  // Setting up route
  angular
    .module('users')
    .config(Routes);

  Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Routes($stateProvider, $urlRouterProvider) {
    var prefix = '../modules/users/templates/';

    $stateProvider

    .state('password-reset', {
      url: '/users/password/reset/:token',
      abstract: false,
      templateUrl: prefix + 'password-reset.template.html',
      controller: 'PasswordResetController as prc',
    });
  }
}());
