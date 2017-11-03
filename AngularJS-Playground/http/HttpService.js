angular.module("demoapp")
 .factory("HttpService", ["$http", function($http) {
    return {
        makeHttpCall : function() {
            return $http({
                method: "GET",
                url: "http://ergast.com/api/f1/2013/driverStandings.json"
            });
        }
    }
 }]);