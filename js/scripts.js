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
                key.style.backgroundColor = "white";
            });
        }
    };
}


window.onload = function(){
    press_key();
};