/**
 * Created by cselvaraj on 4/29/14.
 */

'use strict';

var KEYS = {
    backspace: 8,
    tab: 9,
    enter: 13,
    escape: 27,
    space: 32,
    up: 38,
    down: 40,
    comma: 188
};

angular.module('searchbloxModule', [
    'facetModule',
    'searchblox.controller',
    'searchblox.custominput',
    'searchblox.autocomplete',
    'searchblox.factory',
    'searchblox.trust',
    'searchblox.service',
    'ui.bootstrap',
    'ngSanitize',
    'ngRoute',
    'searchblox.contentItem',
    'searchblox.adsItem',
    'rw.ui-slider',
    'searchblox.api',
    'xml2js'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        title: 'SearchBlox Resume Search',
        templateUrl: 'views/main.html',
        controller: 'searchbloxController'
    })
    .otherwise({
        redirecTo: '/'
    });

    $locationProvider.html5Mode(false);
}])
.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function(oVal, nVal) {
        if (oVal !== nVal) {
            document.title = $route.current.title;
        }
    });
}]);