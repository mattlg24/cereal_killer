app.controller('SignupController', [
    '$scope',
    'signupService',
    '$cookies',
    '$location',
    function($scope, signupService, $cookies, $location) {
        $scope.hello = 'i do work'

        $scope.signupForm = function(userObj) {
            console.log('sign up was clicked');

            signupService.signup(userObj).then(function(results) {
                console.log('hahaha signup results are', results);
                $location.url('/search')
            })
        }

        $scope.loginForm = function(userObj) {
          console.log('hello do i work?');
        }

    }
])
