var express = require('express');
var logger = require('pino')();
var jwt = require('jsonwebtoken'),

const middlewares = require('./middlewares/middleware');

app = express();

app.listen(4000,function(){
  logger.info('Server Started');
});

app.get('/api/login',function(req,res){
  const user={
    id:1,
    username:'Asif',
    password:'password123'
  };
  var token = jwt.sign({user},'sssshhhhh');
  logger.info(token);
  res.json(token);
});
