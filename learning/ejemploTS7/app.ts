/**
 FUNCIONES FLECHA
**/

// Declaración de variable como función normal
let miFuncion = function(argument) {
	return argument;
}


let miFuncionFlecha = a => a;
// Es lo mismo que:
// let miFuncionFlecha = (a) => a;


console.log(miFuncion("normal"));
console.log(miFuncionFlecha("normal"));

// Declaración de variable como función normal que acepta
// números y los suma
let miFuncion2 = function(argumentA:number, argumentB:number) {
	return argumentA + argumentB;
}

let miFuncion2Flecha = (a:number, b:number) => a + b;

console.log(miFuncion2(1, 1));
console.log(miFuncion2Flecha(1, 1));

// Declaración de variable como función normal 
// transforma un string a mayusculas
let miFuncion3 = function(nombre:string){
	nombre = nombre.toUpperCase();
	return nombre;
}

let miFuncion3Flecha = (nombre:string) => {
	nombre = nombre.toUpperCase();
	return nombre;
};

console.log(miFuncion3("prueba"));
console.log(miFuncion3Flecha("prueba"));


// Para que es útil la función flecha) para esto
let hulk = {
	nombre: "Hulk",
	golpear(){
		console.log(this.nombre + " golpea!!");
	}
}
hulk.golpear();

// Aquí queremos que se realize algo más de lógica 
// en el momento de que Hulk golpee.
// Pero Javascript nos dará un error en la línea marcada
let hulkLentoBAD = {
	nombre: "Hulk pausadamente... ",
	golpear(){
		setTimeout(function(){
		  //Fallará por el scope de la variable nombre.
		  // Porque el this apunta a 'window' el objeto global.
		  // Aquí es donde entran en juego las funciones
		  // 'Flecha'
		  console.log(this.nombre + " golpea!!"); 
		},1500);
	}
}
hulkLentoBAD.golpear();

let hulkLento = {
	nombre: "Hulk pausadamente... ",
	golpear(){
		setTimeout(() => console.log(this.nombre + " golpea!!") ,1500);
	}
}
hulkLento.golpear();

