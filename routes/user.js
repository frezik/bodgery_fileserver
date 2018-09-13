var express = require('express');
var router = express.Router();

router.get('/:rfid', function(req, res, next) {
    // We don't want to give away if a given RFID tag is 
    // valid or not, so we always send back a success
    res.status(200).send( "Check your email" );
});

module.exports = router;
