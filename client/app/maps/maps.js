'use strict';

angular.module('battleCityApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('maps-list', {
        url: '/maps',
        templateUrl: 'app/maps/maps-list/maps-list.html',
        controller: 'AdminCtrl'
      });
  });
angular.module('battleCityApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('maps-editor', {
        url: '/editor',
        templateUrl: 'app/maps/editor/map-editor.html',
        controller: 'MapEditorCtrl'
      });
  });
angular.module('battleCityApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('scenarios-list', {
        url: '/scenarios',
        templateUrl: 'app/maps/scenarios-list/scenarios-list.html',
        controller: 'AdminCtrl'
      });
  });
angular.module('battleCityApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('scenarios-editor', {
        url: '/scenario',
        templateUrl: 'app/maps/scenario-editor/scenario.html',
        controller: 'AdminCtrl'
      });
  });