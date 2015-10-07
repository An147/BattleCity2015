'use strict';

var canvasModule = new angular.module('PhaserCanvas', []);

angular.module('PhaserCanvas')
  .controller('PhaserCanvasCtrl', 
  	['$scope', 'MapEditor', function ($scope, mapEditor) {
  		$scope.initMapEditor = function(){
  			mapEditor();
  		};
  }]);