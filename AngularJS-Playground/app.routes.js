angular.module('demoapp')
 .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state({
        name: 'home',
        url: '/home',
        templateUrl: 'home/home.html'//,
        //controller: 'HomeController'
    }).state({
        name: 'about',
        url: '/about',
        templateUrl: 'about/about.html'
    }).state({
        name: 'databinding',
        url: '/databinding',
        templateUrl: 'databinding/databinding.html',
        controller: 'DataBindingController'
    }).state({
        name: 'filters',
        url: '/filters',
        templateUrl: 'filters/filters.html',
        controller: 'FilterController'
    }).state({
        name: 'directives',
        url: '/directives',
        templateUrl: 'directives/directives.html',
        controller: 'DirectiveController'
    }).state({
        name: 'services',
        url: '/services',
        templateUrl: 'services/services.html',
        controller: 'ServicesController'
    }).state({
        name: 'httpcall',
        url: '/httpcall',
        templateUrl: 'http/http.html',
        controller: 'HttpController'
    }).state({
        name: 'form',
        url: '/form',
        templateUrl: 'form/form.html',
        controller: 'FormController'
    });
}]);