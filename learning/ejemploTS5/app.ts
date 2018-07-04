/**
 String template (plantillas)
**/

let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 32;


function getNombre(){
	return "Fernando";
}
//let texto = "Hola " + nombre + " " + apellido + "(" + edad + ")";

let texto = `Hola, 
${nombre} 
${apellido} 
(${edad})
`;

// Puedes poner código puro
let texto2:string = ` ${1 + 2 + " " + getNombre()}`

console.log(texto);