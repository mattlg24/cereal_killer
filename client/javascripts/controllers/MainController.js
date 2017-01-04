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

            cerealService.getCereal(cereal)
            .then(function(results) {
                console.log('cereal ratings', results);

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
                    }

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

                    let myChart = {
                        'type': 'bar',
                        'plot': {
                            'stacked': true,
                            'stack-type': 'normal'
                        },
                        'legend': {
                            'layout': '1x2',
                            'x': '40%',
                            'y': '92%'
                        },
                        'plotarea': {
                            'background-color': '#fff'
                        },
                        'title': {
                            'text': $scope.name
                        },
                        'scale-x': {
                            'labels': ['Overall Score', 'Flavor', 'Texture', 'Milk Flavor', 'Box']
                        },
                        'scale-y': {
                            'values': '0:35:5'
                        },
                        'series': [
                            {
                                values: [
                                    $scope.overallScore, $scope.flavor, $scope.texture, $scope.milkFlavor, $scope.box
                                ],
                                'text': $scope.name + ' rating'
                            }, {
                                values: [
                                    33 - $scope.overallScore,
                                    10 - $scope.flavor,
                                    10 - $scope.texture,
                                    10 - $scope.milkFlavor,
                                    3 - $scope.box
                                ],
                                'text': 'Total possible'
                            }
                        ]
                    } //end of myChart variable

                    zingchart.render({id: 'ratingChart',
                    data: myChart,
                    width: '100%',
                    height: '85%',
                  });

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
