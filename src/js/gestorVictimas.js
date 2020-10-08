import "./styles.css";

//Array de imágenes
let imagenes = [];
let variantesRojos = [
  "rnslrz",
  "reerzz",
  "riirzz",
  "rnselr",
  "rnsilr",
  "rrrzzz",
  "rsperz",
  "rspirz",
  "rsprzz",
  "rsunrz"
];
let lista = [1,2,3,4,5,6,7,8,9];


//Número total de víctimas a tratar
const numVictimas = 30
0;
;
const tiposDeRojos = variantesRojos.length;

//Porcentajes por color
const verde = 10;
const amarillo = 20;
const negro = 15;
const rojo = 55;

//Calculos en función de víctimas y porcentajes
let totalVerdes = Math.round((verde * numVictimas) / 100);
let totalAmarillos = Math.round((amarillo * numVictimas) / 100);
let totalNegros = Math.round((negro * numVictimas) / 100);
let totalRojos = Math.round((rojo * numVictimas) / 100);

//Cuadrar resultados con víctimas totales por redondeos. Ajusto con los rojos al ser los numerosos
let totalcalculado = totalVerdes + totalAmarillos + totalNegros + totalRojos;

if (totalcalculado != numVictimas) {
  let diferencia = totalcalculado - numVictimas;
  totalRojos = totalRojos - diferencia;
}

//CREAR ARRAY DE IMÁGENES

function crearArray (cantidad, nombre){
  //Array aleatorio para seleccionar los 9 personajes de forma aleatoria,
  lista = lista.sort(function() {return Math.random() - 0.5});

  //Genero elementos 
  let x = 0;
  for (let i = 0; i < cantidad; i++) {
  imagenes.push(nombre+lista[x]);
  x++;
  if (x == lista.length){
    x=0;
  }
}
  return imagenes;
}

imagenes = crearArray(totalVerdes, "vzzzzz" );
imagenes = crearArray(totalAmarillos, "asusaz" );
imagenes = crearArray(totalNegros, "nnnnzz" );


console.log('Imagenes');

lista = lista.sort(function() {return Math.random() - 0.5});
console.log(lista);

let p = 0;
let x=0;
for (let i = 0; i < totalRojos; i++) {
  imagenes.push(variantesRojos[p]+lista[x]);
  p++;
  x++;
  if (p == tiposDeRojos) {
    p = 0; 
  }
  if (x == lista.length){
    x=0;
  }
}

imagenes = shuffle(imagenes);

//Desordenar matriz
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

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

console.log(
  "total por tipo " + totalVerdes,
  totalAmarillos,
  totalNegros,
  totalRojos
);
console.log("Total Calculado " + totalcalculado);
console.log(
  "Total Ajustado ",
  totalVerdes + totalAmarillos + totalNegros + totalRojos
);
console.log("Tamaño array", imagenes.length);
console.log(imagenes);
