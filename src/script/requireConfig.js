require.config({
    paths: {
        angular: '../../libs/angular/js/angular.min',
        angularRoute: '../../libs/angular-route/js/angular-route.min',
        angularSanitize: '../../libs/angular-sanitize/js/angular-sanitize.min',
        jquery: '../../libs/jquery/js/jquery.min',
        bootstrap: '../../libs/bootstrap/js/bootstrap.min',
        d3: '../../libs/d3/js/d3.min',
        main: '../main'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'angularSanitize': ['angular'],
        'jquery' : {'exports' : 'jquery'},
        'bootstrap' : ['jquery'],
        'd3' : {'exports' : 'd3'}
    },
    priority: [
        'angular'
    ],
    baseUrl: 'src/script/'
});

require(['angular', 'main'], function(angular, main) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
        angular.bootstrap(document, ['d3js-example']);
    });
});