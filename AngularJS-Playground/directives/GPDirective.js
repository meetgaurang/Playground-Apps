angular.module("demoapp")
.directive("gpCustom", [function() {
    var directive = {};
    directive.restrict = 'A';
    directive.template = "My First Directive --> {{someValue}}";
    return directive;
}]);