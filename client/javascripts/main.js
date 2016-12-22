var app = angular.module('cerealKillerApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
  .when('/search', {
    templateUrl: '../views/search.html',
    controller: 'MainController'
  })
  .when('/', {
    templateUrl: '../views/home.html',
    controller: 'MainController'
  })
  .when('/rate', {
    templateUrl: '../views/rate.html',
    controller: 'MainController'
  })
})
