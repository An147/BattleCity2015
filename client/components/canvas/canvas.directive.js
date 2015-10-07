'use strict';

angular.module('PhaserCanvas')
	.directive('ng-init-phaser', function($timeout){
		return function(scope, element, attrs) {
		    $timeout(function(){
		        scope.initMapEditor();
		    });        
		}
	});