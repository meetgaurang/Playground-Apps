angular.module("demoapp")
 .controller("ServicesController", ["$scope", "$location", "CustomServices", function($scope, $location, CustomServices){
    // Consuming inbuilt services
    $scope.location = $location.absUrl();
    // Consuming external services
    $scope.additionAnswer = CustomServices.addition(1, 2);
    // Consuming external async service
    var promise = CustomServices.asyncAddition(1, 2);
    promise.then(function (success){
        $scope.asyncAdditionAnswer = success;
    });
    
 }]);