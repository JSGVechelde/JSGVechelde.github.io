//Methoden, die überall benötigt werden

//imports



/*------------------------------------------------------------------------------------------------------------------------*/
//überprüfen ob variablen zurückgesetzt werden müssen
function cookieproove() {
    if (sessionStorage.getItem('cookieallowed') != 1) {
        //und wenn man nicht zustimmt? ein alert mit der pflicht zum zustimmen
        //Hier muss dann halt was hin
        
        /*
        Man hat noch nicht zugestimmt:
        - ein alert wird angezeigt
        - neue Funktion: auf Click des Alert zustimmen(kann man eig auch über accept in cookie.js machen)
        --> Vielleicht aber auch einfach nicht

        */
    }
    //Fürs erste
     
}

//Namen setzen
/*function setName(){
    cookieproove();
    console.log("hello World");
    sessionStorage.setItem('firstName', document.getElementById('firstName').value);
    console.log(sessionStorage.getItem('firstName'));
    sessionStorage.setItem('lastName', document.getElementById('firstName').value);
}*/

//Name anzeigen
function showName(fieldID){
    var el = document.getElementById(fieldID);
    el.textContent = sessionStorage.getItem('firstName') + " " + sessionStorage.getItem('lastName');
}
//Der folgende Code ist vom alten Projekt --> muss noch modifiziert werden
function url() { 
    let url = window.location.href
    let params = (new URL(url).searchParams)

    //document.getElementById("name").value = params.get('firstname') + " " + params.get('lastname')

    params.set('hallo', 'byby')

    sessionStorage.setItem('firstName', params.get('firstName'))
    sessionStorage.setItem('lastName', params.get('lastName'))
}


//Informationstext zeigen
//Das nachfolgende Funktioniert nicht und brauche ich nicht
/*function showInformation(fieldID){
    const fs = require('fs');
    var el = document.getElementById(fieldID);
    
    
    el.textContent = fs.readFile('information.txt', (err, inputD) => {
    if (err) throw err;
        console.log(inputD.toString());
    })
}


import * as fs from 'fs';
*/