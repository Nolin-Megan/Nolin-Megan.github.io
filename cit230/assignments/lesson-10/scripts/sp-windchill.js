//f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16 

function windchill(){
    var t = (72 + 45) / 2;
    var s = 15;
    var part = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16);
    var f = Math.round(part * 100) / 100
    
    document.getElementById("outputs").innerHTML = f
}

windchill();