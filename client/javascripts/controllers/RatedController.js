app.controller('RatedController', [
    '$scope',
    'ratedService',
    '$location',
    '$cookies',
    function($scope, ratedService, $location, $cookies) {

        $scope.cookie = $cookies.getObject('loggedIn')
        // console.log('cookie.data is', cookie.data);

        //top cereals
        let topOne = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Reese\'s Puffs #1',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 29',
                'font-size': 15,
                'font-color': '#2B0151'
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ],
                "font-color": "white"
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 31,
                        10,
                        10,
                        9,
                        // 2
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Reese\'s Puffs rating'
                }, {
                    values: [
                        // 33 - 32,
                        10 - 10,
                        10 - 10,
                        10 - 9,
                        // 3 - 2
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of topOne variable

        zingchart.render({id: 'topOne', data: topOne});

        let topTwo = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Cheerios #2',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 27',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ],
                "font-color": "white"
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 31,
                        10,
                        9,
                        8,
                        // 2
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Cheerios'
                }, {
                    values: [
                        // 33 - 32,
                        10 - 10,
                        10 - 9,
                        10 - 8,
                        // 3 - 2
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of topOne variable

        zingchart.render({id: 'topTwo', data: topTwo});

        let topThree = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Trix #3',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 27',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 30,
                        10,
                        9,
                        8,
                        // 3
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Trix rating'
                }, {
                    values: [
                        // 33 - 30,
                        10 - 10,
                        10 - 9,
                        10 - 8,
                        // 3 - 3
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of topThree variable

        zingchart.render({id: 'topThree', data: topThree});

        let topFour = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Lucky Charms #4',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 25',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 28,
                        9,
                        8,
                        8,
                        // 3
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Lucky Charms rating'
                }, {
                    values: [
                        // 33 - 28,
                        10 - 9,
                        10 - 8,
                        10 - 8,
                        // 3 - 3
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of topFour variable

        zingchart.render({id: 'topFour', data: topFour});

        let topFive = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Cocoa Puffs #5',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 25',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 28,
                        9,
                        7,
                        9,
                        // 3
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Cocoa Puffs rating'
                }, {
                    values: [
                        // 33 - 28,
                        10 - 9,
                        10 - 7,
                        10 - 9,
                        // 3 - 3
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of topFive variable

        zingchart.render({id: 'topFive', data: topFive});

        let topSix = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Frosted Mini Wheats #6',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 25',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 27,
                        8,
                        8,
                        9,
                        // 2
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Frosted Mini Wheats rating'
                }, {
                    values: [
                        // 33 - 27,
                        10 - 8,
                        10 - 8,
                        10 - 9,
                        // 3 - 2
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of topSix variable

        zingchart.render({id: 'topSix', data: topSix});

        let topSeven = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Fruit Loops #7',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 24',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 27,
                        8,
                        7,
                        9,
                        // 3
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Fruit Loops rating'
                }, {
                    values: [
                        // 33 - 27,
                        10 - 8,
                        10 - 7,
                        10 - 9,
                        // 3 - 3
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of topSeven variable

        zingchart.render({id: 'topSeven', data: topSeven});

        let topEight = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Corn Pops #8',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 24',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 27,
                        9,
                        7,
                        8,
                        // 3
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Corn Pops rating'
                }, {
                    values: [
                        // 33 - 27,
                        10 - 9,
                        10 - 7,
                        10 - 8,
                        // 3 - 3
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of topEight variable

        zingchart.render({id: 'topEight', data: topEight});

        let topNine = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Frosted Flakes #9',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 25',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 27,
                        9,
                        6,
                        10,
                        // 2
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Frosted Flakes rating'
                }, {
                    values: [
                        // 33 - 27,
                        10 - 9,
                        10 - 6,
                        10 - 10,
                        // 3 - 2
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of topNine variable

        zingchart.render({id: 'topNine', data: topNine});

        let topTen = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Cap\'n Crunch #10',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 23',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 26,
                        10,
                        5,
                        8,
                        //  3
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Cap\'n Crunch rating'
                }, {
                    values: [
                        // 33 - 26,
                        10 - 10,
                        10 - 5,
                        10 - 8,
                        // 3 - 3
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of topTen variable

        zingchart.render({id: 'topTen', data: topTen});

        //bottom cereals
        let botOne = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Grape Nuts #1',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 4',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 5,
                        2,
                        1,
                        1,
                        // 1
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Grape Nuts rating'
                }, {
                    values: [
                        // 33 - 5,
                        10 - 2,
                        10 - 1,
                        10 - 1,
                        // 3 - 1
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of botOne variable

        zingchart.render({id: 'botOne', data: botOne});

        let botTwo = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'All Bran #2',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 4',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 5,
                        1,
                        2,
                        1,
                        // 1
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'All Bran rating'
                }, {
                    values: [
                        // 33 - 5,
                        10 - 1,
                        10 - 2,
                        10 - 1,
                        // 3 - 1
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of botTwo variable

        zingchart.render({id: 'botTwo', data: botTwo});

        let botThree = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Wheat Waffles #3',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 4',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 5,
                        2,
                        1,
                        1,
                        // 1
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Wheat Waffles rating'
                }, {
                    values: [
                        // 33 - 5,
                        10 - 2,
                        10 - 1,
                        10 - 1,
                        // 3 - 1
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of botThree variable

        zingchart.render({id: 'botThree', data: botThree});

        let botFour = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Corn Bran #4',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 5',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 6,
                        2,
                        2,
                        1,
                        // 1
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Corn Bran rating'
                }, {
                    values: [
                        // 33 - 6,
                        10 - 2,
                        10 - 2,
                        10 - 1,
                        // 3 - 1
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of botFour variable

        zingchart.render({id: 'botFour', data: botFour});

        let botFive = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Sugar Puffs #5',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 5',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 6,
                        2,
                        2,
                        1,
                        // 2
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Sugar Puffs rating'
                }, {
                    values: [
                        // 33 - 6,
                        10 - 2,
                        10 - 2,
                        10 - 1,
                        // 3 - 2
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of botFive variable

        zingchart.render({id: 'botFive', data: botFive});

        let botSix = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Golden Oaties #6',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 5',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 6,
                        3,
                        1,
                        1,
                        // 1
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Golden Oaties rating'
                }, {
                    values: [
                        // 33 - 6,
                        10 - 3,
                        10 - 1,
                        10 - 1,
                        // 3 - 1
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of botSix variable

        zingchart.render({id: 'botSix', data: botSix});

        let botSeven = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Franken Berry #7',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 5',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 7,
                        3,
                        1,
                        1,
                        // 2
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Franken Berry rating'
                }, {
                    values: [
                        // 33 - 7,
                        10 - 3,
                        10 - 1,
                        10 - 1,
                        // 3 - 2
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of botSeven variable

        zingchart.render({id: 'botSeven', data: botSeven});

        let botEight = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Corn Flakes #8',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 5',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 7,
                        2,
                        2,
                        1,
                        // 2
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Corn Flakes rating'
                }, {
                    values: [
                        // 33 - 7,
                        10 - 2,
                        10 - 2,
                        10 - 1,
                        // 3 - 2
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of botEight variable

        zingchart.render({id: 'botEight', data: botEight});

        let botNine = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Alpha Bits #9',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 6',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 8,
                        3,
                        1,
                        2,
                        // 3
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Alpha Bits rating'
                }, {
                    values: [
                        // 33 - 8,
                        10 - 3,
                        10 - 1,
                        10 - 2,
                        // 3 - 3
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of botNine variable

        zingchart.render({id: 'botNine', data: botNine});

        let botTen = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '24%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Special K #10',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 8',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 9,
                        4,
                        3,
                        1,
                        // 1
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Special K rating'
                }, {
                    values: [
                        // 33 - 9,
                        10 - 4,
                        10 - 3,
                        10 - 1,
                        // 3 - 1
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of botTen variable

        zingchart.render({id: 'botTen', data: botTen});

        let featured = {
            'type': 'bar',
            "backgroundColor": "transparent",
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                "backgroundColor": "transparent",
                'layout': '1x2',
                'x': '39%',
                'y': '92%'
            },
            'plotarea': {
                "backgroundColor": "transparent"
            },
            'title': {
                'text': 'Corn Pops',
                'font-color': '#2B0151'
            },
            'subtitle': {
                'text': 'Overall Score: 21',
                'font-size': 15,
                'font-color': '#2B0151',
            },
            'scale-x': {
                'labels': [
                    // 'Overall Score',
                    'Flavor',
                    'Texture',
                    'Milk Flavor',
                    // 'Box'
                ]
            },
            'scale-y': {
                'values': '0:10:1'
            },
            'series': [
                {
                    values: [
                        // 23,
                        8,
                        6,
                        7,
                        // 2
                    ],
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.8,
                    'text': 'Corn Pops rating'
                }, {
                    values: [
                        // 33 - 23,
                        10 - 8,
                        10 - 6,
                        10 - 7,
                        // 3 - 2
                    ],
                    'text': 'Total possible',
                    "backgroundColor": "#DC3A69",
                    "alpha": 0.2
                }
            ]
        } //end of featured variable

        zingchart.render({id: 'featured', data: featured});

        ratedService.top10().then(function(results) {
            console.log('rated cereals results', results);
            console.log('rated cereals results.data', results.data);
        })

        $scope.logout = function() {
            $cookies.remove('loggedIn')
        }

    }
])
