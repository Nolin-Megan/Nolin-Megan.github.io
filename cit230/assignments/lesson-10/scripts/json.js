function townData() {

    console.log("HI");
    var requestURL = 'https://byui-cit230.github.io/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        var data = request.response;

        for (var i = 0; i < data.towns.length; i++) {
            if (data.towns[i].name == "Franklin") {
                document.getElementById("motto").innerHTML = data.towns[i].motto;
                document.getElementById("yearFounded").innerHTML = data.towns[i].yearFounded;
                document.getElementById("currentPopulation").innerHTML = data.towns[i].currentPopulation;
                document.getElementById("averageRainfall").innerHTML = data.towns[i].averageRainfall;
            } else if (data.towns[i].name == "Springfield") {
                document.getElementById("motto").innerHTML = data.towns[i].motto;
                document.getElementById("yearFounded").innerHTML = data.towns[i].yearFounded;
                document.getElementById("currentPopulation").innerHTML = data.towns[i].currentPopulation;
                document.getElementById("averageRainfall").innerHTML = data.towns[i].averageRainfall;    
            } else (data.towns[i].name == "Greenville") {
                document.getElementById("motto").innerHTML = data.towns[i].motto;
                document.getElementById("yearFounded").innerHTML = data.towns[i].yearFounded;
                document.getElementById("currentPopulation").innerHTML = data.towns[i].currentPopulation;
                document.getElementById("averageRainfall").innerHTML = data.towns[i].averageRainfall;
    
            }
                
                
            for (var e = 0; e < data.towns[i].events.length; e++) {
                    var item = document.createElement("li");
                    item.innerHTML = data.towns[i].events[e];
                    document.getElementById("events").append(item);
                }
            }
        }