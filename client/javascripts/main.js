var app = angular.module('cerealKillerApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../views/main.html',
    controller: 'MainController'
  })
})
