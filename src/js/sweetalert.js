export const alerta = () => Swal.fire({
    html: '<p class= "grande">Esto es un error</p><br> <p class="textAlert" > En lo primero que debe fijarse es si la víctima puede caminar. Si camina, se evalúa como VERDE.</p> <br> <p class="textAlert"> Si no camina, el primer paso es saber si respira ¿Respira?</p>',
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