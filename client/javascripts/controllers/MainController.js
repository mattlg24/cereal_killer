app.controller('MainController', [
    '$scope',
    '$http',
    'cerealService',
    '$location',
    function($scope, $http, cerealService, $location) {

        $scope.searchedCereal = {}
        $scope.cerealObj = {}
        $scope.rateCereal = {}

$scope.search = function(cereal) {
  console.log('cereal is', cereal);
  cerealService.getCereal(cereal)
  .then(function(results) {
    console.log('cereal ratings', results);

    $scope.cerealObj = results.data.name
    console.log('cerealObj', $scope.cerealObj);

    $scope.name = results.data.name
    $scope.overallScore = results.data.overallScore
    $scope.flavor = results.data.flavor
    $scope.texture = results.data.texture
    $scope.milkFlavor = results.data.milkFlavor
    $scope.box = results.data.box

  })
}

        $scope.cerealSearch = function(cereal) {

            // make AJAX call in here?

            cerealService.getCereal(cereal)
            .then(function(results) {
                $scope.cereals = results.data
                console.log('the cereals are', $scope.cereals);

                $scope.overallScore = 0
                $scope.flavor = 0
                $scope.texture = 0
                $scope.milkFlavor = 0
                $scope.box = 0
                $scope.newArr = []

                for (var i = 0; i < $scope.cereals.length; i++) {
                    $scope.cerealName = $scope.searchedCereal.name.toLowerCase()

                    if ($scope.cerealName === $scope.cereals[i].name) {
                        $scope.newArr.push($scope.cereals[i])
                        $scope.overallScore += $scope.cereals[i].overallScore
                        $scope.flavor += $scope.cereals[i].flavor
                        $scope.texture += $scope.cereals[i].texture
                        $scope.milkFlavor += $scope.cereals[i].milkFlavor
                        $scope.box += $scope.cereals[i].box
                    }
                }
            })
        }

        $scope.newRating = function(rating) {
          cerealService.rating(rating)
          .then(function(results) {
            console.log('new rating results ', results);
            $location.url('/search')
          })
        }

    }
])
