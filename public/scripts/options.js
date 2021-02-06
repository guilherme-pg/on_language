var i = 7;
var cog = 0;
var cola = 0;
var cole = 0;
var cot = 0;
var co2la = 0;




// PREVENT NONE SELECTED
var buttonStart = document.getElementById('button_start');
buttonStart.onclick = validatioForm;

function stopDefAction(event) {
    event.preventDefault();
};

function validatioForm(event) {

    var optionGame = document.getElementsByName('option_game');
    for (i = 0; i < optionGame.length; i++) {
        if (optionGame[i].checked == true) {
            cog = 0;
        } else if (optionGame[i].checked == false) {
            cog++
        };
        if (cog == optionGame.length) {
            cog = 0;
            stopDefAction(event);
            alert("Need to choose a Game Option!");
        };
    };


    var optionLanguage = document.getElementsByName('option_language');
    for (i = 0; i < optionLanguage.length; i++) {
        if (optionLanguage[i].checked == true) {
            cola = 0;
        } else if (optionLanguage[i].checked == false) {
            cola++
        };
        if (cola == optionLanguage.length) {
            cola = 0;
            stopDefAction(event);
            alert("Need to choose a Language!");
        };
    };


    var optionLevel = document.getElementsByName('option_level');
    for (i = 0; i < optionLevel.length; i++) {
        console.log(' cog    ===   ', cole);
        console.log(' optionGame.length    ===   ', optionLevel.length);
        
        if (optionLevel[i].checked == true) {
            cole = 0;
        } else if (optionLevel[i].checked == false) {
            cole++ 
        };

        // IMPLICATIONS: ARRUMADINHO
        if (cole + 1 == optionLevel.length) {
            cole = 0;
            stopDefAction(event);
            alert("Need to choose at least one Level option!");
        };
    };
    
    var optionTheme = document.getElementsByName('option_theme');
    for (i = 0; i < optionTheme.length; i++) {
        if (optionTheme[i].checked == false) {
            cot++
        } else if (optionTheme[i].checked == true) {
            cot = 0;
        };

        // IMPLICATIONS: ARRUMADINHO
        if (cot + 1 == optionTheme.length) {
            cot = 0;
            stopDefAction(event);
            alert("Need to choose at least one Theme option!");
        };
    };

    // REQUIRE: PREVENT AFTER IMPLEMENT HOVER LANGUAGE METHOD AND LINK GAME
    // var optionLanguageMethod = document.getElementsByName('option_language_method');
    // for (i = 0; i < optionLanguageMethod.length; i++) {
    //     if (optionTheme.includes(optionTheme[i].checked) == false) {
    //         alert("Need to choose at least one Theme option!");
    //     };
    // };

    var optionDual = document.getElementById('option_dual');
    if (optionDual.checked == true) {
        var option2Language = document.getElementsByName('option2_language');
        for (i = 0; i < option2Language.length; i++) {
            
            if (option2Language[i].checked == true) {
                co2la = 0;
            } else if (option2Language[i].checked == false) {
                co2la++
            };
            if (co2la == option2Language.length) {
                co2la = 0;
                stopDefAction(event);
                alert("Need to choose a Second Language option!");
            };
        };
    };
};





// OPTIONS DISPLAY
var methodLanguage = document.getElementsByName('option_language_method');
for (i = 0; i < methodLanguage.length; i++) {
    // UNFLIPED, FLIPED AND MATCHED
    methodLanguage[i].onclick = secondLanguageDisplay;
    // methodLanguage[i].addEventListener("click", secondLanguageDisplay);
};

function secondLanguageDisplay(event) {

    // REQUIRE: CHANGE THE DISPLAY PROPERTY TO ANOTHER THING OTHER THAN 'NONE'
    if (methodLanguage[0].checked == true) {
        document.getElementById('second_language').style.display = "none";
    } else if (methodLanguage[1].checked == true || methodLanguage[2].checked == true) {
        document.getElementById('second_language').style.display = "flex";
    };
};






// PREVENT MEMORY CARDS NUMBERS FOR EACH DIFICULT AND/OR THEME SELECTED

// REQUIRE: prevent to show only when memory is selected
// REQUIRE: prevent to to show number of options only if each theme/dificult is selected
// REQUIRE: uptade routes and DAO for number of memory cards selected
// REQUIRE:  ADD CONDITIONS TO OPTIONS


// DISPLAY CONFIGURATIONS
var optionGame = document.getElementsByName('option_game');
for (i = 0; i < optionGame.length; i++) {
    optionGame[i].onclick = memoryCardsOptions;
};

document.getElementById('memory_cards_options').style.display = "none";
document.getElementById('second_language').style.display = "none";
document.getElementById('method_language').style.display = "none";
var optionHangman = document.getElementById('option_hangman');
var optionFormWords = document.getElementById('option_form_words');
var optionMemory = document.getElementById('option_memory');
var optionMemoryCards = document.getElementsByName('option_cards');
var optionSecondLanguage = document.getElementsByName('option2_language');

function memoryCardsOptions(event) {
    
    // REQUIRE: CHANGE THE DISPLAY PROPERTY TO ANOTHER THING OTHER THAN 'NONE'7
    // HIDE AND SHOW SECOND LANGUAGE AND METHOD
    if (optionMemory.checked == true) {
        document.getElementById('memory_cards_options').style.display = "flex";
        document.getElementById('second_language').style.display = "flex";
        document.getElementById('method_language').style.display = "flex";

    } else if (optionHangman.checked == true || optionFormWords.checked == true) {
        document.getElementById('second_language').style.display = "none";
        document.getElementById('method_language').style.display = "none";
        document.getElementById('memory_cards_options').style.display = "none";
        for (i = 0; i < optionMemoryCards.length; i++) {
            optionMemoryCards[i].checked = false;
        };
        for (i = 0; i < methodLanguage.length; i++) {
            methodLanguage[i].checked = false;
        };
        for (i = 0; i < optionSecondLanguage.length; i++) {
            optionSecondLanguage[i].checked = false;
        };
    };
};




// NUMBER OF MEMORY CARDS
var labelOptionCards12 = document.getElementById('label_option_cards_12');
var labelOptionCards16 = document.getElementById('label_option_cards_16');
var labelOptionCards20 = document.getElementById('label_option_cards_20');
var labelOptionCards24 = document.getElementById('label_option_cards_24');
labelOptionCards12.style.opacity = "0.5";
labelOptionCards16.style.opacity = "0.5";
labelOptionCards20.style.opacity = "0.5";
labelOptionCards24.style.opacity = "0.5";

var optionCards12 = document.getElementById('option_cards_12');
var optionCards16 = document.getElementById('option_cards_16');
var optionCards20 = document.getElementById('option_cards_20');
var optionCards24 = document.getElementById('option_cards_24');
optionCards12.disabled = true;
optionCards16.disabled = true;
optionCards20.disabled = true;
optionCards24.disabled = true;


var optionLevel = document.getElementsByName('option_level');
var optionTheme = document.getElementsByName('option_theme');
for (i = 0; i < optionLevel.length; i++) {
    optionLevel[i].onclick = numberOfMemoryCards;
};
for (i = 0; i < optionTheme.length; i++) {
    optionTheme[i].onclick = numberOfMemoryCards;
};



function numberOfMemoryCards() {
    var optionLevelChecked = 0;
    var optionThemeChecked = 0;
    for (i = 0; i < optionLevel.length; i++) {
        if (optionLevel[i].checked == true) {
            optionLevelChecked++  
        };
    };
    for (i = 0; i < optionTheme.length; i++) {
        if (optionTheme[i].checked == true) {
            optionThemeChecked++
        };
    };

    var levelAndThemeChecked = optionLevelChecked + optionThemeChecked;

    // IMPLICATIONS: ARRUMADINHO
    if (optionLevelChecked == 3 && optionThemeChecked == 2 || optionThemeChecked == 3 && optionLevelChecked == 2) {
        labelOptionCards12.style.opacity = "1";
        labelOptionCards16.style.opacity = "1";
        optionCards12.disabled = false;
        optionCards16.disabled = false;
        labelOptionCards20.style.opacity = "0.5";
        labelOptionCards24.style.opacity = "0.5";
        optionCards20.disabled = true;
        optionCards24.disabled = true;
        optionCards20.checked = false;
        optionCards24.checked = false;

    } else if (levelAndThemeChecked >= 6 &&  optionThemeChecked >= 2 && optionLevelChecked >= 2) {
        labelOptionCards12.style.opacity = "1";
        labelOptionCards16.style.opacity = "1";
        labelOptionCards20.style.opacity = "1";
        labelOptionCards24.style.opacity = "1";
        optionCards12.disabled = false;
        optionCards16.disabled = false;
        optionCards20.disabled = false;
        optionCards24.disabled = false;

    } else if (optionThemeChecked == 1 || optionLevelChecked == 1) {
        labelOptionCards12.style.opacity = "0.5";
        labelOptionCards16.style.opacity = "0.5";
        labelOptionCards20.style.opacity = "0.5";
        labelOptionCards24.style.opacity = "0.5";
        optionCards12.disabled = true;
        optionCards16.disabled = true;
        optionCards20.disabled = true;
        optionCards24.disabled = true;
        for (i = 0; i < optionMemoryCards.length; i++) {
            optionMemoryCards[i].checked = false;
        };

    } else if (levelAndThemeChecked <= 5) {
        labelOptionCards20.style.opacity = "0.5";
        labelOptionCards24.style.opacity = "0.5";
        optionCards20.disabled = true;
        optionCards24.disabled = true;
        for (i = 0; i < optionMemoryCards.length; i++) {
            optionMemoryCards[i].checked = false;
        };

        if (optionLevelChecked < 3 || optionThemeChecked < 3) {
            labelOptionCards12.style.opacity = "0.5";
            labelOptionCards16.style.opacity = "0.5";
            optionCards12.disabled = true;
            optionCards16.disabled = true;
            for (i = 0; i < optionMemoryCards.length; i++) {
                optionMemoryCards[i].checked = false;
            };
        };
    };
};


// var numberOfOptionLevelChecked = 0;
// var optionLevel = document.getElementsByName('option_level');
// var optionMemoryCards = document.getElementsByName('option_cards');
// for (i = 0; i < optionLevel.length; i++) {
//     console.log('BBBBB optionLevel[i] BBBBB   ====   ', i, optionLevel[i].checked);

//     if (optionLevel[i].checked == true) {
//         numberOfOptionLevelChecked++
//         console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAA');

//         if (numberOfOptionLevelChecked == 1) {
//             document.getElementById('option_cards_8').checked;

//             for (k = 0; k < optionMemoryCards.length; k++) {
//                 optionMemoryCards[i].disabled == true;
//             };

//         } else if (numberOfOptionLevelChecked == 2) {
//             document.getElementById('option_cards_12').disabled == false;
//             document.getElementById('option_cards_16').disabled == false;

//             // for (k = 0; k < optionMemoryCards.length; k++) {
//             //     optionMemoryCards[i].disabled == false;
//             // };
//             // document.getElementById('option_cards_20').disabled == true;
//             // document.getElementById('option_cards_24').disabled == true;
        
//         } else if (numberOfOptionLevelChecked >= 3) {
//             document.getElementById('option_cards_20').disabled == true;
//             document.getElementById('option_cards_24').disabled == true;
//         };
//     };
// };
