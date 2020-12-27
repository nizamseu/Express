var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello Mr.Nizam");
});

router.get('/mee',function(req,res,next){
  res.json({
    name:"nizam",
    age:"24",
    Address:"Chandla,B-para,Cumilla"
  })
})
module.exports = router;
