var express = require('express');
var router = express.Router();
var request = require('request');

var auth = "Token " + "ea7cea5074f1f1494798069d7b3b39c12d011808";
var url = "https://tracker.possio.com/api/v1/devices/settings/359913060249068";

/* GET home page. */
router.get('/', function(req, res, next) {
  request.get({
    url: url,
    headers: {
        "Authorization": auth
      }
    },
    function(error, response, body) {
      res.send(body);
      console.log(body);
    }
  );
});

module.exports = router;