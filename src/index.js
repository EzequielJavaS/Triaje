
import './styles.css';
import{evaluarAcción} from './js/evaluar-accion';
import * as SWAL from './js/sweetalert.js';

let imagenes = ['asusaz.png', 'nnnnzz.png', 'rnslrz.png', 'reerzz.png',
                  'riirzz.png', 'rnselr.png', 'rnsilr.png', 'rrrzzz.png',
                  'rsperz.png', 'rspirz.png', 'rsprzz.png', 'rsunrz.png', 'vzzzzz.png'];

//Referencias del HTML
const rango            = document.getElementById('cont'),
      botonera         = document.querySelector('#botonera'),
      imgVictima       = document.querySelector('#imgVictima'),
      iniciar          = document.querySelector('.iniciar'),
      salir            = document.querySelector('.salir'),
      pausar           = document.querySelector('.pausar'),
      btnFl2           = document.querySelectorAll('.fl2'),
      restantesHTML    = document.querySelector('#restantes'),
      correctoHTML     = document.querySelector('#correcto'),
      errorHTML        = document.querySelector('#errorHTML'),
      botones          = document.querySelectorAll('.btn'),
      correctoAud      = document.querySelector('#correctoAud'),
      errorAud         = document.querySelector('#errorAud'),
      clickAud         = document.querySelector('#clickAud'),
      respiraVid       = document.querySelector('#respiraVid'),
      respiraRapVid    = document.querySelector('#respiraRapVid'),
      pulsoVid         = document.querySelector('#pulsoVid'),
      noPulso          = document.querySelector('#noPulso'),
      ordenVid         = document.querySelector('#ordenVid'),
      noOrdenVid       = document.querySelector('#noOrdenVid'),
      pasuseSonidos    = document.querySelectorAll('video'),
      noRespira        = document.querySelector('#noRespira'),
      sigueSinRes      = document.querySelector('#sigueSin'),
      torni            = document.querySelector('.torni'),
      presi            = document.querySelector('.presi'),
      check            = document.querySelector('#check'),
      logoTexto        = document.querySelector('.logoTexto');

//Invisibilizo algunas imágenes
      noPulso.style.display = "none";

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
            //Desabilita botones
            for(let element of btnFl2){
                element.disabled =true;
            }
            clearInterval(idReloj);
            SWAL.alertaTiempo(SWAL.errortiempo);
            esperarE(); //Lanza error de triaje
        
        }
    }, 1000);
};

// EVENTOS

//Botón Salir

salir.addEventListener('click',() =>{
    location.reload(true);
});

//Pausar

pausar.addEventListener('click',() =>{
    clearInterval(idReloj);
    SWAL.pausarTiempo(SWAL.pausartiempo);
});

//Botón 'Iniciar Triaje'
iniciar.addEventListener('click',() =>{
    imagenes = shuffle(imagenes);
    orden = 1;
    clearInterval(idReloj);
    cont = Tiempo;
    contImagen =0;
    imgRestantes = imagenes.length;
    restantesHTML.innerHTML = imgRestantes;
    correctoHTML.innerHTML = '0 = 0 %';
    errorHTML.innerHTML = '0 = 0 %';
    contCorrectos = 0;
    contErrores = 0;
    check.style.display = "none";
    pausar.disabled=false;

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
                SWAL.alerta(SWAL.error);
                esperarE();
                break;
            case 'ERROR_RESPIRA': 
                SWAL.alerta(SWAL.respiraAlert);
                esperarE();
                break;
            case 'ERROR_VERDE': 
                SWAL.alerta(SWAL.verdeAlert);
                esperarE();
                break;
            case 'ERROR_ABRIR_VIA': 
                SWAL.alerta(SWAL.abrirViaAlert);
                esperarE();
                break;
            case 'ERROR_PULSO': 
                SWAL.alerta(SWAL.pulsoAlert);
                esperarE();
                break;
            case 'ERROR_TORNIQUETE': 
                SWAL.alerta(SWAL.torniqueteAlert);
                esperarE();
                break;
            case 'ERROR_COMPRESION': 
                SWAL.alerta(SWAL.compresionAlert);
                esperarE();
                break;
            case 'ERROR_ROJO_1': 
                SWAL.alerta(SWAL.rojo1Alert);
                esperarE();
                break;
            case 'ERROR_ROJO_2': 
                SWAL.alerta(SWAL.rojo2Alert);
                esperarE();
                break;
            case 'ERROR_ROJO_3': 
                SWAL.alerta(SWAL.rojo3Alert);
                esperarE();
                break;
            case 'ERROR_ROJO_4': 
                SWAL.alerta(SWAL.rojo4Alert);
                esperarE();
                break;
            case 'ERROR_ROJO_5': 
                SWAL.alerta(SWAL.rojo5Alert);
                esperarE();
                break;
            case 'ERROR_NEGRO': 
                SWAL.alerta(SWAL.negroAlert);  
                esperarE();
                break;
            case 'ERROR_TORNIQUETE_2': 
                SWAL.alerta(SWAL.torniquete2Alert); 
                esperarE();
                break;
            case 'ERROR_TORNIQUETE_3': 
                SWAL.alerta(SWAL.torniquete3Alert); 
                esperarE();
                break;
            case 'ERROR_COMPRESION_2': 
                SWAL.alerta(SWAL.compresion2Alert);
                esperarE();
                break;
            case 'ERROR_COMPRESION_3': 
                SWAL.alerta(SWAL.compresion3Alert);
                esperarE();
                break;
            case 'ERROR_POSICION': 
                SWAL.alerta(SWAL.posicionAlert);
                esperarE();
                break;
            case 'ERROR_ORDENES': 
                SWAL.alerta(SWAL.ordenesAlert);
                esperarE();
                break;
            case 'ERROR_AMARILLO': 
                SWAL.alerta(SWAL.amarilloAlert);
                esperarE();
                break;
                
            case 'CORRECTO':
                correctoAud.play();
                esperarC();
                clearInterval(idReloj);
                desactivacionBotones(true);
                break;
            case 'NO TIENE PULSO':
                clickAud.play();
                respiraVid.style.display= "none";
                pulsoVid.style.display = "none";
                noPulso.style.display = "block";
                break;
            case 'NO RESPIRA':
                clickAud.play();
                logoTexto.style.display = "none";
                respiraVid.style.display= "block";
                noRespira.style.display = "block";
                break;
            case 'SIGUE SIN<br>RESPIRAR':
                clickAud.play();
                noRespira.style.display = "none";
                sigueSinRes.style.display = "block";
                break;
            case 'BUENA<br>POSICIÓN LATERAL':
                clickAud.play();
                imgVictima.src = "./assets/pseguri.png";
                break;
            case 'BUENA COMPRESIÓN':
                clickAud.play();
                presi.style.display = "block";
                break;
            case 'BUEN TORNIQUETE':
                clickAud.play();
                torni.style.display = "block";
                break;
            case 'SÍ OBEDECE ÓRDENES':
                clickAud.play();
                pulsoVid.style.display = "none";
                ordenVid.style.display = "block";
                ordenVid.play();
                break;
            case 'NO OBEDECE ÓRDENES':
                clickAud.play();
                pulsoVid.style.display = "none";
                noOrdenVid.style.display="block";
                noOrdenVid.play();
                break;
            case 'RESPIRA NORMAL':
            case 'AHORA SÍ RESPIRO':
                logoTexto.style.display = "none";
                noRespira.style.display = "none";
                respiraVid.style.display= "block";
                respiraVid.play();
                break;
            case 'RESPIRA<br>MUY RÁPIDO':
                logoTexto.style.display = "none";
                respiraVid.style.display="none";
                respiraRapVid.style.display="block";
                respiraRapVid.play();
                break;
            case 'SÍ TIENE PULSO':
                respiraVid.style.display= "none";
                noPulso.style.display = "none";
                pulsoVid.style.display = "block";
                pulsoVid.play();
                break;
        }
        orden++;
    }
});

//MÉTODOS

const esperarC = ()=>{
    check.style.display = "block";
    setTimeout(function(){
        ejecutaCorrecto();
    },2000);
}
const esperarE = ()=>{
    errorAud.play();
    clearInterval(idReloj);
}
export const ejecutaError = ()=>{
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
    check.style.display = "none";
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

    //Pongo a punto imágenes
    pulsoVid.style.display = "none";
    noPulso.style.display = "none";
    noRespira.style.display = "none";
    sigueSinRes.style.display = "none";
    torni.style.display = "none";
    presi.style.display = "none";
    respiraVid.style.display="none";
    respiraRapVid.style.display="none";
    ordenVid.style.display="none";
    noOrdenVid.style.display="none";
    logoTexto.style.display = "block";


    //Activo-desactivo botones
    for(let element of btnFl2){
        element.disabled = opcion;
    };
};

function finTriaje(){
    clearInterval(idReloj);
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

export function continuarPausa(){
    clearInterval(idReloj);
    activaReloj();
    desactivacionBotones(false);
};

    
    
       











