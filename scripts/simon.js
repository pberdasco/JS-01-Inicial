const sounds = [new Audio("./audio/do.mp3"), new Audio("./audio/re.mp3"), new Audio("./audio/mi.mp3"), new Audio("./audio/fa.mp3")] ;
const numbers = [];
const tiempoNota = 1.5;
let sequenceNumber = 1;
let turno = "maquina";

function SimonSetup(cantidad){
    for (i=0; i < cantidad; i++){
        numbers.push(getRndInteger(1,4));
    }  
}

async function SimonList(){
    for (i=0; i < sequenceNumber + 1; i++){
        await sleep(1000);
        SimonPlayOne(numbers[i]); 
    }
    sequenceNumber++;
    turno = "humano";
}

function SimonPress(numero){
    if (turno === "humano"){
        SimonPlayOne(numero);       
    }    
}



async function SimonPlayOne(numero){
    //sounds[numero-1].play();
    AudioPlay(sounds[numero-1],tiempoNota);

    let botonPresionado = document.getElementById(`simon${numero}`);

    let colorOrigen = botonPresionado.style.backgroundColor;
    botonPresionado.style.backgroundColor = 'orange';

    await sleep(700);
    botonPresionado.style.backgroundColor = colorOrigen;

    let espacioTexto = document.getElementById("texto");
        espacioTexto.innerText += numero;
}




function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }


// para poder acortar el tiempo que suena cada nota.
function AudioPlay(audio, time){
	audio.currentTime=1;
	audio.play();
       
    // check cada 1/10 de segundo si se cumplio time
	setInterval(function(){
		if(audio.currentTime > time){
			audio.pause();
		}
	},100);
}
    