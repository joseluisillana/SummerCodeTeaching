/**
 Tipos de variables
**/

let nombre:string  = "pepe";
let numero:number  = 123;
let fecha:Date  = new Date();
let booleano:boolean = true;

fecha = new Date('2020-10-21');

let cualquiera:any;

cualquiera = nombre;
cualquiera = numero;
cualquiera = fecha;
cualquiera = booleano;


let spiderman = {
	nombre : "Peter",
	edad : 20
}

spiderman = {
	nombre : "Juan",
	edad : 30
}

console.log(fecha);
console.log(spiderman);