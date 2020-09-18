export const alerta = () => Swal.fire({
    html: '<p class= "grande">Esto es un error</p><br> <p class="textAlert" > En lo primero que debe fijarse es si la víctima puede caminar. Si camina, se evalúa directamente como VERDE.</p> <br> <p class="textAlertCenter"> Si no camina, el primer paso es saber si respira</p><br><p class="textAlertCenterBold">¿Respira?</p>',
    icon: 'error',
    confirmButtonText: 'Continuar',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    backdrop: true,
    width: '50%',
    height: '50%',

    customClass:{
        closeButton: '.btn',
        title: 'swal2-title',
    }
});

export const alerta1 = () => Swal.fire({
    html: '<p class= "grande">Esto es un error</p><br> <p class="textAlertCenter" > Si la víctima no respira, debe de abrir la vía aérea</p> <br> <p class="textAlertCenterBold"> Abro Vía Aérea</p>',
    icon: 'error',
    confirmButtonText: 'Continuar',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    backdrop: true,
    width: '50%',
    height: '50%',

    customClass:{
        closeButton: '.btn',
        title: 'swal2-title',
    }
});

export const alerta2 = () => Swal.fire({
    html: '<p class= "grande">Esto es un error</p><br> <p class="textAlert" > La víctima tiene una respiración normal. Debe valorar el pulso radial o el relleno capilar.</p> <br> <p class="textAlertCenterBold"> ¿Pulso Radial / Relleno Capilar &lt 2?" </p>',
    icon: 'error',
    confirmButtonText: 'Continuar',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    backdrop: true,
    width: '50%',
    height: '50%',

    customClass:{
        closeButton: '.btn',
        title: 'swal2-title',
    }
});

export const alerta3 = () => Swal.fire({
    html: '<p class= "grande">Esto es un error</p><br> <p class="textAlert" > La víctima presenta taquipnea y una hemorragia activa en extremidad. Debe colocar un torniquete</p> <br> <p class="textAlertCenterBold"> Torniquete </p>',
    icon: 'error',
    confirmButtonText: 'Continuar',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    backdrop: true,
    width: '50%',
    height: '50%',

    customClass:{
        closeButton: '.btn',
        title: 'swal2-title',
    }
});

export const alerta4 = () => Swal.fire({
    html: '<p class= "grande">Esto es un error</p><br> <p class="textAlert" > La víctima presenta taquipnea y una hemorragia activa en zona de unión. Debe realizar compresión en la zona</p> <br> <p class="textAlertCenterBold"> Compresión Directa </p>',
    icon: 'error',
    confirmButtonText: 'Continuar',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    backdrop: true,
    width: '50%',
    height: '50%',

    customClass:{
        closeButton: '.btn',
        title: 'swal2-title',
    }
});

export const alerta5 = () => Swal.fire({
    html: '<p class= "grande">Esto es un error</p><br> <p class="textAlert" > Una FR superior a 30, por si sola, es indicativa de triaje rojo. No es necesario hacer más valoraciones. Se aplicarán medidas salvadoras solo si fuese necesario</p> <br> <p class="textAlertCenterBold"> ROJO </p>',
    icon: 'error',
    confirmButtonText: 'Continuar',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    backdrop: true,
    width: '50%',
    height: '50%',

    customClass:{
        closeButton: '.btn',
        title: 'swal2-title',
    }
});