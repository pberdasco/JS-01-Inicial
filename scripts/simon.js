const sounds = [new Audio("./audio/do.mp3"), new Audio("./audio/re.mp3"), new Audio("./audio/mi.mp3"), new Audio("./audio/fa.mp3")] ;

function Simon(numero){
   
    sounds[numero-1].play();

    let botonPresionado = document.getElementById("simon"+numero);
    let colorOrigen = botonPresionado.style.backgroundColor;
    botonPresionado.style.backgroundColor = 'orange';
    setTimeout(function(){
        botonPresionado.style.backgroundColor = colorOrigen;
    }, 1000);

    let espacioTexto = document.getElementById("texto");
    espacioTexto.innerText += numero;
}