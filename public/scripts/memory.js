// const { CommandCursor } = require("mongodb");

var i = 0;
var count = 0;


// CHANGE COLORS ACCORDING THE GENDERS
var masculineArray = document.getElementsByClassName('masculine');
var feminineArray = document.getElementsByClassName('feminine');
var neutralArray = document.getElementsByClassName('neutral');

for (i = 0; i < masculineArray.length; i++) {
    masculineArray[i].style.color = "blue";
};
for (i = 0; i < feminineArray.length; i++) {
    feminineArray[i].style.color = "red";
};
for (i = 0; i < neutralArray.length; i++) {
    neutralArray[i].style.color = "green";
};





// MATCH, UNMATCH, LIMIT THE POSSIBILITY OF FLIP TO ONLY TWO,
var checks = document.querySelectorAll('.checks');


for (i = 0; i < checks.length; i++) {
  checks[i].onclick = checkFlip;
};

var stopTime;
var checkedChecks = [];

function checkFlip (event) {
  
  // CHECK IF CARD IS SELECTED, BUT NOT MATCHED
  for (var i = 0; i < checks.length; i++) {
    if (checks[i].checked == true && checks[i].disabled == false && checkedChecks.includes(checks[i]) == false) {

      checkedChecks.push(checks[i]);

      // PREVENT ERROR from undefined element
      if (checkedChecks[1] != undefined) {

        // MATCH AND UNMACHT
        if (checkedChecks[0].value == checkedChecks[1].value) {
          checkedChecks[0].disabled = true;
          checkedChecks[1].disabled = true;
          checkedChecks.splice(0, 2);
  
        } else if (checkedChecks.length == 2) {
          stopTime = setTimeout(function(){
            checkedChecks[0].checked = false;
            checkedChecks[1].checked = false;
            checkedChecks.splice(0, 2);
          }, 2000);
          
          // PREVENT CLICK BEFORE THE TIMEOUT
        } else if (checkedChecks.length >= 3) {
          clearTimeout(stopTime);
          checkedChecks[0].checked = false;
          checkedChecks[1].checked = false;
          checkedChecks.splice(0, 2);
        };
      };
    };
  };


  // ATTEMPTS
  count++
};
