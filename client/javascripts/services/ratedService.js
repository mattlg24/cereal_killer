app.service('ratedService', function($http) {
    console.log('i got to rated service.js')
    return {
        top10: function() {
            return $http.get('/api/top10')
        }
    }
})
