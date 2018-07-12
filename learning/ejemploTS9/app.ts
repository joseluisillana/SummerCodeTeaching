/**
 PROMESAS

 ¿Que són? Permiten ejecutar codigo cuando una tarea asíncrona termina.
**/
// resolve es la funcion callback ok
// reject es la funcion callback ko
let promesa1 = new Promise( function (resolve, reject) {
	setTimeout(()=>{
		console.log("Promesa terminada");

		// Termina bien
		resolve();

		// Termina mal
		//reject();
	},1500);
});

// ¿Comómo se ejecuta?

console.log("Paso 1 << Tarea sincrona 1");

promesa1.then(
	function(){console.log("Ejecutarme cuando termine bien");}, 
	function(){console.error("Ejecutar cuando algo sale mal");}
);

console.log("Paso 2 << Tarea sincrona 2");

// Nota que como una promesa es una tarea 'asincrona', los console.log, 
// terminarán antes y aparecerán antes en la consola dle navegador.