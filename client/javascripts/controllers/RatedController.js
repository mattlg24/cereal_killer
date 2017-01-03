app.controller('RatedController', [
    '$scope',
    'ratedService',
    '$location',
    function($scope, ratedService, $location) {

        $scope.haha = 'top 10 rated cereals go here'

        $scope.top = function() {
            console.log('top 10 was clicked');
        }

        ratedService.top10()
        .then(function(results) {
            console.log('rated cereals results', results.data);
        })

    }
])
