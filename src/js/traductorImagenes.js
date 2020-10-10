
export let traducirImagen = (imagen)=>{

    switch (imagen.slice(0, -1)){

        case 'asusaz':
        case 'rnslrz':
        case 'rrrzzz':
        case 'rsprzz':
        case 'rsunrz':
          imagen='tumbado'+imagen[6];
          break;
      
        //Hacemos que los negros sean o torniquete o compresión
        case 'nnnnzz':
          imagen = (imagen[6]%2==0) ? 'torniquete'+imagen[6] : 'compresion'+imagen[6];
          break;
      
        case 'vzzzzz':
          imagen='caminando'+imagen[6];
          break;
          
        //El grupo 1 es de bebe que no tiene torniquete. hay que darlo a otro avatar.
        case 'reerzz':
          imagen = (imagen[6]==1) ? 'torniquete'+'2' : 'torniquete'+imagen[6];
          break;
        case 'rnselr':
          imagen = (imagen[6]==1) ? 'torniquete'+'3' : 'torniquete'+imagen[6];
            break;
        case 'rsperz':
          imagen = (imagen[6]==1) ? 'torniquete'+'4' : 'torniquete'+imagen[6];
          break;
      
        case 'riirzz':
        case 'rnsilr':
        case 'rspirz':
          imagen='compresion'+imagen[6];
          break;
      }

      return imagen;
}