
// VARIABLES
var i = 0;
var letterSpace = document.getElementsByClassName('letter_space');
var letterCase = document.getElementsByClassName('letter_case');
var alphabetLabelButton = document.getElementsByClassName('labels_alphabet');
var arrayOfLetterOfTheHiddenWord = [];
var arrayOfLettersChecked = [];
var letterChecked = '';
var replacementLetter = '';
var letterOfTheHiddenWord = '';
var errorCount = 0;
var correctCount = 0;



// HIDE THE WORD
var hiddenWord = document.getElementsByClassName('letter_space');
for (i = 0; i < hiddenWord.length; i++) {
    hiddenWord[i].style.display = "none";
};



// CREATE ALPHABET BUTTONS
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z', 'ß', 'ç'];
var buttonsSpace = document.getElementById('buttons_space');
for (i = 0; i < alphabet.length; i++) {
    var createDiv = document.createElement('div');
    var createInput = document.createElement("input");
    var createLabel = document.createElement("label");

    createDiv.className = "div_alphabet_buttons";

    createInput.value = alphabet[i];
    createInput.type = 'checkbox';
    createInput.className = "inputs_alphabet"; 
    createInput.id = `buttons_alphabet_${i}`; 

    createLabel.className = 'labels_alphabet';
    createLabel.setAttribute('for', `buttons_alphabet_${i}`);
    createLabel.textContent = alphabet[i];

    var divForInputsLabels = document.getElementsByClassName('div_alphabet_buttons');

    buttonsSpace.appendChild(createDiv);
    divForInputsLabels[i].appendChild(createInput);
    divForInputsLabels[i].appendChild(createLabel);

    buttonsAlphabet = document.getElementsByClassName('inputs_alphabet');
    buttonsAlphabet[i].onclick = checkLetter;
};



for (i = 0; i < hiddenWord.length; i++) {

    replacementLetter = hiddenWord[i].textContent;
    letterOfTheHiddenWord = hiddenWord[i].textContent;
    checkAccents(letterOfTheHiddenWord);
    arrayOfLetterOfTheHiddenWord.push(letterOfTheHiddenWord);
};



// PREVENT ACCENTS
function checkAccents() {
    if (letterOfTheHiddenWord == 'à' || letterOfTheHiddenWord == 'á' || letterOfTheHiddenWord == 'ã' || letterOfTheHiddenWord == 'ä' || letterOfTheHiddenWord == 'â') {
        replacementLetter = "a";

    } else if (letterOfTheHiddenWord == 'è' || letterOfTheHiddenWord == 'é' || letterOfTheHiddenWord == 'ê' || letterOfTheHiddenWord == 'ë') {
        replacementLetter = 'e';

    } else if (letterOfTheHiddenWord == 'ì' || letterOfTheHiddenWord == 'í' || letterOfTheHiddenWord == 'ï' || letterOfTheHiddenWord == 'î') {
        replacementLetter = 'i';

    } else if (letterOfTheHiddenWord == 'ò' || letterOfTheHiddenWord == 'ó' || letterOfTheHiddenWord == 'ö' || letterOfTheHiddenWord == 'ô') {
        replacementLetter = 'o';

    } else if (letterOfTheHiddenWord == 'ù' || letterOfTheHiddenWord == 'ú' || letterOfTheHiddenWord == 'ü' || letterOfTheHiddenWord == 'û') {
        replacementLetter = 'u';

    } else if (letterOfTheHiddenWord == 'ñ') {
        replacementLetter = 'n';
    };
    letterOfTheHiddenWord = replacementLetter.toLowerCase();
};



// CLICK ALPHABET BUTTON TO CHECK
function checkLetter(event) {

    for (i = 0; i < buttonsAlphabet.length; i++) {

        // DETECT WHAT BUTTON WAS CHECKED
        if (buttonsAlphabet[i].checked == true && buttonsAlphabet[i].disabled == false && arrayOfLettersChecked.includes(buttonsAlphabet[i].value) == false) {

            // CORRECT CHECK: IF THE BUTTON VALUE ITS INCLUDED IN THE HIDDEN WORD
            if (arrayOfLetterOfTheHiddenWord.includes(buttonsAlphabet[i].value)) {

                buttonsAlphabet[i].disabled = true;
                alphabetLabelButton[i].style.backgroundColor = "green";
                arrayOfLettersChecked.push(buttonsAlphabet[i].value);
                letterChecked = buttonsAlphabet[i].value;

                // SET DISPLAY NONE WORD TO FLEX
                for (i = 0; i < hiddenWord.length; i++) {

                    // PREVENT ACCENTS
                    replacementLetter = hiddenWord[i].textContent;
                    letterOfTheHiddenWord = hiddenWord[i].textContent
                    checkAccents(letterOfTheHiddenWord);

                    // SET THE CORRECT LETTER
                    if (letterOfTheHiddenWord == letterChecked) {
                        hiddenWord[i].style.display = "flex";
                        hiddenWord[i].style.backgroundColor = "rgb(128, 223, 136)";
                        correctCount++
                    };
                    if (hiddenWord.length == correctCount) {
                        for (i = 0; i < hiddenWord.length; i++) {
                            hiddenWord[i].style.backgroundColor = "rgb(61, 216, 69)";
                        };
                        for (i = 0; i < buttonsAlphabet.length; i++) {
                            buttonsAlphabet[i].disabled = true;
                        };
                    };
                };


            // CHECKED THE WRONG LETTER: DISABLE BUTTON AND SET IT RED
            } else if (arrayOfLetterOfTheHiddenWord.includes(buttonsAlphabet[i].value) == false) {

                buttonsAlphabet[i].disabled = true;
                alphabetLabelButton[i].style.backgroundColor = "red";
                arrayOfLettersChecked.push(buttonsAlphabet[i].value);
                errorCount++

                // LIMIT THE POSSIBILITIES
                if (errorCount == 6) {
                    for (i = 0; i < buttonsAlphabet.length; i++) {
                        buttonsAlphabet[i].disabled = true;
                    };
                    for (i = 0; i < hiddenWord.length; i++) {
                        if (hiddenWord[i].style.display == "none") {
                            letterCase[i].style.backgroundColor = "red";
                            hiddenWord[i].style.display = "flex";
                        } else {
                            letterSpace[i].style.backgroundColor = "rgb(250, 96, 96)";
                        };
                    };
                };
            };
        };
    };
};

// REQUIRE: DIFFICULT MODE: EASY(10 CHANCES); NORMAL(10 CHANCES): LIMIT THE POSSIBILITIES ??
