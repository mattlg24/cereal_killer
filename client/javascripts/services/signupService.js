// var app = angular.module('cerealKillerApp')

app.service('signupService', function($http) {
  console.log('i got to signup service.js')
  return {
    signup: function(user) {
      return $http.post('/api/signup', user)
    },
    login: function(user) {
      return $http.post('/api/login', user)
    }
  }
})
