
// var wordSchema = require('classSchema');
const db = require('../models/connectionDB');
const WordsDao = require('../models/DAO');
const Games = require('../models/Games');
// const datashow = require('../models/datashow');

var bodyReqData = [];
var datareturned = [];
var processedData = [];


module.exports = (app) => {

    // ROUT: MAIN
    app.get('/', async (req, resp) => {
        var talia = await resp.render('index', {
            title:"About Language",
            layout: 'mainLayouts'
        });
    });



    // ROUT: OPTIONS
    app.get('/options', async function(req, resp) {
        try {
            var talia = await resp.render('gameOptions', {
                title: "Options",
                layout: 'mainLayouts'
            });
        } catch(err){
            console.error(err) 
        }
        
    });

    // ROUTE: DATA SELECTED
    app.get('/gameoptions', async function(req, resp) {

        bodyReqData = req.query;
        const games = new Games();
        const wordsDao = new WordsDao(db);
        var datareturned = await wordsDao.optionsdata(bodyReqData);

        if (bodyReqData.option_game == 'memory') {
            processedData = await games.memory(datareturned, bodyReqData);

        } else if (bodyReqData.option_game == 'hangman') {
            processedData = await games.hangman(datareturned, bodyReqData);

        } else if (bodyReqData.option_game == 'linkArticle') { 
            processedData = await games.linkArticle(datareturned, bodyReqData);

        } else if (bodyReqData.option_game == 'formWords') {
            processedData = await games.formWords(datareturned, bodyReqData);

        } else {
            processedData = await games.falshCard(datareturned, bodyReqData);
        };

        resp.render(`${bodyReqData.option_game}`, {
            title: `${bodyReqData.option_game}`,
            layout: 'mainLayouts',
            words: processedData
        });
    });




    // ROUT: FORM
    app.get('/form', function(req, resp) {
        resp.render('dataForm', {
            title: "Data Form",
            layout: 'mainLayouts'
        });
    });

    // ROUTE: CATCH THE FORM DATA
    app.post('/words', function(req, res) {
        bodyReqData = req.body;
        const wordsDao = new WordsDao(db);
        wordsDao.adding(bodyReqData)
            .then(res.redirect('/form'))
            .catch(erro => console.log(erro));
    });



    // ROUT: DATASET
    app.get('/dataset', function(req, resp) {
        resp.render('dataSet', {
            title: "Data Set",
            layout: 'mainLayouts'
        });
    });
    
    // ROUTE: DATA SELECTED
    app.get('/dataselected', function(req, resp) {
        
        bodyReqData = req.query;
        const wordsDao = new WordsDao(db);
        wordsDao.read(bodyReqData)
            .then(function(datareturned) {
                // wordsDao.showdata(datareturned);
                resp.render('dataTables', {
                    title: "Tables",
                    layout: 'mainLayouts',
                    word: datareturned
                });
            })
            .catch(erro => console.log(erro));
    });



    // ROUT: DATA TABLES
    // app.get('/datatables', function(req, resp) {

    //     console.log('EEEEE undefined EEEEE === === === === ', datareturned);
    //     const wordsDao = new WordsDao(db);
    //     wordsDao.showdata();
    //     resp.render('dataTables', {
    //         title: "Tables",
    //         layout: 'mainLayouts'
    //     });
    // });

};
