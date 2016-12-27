app.controller('SignupController', ['$scope', 'signupService', '$cookies', function($scope, signupService, $cookies) {
  $scope.hello = 'i do work'

$scope.signupForm = function(userObj) {
  console.log('sign up was clicked');

  signupService.signup(userObj)
  .then(function(results) {
    console.log('hahaha signup results are', results);
    
  })
}

}])
