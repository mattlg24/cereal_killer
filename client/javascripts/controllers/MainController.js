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

         $scope.cookie = $cookies.getObject('loggedIn')
        console.log('cookie is', $scope.cookie);

        $scope.search = function(cereal) {
            console.log('cereal is', cereal);

            localStorage.setItem('cerealName', cereal)
            localStorage.setItem('favorite', 'f')

            cerealService.getCereal(cereal).then(function(results) {
                // console.log('cereal ratings', results);

                if (results.data === 'no cereal') {
                    $scope.msg = 'This cereal has not yet been rated. Sign in to rate this cereal.'
                    $scope.signedInMsg = 'This cereal has not yet been rated. Click the button below to rate it.'
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
        }

        $scope.rateCereal.name = localStorage.getItem('cerealName')
        $scope.rateCereal.favorite = localStorage.getItem('favorite')

        $scope.newRating = function(rating) {
            cerealService.rating(rating).then(function(results) {
                console.log('new rating results ', results);
                $location.url('/search')
            })
        }

        $scope.logout = function() {
            $cookies.remove('loggedIn')
        }

    }
])
