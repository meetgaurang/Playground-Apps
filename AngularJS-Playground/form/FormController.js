angular.module("demoapp")
 .controller("FormController", ["$scope", function($scope){
    $scope.user = {};
    $scope.user.hobbies = {};
    $scope.user.relocationchoice = "no";
    $scope.submitForm = function() {
        alert("hello");
    };
 }]);