
import './styles.css';
import{evaluarAcción} from './js/evaluar-accion';

let imagenes = ['asusaz.png', 'nnnnzz.png', 'rnslrz.png', 'reerzz.png',
                  'riirzz.png', 'rnselr.png', 'rnsilr.png', 'rrrzzz.png',
                  'rsperz.png', 'rspirz.png', 'rsprzz.png', 'rsunrz.png', 'vzzzzz.png'];

//Referencias del HTML
const rango            = document.getElementById('cont'),
      imprimeResultado = document.querySelector('#result'),
      botonera         = document.querySelector('#botonera'),
      imgVictima       = document.querySelector('#imgVictima'),
      iniciar          = document.querySelector('.iniciar'),
      btnFl2           = document.querySelectorAll('.fl2'),
      restantesHTML    = document.querySelector('#restantes'),
      correctoHTML     = document.querySelector('#correcto'),
      errorHTML        = document.querySelector('#error'),
      botones          = document.querySelectorAll('.btn'),
      correctoAud      = document.querySelector('#correctoAud'),
      errorAud         = document.querySelector('#errorAud'),
      clickAud         = document.querySelector('#clickAud'),
      respiraVid       = document.querySelector('#respiraVid'),
      pulsoVid         = document.querySelector('#pulsoVid'),
      ordenVid         = document.querySelector('#ordenVid'),
      pasuseSonidos    = document.querySelectorAll('video'),
      check            = document.querySelector('#check');
      check.style.visibility = "hidden";

// Variables de Reloj Cuenta atrás
let idReloj;
const Tiempo = 30; //Variable que marca el tiempo de usuario para triar una víctima
let cont = Tiempo; //Varable cont es para poder actualizar al valor propuesto a la constante Tiempo-

// Visualización inicial del reloj
rango.innerHTML ='00:00';

//Contador orden de acción y de imágenes
let orden,
    contImagen,
    imgRestantes,
    contCorrectos = 0,
    porcCorrectos = 0,
    contErrores = 0,
    porcErrores = 0;

//Contiene imagen
let imagen;

let actualizarContadoresError;
let actualizarContenedoresAciertos;

//Reloj cuenta atrás
function activaReloj(){
    idReloj =setInterval(function(){
        let contPlus = `00:${('0'+ cont).slice(-2)}`;
        rango.innerHTML = contPlus;
        cont--;
        if(cont == -1){ //Si el tiempo llega al final:
            for(let element of btnFl2){
                element.disabled =true;
            }
            clearInterval(idReloj);
            esperarE(); // Lanza el Error de triaje.
        }
    }, 1000);
};

// EVENTOS

//Botón 'Iniciar Triaje'
iniciar.addEventListener('click',() =>{
    imagenes = shuffle(imagenes);
    orden = 1;
    clearInterval(idReloj);
    cont = Tiempo;
    contImagen =0;
    imprimeResultado.innerHTML = " ";
    imgRestantes = imagenes.length;
    restantesHTML.innerHTML = imgRestantes;
    correctoHTML.innerHTML = '0 = 0 %';
    errorHTML.innerHTML = '0 = 0 %';
    contCorrectos = 0;
    contErrores = 0;
    check.style.visibility = "hidden";

    //Desordenar matriz
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // Mientras queden elementos a mezclar...
        while (0 !== currentIndex) {
      
          // Seleccionar un elemento sin mezclar...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // E intercambiarlo con el elemento actual
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }
    //Activar botones
    desactivacionBotones(false);
  
    //Coloco primera imágen
    imgVictima.src = `./assets/${imagenes[contImagen]}`;
    imagen = imagenes[contImagen];
    contImagen++;
    //Pongo en marcha reloj
    activaReloj();
});


//Aplico en Listaner al alemento padre de los botones y capturo el event
//A través del event puedo verificar si es la clase de botón que necesito
//Si se cumple la condición puedo ejecutar la acción necesaria.    
botonera.addEventListener('click', event => {
    if(event.target.classList.contains('btn')){
        //Quito el foco a los botones
        for(let elemento of botones){
            elemento.blur();
        };
        //Paro y reinicio sonidos.
        for(let sonido of pasuseSonidos){
            sonido.pause();
            sonido.currentTime = 0;
        };
        //Evaluo botón pulsado
        let resultado = evaluarAcción(orden, event.target.id, imagen);
        
        switch (resultado){
            case 'ERROR':
                clearInterval(idReloj);
                desactivacionBotones(true);
                esperarE();
                break;
            case 'CORRECTO':
                clearInterval(idReloj);
                desactivacionBotones(true);
                esperarC();
                break;

            case 'NO TIENE PULSO':
            case 'NO RESPIRA':
            case 'SIGUE SIN<br>RESPIRAR':
            case 'BUENA COMPRESIÓN':
            case 'BUEN TORNIQUETE':
            case 'BUENA<br>POSICIÓN LATERAL':
                clickAud.play();
                break;

            case 'SÍ OBEDECE ÓRDENES':
                ordenVid.src = "./assets/siObedece.mp4";
                ordenVid.play();
                break;
            case 'NO OBEDECE ÓRDENES':
                ordenVid.src = "./assets/noObedece.mp4";
                ordenVid.play();
                break;
            case 'RESPIRA NORMAL':
            case 'AHORA SÍ RESPIRO':
                respiraVid.src = "./assets/respiraNormal.mp4";
                respiraVid.play();
                break;
            case 'RESPIRA<br>MUY RÁPIDO':
                respiraVid.src = "./assets/respiraRapido.mp4";
                respiraVid.play();
                break;
            case 'SÍ TIENE PULSO':
                pulsoVid.src = "./assets/pulsoSi.mp4";
                pulsoVid.play();
                break;
        }
        
        //Imprime resultados en complementos.
        imprimeResultado.innerHTML = resultado;
        //imprimeResultado.innerHTML = `${resultado} Orden:${orden}, event: ${event.target.id}, imagen:${imagen}`;
        orden++;
    }
});

//MÉTODOS

const esperarC = ()=>{
    correctoAud.play();
    check.src='./assets/check.png';
    check.style.visibility = "visible";
    setTimeout(function(){
        ejecutaCorrecto();
    },2000);
}
const esperarE = ()=>{
    errorAud.play();
    check.src='./assets/error.png';
    check.style.visibility = "visible";
    setTimeout(function(){
        ejecutaError();
    },2000);
}
const ejecutaError = ()=>{
    check.style.visibility = "hidden";
    //Aumneto contador de errord y porcentaje y reinicio contador de orden
    contErrores++;
    porcCorrectos = Math.round ((contCorrectos*100)/(contCorrectos + contErrores));
    correctoHTML.innerHTML = `${contCorrectos} = ${porcCorrectos} %`;
    porcErrores = Math.round ((contErrores*100)/(contCorrectos + contErrores));
    errorHTML.innerHTML = `${contErrores} = ${porcErrores} %`;
    orden = 1;

    if (imgRestantes!== 1){
        continuaTriaje();
    }else{
        finTriaje();
    }     
};
const ejecutaCorrecto = ()=>{
    check.style.visibility = "hidden";
    //Aumneto contador de aciertos y porcentaje y reinicio contador de orden
    contCorrectos++;
    porcCorrectos = Math.round ((contCorrectos*100)/(contCorrectos + contErrores));
    correctoHTML.innerHTML = `${contCorrectos} = ${porcCorrectos} %`;
    porcErrores = Math.round ((contErrores*100)/(contCorrectos + contErrores));
    errorHTML.innerHTML = `${contErrores} = ${porcErrores} %`;
    orden = 1;

    if (imgRestantes!== 1){
        continuaTriaje();
    }else{
        finTriaje();
    }
};

function desactivacionBotones(opcion){
    for(let element of btnFl2){
        element.disabled = opcion;
    };
};

function finTriaje(){
    clearInterval(idReloj);
    imprimeResultado.innerHTML = 'FIN DE TRIAJE';
    imgVictima.src = './assets/imgFinal.png';
    restantesHTML.innerHTML = 0;
    //Desactivar botones
    desactivacionBotones(true);
};

function continuaTriaje(){
    //Resto una víctima a las restantes
    imgRestantes--;
    restantesHTML.innerHTML = imgRestantes;

    //Activo Reloj
    clearInterval(idReloj);
    cont=Tiempo;
    activaReloj();

    //Muestro víctima siguiente
    imgVictima.src = `./assets/${imagenes[contImagen]}`;
    imagen = imagenes[contImagen];
    contImagen++;
    desactivacionBotones(false);
};

    
    
       











