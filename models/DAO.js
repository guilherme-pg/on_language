const connection = require('./connectionDB');
var MongoClient  = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:127.0.0.1:27017/wordsdata';
var urlAtlas = 'mongodb+srv://guilhermevg:14691527@cluster00.puef2.mongodb.net/wordsdata';
var dataset;
var datareturned = [];



class WordsDao {
  
  // INSERT
  adding(bodyReqData) {
      return new Promise((resolve, reject) => {
          MongoClient.connect(urlAtlas, {useNewUrlParser: true,  useUnifiedTopology: true}, function(err, db) {
              if (err) throw err;
              var dbo = db.db("wordsdata");
              var obj = bodyReqData;
              dbo.collection(`${bodyReqData.name_theme}`).insertOne(obj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
              });
          });
      })
  };

  

  // READ
  read(bodyReqData) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(urlAtlas, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("wordsdata");

        dbo.collection(`${bodyReqData.name_theme}`).find({
          name_theme: bodyReqData.name_theme,
          name_level: bodyReqData.name_level
        }).toArray(function(err, result) {
          if (err) throw err;
          dataset = result;

          // REQUIRE: SIMPLIFICATION
          // REQUIRE: UPPER CASE IN TITLE
          for (var i = 0; i < dataset.length; i++) {
            dataset[i].firstLanguage = dataset[i][`${bodyReqData.name_first_language}`];
            dataset[i].secondLanguage = dataset[i][`${bodyReqData.name_second_language}`];
          };
          dataset.theFirstLanguage = `${bodyReqData.name_first_language}`;
          dataset.theSecondLanguage = `${bodyReqData.name_second_language}`;

          console.log("DATA ACCESS !!!");

          db.close();
          return resolve(dataset);
        });
      });
    });
  };


  // PROCESS OPTIONS DATA WITH: THEME AND LEVEL (next grammarclass)
  optionsdata(bodyReqData) {

    // PROBLEM: REQUIRE at least ONE VALUE or an ARRAY IN THE QUERY
    return new Promise((resolve, reject) => {
      MongoClient.connect(urlAtlas, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("wordsdata");

        console.log('bodyReqData.option_theme AAAAAAAA  ==== ', bodyReqData.option_theme);

        dbo.collection(`${bodyReqData.option_theme[0]}`).find({
          name_level: {$in: bodyReqData.option_level},
          name_theme: {$in: bodyReqData.option_theme}
        }).toArray(function(err, result) {
          if (err) throw err;
          // dataset = result;
          
          
          db.close();
          return resolve(result);
        });
      });
    })
  };

 





  // UPDATE
  // update() {
  //     return new Promise((resolve, reject) => {

  //     })
  // }

  // DELETE
  // delete() {
  //     return new Promise((resolve, reject) => {

  //     })
  // }
}


module.exports = WordsDao;