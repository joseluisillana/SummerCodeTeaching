/**
 Decoradores de clases 

 Característica experimental, permite abstraer funcionalidades

 Para que el typescript no suelte un error ya que son experimentales,
 Se añade al tsconfig la linea:
 "experimentalDecorators":true,
**/

//Un decorator es una simple función que acepta una función
function consola( constructor:Function ){
	console.log(constructor);
}

// Se setean con la arroba y el nombre d ela función a usar
@consola
class Villano {
	constructor(public nombre:string){

	}
}