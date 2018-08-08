app.controller('SignupController', [
    '$scope',
    'signupService',
    '$cookies',
    '$location',
    '$cookies',
    function($scope, signupService, $cookies, $location, $cookies) {
        // $scope.hello = 'i do work'

        $scope.cookie = $cookies.getObject('loggedIn')
        // console.log('cookie.data is', cookie.data);

        $scope.signupForm = function(userObj) {
            console.log('sign up was clicked');

            signupService.signup(userObj).then(function(results) {
                $cookies.putObject('loggedIn', results)
                let cookieData = $cookies.get('loggedIn')
                console.log('cookieData from signup', cookieData);
                $location.url('/search')
            })
        }

        $scope.loginForm = function(userObj) {
            signupService.login(userObj)
            .then(function(results) {
                // console.log('login results', results.data);
                $cookies.putObject('loggedIn', results.data)
                let cookieData = $cookies.get('loggedIn')
                // console.log('cookieData', cookieData)
                $location.url('/search')
            })
        }

        $scope.logout = function() {
            $cookies.remove('loggedIn')
        }
console.log('hello there i work');
    }
])
