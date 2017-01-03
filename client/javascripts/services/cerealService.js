var app = angular.module('cerealKillerApp')

app.service('cerealService', function($http) {
    // console.log('I got here to cerealService.js');
    return {
        getCereal: function(cereal) {
            return $http.get(`/api/cereals/${cereal}`)
        },
        rating: function(rating) {
          return $http.post('api/cereals', rating)
        },
        newRating: function(newRating) {
          return $http.post('api/')
        }
    }

})
