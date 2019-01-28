var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./jwtoken');
var jwt = require('jsonwebtoken');
var download = require('image-downloader');
var fs = require('fs');
var resizeImg = require('resize-img');
var path = require('path');
var config = require('../config/key');

const validity = function (req,res,next) {
  console.log(req.query.url);
  let token = localStorage.getItem("jwtoken");
  if(token){
    jwt.verify(token,config.key,function (err,decoded) {
      if(err){
        res.render('unauthorized');
      }
      else {
        next();
      }
    });
  }
  else{
    console.log('unauthorized');
  }
};

const ThumbnailCreation = (req,res,next)=>{
  console.log('here');
  let url = req.query.url;
  // let url = 'https://drop.ndtv.com/albums/AUTO/mahindra-xuv300-exterior-and-interior/aeb38cee-aac7-436b-9bef-94a8dafa3734.jpg';
  console.log(url);
  let ext = path.extname(url);
  console.log(ext);
  if(ext === '.bmp' || ext === '.jpg' || ext === '.jpeg' || ext ==='.png'){
    //generate
    const options = {
      url: url,
      dest: './images'
    };
    download.image(options)
    .then(({ filename, image }) => {
      console.log(filename);
      resizeImg(fs.readFileSync(filename), {width:50, height:50})
      .then(img => {
        console.log('working 2')
        fs.writeFileSync("./thumbnails/"+filename, img);
        next();
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });
  }
  else{
    res.send('File extensions allowed- [bmp,png,jpeg]');
  }

}

module.exports.validity = validity;
module.exports.localStorage=localStorage;
module.exports.ThumbnailCreation = ThumbnailCreation;
