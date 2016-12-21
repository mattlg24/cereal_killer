var app = angular.module('cerealKillerApp')

app.service('cerealService', function($http) {
    console.log('I got here to cerealService.js');
    return {
        getCereal: function() {
            return $http.get('api/cereals')
        }
    }

})
