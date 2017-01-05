app.controller('RatedController', [
    '$scope',
    'ratedService',
    '$location',
    '$cookies',
    function($scope, ratedService, $location, $cookies) {

        $scope.cookie = $cookies.getObject('loggedIn')
        // console.log('cookie.data is', cookie.data);

        $scope.haha = 'top 10 rated cereals go here'
//top cereals
        let topOne = {
          'type': 'bar',
          'plot': {
            'stacked': true,
            'stack-type': 'normal'
          },
          'legend': {
            'layout': '1x2',
            'x': '29%',
            'y': '92%'
          },
          'plotarea': {
            'background-color': '#fff'
          },
          'title': {
            'text': 'Reese\'s Puffs'
          },
          'subtitle': {
            'text': 'Number 1 Rated Cereal'
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
                31, 10, 10, 9, 2
              ],
              'text': 'Reese\'s Puffs rating'
            }, {
              values: [
                33 - 32,
                10 - 10,
                10 - 10,
                10 - 9,
                3 - 2
              ],
              'text': 'Total possible'
            }
          ]
        } //end of topOne variable

        zingchart.render({id: 'topOne', data: topOne});

        let topTwo = {
            'type': 'bar',
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                'layout': '1x2',
                'x': '29%',
                'y': '92%'
            },
            'plotarea': {
                'background-color': '#fff'
            },
            'title': {
                'text': 'Cheerios'
            },
            'subtitle': {
              'text': 'Number 2 Rated Cereal'
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
                        30, 10, 9, 8, 3
                    ],
                    'text': 'Cheerios rating'
                }, {
                    values: [
                        33 - 30,
                        10 - 10,
                        10 - 9,
                        10 - 8,
                        3 - 3
                    ],
                    'text': 'Total possible'
                }
            ]
        } //end of topTwo variable

        zingchart.render({id: 'topTwo', data: topTwo});

        let topThree = {
            'type': 'bar',
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                'layout': '1x2',
                'x': '29%',
                'y': '92%'
            },
            'plotarea': {
                'background-color': '#fff'
            },
            'title': {
                'text': 'Trix'
            },
            'subtitle': {
              'text': 'Number 3 Rated Cereal'
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
                        30, 10, 9, 8, 3
                    ],
                    'text': 'Trix rating'
                }, {
                    values: [
                        33 - 30,
                        10 - 10,
                        10 - 9,
                        10 - 8,
                        3 - 3
                    ],
                    'text': 'Total possible'
                }
            ]
        } //end of topThree variable

        zingchart.render({id: 'topThree', data: topThree});

        let topFour = {
            'type': 'bar',
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                'layout': '1x2',
                'x': '29%',
                'y': '92%'
            },
            'plotarea': {
                'background-color': '#fff'
            },
            'title': {
                'text': 'Lucky Charms'
            },
            'subtitle': {
              'text': 'Number 4 Rated Cereal'
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
                        28, 9, 8, 8, 3
                    ],
                    'text': 'Lucky Charms rating'
                }, {
                    values: [
                        33 - 28,
                        10 - 9,
                        10 - 8,
                        10 - 8,
                        3 - 3
                    ],
                    'text': 'Total possible'
                }
            ]
        } //end of topFour variable

        zingchart.render({id: 'topFour', data: topFour});

        let topFive = {
            'type': 'bar',
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                'layout': '1x2',
                'x': '29%',
                'y': '92%'
            },
            'plotarea': {
                'background-color': '#fff'
            },
            'title': {
                'text': 'Cocoa Puffs'
            },
            'subtitle': {
              'text': 'Number 5 Rated Cereal'
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
                        28, 9, 7, 9, 3
                    ],
                    'text': 'Cocoa Puffs rating'
                }, {
                    values: [
                        33 - 28,
                        10 - 9,
                        10 - 7,
                        10 - 9,
                        3 - 3
                    ],
                    'text': 'Total possible'
                }
            ]
        } //end of topFive variable

        zingchart.render({id: 'topFive', data: topFive});

        let topSix = {
            'type': 'bar',
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                'layout': '1x2',
                'x': '29%',
                'y': '92%'
            },
            'plotarea': {
                'background-color': '#fff'
            },
            'title': {
                'text': 'Frosted Mini Wheats'
            },
            'subtitle': {
              'text': 'Number 6 Rated Cereal'
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
                        27, 8, 8, 9, 2
                    ],
                    'text': 'Frosted Mini Wheats rating'
                }, {
                    values: [
                        33 - 27,
                        10 - 8,
                        10 - 8,
                        10 - 9,
                        3 - 2
                    ],
                    'text': 'Total possible'
                }
            ]
        } //end of topSix variable

        zingchart.render({id: 'topSix', data: topSix});

        let topSeven = {
            'type': 'bar',
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                'layout': '1x2',
                'x': '29%',
                'y': '92%'
            },
            'plotarea': {
                'background-color': '#fff'
            },
            'title': {
                'text': 'Fruit Loops'
            },
            'subtitle': {
              'text': 'Number 7 Rated Cereal'
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
                        27, 8, 7, 9, 3
                    ],
                    'text': 'Fruit Loops rating'
                }, {
                    values: [
                        33 - 27,
                        10 - 8,
                        10 - 7,
                        10 - 9,
                        3 - 3
                    ],
                    'text': 'Total possible'
                }
            ]
        } //end of topSeven variable

        zingchart.render({id: 'topSeven', data: topSeven});

        let topEight = {
            'type': 'bar',
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                'layout': '1x2',
                'x': '29%',
                'y': '92%'
            },
            'plotarea': {
                'background-color': '#fff'
            },
            'title': {
                'text': 'Corn Pops'
            },
            'subtitle': {
              'text': 'Number 8 Rated Cereal'
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
                        27, 9, 7, 8, 3
                    ],
                    'text': 'Corn Pops rating'
                }, {
                    values: [
                        33 - 27,
                        10 - 9,
                        10 - 7,
                        10 - 8,
                        3 - 3
                    ],
                    'text': 'Total possible'
                }
            ]
        } //end of topEight variable

        zingchart.render({id: 'topEight', data: topEight});

        let topNine = {
            'type': 'bar',
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                'layout': '1x2',
                'x': '29%',
                'y': '92%'
            },
            'plotarea': {
                'background-color': '#fff'
            },
            'title': {
                'text': 'Frosted Flakes'
            },
            'subtitle': {
              'text': 'Number 9 Rated Cereal'
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
                        27, 9, 6, 10, 2
                    ],
                    'text': 'Frosted Flakes rating'
                }, {
                    values: [
                        33 - 27,
                        10 - 9,
                        10 - 6,
                        10 - 10,
                        3 - 2
                    ],
                    'text': 'Total possible'
                }
            ]
        } //end of topNine variable

        zingchart.render({id: 'topNine', data: topNine});

        let topTen = {
            'type': 'bar',
            'plot': {
                'stacked': true,
                'stack-type': 'normal'
            },
            'legend': {
                'layout': '1x2',
                'x': '29%',
                'y': '92%'
            },
            'plotarea': {
                'background-color': '#fff'
            },
            'title': {
                'text': 'Cap\'n Crunch'
            },
            'subtitle': {
              'text': 'Number 10 Rated Cereal'
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
                        26, 10, 5, 8, 3
                    ],
                    'text': 'Cap\'n Crunch rating'
                }, {
                    values: [
                        33 - 26,
                        10 - 10,
                        10 - 5,
                        10 - 8,
                        3 - 3
                    ],
                    'text': 'Total possible'
                }
            ]
        } //end of topTen variable

        zingchart.render({id: 'topTen', data: topTen});

//bottom cereals
                let botOne = {
                  'type': 'bar',
                  'plot': {
                    'stacked': true,
                    'stack-type': 'normal'
                  },
                  'legend': {
                    'layout': '1x2',
                    'x': '29%',
                    'y': '92%'
                  },
                  'plotarea': {
                    'background-color': '#fff'
                  },
                  'title': {
                    'text': 'Grape Nuts'
                  },
                  'subtitle': {
                    'text': 'Number 1 Worst Rated Cereal'
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
                        5, 2, 1, 1, 1
                      ],
                      'text': 'Grape Nuts rating'
                    }, {
                      values: [
                        33 - 5,
                        10 - 2,
                        10 - 1,
                        10 - 1,
                        3 - 1
                      ],
                      'text': 'Total possible'
                    }
                  ]
                } //end of botOne variable

                zingchart.render({id: 'botOne', data: botOne});

                let botTwo = {
                    'type': 'bar',
                    'plot': {
                        'stacked': true,
                        'stack-type': 'normal'
                    },
                    'legend': {
                        'layout': '1x2',
                        'x': '29%',
                        'y': '92%'
                    },
                    'plotarea': {
                        'background-color': '#fff'
                    },
                    'title': {
                        'text': 'All Bran'
                    },
                    'subtitle': {
                      'text': 'Number 2 Worst Rated Cereal'
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
                                5, 1, 2, 1, 1
                            ],
                            'text': 'All Bran rating'
                        }, {
                            values: [
                                33 - 5,
                                10 - 1,
                                10 - 2,
                                10 - 1,
                                3 - 1
                            ],
                            'text': 'Total possible'
                        }
                    ]
                } //end of botTwo variable

                zingchart.render({id: 'botTwo', data: botTwo});

                let botThree = {
                    'type': 'bar',
                    'plot': {
                        'stacked': true,
                        'stack-type': 'normal'
                    },
                    'legend': {
                        'layout': '1x2',
                        'x': '29%',
                        'y': '92%'
                    },
                    'plotarea': {
                        'background-color': '#fff'
                    },
                    'title': {
                        'text': 'Wheat Waffles'
                    },
                    'subtitle': {
                      'text': 'Number 3 Worst Rated Cereal'
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
                                5, 2, 1, 1, 1
                            ],
                            'text': 'Wheat Waffles rating'
                        }, {
                            values: [
                                33 - 5,
                                10 - 2,
                                10 - 1,
                                10 - 1,
                                3 - 1
                            ],
                            'text': 'Total possible'
                        }
                    ]
                } //end of botThree variable

                zingchart.render({id: 'botThree', data: botThree});

                let botFour = {
                    'type': 'bar',
                    'plot': {
                        'stacked': true,
                        'stack-type': 'normal'
                    },
                    'legend': {
                        'layout': '1x2',
                        'x': '29%',
                        'y': '92%'
                    },
                    'plotarea': {
                        'background-color': '#fff'
                    },
                    'title': {
                        'text': 'Corn Bran'
                    },
                    'subtitle': {
                      'text': 'Number 4 Worst Rated Cereal'
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
                                6, 2, 2, 1, 1
                            ],
                            'text': 'Corn Bran rating'
                        }, {
                            values: [
                                33 - 6,
                                10 - 2,
                                10 - 2,
                                10 - 1,
                                3 - 1
                            ],
                            'text': 'Total possible'
                        }
                    ]
                } //end of botFour variable

                zingchart.render({id: 'botFour', data: botFour});

                let botFive = {
                    'type': 'bar',
                    'plot': {
                        'stacked': true,
                        'stack-type': 'normal'
                    },
                    'legend': {
                        'layout': '1x2',
                        'x': '29%',
                        'y': '92%'
                    },
                    'plotarea': {
                        'background-color': '#fff'
                    },
                    'title': {
                        'text': 'Sugar Puffs'
                    },
                    'subtitle': {
                      'text': 'Number 5 Worst Rated Cereal'
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
                                6, 2, 1, 1, 2
                            ],
                            'text': 'Sugar Puffs rating'
                        }, {
                            values: [
                                33 - 6,
                                10 - 2,
                                10 - 1,
                                10 - 1,
                                3 - 2
                            ],
                            'text': 'Total possible'
                        }
                    ]
                } //end of botFive variable

                zingchart.render({id: 'botFive', data: botFive});

                let botSix = {
                    'type': 'bar',
                    'plot': {
                        'stacked': true,
                        'stack-type': 'normal'
                    },
                    'legend': {
                        'layout': '1x2',
                        'x': '29%',
                        'y': '92%'
                    },
                    'plotarea': {
                        'background-color': '#fff'
                    },
                    'title': {
                        'text': 'Golden Oaties'
                    },
                    'subtitle': {
                      'text': 'Number 6 Worst Rated Cereal'
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
                                6, 3, 1, 1, 1
                            ],
                            'text': 'Golden Oaties rating'
                        }, {
                            values: [
                                33 - 6,
                                10 - 3,
                                10 - 1,
                                10 - 1,
                                3 - 1
                            ],
                            'text': 'Total possible'
                        }
                    ]
                } //end of botSix variable

                zingchart.render({id: 'botSix', data: botSix});

                let botSeven = {
                    'type': 'bar',
                    'plot': {
                        'stacked': true,
                        'stack-type': 'normal'
                    },
                    'legend': {
                        'layout': '1x2',
                        'x': '29%',
                        'y': '92%'
                    },
                    'plotarea': {
                        'background-color': '#fff'
                    },
                    'title': {
                        'text': 'Franken Berry'
                    },
                    'subtitle': {
                      'text': 'Number 7 Worst Rated Cereal'
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
                                7, 3, 1, 1, 2
                            ],
                            'text': 'Franken Berry rating'
                        }, {
                            values: [
                                33 - 7,
                                10 - 3,
                                10 - 1,
                                10 - 1,
                                3 - 2
                            ],
                            'text': 'Total possible'
                        }
                    ]
                } //end of botSeven variable

                zingchart.render({id: 'botSeven', data: botSeven});

                let botEight = {
                    'type': 'bar',
                    'plot': {
                        'stacked': true,
                        'stack-type': 'normal'
                    },
                    'legend': {
                        'layout': '1x2',
                        'x': '29%',
                        'y': '92%'
                    },
                    'plotarea': {
                        'background-color': '#fff'
                    },
                    'title': {
                        'text': 'Corn Flakes'
                    },
                    'subtitle': {
                      'text': 'Number 8 Worst Rated Cereal'
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
                                7, 2, 2, 1, 2
                            ],
                            'text': 'Corn Flakes rating'
                        }, {
                            values: [
                                33 - 7,
                                10 - 2,
                                10 - 2,
                                10 - 1,
                                3 - 2
                            ],
                            'text': 'Total possible'
                        }
                    ]
                } //end of botEight variable

                zingchart.render({id: 'botEight', data: botEight});

                let botNine = {
                    'type': 'bar',
                    'plot': {
                        'stacked': true,
                        'stack-type': 'normal'
                    },
                    'legend': {
                        'layout': '1x2',
                        'x': '29%',
                        'y': '92%'
                    },
                    'plotarea': {
                        'background-color': '#fff'
                    },
                    'title': {
                        'text': 'Alpha Bits'
                    },
                    'subtitle': {
                      'text': 'Number 9 Worst Rated Cereal'
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
                                8, 3, 1, 1, 3
                            ],
                            'text': 'Alpha Bits rating'
                        }, {
                            values: [
                                33 - 8,
                                10 - 3,
                                10 - 1,
                                10 - 1,
                                3 - 3
                            ],
                            'text': 'Total possible'
                        }
                    ]
                } //end of botNine variable

                zingchart.render({id: 'botNine', data: botNine});

                let botTen = {
                    'type': 'bar',
                    'plot': {
                        'stacked': true,
                        'stack-type': 'normal'
                    },
                    'legend': {
                        'layout': '1x2',
                        'x': '29%',
                        'y': '92%'
                    },
                    'plotarea': {
                        'background-color': '#fff'
                    },
                    'title': {
                        'text': 'Special K'
                    },
                    'subtitle': {
                      'text': 'Number 10 Worst Rated Cereal'
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
                                9, 4, 3, 1, 1
                            ],
                            'text': 'Special K rating'
                        }, {
                            values: [
                                33 - 9,
                                10 - 4,
                                10 - 3,
                                10 - 1,
                                3 - 1
                            ],
                            'text': 'Total possible'
                        }
                    ]
                } //end of botTen variable

                zingchart.render({id: 'botTen', data: botTen});

                let featured = {
                    'type': 'bar',
                    'plot': {
                        'stacked': true,
                        'stack-type': 'normal'
                    },
                    'legend': {
                        'layout': '1x2',
                        'x': '29%',
                        'y': '92%'
                    },
                    'plotarea': {
                        'background-color': '#fff'
                    },
                    'title': {
                        'text': 'Corn Pops'
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
                                23, 8, 6, 7, 2
                            ],
                            'text': 'Corn Pops rating'
                        }, {
                            values: [
                                33 - 23,
                                10 - 8,
                                10 - 6,
                                10 - 7,
                                3 - 2
                            ],
                            'text': 'Total possible'
                        }
                    ]
                } //end of featured variable

                zingchart.render({id: 'featured', data: featured});



        ratedService.top10()
        .then(function(results) {
            console.log('rated cereals results', results);
            console.log('rated cereals results.data', results.data);
        })

        $scope.logout = function() {
            $cookies.remove('loggedIn')
        }

    }
])
