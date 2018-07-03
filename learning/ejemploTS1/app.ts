/**
 Tipos de variables y paso parametros a funciones
**/

function saludar(persona:{nombre: string,apellidos: string,edad: number}) {
	
	console.log("Hola" + " " + persona.nombre + " " + persona.edad);
}

var wolverine = {
	nombre: "Logan",
	apellidos: "perez",
	edad: 123
}


saludar(wolverine);
