import { ejecutaError, continuarPausa } from "..";

export const errortiempo = '<p class= "grande"> SE AGOTÓ EL TIEMPO</p>';
export const pausartiempo = '<p class= "grande"> Triaje Pausado</p>';

export const respiraAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert">Si la víctima <u>no</u> camina, la primera valoración es saber si respira.</p> <br>'+
                    '<p class="textAlertCenterBold">¿Respira?</p>';

export const verdeAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert">En el triaje START, si la víctma camina se tría directamente como verde.</p> <br>'+
                    '<p class="textAlertCenterBold">VERDE</p>';

export const abrirViaAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlertCenter" >Si la víctima no respira, debe de abrir la vía aérea.</p> <br>'+
                    '<p class="textAlertCenterBold">Abro Vía Aerea</p>';

export const pulsoAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >La víctima tiene una respiración normal. Debe valorar el pulso radial o el relleno capilar.</p> <br>'+
                    '<p class="textAlertCenterBold"> ¿Pulso Radial / Relleno Capilar &lt 2?" </p>';

export const torniqueteAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >La víctima presenta taquipnea y una hemorragia activa en extremidad. Debe colocar un torniquete.</p> <br>'+
                    '<p class="textAlertCenterBold"> Torniquete </p>';

export const compresionAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >La víctima presenta taquipnea y una hemorragia activa en zona de unión. Debe realizar compresión en la zona.</p> <br>'+
                    '<p class="textAlertCenterBold"> Compresión Directa </p>';

export const rojo1Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >Una FR superior a 30, por si sola, es indicativa de triaje rojo. No es necesario hacer más valoraciones. '+
                    'Se aplicarán las medidas salvadoras oportunas solo si fuese necesario y se tria como rojo.</p> <br>'+
                    '<p class="textAlertCenterBold"> ROJO </p>';

export const negroAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >Si la víctima no respira después de haber abierto la vía aérea, debe triarse como negro.</p> <br>'+
                    '<p class="textAlertCenterBold"> NEGRO </p>';

export const torniquete2Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >Si ha abierto vía aérea y existe una hemorragia activa en extremidad, debe aplicar un torniquete.</p> <br>'+
                    '<p class="textAlertCenterBold"> Torniquete </p>';

export const compresion2Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >Después de revisar respiración y pulso, si existe una hemorragia activa en zona de unión, debe realizar compresión en la zona.</p> <br>'+
                    '<p class="textAlertCenterBold"> Compresión Directa </p>';

export const posicionAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >Si ha abierto la vía aérea de la víctima para que pueda respirar, debe dejarla en posición lateral de seguridad.</p> <br>'+
                    '<p class="textAlertCenterBold"> Posición Lateral de Seguridad</p>';

export const ordenesAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" > Si la víctima presenta pulso o relleno capilar normal, debe valorar si responde a órdenes sencillas.</p> <br>'+
                    '<p class="textAlertCenterBold"> Obedece Órdenes</p>';

export const compresion3Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" > Si ha abierto vía aérea y existe una hemorragia activa en zona de unión, debe realizar compresión en la zona.</p> <br>'+
                    '<p class="textAlertCenterBold"> Compresión Directa</p>';

export const torniquete3Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >La víctima no presente pulso radial o el relleno capilar es superior a 2 segundos. No es necesario seguir evaluando. Existe una hemorragia activa en extremidad, debe aplicar un torniquete.</p> <br>'+
                    '<p class="textAlertCenterBold"> Torniquete </p>';

export const rojo2Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >La víctima no presente pulso radial o el relleno capilar es superior a 2 segundos. No muestra sangrado activo. No es necesario seguir evaluando. Se debe triar como rojo</p> <br>'+
                    '<p class="textAlertCenterBold"> ROJO </p>';

export const rojo3Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >Ha abierto la vía aérea de la víctima. Se debe triar como rojo</p> <br>'+
                    '<p class="textAlertCenterBold"> ROJO </p>';

export const rojo4Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >La víctima no obedece órdenes. Se debe triar como rojo</p> <br>'+
                    '<p class="textAlertCenterBold"> ROJO </p>';

export const amarilloAlert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >Si la víctima responde a órdenes debe ser triada como amarillo</p> <br>'+
                    '<p class="textAlertCenterBold"> AMARILLO </p>';

export const rojo5Alert = '<p class= "grande">Esto es un error</p><br>'+
                    '<p class="textAlert" >La víctima no presente pulso radial o el relleno capilar es superior a 2 segundos. Se debe triar como rojo</p> <br>'+
                    '<p class="textAlertCenterBold"> ROJO </p>';



export const alerta = (mensaje) => Swal.fire({
    imageUrl: '../assets/error.png',
    imageWidth: '10%',
    imageHeight: '10%',
    background: '#D6D9C8',
    html: mensaje,
    confirmButtonText: 'Continuar',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    backdrop: true,
    width: '50%',
    customClass:{
        closeButton: '.btn',
    },
    onClose: ejecutaError
        }).then(function () {
});

export const alertaTiempo = (mensaje) => Swal.fire({
    imageUrl: '../assets/error.png',
    imageWidth: '10%',
    imageHeight: '10%',
    background: '#D6D9C8',
    html: mensaje,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    backdrop: true,
    width: '50%',
    timer: 2000,
    showConfirmButton: false,
    onClose: ejecutaError
        }).then(function () {
});

export const pausarTiempo = (mensaje) => Swal.fire({
    imageUrl: '../assets/pause.png',
    imageWidth: '10%',
    imageHeight: '10%',
    background: '#D6D9C8',
    html: mensaje,
    confirmButtonText: 'Continuar',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    backdrop: true,
    width: '50%',
    onClose: continuarPausa
        }).then(function () {
});
