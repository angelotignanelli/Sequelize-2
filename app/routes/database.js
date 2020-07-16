var express = require('express');
var router = express.Router();
const db = require("../database/models");
const sequelize = db.sequelize;

/* GET home page. */
router.get('/uno', function(req, res, next) {
  sequelize.query("SELECT * FROM movies")
  .then(function(resultados){
      res.send(resultados);
  })
  .catch(function(error){
    console.log("ERROR: ");
      console.log(error);
  });
});

module.exports = router;
