app.controller('MainController', [
    '$scope',
    '$http',
    'cerealService',
    '$location',
    '$cookies',
    function($scope, $http, cerealService, $location, $cookies) {

        $scope.searchedCereal = {}
        $scope.cerealObj = {}
        $scope.rateCereal = {}
        $scope.cerealName = $scope.cerealObj.name

        const cookie = $cookies.getObject('loggedIn')
        // console.log('cookie.data is', cookie.data);

        $scope.search = function(cereal) {
            console.log('cereal is', cereal);
            cerealService.getCereal(cereal).then(function(results) {
                // console.log('cereal ratings', results);

                if (results.data === 'no cereal') {
                    $scope.msg = 'This cereal has not yet been rated. Sign in to rate this cereal or click the button below.'
                    $scope.addCereal = 'Add Cereal'
                    $scope.overallScore = ''
                    $scope.flavor = ''
                    $scope.texture = ''
                    $scope.milkFlavor = ''
                    $scope.box = ''

                } else {

                    $scope.cerealObj = results.data
                    console.log('cerealObj', $scope.cerealObj);
                    console.log('cereal obj cereal id', $scope.cerealObj.cereal_id);
                    $scope.cerealName = $scope.cerealObj.name

                    if (results === []) {
                        $scope.noResults = 'No results'
                    }

                    $scope.name = results.data.name
                    $scope.overallScore = results.data.overallScore
                    $scope.flavor = results.data.flavor
                    $scope.texture = results.data.texture
                    $scope.milkFlavor = results.data.milkFlavor
                    $scope.box = results.data.box
                    $scope.msg = ''
                }
                console.log('msg ', $scope.msg);

            })
            return $scope.cerealName
        }

        $scope.newRating = function(rating) {
            cerealService.rating(rating)
            .then(function(results) {
                console.log('new rating results ', results);
                $location.url('/search')
            })
        }

        $scope.logout = function() {
            $cookies.remove('loggedIn')
        }

    }
])
