var express = require('express');
const router =express.Router()

router.get('/',function(req,res,next){
    res.send("meeeeeeeeeeeeeeee")
})


module.exports = router