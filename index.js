var express = require('express');
var logger = require('pino')();
var jwt = require('jsonwebtoken');
const middlewares = require('./middlewares/middleware');
var config = require('./config/key');
var app = express();

// PORT FOR OUR API
// =============================================================================
var port = process.env.PORT || 3000;

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'welcome to our api!' });
});

router.get('/login',function(req,res) {
  const user={
    id:1,
    username:'Asif',
    password:'password123'
  };
  var token = jwt.sign({user},config.key);
  logger.info(token);
  middlewares.localStorage.setItem("jwtoken",token);
  res.json(token);
});

router.get('/image',function(req,res,next) {
  middlewares.validity(req,res,next);
  middlewares.ThumbnailCreation(req,res,next);
  res.send('Image downloaded and compressed succesfully');
});


// REGISTER OUR ROUTES
// ==============================================================================
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port,function(){
  logger.info('Server Started at port : '+port);
});

// EXPORT APP AND PORT
// =============================================================================

module.exports.app=app;
module.exports.port=port;
