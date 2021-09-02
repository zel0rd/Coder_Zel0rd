var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let randomWidth = parseInt(Math.random() * 1000) + 'px'
  let randomColor = getRandomColor();
  res.render('index.ejs', {randomWidth: randomWidth, randomColor: randomColor});
});


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


module.exports = router;
