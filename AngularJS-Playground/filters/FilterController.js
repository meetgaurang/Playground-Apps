angular.module("demoapp").controller("FilterController", ["$scope", function($scope){
    $scope.msg = "Hello World!";
    $scope.price = 25;
    $scope.myArray = [{
        country: "India",
        gdp: 2.2,
        population: 1.2
    }, {
        country: "Australia",
        gdp: 0.7,
        population: 0.2
    }, {
        country: "USA",
        gdp: 15.5,
        population: 0.6
    }];
    $scope.sampleDate = "2016-01-05T09:05:05.035Z";
}]);