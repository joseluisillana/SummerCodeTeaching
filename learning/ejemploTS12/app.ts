/**
 Módulos 
**/

// Importamos 'algo' de 'algun sitio'
// Para exportar una clase, se especifica 'export' delante
import { Xmen, Villano } from "./clases/index"

let wolverine = new Xmen("Logan", "Wolverine");
let lex = new Villano("Lex Luthor", "Conquistar el mundo!");

wolverine.imprimir();
lex.imprimirPlan();