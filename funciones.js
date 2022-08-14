let a = 10;
let b = 5;
function Setup(){
    let bInterna = 55;
    let a = 20;
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

function CargarPagina(pagina){
    location. href = pagina;
}


let textoNumero = "";
let operando1 = 0;
let operando2 = 0;

function TeclaNumero(numero){
    let espacioTexto = document.getElementById("texto");
    espacioTexto.innerText += numero;
}

function TeclaOperacion(op){
    if (op === '+'){

    }
    else if(op === '-'){

    }
    else if(op === '='){

    }
}