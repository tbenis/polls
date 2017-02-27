/***********************************
	BENIS TAMBE MEAN BELT EXAM OPTION F
	will.jenifer@yahoo.com
************************************/

var mongoose    = require('mongoose'),
    path        = require('path'),
    fs          = require('fs'),
    models_path = path.join(__dirname + './../models'),
    dbURI       = 'mongodb://localhost/surveyOptionF';

mongoose.connect(dbURI);

require('../models/option.js')
require('../models/poll.js')
require('../models/user.js')

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js')>=0){
    require(models_path + '/' + file);
  }
})
