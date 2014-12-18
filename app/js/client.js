'use strict';

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');
window._ = require('lodash');
require('angular-google-maps');

var app = angular.module('drivewayApp', ['ngRoute', 'ngCookies', 'base64', 'uiGmapgoogle-maps']);

//constants
require('./constants/app_constants')(app);
require('./constants/google_maps_config')(app);

//services
require('./services/all_services')(app);

//directives
require('./directives/all_directives')(app);

//controllers
require('./controllers/all_controllers')(app);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'js/templates/home.html'
  })
  .when('/profile', {
    templateUrl: 'js/templates/user_profile.html'
  })
  .when('/create', {
    templateUrl: 'js/templates/user_upload_gallery.html'
  })
  .otherwise({
    redirectTo: '/'
  })
}]);
