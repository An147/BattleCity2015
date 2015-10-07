'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/battlecity-dev',
    createDatabaseStructure: function(callback){
    	var mongoose = require('mongoose');
    	var playerSchema = mongoose.Schema({
    		ID: Number,
    		nickname: String,
    		color: Number,
    		unitID: Number,
    		stats: Number
		  });

		var Player = mongoose.model('Player', playerSchema);
    }
  },

  seedDB: true
};
