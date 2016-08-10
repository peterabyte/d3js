define(['angular',
        'angularRoute',
        'angularSanitize',
        'bootstrap',
        'config',
        'header',
        'example',
        'jquery'],
        function (angular,
            angularRoute,
            angularSanitize,
            bootstrap,
            config,
            header,
            example,
            $) {
    "use strict";

    var app = angular.module('d3js-example', [ 'ngRoute', 'ngSanitize' ]),
        helper = {
            findExample: function(id) {
                var i;
                for (i = 0; i < config.examples.length; i = i + 1) {
                    if (config.examples[i].id === id) {
                        return config.examples[i];
                    }
                }
                return null;
            }
        };

    app.constant("config", config);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/", {templateUrl: "src/view/partial/example.html", controller: "ExampleCtrl", title: "Example"})
            .when("/example", {templateUrl: "src/view/partial/example.html", controller: "ExampleCtrl", title: "Example"})
            .when("/example/:id", {templateUrl: "src/view/partial/example.html", controller: "ExampleCtrl", title: "Example"})
            .when("/support", {templateUrl: "src/view/partial/support.html", controller: "SupportCtrl", title: "Support"})
            .otherwise({templateUrl: "src/view/partial/404.html", controller: "NotFoundCtrl", title: "404 Not Found"});
    }]);

    app.controller('BasePageCtrl', function ($scope, config) {
        $scope.config = config;
    });

    app.controller('HeaderHelperCtrl', function () {
        header.init();
    });

    app.controller('FooterHelperCtrl', function () {
    });

    app.controller('ExampleCtrl', function ($scope, $routeParams) {
        if ($routeParams.id) {
            $scope.exampleId = $routeParams.id;
        }
        example.init($routeParams.id);
    });

    app.controller('SupportCtrl', function ($scope, config) {
        $scope.supportLink = config.supportLink;
    });

    app.controller('NotFoundCtrl', function ($rootScope) {
        $rootScope.title = '404 Not Found';
    });

    app.run(['$location', '$rootScope', function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            if (current.$$route) {
                $rootScope.title = current.$$route.title;
            }
        });
    }]);

    return app;
});