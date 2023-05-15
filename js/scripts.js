var rotor_1_array = ['J', 'G', 'D', 'Q', 'O', 'X', 'U', 'S', 'C', 'A', 'M', 'I', 'F', 'R', 'V', 'T', 'P', 'N', 'E', 'W', 'K', 'B', 'L', 'Z', 'Y', 'H'];
var rotor_2_array = ['N', 'T', 'Z', 'P', 'S', 'F', 'B', 'O', 'K', 'M', 'W', 'R', 'C', 'J', 'D', 'I', 'V', 'L', 'A', 'E', 'Y', 'U', 'X', 'H', 'G', 'Q'];
var rotor_3_array = ['J', 'V', 'I', 'U', 'B', 'H', 'T', 'C', 'D', 'Y', 'A', 'K', 'E', 'Q', 'Z', 'P', 'O', 'S', 'G', 'X', 'N', 'R', 'M', 'W', 'F', 'L'];
var rotationsCounter = 0;
var rotor_1_id = document.getElementById("rotor_1");
var rotor_2_id = document.getElementById("rotor_2");
var rotor_3_id = document.getElementById("rotor_3");
function rotate(rotor, element)
{
    var firstLetter = rotor.shift();
    rotor.push(firstLetter);
    element.innerText = rotor[0];
    rotationsCounter++;
    if (rotationsCounter % 26 === 0)
        rotateNextRotor();
}

function rotateNextRotor() {
    rotate(rotor_2_array, rotor_2_id);
    if (rotationsCounter % (26 * 26) === 0)
        rotate(rotor3, rotor_3_id);
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function press_key() {
   
    document.onkeydown = function (e){
        if(!isFinite(e.key) && e.key !== "ñ")
        {
            var key = document.getElementById(e.key);
            key.style.backgroundColor = "darkgrey";
            sleep(250).then(() => {
                rotate(rotor_1_array, rotor_1_id);
                key.style.backgroundColor = "white";
            });
        }
    };
}


window.onload = function(){
    rotor_1_id.innerText = rotor_1_array[0];
    rotor_2_id.innerText = rotor_2_array[0];
    rotor_3_id.innerText = rotor_3_array[0];
    press_key();
};