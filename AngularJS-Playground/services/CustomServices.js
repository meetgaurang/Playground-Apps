angular.module("demoapp")
 .factory("CustomServices", ["$q", function($q){
    var privateAddition = function(a, b) {
        return a+b;
    };
    var privateAsyncAddition = function(a, b) {
        return $q(function(resolve, reject){
            setTimeout(function() {
                resolve (a+b);
            }, 1000);
        });
    };
    return {
        addition: function(a, b) {
            return privateAddition(a, b);
        },
        asyncAddition: function(a, b) {
            return privateAsyncAddition(a, b);
        }
    }
 }]);