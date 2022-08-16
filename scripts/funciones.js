
// ====================== Pruebas base =========================

let a = 10;
let b = 5;


function Setup(){
    
    let bInterna = 55;

    let a = 20;
    let txt = `el valor de la variable a es: ${a} y si lo multiplicamos por 2 da ${a*2}`;
    console.log(txt, ". Tiene: ", txt.length, " letras");
    console.log("La septima letra es: ", txt[7-1]);
    console.log("Entre la 10a y 20a letra dice: ", txt.substring(10, 20));

    console.log("Variable a= ", a );
    console.log("Variable b= ", b );
    console.log("Variable bInterna= ", bInterna );
    bInterna ++;
    a++;
    b++;

}
function Continuacion(){
    console.log("Variable a= ", a );
    console.log("Variable b= ", b );
    console.log("Variable bInterna= ", bInterna );
}


// ====================== Pruebas base - Setear un texto en DOM =========================

function TextoCuerpo(){
    /*Interesante para uso de DOM: https://www.youtube.com/watch?v=y17RuWkWdn8 */
    let espacioTexto = document.getElementById("texto");
    if (true)
    {
        /*espacioTexto.innerText = "Texto a imprimir - true";*/
        espacioTexto.innerHTML = "<h3>Texto H3</h3>"
    }
}

function BorrarTextoCuerpo(){
    let espacioTexto = document.getElementById("texto");
    /* espacioTexto.innerText = " "; */
    espacioTexto.textContent = "";
}






