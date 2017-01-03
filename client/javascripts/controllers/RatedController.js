app.controller('RatedController', [
    '$scope',
    'ratedService',
    '$location',
    '$cookies',
    function($scope, ratedService, $location, $cookies) {

      $scope.cookie = $cookies.getObject('loggedIn')
        // console.log('cookie.data is', cookie.data);

        $scope.haha = 'top 10 rated cereals go here'

        $scope.top = function() {
            console.log('top 10 was clicked');
        }

        ratedService.top10().then(function(results) {
            console.log('rated cereals results', results);
        })

        $scope.logout = function() {
            $cookies.remove('loggedIn')
        }

    }
])
