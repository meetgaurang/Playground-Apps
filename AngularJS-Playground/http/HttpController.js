angular.module("demoapp")
 .controller("HttpController", ["$scope", "HttpService", function ($scope, HttpService){
    HttpService.makeHttpCall()
     .then(function(success){
        $scope.serviceResponse = success;
     }, function(error){
        $scope.serviceResponse = error;
     });
 }]);