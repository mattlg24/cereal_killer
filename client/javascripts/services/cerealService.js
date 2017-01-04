var app = angular.module('cerealKillerApp')

app.service('cerealService', function($http) {
    // console.log('I got here to cerealService.js');
    return {
        getCereal: function(cereal) {
            return $http.get(`/api/cereals/${cereal}`)
        },
        rating: function(rating) {
          return $http.post('api/cereals', rating)
        }
    }

})


app.service('ratedService', function($http) {
    console.log('i got to rated service.js')
    return {
        top10: function() {
            return $http.get('/api/top10')
        }
    }
})
