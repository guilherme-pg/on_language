

// HTML
<div id="checkData">
                <div class="data_to_check">
                    <div class="dataRow">
                        <p>ENGLISH</p>
                        <p>FRENCH</p>
                        <p>GERMAN</p>
                        <p>ITALIAN</p>
                        <p>PORTUGUESE</p>
                        <p>SPANISH</p>
                    </div>
                    <div class="dataRow">
                    </div>
                </div>

                <div class="button_check_data">
                    <button id="button_test">CHECK DATA</button>
                </div>
            </div>






// CSS


/* CHECK DATA */
#checkData {
    background-color: grey;
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 2px 2px 8px rgb(49, 49, 49);
    
}
.data_to_check {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
}
.dataRow {
    background-color: darkkhaki;
    padding: 10px;
    margin: 10px;
    border-radius: 4px;
    box-shadow: 2px 2px 8px rgb(49, 49, 49);
    display: flex;
    justify-content: baseline;
    align-items: center;
}
.dataRow p {
    color: black;
    margin: 10px;
}
.button_check_data button {
    padding: 10px;
    color: black;
    border-radius: 4px;
    box-shadow: 2px 2px 8px rgb(49, 49, 49);
    margin: 10px;
    cursor: pointer;
    outline: none;
    border: 0;
}
.button_check_data button:hover {
    background-color: darkkhaki;
}





// JS


// CHECK DATA
function checkData() {
    
    for (test = 0; test < general_array.length; test++) {
        
        var elemento1 = document.createElement('p');
        var data1 = document.createTextNode(general_array[test]['english'] + ' ');
        elemento1.appendChild(data1); 
        document.getElementById("column_1").appendChild(elemento1);

        var elemento2 = document.createElement('p');
        var data2 = document.createTextNode(general_array[test]['italian'] + ' ');
        elemento2.appendChild(data2); 
        document.getElementById("column_2").appendChild(elemento2);
    };
};

document.getElementById('button_test').addEventListener('click', checkData);