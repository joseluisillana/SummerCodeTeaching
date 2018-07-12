/**
 Definición de clases 
**/

class Vengador {
	nombre: string;
	equipo: string;
	nombreReal: string;

	puedePelear: boolean;
	peleasGanadas: number;
};

let hombreHormiga:Vengador = new Vengador();

// No se ve nada, ¿porque?
console.log(hombreHormiga);

// Porque no tiene propiedades ningunas, solo lo hemos
// inicializado, y nuestra clase no tiene ningun constructor por defecto

// Creamos otra clase igual pero con un nombre por defecto... 
class VengadorPorDefecto {
	nombre: string = "Hombre Hormiga";
	equipo: string;
	nombreReal: string;

	puedePelear: boolean;
	peleasGanadas: number;
};

let hombreHormiga2:VengadorPorDefecto = new VengadorPorDefecto();

// Aparece el nombre, ya sabes meter 'constantes'  o valores por defecto
// en las clases !!
// Aunque esto no es muy util ¿no?
console.log(hombreHormiga2);

// Creamos otra clase igual pero con un constructor y valores por 
// defecto 
class VengadorConstructor {
	nombre: string = undefined; //Undefined es un tipo de valor, que es 'nulo'
	equipo: string = undefined;
	nombreReal: string = undefined;

	puedePelear: boolean = false;
	peleasGanadas: number = 0;

	constructor(nombre:string,equipo:string,nombreReal:string){
		console.log("Construyendo el Vengador")
		// This hace referencia a la clase contenedora.
		this.nombre = nombre;
		this.equipo = equipo;
		this.nombreReal = nombreReal
	};
};

let hombreHormiga3:VengadorConstructor = new VengadorConstructor("antman","cap","Scott Lang");
console.log(hombreHormiga3);