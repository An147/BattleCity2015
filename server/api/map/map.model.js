'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArmySchema = new Schema({
	unitsTypeID: Number,
	unitsCount: Number
});

var BlocksIDs = {
	'empty'	: 0,
	'brick'	: 1,
	'beton'	: 2,
	'trees'	: 3,
	'water'	: 4,
	'road'	: 5,
	'base'	: 6,
	'playerSpawn'	: 7,
	'enemySpawn'		: 8
};

var MapSchema = new Schema({
  name: String,
  width: {type: Number, default: 13},
  blocks: [Number],
  army: [ArmySchema]
});

MapSchema.statics.hasValidSize = function (){
	var heigth = Math.ceil(this.blocks.length / this.width);
	return this.width >= 13 && heigth >= 13;
}

MapSchema.statics.hasValidBlocks = function () {

  var playerSpawnsCount = this.blocks.filter(function(id){
  	return BlocksIDs['playerSpawn'] === id;
  }).length;
  if(playerSpawnsCount < 2)
  	return false;

  var enemySpawnsCount = this.blocks.filter(function(id){
  	return BlocksIDs['enemySpawn'] === id;
  }).length;
  if(playerSpawnsCount < 3)
  	return false;

  var basesCount = this.blocks.filter(function(id){
  	return BlocksIDs['base'] === id;
  }).length;
  if(!basesCount)
  	return false;

  return true;
}

MapSchema.statics.isValid = function (){
	return this.army.length > 0 && this.hasValidSize() &&
	this.hasValidBlocks();
}


module.exports = mongoose.model('Map', MapSchema);