
var primaryLanguage = '';
var secondaryLanguage = '';
var shuffledArray = [];
var newobject = {};
var arrayOfObjects = [];
var arrayOfLetters = [];
var i = 0;


class Games {

    memory(datareturned, bodyReqData) {
        return new Promise((resolve, reject) => {

            console.log('AAAAAAAAA bodyReqData AAAAAAAAAA    ===   ', bodyReqData);
            var cardsNumber = bodyReqData.option_cards / 2;
            console.log('BBBBBBBBBB cardsNumber BBBB    ===  ', cardsNumber);
            
            primaryLanguage = bodyReqData.option_language;
            secondaryLanguage = bodyReqData.option2_language;

            if (bodyReqData.option_language_method == 'mono') {
                var dataMixed = datareturned.sort(() => Math.random() - 0.5);
                var dataSliced = dataMixed.slice(0, cardsNumber);
                var duplicatedArray = JSON.parse(JSON.stringify(dataSliced));
                var concatArray = dataSliced.concat(duplicatedArray);
                var shuffledArray = concatArray.sort(() => Math.random() - 0.5);

                arrayOfObjects = [];
                for (i = 0; i < shuffledArray.length; i++) {
                    arrayOfObjects.push({
                        id: shuffledArray[i]['_id'],
                        article: shuffledArray[i][primaryLanguage]['article'],
                        word: shuffledArray[i][primaryLanguage]['word'],
                        gender: shuffledArray[i][primaryLanguage]['gender']
                    });
                };


            } else if (bodyReqData.option_language_method == 'dual') {
                var dataMixed = datareturned.sort(() => Math.random() - 0.5);
                var dataSliced = dataMixed.slice(0, cardsNumber);
                var duplicatedArray = JSON.parse(JSON.stringify(dataSliced));

                arrayOfObjects = [];
                for (i = 0; i < dataSliced.length; i++) {
                    arrayOfObjects.push({
                        id: dataSliced[i]['_id'],
                        article: dataSliced[i][primaryLanguage]['article'],
                        word: dataSliced[i][primaryLanguage]['word'],
                        gender: dataSliced[i][primaryLanguage]['gender']
                    });
                    arrayOfObjects.push({
                        id: duplicatedArray[i]['_id'],
                        article: duplicatedArray[i][secondaryLanguage]['article'],
                        word: duplicatedArray[i][secondaryLanguage]['word'],
                        gender: duplicatedArray[i][secondaryLanguage]['gender']
                    });
                };

                var shuffledArray = arrayOfObjects.sort(() => Math.random() - 0.5);

            } else {
                arrayOfObjects = [];
                console.log('FIGARO')
            };

            return resolve(arrayOfObjects);
        });
    };





    hangman(datareturned, bodyReqData) {
        return new Promise((resolve, reject) => {
            arrayOfLetters = [];
            var dataMixed = datareturned.sort(() => Math.random() - 0.5);
            var dataSliced = dataMixed.slice(0, 1);
            var languageSelected = bodyReqData.option_language;
            
            var wordSelected = dataSliced[0][languageSelected]['word'];
            var lettersArray = wordSelected.split('');
            for (i = 0; i < lettersArray.length; i++) {
                arrayOfLetters.push({
                    letter: lettersArray[i]
                });
            };

            return resolve(arrayOfLetters);
        })
    };




    linkArticle(datareturned, bodyReqData) {
        return new Promise((resolve, reject) => {
            console.log('AAAAAAA     link articles   AAAAAA');

            return resolve(arrayOfLetters);
        })
    };





    formWords(datareturned, bodyReqData) {
        return new Promise((resolve, reject) => {
            var theWordSelected;
            var arrayOfLetters = [];
            var arrayOfMixedLetters = [];
            var objectWithWordAndLetters = [];
            var dataMixed = datareturned.sort(() => Math.random() - 0.5);
            var dataSliced = dataMixed.slice(0, 1); 
            var languageSelected = bodyReqData.option_language;
            var wordSelected = dataSliced[0][languageSelected]['word'];
            var lettersArray = wordSelected.split('');

            for (i = 0; i < lettersArray.length; i++) {
                arrayOfLetters.push({letter: lettersArray[i]});
            };

            
            for (i = 0; i < lettersArray.length; i++) {
                arrayOfMixedLetters.push({letter: lettersArray[i]});
            };
            arrayOfMixedLetters = arrayOfMixedLetters.sort(() => Math.random() - 0.5);

            // PREVENT ORDERED WORD =======================      not working
            if (arrayOfMixedLetters == arrayOfLetters) {
                while (arrayOfMixedLetters == arrayOfLetters) {
                    arrayOfMixedLetters = arrayOfMixedLetters.sort(() => Math.random() - 0.5);
                };
            };

            objectWithWordAndLetters.wordletters = arrayOfLetters;
            objectWithWordAndLetters.mixedletters = arrayOfMixedLetters;

            console.log('AAAAAA arrayOfLetters AAAAAA   ===  ', arrayOfLetters);
            console.log('BBBBBB arrayOfMixedLetters BBBBBB   ===  ', arrayOfMixedLetters);
            console.log('CCCCCC objectWithWordAndLetters CCCCC   ===  ', objectWithWordAndLetters);

            return resolve(objectWithWordAndLetters);
        })
    };






    falshCard(datareturned, bodyReqData) {
        return new Promise((resolve, reject) => {
            
            
            return resolve();
        })
    };
};

module.exports = Games;