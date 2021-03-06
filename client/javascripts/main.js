var app = angular.module('cerealKillerApp', ['ngRoute', 'ngCookies'])

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
  .when('/signup', {
    templateUrl: '../views/signup.html',
    controller: 'SignupController'
  })
  .when('/login', {
    templateUrl: '../views/login.html',
    controller: 'SignupController'
  })
  .when('/top10', {
    templateUrl: '../views/top10.html',
    controller: 'RatedController'
  })
  .when('/bottom10', {
    templateUrl: '../views/bottom10.html',
    controller: 'RatedController'
  })
  .when('/featured', {
    templateUrl: '../views/featured.html',
    controller: 'RatedController'
  })
})
