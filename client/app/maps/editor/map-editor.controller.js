'use strict';

angular.module('battleCityApp')
  .controller('MapEditorCtrl',  function ($scope) {
  	$scope.initEditor = function(){
      initPhaserGame();
  	};
  });