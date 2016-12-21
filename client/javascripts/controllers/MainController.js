app.controller('MainController', [
    '$scope',
    '$http',
    'cerealService',
    function($scope, $http, cerealService) {

        $scope.test = 'hi there'

        $scope.searchedCereal = {}
        $scope.cereals = {}

        $scope.cerealSearch = function(cereal) {
            console.log('scope.cerealSearch:', cereal);

            // make AJAX call in here?

            cerealService.getCereal(cereal).then(function(results) {
                $scope.cereals = results.data
                console.log('the cereals are', $scope.cereals);

                $scope.overallScore = 0
                $scope.flavor = 0
                $scope.texture = 0
                $scope.box = 0
                $scope.newArr = []
                for (var i = 0; i < $scope.cereals.length; i++) {
                    $scope.cerealName = $scope.searchedCereal.name.toLowerCase()

                    if ($scope.cerealName === $scope.cereals[i].name) {
                        $scope.newArr.push($scope.cereals[i])
                        $scope.overallScore += $scope.cereals[i].overallScore
                        $scope.flavor += $scope.cereals[i].flavor
                        $scope.texture += $scope.cereals[i].texture
                        $scope.box += $scope.cereals[i].box
                    }
                }

                $scope.overallScore = Math.max(Math.round($scope.overallScore / $scope.newArr.length * 10) / 10)
                $scope.flavor = Math.max(Math.round($scope.flavor / $scope.newArr.length * 10) / 10)
                $scope.texture = Math.max(Math.round($scope.texture / $scope.newArr.length * 10) / 10)
                $scope.box = Math.max(Math.round($scope.box / $scope.newArr.length * 10) / 10)

                console.log('newArr: ', $scope.newArr)
                console.log('newArr length: ', $scope.newArr.length)
                console.log('overallScore: ', $scope.overallScore)
                console.log('flavor: ', $scope.flavor)
                console.log('texture: ', $scope.texture)
                console.log('box: ', $scope.box)
                console.log('$scope.searchedCereal name', $scope.cerealName);
            })

        }

    }
])
