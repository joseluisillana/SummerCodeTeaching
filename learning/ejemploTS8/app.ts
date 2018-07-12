/**
 DESTRUTURACION DE OBJETOS
 Y
 DESTRUTURACION DE ARREGLOS
**/

// ##################### DESTRUTURACION DE OBJETOS
let avenger = {
	nombre: "Steve",
	clave: "Capitán America",
	poder: "Droga"
}

// Como estraemos la información del vengador para 
// usarla por ahi?

// Opción 1 (cutre)
let nombre1 = avenger.nombre;
let clave1 = avenger.clave;
let poder1 = avenger.poder;

console.log(nombre1, clave1, poder1);

// Opción 2 (destructuración)
let { nombre, clave, poder } = avenger;
console.log(nombre, clave, poder);

// Opción 3 (destructuración con alias)
let { nombre:elnombre, clave:laclave, poder:elpoder } = avenger;
console.log(elnombre, laclave, elpoder);


// ##################### DESTRUTURACION DE ARREGLOS
let avengers:string[] = [ "Thor", "Captain America", "Iron Man", "Hulk" ];

// Ésto no es más que una definición de variables y asignación de 
// valores usando el contenido de las posiciones de la lista (Array strings)
let [ thor, camerica, ironman, hulk ] = avengers;

console.log(thor, camerica, ironman, hulk);

// OJO, si solo quisieramos sacar a Iron Man sería así

let [ , , ironmansolo,  ] = avengers;

console.log(ironmansolo);